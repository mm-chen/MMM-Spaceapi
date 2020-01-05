Module.register("mmm-spaceapi",{


	defaults: {
		text: "Hello World!"
	},

/*	getTemplate: function () {
		return "helloworld.njk";
	},
*/
	getTemplateData: function () {
		return this.config;
	}












/*	defaults: {
                name: "MMM-Spaceapi",
		updatesEvery: 120,
		text:"halloWorld"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	},

	start: function () {},
	notificationReceived: function() {},
	socketNotificationReceived: function() {},
*/
});
