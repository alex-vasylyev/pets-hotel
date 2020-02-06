import Main from './Main.vue';
import Cards from './Cards.vue';

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

