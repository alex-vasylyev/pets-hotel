'use strict';

let url = 'src/data/services.json';

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