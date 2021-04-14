<template>
    <component class="w-full px-5 flex flex-col justify-center" ref="section"
               v-bind:class="[classes, colors, model.component, model.extraclasses]" v-bind:style="[styles, sticky]"
               v-bind:data-per-path="model.path" v-bind:is="model.htmlelement || &quot;div&quot;"
               v-bind:id="model.anchorname">
        <div class="embed-responsive embed-responsive-16by9 w-full h-full top-0 left-0"
             v-if="model.custombackground === 'true' &amp;&amp; model.backgroundtype == 'video' &amp;&amp; model.bgvideo"
             v-bind:style="`position:${'absolute'};pointer-events:${'none'};z-index:${'-1'};`">
            <iframe class="w-full h-full" v-bind:src="videoSource"></iframe>
        </div>
        <div class="flex min-h-1" v-bind:class="{
            'container mx-auto' : model.blockwidth === 'default',
            'w-full max-w-3xl mx-auto' : model.blockwidth === 'article'
        }">
            <slot></slot>
        </div>
    </component>
</template>

<script>
export default {
    props: {
        model: {
            type: Object,
        },
    },
    data: function() {
        return {
            loadVideo: null,
        };
    },
    mounted() {
        this.$nextTick(function() {
            this.loadVideo = true;
        });

        // Add top margin to perApp to account for fixed header when sticky is true
        if (this.model.sticky === 'true' && !$peregrineApp.isAuthorMode()) {
            if (this.$refs.section.style.position === 'fixed') {
                const height = this.$refs.section.clientHeight;
                this.$refs.section.parentElement.style.marginTop = height + 'px';
            }
        }
        //Offset height of anchor by height of the navbar and top padding
        // let navSection = document.querySelector('nav').parentElement.parentElement.parentElement
        // let navPosition = navSection.style.position
        // let navSticky = navPosition === "sticky" || navPosition === "fixed"
        // let navOffset = navSticky ? navSection.clientHeight : 0

        // this.$refs.anchor.style.top = `0px`
        // this.$refs.anchor.style.marginTop = `-${navOffset}px`
        // this.$refs.anchor.style.paddingTop = `${navOffset}px`

    },
    computed: {
        videoSource() {
            return this.loadVideo ? this.model.bgvideo + '?autoplay=1&amp;loop=1&amp;controls=0&amp;mute=1' : '';
        },
        classes: function() {
            let classObject = {};
            classObject['min-h-screen'] = this.model.fullheight == 'true';
            classObject[`elevation-${ this.model.elevation }`] = this.model.elevation > 0;
            return classObject;
        },
        colors: function() {
            let classes = {};
            if (this.model.colorscheme === '') return classes;
            classes['theme-light'] = this.model.colorscheme === 'light';
            classes['theme-dark'] = this.model.colorscheme === 'dark';
            return classes;
        },
        sticky: function() {
            const sticky = this.model.sticky === 'true';
            return sticky && !$peregrineApp.isAuthorMode() ?
                {
                    position: 'sticky',
                    top: '0',
                    width: '100%',
                    zIndex: '1000',
                } : {};
        },
        styles: function() {
            let styles = {};

            if (this.model.toppadding) styles.paddingTop = `${ this.model.toppadding }px`;
            if (this.model.bottompadding) styles.paddingBottom = `${ this.model.bottompadding }px`;
            styles.position = 'relative';
            styles.overflow = 'hidden';

            if (this.model.custombackground === 'true') {
                styles.background = this.backgroundStyles();
            }

            styles.backgroundPositionX = this.model.bgxposition + '%';
            styles.backgroundPositionY = this.model.bgyposition + '%';
            styles.backgroundSize = this.model.bgsize;
            styles.backgroundRepeat = 'no-repeat';

            return styles;
        },
    },
    methods: {
        backgroundStyles() {
            if (this.model.custombackground === 'false') return '';
            switch (this.model.backgroundtype) {

                case 'image':
                    const overlay = this.model.overlay === 'true' ? `${ this.overlayStyle() },` : '';
                    if (this.model.bgimage) {
                        return overlay + `url("${ this.model.bgimage }")`;
                    }
                    return overlay;

                case 'gradient':
                    return `linear-gradient(to right,${ this.model.bgcolor },${ this.model.color2 })`;

                case 'color':
                    return `${ this.model.bgcolor }`;

                default:
                    return '';

            }
        },
        colorOpacity() {
            const hex = this.model.overlaycolor;
            return `rgba(${ parseInt(hex.slice(1, 3), 16) },
                         ${ parseInt(hex.slice(3, 5), 16) },
                         ${ parseInt(hex.slice(5, 7), 16) },
                         ${ this.model.overlayopacity / 100 } )`;
        },
        overlayStyle() {
            return `linear-gradient(to right, ${ this.colorOpacity() }, ${ this.colorOpacity() })`;
        },
    },

};
</script>

