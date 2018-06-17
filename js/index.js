window.onload = function() {
	Vue.component('animal', {
		props: ['call'],
		template: '<span> {{ call }} </span>'
	})
	new Vue({
		el: '#app',
		data: {
			message: 'Hello World',
			seen: false,
			ara: [
				{ id: 0, text: 'meow' },
				{ id: 1, text: 'gheu' },
				{ id: 2, text: 'hamba' },
			]
		}
	})
	new Vue({
		el: '#app-2',
		data: {
		  message: 'You loaded this page on ' + new Date().toLocaleString()
		}
	})
}