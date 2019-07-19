<template>
  <div class="w-full">
    <h3 v-if="noMedia" class="w-full text-center">No media content</h3>
    <div v-else-if="model.mediatype === 'video'" class="relative block w-full p-0 overflow-hidden aspect-ratio-16/9">
      <iframe :title="model.mediatitle" class="absolute inset-0 w-full h-full" :src="$helper.pathToUrl(model.videosrc)" frameborder="0" allowfullscreen></iframe>
    </div>
    <v-lazy-image v-else-if="model.mediatype === 'image'" class="w-full" :src="$helper.pathToUrl(model.imagesrc)" :alt="model.mediatitle"></v-lazy-image> 
  </div>
</template>

<script>
  import VLazyImage from 'v-lazy-image';
  export default {
    props: ["model"],
    computed: {
      noMedia() {
        let { mediatype, videosrc, imagesrc } = this.model
        if (mediatype !== 'image' && mediatype !== 'video') return true;
        if (mediatype === 'image' && (imagesrc == null || imagesrc == "")) return true;
        if (mediatype === 'video' && (videosrc == null || videosrc == "")) return true;
        return false
      }
    },
    components: {
      VLazyImage
    }
  }
</script>
