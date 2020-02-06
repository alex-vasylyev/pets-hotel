import Main from './Main.vue';
import Cards from './Cards.vue';
import Reviews from './Reviews.vue';
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
	el: '#catalog',
	template: '<Reviews/>',
	components: { Reviews }
})

