<template>
    <themecleanflex-components-block v-bind:model="model">
        <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
        <div class="flex flex-wrap md:-mx-3"
             v-else>
            <div class="card my-3 px-0 md:px-3" v-bind:class="{
            'lg:w-full': model.cardsperrow == 1,
            'lg:w-1/2': model.cardsperrow == 2,
            'lg:w-1/3': model.cardsperrow == 3,
            'lg:w-1/4': model.cardsperrow == 4,
            'lg:w-1/5': model.cardsperrow == 5,
            'lg:w-1/6': model.cardsperrow == 6,
            'md:w-full': model.cardsperrowtab == 1,
            'md:w-1/2': model.cardsperrowtab == 2,
            'md:w-1/3': model.cardsperrowtab == 3,
            'md:w-1/4': model.cardsperrowtab == 4,
            'md:w-1/5': model.cardsperrowtab == 5,
            'md:w-1/6': model.cardsperrowtab == 6,
            'w-full': model.cardsperrowmobile == 1,
            'w-1/2': model.cardsperrowmobile == 2,
            'w-1/3': model.cardsperrowmobile == 3,
            'w-1/4': model.cardsperrowmobile == 4,
            'w-1/5': model.cardsperrowmobile == 5,
            'w-1/6': model.cardsperrowmobile == 6,
        }" v-for="(item, i) in model.cards" :key="item.path || i">
                <div class="flex flex-col h-full overflow-hidden"
                     v-bind:style="`background-color:${model.customcardcolor === 'true' &amp;&amp; model.showcard === 'true' ? model.cardcolor: ''};`"
                     v-bind:class="{
            'card--bg': model.showcard === 'true' || model.customcardcolor === 'true',
            'bg-secondary': model.showcard === 'true' &amp;&amp; model.customcardcolor !== 'true',
            'border border-solid': (model.customcardcolor !== 'true') &amp;&amp; model.cardborder === 'true',
            'rounded-none': model.roundedcorners == 'none',
            'rounded-sm': model.roundedcorners == 'small',
            'rounded': model.roundedcorners == 'medium',
            'rounded-lg': model.roundedcorners == 'large'
        }">
                    <div class="self-center" v-bind:style="{width: item.imagewidth + &quot;%&quot;}">
                        <v-lazy-image
                            v-bind:class="model.showcard === 'true' ||  model.cardborder === 'true' ? 'card-img w-full' : 'card-img mb-3 w-full'"
                            v-bind:src="$helper.pathToUrl(item.image)" v-bind:alt="item.imagealttext"
                            v-bind:src-placeholder="placeholderSrc(item)" v-if="item.image"></v-lazy-image>
                    </div>
                    <div class="flex flex-grow flex-col justify-between p-0" v-bind:class="{
            'p-6': model.showcard === 'true' || model.cardborder === 'true'
        }">
                        <div>
                            <h2 class="text-xl mb-3" v-if="model.showtitle == 'true'"
                                v-bind:data-per-inline="`model.cards.${i}.title`"
                                v-bind:style="`color:${item.color};`">{{ item.title }}</h2>
                            <div v-if="model.showtext == 'true'" v-html="item.text"
                                 v-bind:data-per-inline="`model.cards.${i}.text`"></div>
                        </div>
                        <a class="btn mt-3" v-if="showbutton(item)" v-bind:href="$helper.pathToUrl(item.buttonlink)"
                           v-bind:class="{
            'btn-lg': item.buttonsize === 'large',
            'btn-sm': item.buttonsize === 'small',
            'btn-primary': item.buttoncolor === 'primary',
            'btn-secondary': item.buttoncolor === 'secondary',
            'btn-success': item.buttoncolor === 'success',
            'btn-danger': item.buttoncolor === 'danger',
            'btn-warning': item.buttoncolor === 'warning',
            'self-start': item.buttonalign === 'left',
            'self-center': item.buttonalign === 'center',
            'self-end': item.buttonalign === 'right',
            'my-3': model.cardborder !== 'true' &amp;&amp; model.showcard !== 'true'
        }" v-bind:data-per-inline="`model.cards.${i}.buttontext`">{{ item.buttontext }}</a>
                    </div>
                </div>
            </div>
        </div>
    </themecleanflex-components-block>
</template>

<script>
export default {
    props: ['model'],
    computed: {
        isEditAndEmpty() {
            if (!$peregrineApp.isAuthorMode()) return false
            return this.$helper.areAllEmpty(this.model.cards)
        }
    },
    methods: {
        showbutton(card) {
            return this.model.showbutton === 'true' && card.buttontext.length
        },
        placeholderSrc(item) {
            const size = item.imageSize
            return size ? `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ size.width } ${ size.height }"%3E%3C/svg%3E` : null
        }
    }
}
</script>

