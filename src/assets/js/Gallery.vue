<template>
  <div id="app">
    <div class="ba-section-gallery row">
      <!-- :class="index % 2 == 0 ? 'large-3' : 'large-6'" -->
      <div
        class="column small-12 medium-6 large-4 ba-gallery-row"
        v-for="(photo, index) in gallery"
      >
        <img :src="photo.img" :alt="photo.alt" />
      </div>
    </div>
	 <div class="ba-gallery-bnt">
        <a v-on:click="loadMore" v-show="displayed">Ще фото</a>
      </div>
      <!-- /.ba-gallery-bnt -->
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
          let newGallery = moreGallery.slice(-9);
          this.gallery.push(...newGallery);
          this.displayed = false;
        });
    }
  },
  mounted() {
    fetch("assets/db/gallery.json")
      .then(res => res.json())
      .then(list => {
        this.gallery = list.slice(0, 9);
      });
  }
};
</script>
