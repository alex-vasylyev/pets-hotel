import Main from './Main.vue';
import Cards from './Cards.vue';
import Reviews from './Reviews.vue';
import Gallery from './Gallery.vue';

//Main file for vue components!
new Vue({
	el: '#main-section',
	template: '<Main/>',
	components: { Main }
})

new Vue({
	el: '#my-profile',
	template: '<Cards/>',
	components: { Cards }
})

new Vue({
	el: '#reviews-catalog',
	template: '<Reviews/>',
	components: { Reviews }
})

new Vue({
	el: '#gallery-catalog',
	template: '<Gallery/>',
	components: { Gallery }
})

