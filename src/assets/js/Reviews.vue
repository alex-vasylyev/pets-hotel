<template>
  <div id="app">
    <div class="ba-section-reviews">
      <div class="row">
        <div class="column small-12 medium-6 large-3" v-for="(card, index) in reviews">
          <div class="card">
            <img :src="card.img" :alt="card.petName" />
            <div class="card-section">
              <div class="ba-reviews">
                <div class="ba-review-block-top">
                  <div class="ba-reviews--username">{{card.userName}}</div>
                  <div class="ba-reviews--date">{{card.dateTime}}</div>
                </div>
                <div class="ba-review-block-bot">
                  <div class="ba-reviews--petname">{{card.petName}}</div>
                  <div class="ba-reviews--petold">{{card.petOld}}</div>
                </div>
                <div class="ba-reviews--order">{{card.order}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="ba-reviews-bnt" v-on:click="loadMore" v-show="isDisplayed">Ще відгуки</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
		reviews: [],
		isDisplayed: true
    };
  },
  methods: {
    loadMore() {
      fetch("assets/db/reviews.json")
        .then(res => res.json())
        .then(moreReviews => {
          let newReviews = moreReviews.slice(-8);
			 this.reviews.push(...newReviews);
			this.isDisplayed = false;		
        });
    }
  },
  mounted() {
    fetch("assets/db/reviews.json")
      .then(res => res.json())
      .then(list => {
		  this.reviews = list.slice(0, 8);		  
      });
  }
};
</script>