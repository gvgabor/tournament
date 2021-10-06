class ClassSunday extends ClassUtil {
	
	url = (action) => `/web/rendes/sunday/${action}`;
	
	init() {
		
		this.createSundayGrid();
		
		const start = document.getElementById("start");
		const end = document.getElementById("end");
		
		jQuery(start).kendoDatePicker({
			format: "yyyy",
			start: "decade",
			depth: "decade",
			value: null,
			change(e) {
				const min = new Date(e.sender.value().getFullYear() + 1, 1);
				const max = new Date(e.sender.value().getFullYear() + 100, 1);
				const endPicker = jQuery(end).data("kendoDatePicker");
				endPicker.value(null);
				endPicker.min(min);
				endPicker.max(max);
				endPicker.enable(true);
			}
		});
		
		jQuery(start).data("kendoDatePicker").value(null);
		
		start.setAttribute("readonly", true);
		start.setAttribute("autocomplete", "off");
		
		jQuery(end).kendoDatePicker({
			format: "yyyy",
			start: "decade",
			depth: "decade"
		}).data("kendoDatePicker").enable(false);
		
		end.setAttribute("readonly", true);
		end.setAttribute("autocomplete", "off");
		
		jQuery(end).data("kendoDatePicker").value(null);
		
		const sendBtn = document.getElementById("send-btn");
		sendBtn.addEventListener("click", () => {
			const startYear = kendo.toString(jQuery(start).data("kendoDatePicker").value(), "yyyy");
			const endYear = kendo.toString(jQuery(end).data("kendoDatePicker").value(), "yyyy");
			
			if (startYear && endYear) {
				let sundayGrid = document.getElementById("sunday-grid");
				sundayGrid = jQuery(sundayGrid).data("kendoGrid");
				sundayGrid.dataSource.transport.options.read.data.startYear = startYear;
				sundayGrid.dataSource.transport.options.read.data.endYear = endYear;
				sundayGrid.dataSource.read();
			} else {
				alert("Meg kell adni a kezdő és vég dátumot");
			}
			
		})
		
	}
	
	createSundayGrid() {
		const sundayGrid = document.getElementById("sunday-grid");
		const columns = JSON.parse(sundayGrid.dataset.columns);
		const url = this.url("sunday-data-source");
		const schema = this.schema;
		const transport = this.transport;
		transport.read.url = url;
		const dataSource = new kendo.data.DataSource({
			pageSize: 100,
			schema: schema,
			transport: transport
		});
		
		columns.find(item => item.field == "year").template = data => kendo.toString(new Date(data.fulldate), "yyyy");
		columns.find(item => item.field == "month").template = data => kendo.toString(new Date(data.fulldate), "MMMM");
		columns.find(item => item.field == "fulldate").template = data => kendo.toString(new Date(data.fulldate), "yyyy-MM-dd dddd");
		
		jQuery(sundayGrid).kendoGrid({
			autoBind: false,
			dataSource: dataSource,
			columns: columns,
			selectable: this.selectable,
			filterable: false,
			height: this.height,
			pageable: this.pageable
		})
	}
	
}