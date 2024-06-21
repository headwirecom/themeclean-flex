<template>
    <div class="p-5" v-if="model.text == undefined">no content defined for component</div>
    <div v-bind:data-per-path="model.path" v-html="model.text">
    </div>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

