let order = new Vue({
	el: '#order-form',
	data: {
		currentPrice: 0,
		orderData: {
			overExposure: 0,
			dateRangePrice: 0,
			groomingC: 0,
			groomingW: 0,
			inspection: 0,
			totalPrice: 0,
			petType: '',
			petName: '',
			petAge: '',
			petWeight: '',
			ownerName: '',
			ownerTel: ''
		}

	},
	methods: {
		isChecked(event) {
			console.log(event);
			this.currentPrice = this.orderData.totalPrice;
			//console.log(this.currentPrice);
			
			if(event.target.checked){
				//console.log('dodo');
				this.totalPriceCounting()				
			}
			else if(!event.target.checked){
				this.orderData.totalPrice =  this.orderData.totalPrice - event.target.value;
			}

		},
		totalPriceCounting() {
				let rangePrice = document.querySelector('#dateRangePrice').textContent;
				this.orderData.dateRangePrice = Number.parseInt(rangePrice.slice(0, -4));

				this.orderData.totalPrice = (Number.parseInt(this.orderData.overExposure))
					+ (Number.parseInt(this.orderData.groomingC))
					+ (Number.parseInt(this.orderData.groomingW))
					+ (Number.parseInt(this.orderData.inspection))
					+ (Number.parseInt(this.orderData.dateRangePrice));

		},
		createOrder() {
			for (let key in this.orderData) {
				localStorage.setItem(key, this.orderData[key]);
			}
		}
	}
})