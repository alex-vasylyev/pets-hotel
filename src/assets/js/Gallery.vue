<template>
  <div id="app">
    <div class="ba-section-gallery">
      <div class="row">
        <div class="column">
          <div class="ba-gallery">
            <div class="ba-gallery-list" v-for="(photo, index) in gallery">
              <div class="small-12 medium-6 large-6">
                <img :src="photo.img" :alt="photo.alt" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="ba-gallery-bnt" v-on:click="loadMore" v-show="displayed">Ще фото</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [],
      displayed: true
    };
  },
  methods: {
    loadMore() {
      fetch("assets/db/gallery.json")
        .then(res => res.json())
        .then(moreGallery => {
          let newGallery = moreGallery.slice(-7);
          this.gallery.push(...newGallery);
          this.displayed = false;
          console.log(loadMore);
        });
    }
  },
  mounted() {
    fetch("assets/db/gallery.json")
      .then(res => res.json())
      .then(list => {
        this.gallery = list.slice(0, 7);
        console.log(mounted);
      });
  }
};
</script>