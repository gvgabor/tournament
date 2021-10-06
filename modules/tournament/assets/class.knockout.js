class ClassKnockout extends ClassUtil {
	
	url = (action) => `/web/rendes/tournament/${action}`;
	
	/***
	 *
	 * @returns {HTMLElement}
	 */
	get knockoutBox() {
		return document.getElementById("knockoutbox");
	}
	
	init() {
		this.currentdim = 4;
		this.createKnockoutBox();
		this.createDiagram();
	}
	
	// visualTemplate(options) {
	// 	var dataviz = kendo.dataviz;
	// 	var g = new dataviz.diagram.Group();
	// 	var dataItem = options.dataItem;
	//
	// 	g.append(new dataviz.diagram.Rectangle({
	// 		width: 210,
	// 		height: 75,
	// 		stroke: {
	// 			width: 0
	// 		},
	// 		fill: {
	// 			gradient: {
	// 				type: "linear",
	// 				stops: [{
	// 					color: dataItem.colorScheme,
	// 					offset: 0,
	// 					opacity: 0.5
	// 				}, {
	// 					color: dataItem.colorScheme,
	// 					offset: 1,
	// 					opacity: 1
	// 				}]
	// 			}
	// 		}
	// 	}));
	//
	// 	g.append(new dataviz.diagram.TextBlock({
	// 		text: dataItem.firstName + " " + dataItem.lastName,
	// 	}));
	//
	// 	g.append(new dataviz.diagram.TextBlock({
	// 		text: dataItem.title,
	// 		x: 85,
	// 		y: 40,
	// 		fill: "#fff"
	// 	}));
	//
	// 	g.append(new dataviz.diagram.Image({
	// 		source: "../content/dataviz/diagram/people/" + dataItem.image,
	// 		x: 3,
	// 		y: 3,
	// 		width: 68,
	// 		height: 68
	// 	}));
	//
	// 	return g;
	// }
	
	createDiagram() {
		
		const diagramData = [
			{
				id: "A",
				dim: 1,
				item1: null,
				item2: null,
				from1: "A",
				from2: "B",
				team1: "-",
				team2: "-",
				eredmeny: "0-0",
				winner: "NINCS",
				winnerItem: null,
				items:
					[
						{
							id: "A",
							dim: 2,
							item1: null,
							item2: null,
							from1: "A",
							from2: "B",
							team1: "-",
							team2: "-",
							eredmeny: "0-0",
							winner: "NINCS",
							winnerItem: null,
							items:
								[
									{
										id: "A",
										dim: 3,
										item1: null,
										item2: null,
										from1: "A",
										from2: "B",
										team1: "-",
										team2: "-",
										eredmeny: "0-0",
										winner: "NINCS",
										winnerItem: null,
										items:
											[
												{
													id: "A",
													dim: 4,
													item1: null,
													item2: null,
													from1: "A-1",
													from2: "B-2",
													team1: "-",
													team2: "-",
													eredmeny: "0-0",
													winner: "NINCS",
													winnerItem: null,
												},
												{
													id: "B",
													dim: 4,
													item1: null,
													item2: null,
													from1: "B-1",
													from2: "A-2",
													team1: "C csoport 1. helyezett ",
													team2: "D csoport 2. helyezett",
													eredmeny: "0-0",
													winner: "NINCS",
													winnerItem: null,
												},
											]
									},
									{
										id: "B",
										dim: 3,
										item1: null,
										item2: null,
										from1: "C",
										from2: "D",
										team1: "-",
										team2: "-",
										eredmeny: "0-0",
										winner: "NINCS",
										winnerItem: null,
										items:
											[
												{
													id: "C",
													dim: 4,
													item1: null,
													item2: null,
													from1: "C-1",
													from2: "D-2",
													team1: "D csoport 1. helyezett ",
													team2: "C csoport 2. helyezett",
													eredmeny: "0-0",
													winner: "NINCS",
													winnerItem: null,
												},
												{
													id: "D",
													dim: 4,
													item1: null,
													item2: null,
													from1: "D-1",
													from2: "C-2",
													team1: "B csoport 1. helyezett ",
													team2: "A csoport 2. helyezett",
													eredmeny: "0-0",
													winner: "NINCS",
													winnerItem: null,
												},
											]
										
									}
								]
						},
						{
							id: "B",
							dim: 2,
							item1: null,
							item2: null,
							from1: "C",
							from2: "D",
							team1: "-",
							team2: "-",
							eredmeny: "0-0",
							winner: "NINCS",
							winnerItem: null,
							items:
								[
									{
										id: "C",
										dim: 3,
										item1: null,
										item2: null,
										from1: "E",
										from2: "F",
										team1: "-",
										team2: "-",
										eredmeny: "0-0",
										winner: "NINCS",
										winnerItem: null,
										items:
											[
												{
													id: "E",
													dim: 4,
													item1: null,
													item2: null,
													from1: "E-1",
													from2: "F-2",
													team1: "-",
													team2: "-",
													eredmeny: "0-0",
													winner: "NINCS",
													winnerItem: null,
												},
												{
													id: "F",
													dim: 4,
													item1: null,
													item2: null,
													from1: "F-1",
													from2: "E-2",
													team1: "C csoport 1. helyezett ",
													team2: "D csoport 2. helyezett",
													eredmeny: "0-0",
													winner: "NINCS",
													winnerItem: null,
												},
											]
									},
									{
										id: "D",
										dim: 3,
										item1: null,
										item2: null,
										from1: "G",
										from2: "H",
										team1: "-",
										team2: "-",
										eredmeny: "0-0",
										winner: "NINCS",
										winnerItem: null,
										items:
											[
												{
													id: "G",
													dim: 4,
													item1: null,
													item2: null,
													team1: "NEM ISMERT",
													team2: "NEM ISMERT",
													eredmeny: "0-0",
													winner: "NINCS",
													winnerItem: null,
												},
												{
													id: "H",
													dim: 4,
													item1: null,
													item2: null,
													team1: "NEM ISMERT",
													team2: "NEM ISMERT",
													eredmeny: "0-0",
													winner: "NINCS",
													winnerItem: null,
												},
											]
										
									}
								]
						},
					]
			}
		];
		this.scrollTop(this.knockoutBox.getBoundingClientRect().y);
		
		let loosers = [];
		
		[...document.getElementsByClassName("group-grid")].forEach(item => {
			const grid = jQuery(item).data("kendoGrid");
			grid.dataSource.view().forEach((item, index) => {
				if (index > 1) {
					loosers.push(item.toJSON())
				}
			})
		});
		
		loosers = new kendo.data.DataSource({data: loosers});
		loosers.sort([{field: "points", dir: "desc"}, {field: "goal", dir: "desc"}]);
		loosers = loosers.view().filter((item, index) => {
			if (index < 4) {
				return item;
			}
		});
		
		let looserCounter = 0;
		
		jQuery(this.knockoutBox).kendoDiagram({
			selectable: false,
			editable: false,
			zoom: false,
			dataSource: new kendo.data.HierarchicalDataSource({
				data: diagramData,
				model: {
					children: "items"
				},
			}),
			layout: {
				type: "tree",
				subtype: "up",
				horizontalSeparation: 48,
				verticalSeparation: 20,
				grid: {
					width: "100%",
				}
			},
			dataBound: event => {
				const diagram = event.sender;
				const bbox = diagram.boundingBox();
				diagram.wrapper.width(bbox.width + bbox.x + 50);
				diagram.wrapper.height(bbox.height + bbox.y + 50);
				diagram.resize();
				
				const data = diagram.dataSource.data();
				
				const findDim = (data, dim = 4, result = []) => {
					data.forEach(item => {
						if (item.dim == dim) {
							result.push(item);
						}
						if (item.hasChildren) {
							findDim(item.children.data(), dim, result)
						}
					});
					return result;
				}
				
				const createMatch = (dimData) => {
					if (dimData.length) {
						const first = dimData.splice(0, 1)[0];
						const goal1 = this.randomInt(0, 5);
						const goal2 = this.randomInt(0, 5);
						first.set("eredmeny", goal1 + "-" + goal2);
						let winner;
						
						if (goal1 > goal2) {
							winner = first.team1;
							first.winnerItem = first.item1;
						} else if (goal2 > goal1) {
							winner = first.team2;
							first.winnerItem = first.item2;
						} else {
							winner = first.item1.rank < first.item2.rank ? first.team1 : first.team2 + " (hosszabítás)";
							first.winnerItem = first.item1.rank < first.item2.rank ? first.item1 : first.item2;
						}
						
						first.set("winner", winner);
						createMatch(dimData);
					} else {
						const dimData = findDim(data, this.currentdim);
						const winners = dimData.filter(item => item.winnerItem != null).map(item => {
							return {item: item.winnerItem, id: item.id}
						});
						const nextDimData = findDim(data, this.currentdim - 1);
						nextDimData.forEach(item => {
							item.set("team1", winners.find(elem => elem.id == item.from1).item.name);
							item.set("team2", winners.find(elem => elem.id == item.from2).item.name);
							item.set("item1", winners.find(elem => elem.id == item.from1).item);
							item.set("item2", winners.find(elem => elem.id == item.from2).item);
						});
						
						this.currentdim -= 1;
						start();
					}
				}
				
				const dimData = findDim(data, this.currentdim);
				
				const start = () => {
					switch (this.currentdim) {
						case 4 :
							dimData.forEach(item => {
								if (item.hasOwnProperty("from1") && item.hasOwnProperty("from2")) {
									
									let fromItem = item.from1.split("-");
									let fromBox = document.querySelector(`div[data-group="${fromItem[0]}"]`);
									fromBox = jQuery(fromBox).data("kendoGrid");
									let team = fromBox.dataSource.view()[parseInt(fromItem[1]) - 1];
									item.set("team1", team.name);
									item.set("item1", team);
									
									fromItem = item.from2.split("-");
									fromBox = document.querySelector(`div[data-group="${fromItem[0]}"]`);
									fromBox = jQuery(fromBox).data("kendoGrid");
									team = fromBox.dataSource.view()[parseInt(fromItem[1]) - 1];
									item.set("team2", team.name);
									item.set("item2", team);
									
								} else {
									item.set("team1", loosers[looserCounter].name);
									item.set("item1", loosers[looserCounter]);
									looserCounter++;
									item.set("team2", loosers[looserCounter].name);
									item.set("item2", loosers[looserCounter]);
									looserCounter++;
								}
							})
							createMatch(dimData);
							break;
						case 3  :
							createMatch(findDim(data, this.currentdim));
							break;
						case 2 :
							createMatch(findDim(data, this.currentdim));
							break;
						case 1 :
							createMatch(findDim(data, this.currentdim));
							break;
						default:
							const startGroupMatchBtn = document.getElementById("start-group-match-btn");
							startGroupMatchBtn.disabled = false;
							break;
					}
					
				}
				
				start();
				
			},
			shapeDefaults: {
				visual: options => {
					const dataItem = options.dataItem;
					const dataviz = kendo.dataviz;
					const group = new dataviz.diagram.Group();
					const width = (document.body.getBoundingClientRect().width / 8) - 60;
					group.append(new dataviz.diagram.Rectangle({
						width: width,
						height: 150,
						fill: {
							color: ["red", "#CFF4FC", "#FFFFFF", "#F7F7F7"][dataItem.dim - 1] || "pink"
						}
					}));
					let ypos = 10;
					
					if (dataItem.dim == 1) {
						[dataItem.team1, "VS", dataItem.team2, dataItem.eredmeny, "Europa bajnok lett: ", dataItem.winner].forEach(item => {
							group.append(new dataviz.diagram.TextBlock({
								text: item,
								fill: "white",
								fontSize: 14,
								y: ypos,
								x: 10,
								fontWeight: "bold"
							}));
							ypos += 20;
						})
					} else {
						[dataItem.team1, "VS", dataItem.team2, dataItem.eredmeny, "Továbbjutott: ", dataItem.winner].forEach(item => {
							group.append(new dataviz.diagram.TextBlock({
								text: item,
								fill: "black",
								fontSize: 14,
								y: ypos,
								x: 10,
								fontWeight: "bold"
							}));
							ypos += 20;
						})
					}
					
					return group;
				}
			}
			
		})
		
	}
	
	randomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	createKnockoutBox() {
		const knockoutBox = document.createElement("div");
		knockoutBox.setAttribute("id", "knockout-matches");
		knockoutBox.classList.add("knockoutBox");
		knockoutBox.classList.add("card");
		knockoutBox.classList.add("shadow");
		
		document.body.appendChild(knockoutBox);
		
		const header = document.createElement("div");
		header.classList.add("card-header");
		header.innerHTML = `<h5 class="card-title">Kieséses mérkőzések</h5>`
		knockoutBox.appendChild(header);
		
		const body = document.createElement("div");
		body.setAttribute("id", "knockoutbox");
		body.classList.add("card-body");
		knockoutBox.appendChild(body);
	}
	
}