export const postMixin = {
    name: "postMixin",
    methods: {
        randomNumberBetween(a,b) {
            return Math.random() * (b -a) + a
        },
        toggleExpand() {
            this.isExpanded = !this.isExpanded
        },
        deactivateScroll() {
            this.$store.commit('suspendScroll')
        },
        activateScroll() {
            this.$store.commit('activateScroll')
        },
        setAssets() {
            this.assets = this.$store.getters.getAssetsByPostId(this.post.idposts)
        }
    },
    props: {
        post: Object,
        triggerExpand: Number
    },
    data: function () {
        return {
            isExpanded: false,
            assets: []
        }
    },
    watch: {
        triggerExpand: function () {
            this.toggleExpand()
            console.log('postTriggered')
        }
    },
    computed: {
        scrollPosition() {
            return this.$store.getters.getScrollPosition
        }
    },


}
