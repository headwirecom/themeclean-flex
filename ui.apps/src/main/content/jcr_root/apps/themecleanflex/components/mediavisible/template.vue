<template>
  <div class="w-full">

    <div v-if="model.mediatype === 'video'" class="embed-responsive embed-responsive-16by9">
      <iframe :title="model.mediatitle" :src="$helper.pathToUrl(model.videosrc)" frameborder="0" allowfullscreen></iframe>
    </div>
    <i v-if="model.mediatype === 'icon'" class="w-full text-center" v-bind:class="model.mediaicon.split(':')[1]" v-bind:style="{'font-size': `${model.mediaiconsize}px`, 'color': model.mediaiconcolor}">
      {{model.mediaicon.split(':')[2]}}
    </i>
    <v-lazy-image v-if="model.mediatype === 'image'" class="w-full" :src="$helper.pathToUrl(model.imagesrc)" :alt="model.mediatitle"></v-lazy-image>



  </div>
</template>

<script>
  import VLazyImage from 'v-lazy-image';
  export default {
    props: ["model"],
    components: {
      VLazyImage
    }
  }
</script>
