'use strict';

let url = 'assets/db/services.json';


function sendRequest(event) {
	event.preventDefault();

	fetch(url)
		.then(response => response.json())
		.then(showServices)
	// .then(response => response.text())
	// .then(text => console.log(text));
}

document.addEventListener('change', sendRequest);

let servicesList = document.querySelector('[data-list]');

let servicesListTmpl = document.querySelector('[data-services-tmpl]').innerHTML;

function showServices(data) {
	let arr = data;
	console.log(arr);
	
	let servicesHTML = '';

	let city = document.querySelector('.ba-select-cities').value;

	arr.forEach(element => {

	console.log(element.cityName);
	console.log(city);
	
	
		
		if(element.cityName == city)servicesHTML += servicesListTmpl
			.replace(/{{overExposureCats}}/gi, element.overExposureCats)
			.replace(/{{overExposureDogs}}/gi, element.overExposureDogs)
			.replace(/{{groomingW}}/gi, element.groomingW)
			.replace(/{{groomingWC}}/gi, element.groomingWC)
			.replace(/{{inspection}}/gi, element.inspection);		
	});

	servicesList.innerHTML = servicesHTML;
}
