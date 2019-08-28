<template>
  <div class="w-full">
    <h3 v-if="noMedia" class="w-full text-center">No media content</h3>
    <div v-else-if="model.mediatype === 'video'" class="relative block w-full p-0 overflow-hidden aspect-ratio-16/9">
      <iframe :title="model.mediatitle" class="absolute inset-0 w-full h-full" :src="videoSource" frameborder="0" allowfullscreen></iframe>
    </div>
    <v-lazy-image v-else-if="model.mediatype === 'image'" class="w-full" :src="$helper.pathToUrl(model.imagesrc)" :alt="model.mediatitle"></v-lazy-image> 
  </div>
</template>

<script>
  export default {
    props: ["model"],
    data: function() {
      return {
        videoSource: null
      }
    },
    mounted: function() {
      this.$nextTick(function () {
        this.videoSource = this.$helper.pathToUrl(this.model.videosrc)
      })
    },
    computed: {
      noMedia() {
        let { mediatype, videosrc, imagesrc } = this.model
        if (mediatype !== 'image' && mediatype !== 'video') return true;
        if (mediatype === 'image' && (imagesrc == null || imagesrc == "")) return true;
        if (mediatype === 'video' && (videosrc == null || videosrc == "")) return true;
        return false
      }
    }
  }
</script>
