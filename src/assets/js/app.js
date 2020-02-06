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

import './main.js';

import './lib/vue';


// Code for section-order:

document.getElementById("gruming1").addEventListener("change", function(){
	document.getElementById('price2').innerHTML = this.value +" грн";   
});

 document.getElementById("gruming2").addEventListener("change", function(){
	document.getElementById('price3').innerHTML = this.value +" грн";   
 });	
	
		
 document.getElementById("order-form").addEventListener("input", function(){ 				
		
		let pr1 = document.getElementById('price1').textContent;
		let pr2 = document.getElementById('price2').textContent;
		let pr3 = document.getElementById('price3').textContent;
		
 document.getElementById('price4').innerHTML = "Всього: " + (Number.parseInt(pr1.slice(0, -4)) + Number.parseInt(pr2.slice(0, -4)) + Number.parseInt(pr3.slice(0, -4))) +" грн";
 });






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







