'use strict';

// let url = 'src/json/services.json';

<<<<<<< HEAD
let app = new Vue({
	 el: '#services',
	 data:{
		 services:[],
		 name: 'ALex'
	 },
	 methods:{
		 getServices(){
			let url = `https://itunes.apple.com/search?term=${this.query}&limit=20`;
			fetch(url)
				.then(response => response.json())
				.then(iList => {
					this.services = iList.results;
					console.log(iList);				
			})
		 }
	 }
});






=======
>>>>>>> 1fd3eaf6d3508947ef83e6fefb467f5a460a5ee2
//Example 1
//Err: Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0


// function sendRequest(event) {
// 	event.preventDefault();

// 	fetch(url)
// 		.then(response => response.json())
// 		.then(showServices)
// 	// .then(response => response.text())
// 	// .then(text => console.log(text));
// }

// document.addEventListener('change', sendRequest);

// let servicesList = document.querySelector('.ba-services-list');

// let servicesListTmpl = document.querySelector('[data-services-tmpl]').innerHTML;

// function showServices(data) {
// 	let arr = data;
// 	let servicesHTML = '';

// 	let city = document.querySelector('.ba-select-cities').value;

// 	arr.forEach(element => {
// 		element.cityName == city ? servicesHTML += servicesListTmpl
// 			.replace(/{{overExposureCats}}/gi, element.overExposureCats)
// 			.replace(/{{overExposureDogs}}/gi, element.overExposureDogs)
// 			.replace(/{{GroomingW}}/gi, element.GroomingW)
// 			.replace(/{{GroomingWC}}/gi, element.GroomingWC)
// 			.replace(/{{Inspection}}/gi, element.Inspection) : '';
// 	});

// 	servicesList.innerHTML = servicesHTML;
// }


//Example 2
// let data = [
// 	{
// 	 "cityName": "Poltava",
// 	 "overExposureCats": 300,
// 	 "overExposureDogs": 350,
// 	 "GroomingW": 200,
// 	 "GroomingWC": 400,
//     "Inspection": 200
// 	},
// 	{
// 		"cityName": "Kyiv",
// 		"overExposureCats": 400,
// 		"overExposureDogs": 450,
// 		"GroomingW": 300,
// 		"GroomingWC": 500,
// 		"Inspection": 300
// 	  },
// 	  {
// 		  "cityName": "Kharkiv",
// 		  "overExposureCats": 350,
// 		  "overExposureDogs": 400,
// 		  "GroomingW": 250,
// 		  "GroomingWC": 450,
// 		  "Inspection": 200
// 		 }
//  ]

// document.addEventListener('change', showServices);

// let servicesList = document.querySelector('.ba-services-list');

// let servicesListTmpl = document.querySelector('[data-services-tmpl]').innerHTML;

// function showServices() {
// 	let servicesHTML = '';

// 	let city = document.querySelector('.ba-select-cities').value;

// 	data.forEach(element => {
// 		element.cityName == city ? servicesHTML += servicesListTmpl
// 			.replace(/{{overExposureCats}}/gi, element.overExposureCats)
// 			.replace(/{{overExposureDogs}}/gi, element.overExposureDogs)
// 			.replace(/{{GroomingW}}/gi, element.GroomingW)
// 			.replace(/{{GroomingWC}}/gi, element.GroomingWC)
// 			.replace(/{{Inspection}}/gi, element.Inspection) : '';
// 	});

// 	servicesList.innerHTML = servicesHTML;
// }