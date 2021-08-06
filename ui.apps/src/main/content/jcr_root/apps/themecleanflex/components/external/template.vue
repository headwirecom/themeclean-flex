<template>
    <div v-bind:data-per-path="model.path" style="width:100%; padding: 6px;">
        <div class="p-5" v-if="model.text == undefined">no content defined for component</div>
        <div v-html="model.text" style="padding:6px;">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

