<template>
  <div class="w-full">
    <h3 v-if="noMedia" class="w-full text-center">No media content</h3>
    <div v-else-if="model.mediatype === 'video'" class="relative block w-full p-0 overflow-hidden aspect-ratio-16/9">
      <iframe :title="model.mediatitle" class="absolute inset-0 w-full h-full" :src="videoSource" frameborder="0" allowfullscreen></iframe>
    </div>
    <v-lazy-image v-else-if="model.mediatype === 'image'" class="w-full" :src="$helper.pathToUrl(model.imagesrc)" :alt="model.mediatitle"
      :src-placeholder="placeholderSrc(model.imagesize)"></v-lazy-image>
  </div>
</template>

<script>
  export default {
    props: ["model"],
    data: function() {
      return {
        loadVideo: null
      }
    },
    mounted: function() {
      this.$nextTick(function () {
        this.loadVideo = true;
      })
    },
    computed: {
      videoSource() {
        return this.loadVideo ? this.$helper.pathToUrl(this.model.videosrc) : ""
      },
      noMedia() {
        let { mediatype, videosrc, imagesrc } = this.model
        if (mediatype !== 'image' && mediatype !== 'video') return true;
        if (mediatype === 'image' && (imagesrc == null || imagesrc == "")) return true;
        if (mediatype === 'video' && (videosrc == null || videosrc == "")) return true;
        return false
      }
    },
    methods: {
      placeholderSrc(size) {
        return size ? `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size.width} ${size.height}"%3E%3C/svg%3E` : null
      }
    }
  }
</script>
