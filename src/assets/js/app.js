import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './lib/slick.min.js';

$(document).foundation();

import './services.js';



import './lib/vue';

//User profile info
let fieldsSet = document.querySelector('.ba-my-profile-info-container__inner');

let editBtn = document.querySelector('.ba-button-edit-profile');


function openFields() {
	let inputFields = fieldsSet.querySelectorAll('[type="text"]');

	inputFields.forEach(input => {
		input.readOnly = !input.readOnly;
	});
}

editBtn.addEventListener('click', openFields);

//Pets Cards

let petsCardsColumn = document.querySelectorAll('.ba-pet-card');

function editPetData() {

	petsCardsColumn.forEach(petCard => {

		petCard.addEventListener('click', (event) => {
			let inputFields = petCard.querySelectorAll('[type="text"]');
			let eventEl = event.target;
			let action = eventEl.dataset.action;
			if (!action) return;

			if (action == 'edit') {
				inputFields.forEach(field => {
					field.readOnly = !field.readOnly;
				});
			}
		})
	});
}

editPetData();





