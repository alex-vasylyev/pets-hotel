<template>
  <div id="app">
    <div class="ba-section-gallery">
      <div class="row">
        <div class="column" v-for="(photo, index) in gallery" v-if="index < itemsPerPage">
          <div class="ba-gallery">
            <div class="row">
              <div class="small-12 medium-6 large-6">
                <img :src="photo.img" :alt="photo.alt" />
              </div>
            </div>
          </div>
        </div>
      </div>
		<hr>
        <button href="#" class="ba-reviews-bnt">Ще фото</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsPerPage: 7,
      gallery: []
    };
  },
  mounted() {
    fetch("assets/json/gallery.json")
      .then(res => res.json())
      .then(list => (this.gallery = list));
  }
};
</script>