Module.register("MMM-Spaceapi",{


	defaults: {
		name: "MMM-Spaceapi",
		text: "Hello World!",
		updatesEvery: 120
	},

	getTemplate: function () {
		return "spaceapi.njk";
	},

	getTemplateData: function () {
		return this.config;
	}


	start: function (){
		this.count = 0
		var timer = setInterval(()=>{
			this.updateDom()
			this.count++
		}, 1000)
	},

	getDom: function() {
		var element = document.createElement("div")
		element.className = "myContent"
		element.innerHTML = "Hello, World! " + this.config.foo
		var subElement = document.createElement("p")
		subElement.innerHTML = "Count:" + this.count
		subElement.id = "COUNT"
		element.appendChild(subElement)
		return element
	},

	notificationReceived: function() {},
	socketNotificationReceived: function() {},
*/
});
