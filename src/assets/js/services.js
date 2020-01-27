'use strict';

//Burger menu
let menuBtn = document.querySelector('.ba-menu-toggle');
let menuWrap = document.querySelector('.ba-toggle-nav');

let closeBtn = document.querySelector('.ba-close-button');

menuBtn.addEventListener('click', () => {
	menuWrap.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
	menuWrap.classList.remove('active');
});






//Example 1
//Err: Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
let url = 'src/json/services.json';

function sendRequest(event) {
	event.preventDefault();

	fetch(url)
		.then(response => response.json())
		.then(showServices)
	// .then(response => response.text())
	// .then(text => console.log(text));
}

document.addEventListener('change', sendRequest);

let servicesList = document.querySelector('.ba-services-list');

let servicesListTmpl = document.querySelector('[data-services-tmpl]').innerHTML;

function showServices(data) {
	let arr = data;
	let servicesHTML = '';

	let city = document.querySelector('.ba-select-cities').value;

	arr.forEach(element => {
		element.cityName == city ? servicesHTML += servicesListTmpl
			.replace(/{{overExposureCats}}/gi, element.overExposureCats)
			.replace(/{{overExposureDogs}}/gi, element.overExposureDogs)
			.replace(/{{GroomingW}}/gi, element.GroomingW)
			.replace(/{{GroomingWC}}/gi, element.GroomingWC)
			.replace(/{{Inspection}}/gi, element.Inspection) : '';
	});

	servicesList.innerHTML = servicesHTML;
}


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