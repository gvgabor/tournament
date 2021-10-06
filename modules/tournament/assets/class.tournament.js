class ClassTournament extends ClassUtil {
	
	url = (action) => `/web/tournament/index/${action}`;
	
	init() {
		this.duration = document.querySelector(`input[name="duration"]:checked`).value;
		document.querySelectorAll(`input[name="duration"]`).forEach(item => {
			item.classList.add("k-radio");
			item.addEventListener("change", event => this.duration = event.target.value);
		})
		
		const groupTabs = document.getElementById("group-tabs");
		jQuery(groupTabs).kendoTabStrip({
			animation: false
		}).data("kendoTabStrip").select(0);
		
		Promise.all([
			this.createGroupGrids,
			this.createGroupMatchGrid,
			this.matchTemplate
		]).then(response => {
			const grid = response[1];
			const matchTemplate = response[2];
			
			this.sortTabstrip();
			
			const startGroupMatchBtn = document.getElementById("start-group-match-btn");
			startGroupMatchBtn.addEventListener("click", () => {
				const knockoutMatches = document.getElementById("knockout-matches");
				if (knockoutMatches) {
					knockoutMatches.remove();
					
					const grids = [...document.getElementsByClassName("group-grid")].map(item => jQuery(item).data("kendoGrid"));
					const promiseList = grids.map(item => item.dataSource.read());
					promiseList.push(grid.dataSource.read());
					Promise.all(promiseList).then(() => startGroupMatchBtn.click());
				} else {
					const matchContainer = document.getElementById("match-container");
					const createPopup = (dataItem) => {
						
						const layer = document.createElement("div");
						layer.classList.add("layer");
						layer.style.zIndex = $.topZIndex() + 1;
						document.body.appendChild(layer);
						
						const popup = document.createElement("div");
						popup.classList.add("popup");
						popup.classList.add("shadow");
						popup.style.zIndex = $.topZIndex() + 1;
						
						const template = kendo.template(matchTemplate);
						
						popup.innerHTML = template(dataItem);
						matchContainer.appendChild(popup);
						
						document.getElementById("img").setAttribute("src", dataItem.image);
						
						jQuery(popup).animate({
							left: 0
						}, 500)
					}
					const removePopup = () => {
						const def = $.Deferred();
						const layer = document.getElementsByClassName("layer")[0];
						const popup = document.getElementsByClassName("popup")[0];
						
						setTimeout(() => {
							popup.remove();
							layer.remove();
							def.resolve()
						}, this.duration)
						
						return def;
					}
					const match = () => {
						
						const filteredData = grid.dataSource.data().filter(item => item.result == null);
						filteredData.sort((a, b) => a.date > b.date);
						
						if (filteredData.length) {
							const current = grid.dataSource.getByUid(filteredData[0].uid);
							createPopup(current);
							
							const currentLi = document.querySelector(`li[data-group="${current.group}"]`);
							jQuery(groupTabs).data("kendoTabStrip").select(currentLi);
							
							const row = grid.wrapper[0].querySelector(`tr[data-uid="${current.uid}"]`);
							const offset = grid.element.find("tbody").offset().top;
							const rowOffset = jQuery(row).offset().top;
							const distance = rowOffset - offset;
							
							grid.element.find(".k-grid-content").stop().animate({
								scrollTop: distance
							})
							
							const url = this.url("play-match");
							this.send(url, {data: JSON.stringify(current)}, false).then(response => {
								
								let groupGrid = document.querySelector(`.group-grid[data-group="${current.group}"]`);
								groupGrid = jQuery(groupGrid).data("kendoGrid");
								
								const team1 = groupGrid.dataSource.data().find(item => item.name == current.team1);
								const team2 = groupGrid.dataSource.data().find(item => item.name == current.team2);
								
								team1.goal += response.goal1;
								team2.goal += response.goal2;
								
								if (response.goal1 > response.goal2) {
									team1.points += 3;
								} else if (response.goal1 < response.goal2) {
									team2.points += 3;
								} else {
									team1.points += 1;
									team2.points += 1;
								}
								
								groupGrid.dataSource.sort([{field: "points", dir: "desc"}, {
									field: "goal",
									dir: "desc"
								}]);
								groupGrid.dataSource.fetch();
								
								current.result = response.result;
								grid.dataSource.fetch();
								
								const resultBox = document.getElementById("result-box");
								resultBox.innerHTML = response.result;
								
								setTimeout(() => {
									
									const next = filteredData[1];
									if (next) {
										const row = grid.wrapper[0].querySelector(`tr[data-uid="${next.uid}"]`);
										row.querySelector(`td:nth-child(6)`).innerHTML = `<div id='loader'></div>`;
										jQuery(document.getElementById("loader")).kendoLoader();
										
										const offset = grid.element.find("tbody").offset().top;
										const rowOffset = jQuery(row).offset().top;
										const distance = rowOffset - offset;
										grid.element.find(".k-grid-content").stop().animate({
											scrollTop: distance
										})
										
									}
									
									removePopup().then(() => match());
								}, 100)
								
							})
						} else {
							const matchContainer = document.getElementById("match-container");
							jQuery(matchContainer).hide();
							this.sortTabstrip();
							const knockout = new ClassKnockout();
							knockout.init();
						}
					}
					jQuery(matchContainer).show();
					match();
					startGroupMatchBtn.disabled = true;
					this.scrollTop(0);
				}
				
			});
			
		})
		
	}
	
	sortTabstrip() {
		[...document.getElementsByClassName("group-grid")].forEach(item => {
			const grid = jQuery(item).data("kendoGrid");
			grid.dataSource.sort([
				{field: "points", dir: "desc"},
				{field: "goal", dir: "desc"},
				{field: "name", dir: "asc"}
			]);
			grid.dataSource.fetch();
		})
	}
	
	get matchTemplate() {
		const def = $.Deferred();
		const url = this.url("match-template");
		this.send(url).then(response => def.resolve(response.content))
		return def;
	}
	
	get createGroupMatchGrid() {
		
		const def = $.Deferred();
		
		const groupMatchGrid = document.getElementById("group-match-grid");
		const url = this.url("group-match-data-source");
		const schema = this.schema;
		schema.model = {
			fields: {
				date: {type: "date"}
			}
		}
		const transport = this.transport;
		transport.read.url = url;
		const columns = JSON.parse(groupMatchGrid.dataset.columns);
		const dataSource = new kendo.data.DataSource({
			pageSize: 100,
			transport: transport,
			schema: schema,
			group: {field: "group"}
		});
		columns.find(item => item.field == "date").format = "{0:yyyy-MM-dd HH:mm}";
		columns.find(item => item.field == "group").groupHeaderTemplate = data => `${data.value} csoport`
		
		jQuery(groupMatchGrid).kendoGrid({
			columns: columns,
			height: 800,
			dataSource: dataSource,
			dataBound: event => {
				const grid = event.sender;
				def.resolve(grid);
				grid.dataSource.data().forEach(item => {
					if (item.result) {
						const row = grid.wrapper[0].querySelector(`tr[data-uid="${item.uid}"]`);
						row.classList.add("hightlight2");
					}
				})
			}
		});
		
		return def;
		
	}
	
	get createGroupGrids() {
		const def = $.Deferred();
		const total = document.getElementsByClassName("group-grid").length;
		let count = 1;
		
		[...document.getElementsByClassName("group-grid")].forEach(item => {
			const url = this.url("group-data-source");
			const columns = JSON.parse(item.dataset.columns);
			const group = item.dataset.group;
			const schema = this.schema;
			schema.model = {
				fields: {
					goal: {type: "number"},
					points: {type: "number"},
				}
			}
			const transport = this.transport;
			transport.read.url = url;
			transport.read.data = {group: group}
			const dataSource = new kendo.data.DataSource({
				pageSize: 100,
				transport: transport,
				schema: schema,
			});
			
			columns.find(item => item.field == "name").template = data => {
				return data.flag === null ? data.name : `<img style="width: 64px; height: 64px" src="${data.flag}" alt="">&nbsp;${data.name}`
			}
			
			jQuery(item).kendoGrid({
				sortable: true,
				columns: columns,
				dataSource: dataSource,
				scrollable: false,
				dataBound: () => {
					if (count == total) def.resolve();
					count++;
				}
			})
			
		})
		
		return def;
		
	}
	
}