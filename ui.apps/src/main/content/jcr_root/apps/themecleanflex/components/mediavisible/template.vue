<template>
  <div class="w-full">

    <div v-if="model.mediatype === 'video'" class="embed-responsive embed-responsive-16by9">
      <iframe :src="$helper.pathToUrl(model.videosrc)" frameborder="0" allowfullscreen></iframe>
      </iframe>
    </div>
    <i v-if="model.mediatype === 'icon'" class="w-full text-center" v-bind:class="model.mediaicon.split(':')[1]" v-bind:style="{'font-size': `${model.mediaiconsize}px`, 'color': model.mediaiconcolor}">
      {{model.mediaicon.split(':')[2]}}
    </i>
    <img v-if="model.mediatype === 'image'" class="w-full" :src="$helper.pathToUrl(model.imagesrc)" :alt="model.imagealttext">



  </div>
</template>

<script>
export default {
  props: ["model"]
}
</script>
