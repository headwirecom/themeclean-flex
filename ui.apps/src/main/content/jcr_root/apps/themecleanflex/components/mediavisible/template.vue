<template>
  <div class="w-full">
    <div
      v-if="model.mediatype === 'video'"
      class="embed-responsive embed-responsive-16by9"
    >
      <iframe
        :title="model.mediatitle"
        :src="$helper.pathToUrl(model.videosrc)"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <v-lazy-image
      v-if="model.mediatype === 'image'"
      class="w-full"
      :src="$helper.pathToUrl(model.imagesrc)"
      :alt="model.mediatitle"
    ></v-lazy-image>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  props: ["model"],
  components: {
    VLazyImage,
  },
};
</script>
