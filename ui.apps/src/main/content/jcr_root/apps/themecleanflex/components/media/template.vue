<template>
  <div class="w-full">
    <div v-if="model.mediatype === 'video'" class="relative block w-full p-0 overflow-hidden aspect-ratio-16/9">
      <iframe :title="model.mediatitle" class="absolute inset-0 w-full h-full" :src="$helper.pathToUrl(model.videosrc)" frameborder="0" allowfullscreen></iframe>
    </div>
    <i v-else-if="model.mediatype === 'icon'" class="w-full text-center" v-bind:class="iconClass" v-bind:style="{'font-size': `${model.mediaiconsize}px`, 'color': model.mediaiconcolor}">
      {{iconContent}}
    </i>
    <v-lazy-image v-else-if="model.mediatype === 'image'" class="w-full" :src="$helper.pathToUrl(model.imagesrc)" :alt="model.mediatitle"></v-lazy-image> 
    <h3 v-if="noMedia" class="w-full text-center">No media content</h3>
  </div>
</template>

<script>
  import VLazyImage from 'v-lazy-image';

  export default {
    props: ["model"],
    computed: {
      noMedia() {
        let { mediatype, videosrc, imagesrc, mediaicon } = this.model
        if (mediatype !== 'image' && mediatype !== 'video' && mediatype !== 'icon') return true;
        if (mediatype === 'image' && imagesrc == null || imagesrc == "") return true;
        if (mediatype === 'video' && videosrc == null || videosrc == "") return true;
        if (mediatype === 'icon' && mediaicon == null || mediaicon == "") return true;
        return false
      },
      iconClass() {
        return this.model.mediaicon != null ? this.model.mediaicon.split(':')[1] : ''
      },
      iconContent() {
        return this.model.mediaicon != null ? this.model.mediaicon.split(':')[2] : ''
      }
    },
    components: {
      VLazyImage
    }
  }
</script>
