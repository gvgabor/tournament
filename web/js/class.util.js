class ClassUtil {
	
	get schema() {
		const schema = {
			model: {
				id: "id",
				fields: {
					id: {type: "number"}
				}
			},
			data: response => response.data || [],
			total: response => response.total || 0
		};
		return schema;
	}
	
	get transport() {
		const transport = {
			read: {
				type: "post",
				data: {}
			},
		}
		return transport;
	}
	
	get height() {
		const rect = document.body.getBoundingClientRect();
		let height = rect.height - 200;
		return height;
	}
	
	get pageable() {
		const pageable = {
			refresh: true,
		};
		return pageable;
	}
	
	get filterable() {
		const filterable = {
			extra: false,
			messages: {
				clear: "Mégsem",
				filter: "OK",
				info: " ",
				or: "vagy",
				and: "és"
			},
			operators: {
				string: {
					contains: "Tartalmazza",
					eq: "Egyenlő",
				},
				number: {
					eq: "Egyenlő"
				}
			}
		};
		return filterable;
	}
	
	get selectable() {
		return {selectable: "row"}
	}
	
	scrollTop(position, duration = 1000) {
		jQuery("body, html").animate({
			scrollTop: position
		}, duration);
	}
	
	send = (url, data = {}, holdOn = true) => {
		const def = $.Deferred();
		
		if (holdOn) HoldOn.open();
		$.ajax({
			method: "POST",
			data: data,
			url: url,
			headers: {"token": localStorage.getItem("token")}
		}).then(response => {
			if (holdOn) HoldOn.close();
			def.resolve(response);
		}).fail(error => {
			if (holdOn) HoldOn.close();
			console.log(error.responseText)
		})
		
		return def;
	}
	
}