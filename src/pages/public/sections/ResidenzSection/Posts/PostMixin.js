export const postMixin = {
	name: "postMixin",
	methods: {
		randomNumberBetween(a, b) {
			return Math.random() * (b - a) + a
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
		},
		setRandomMarginTop() {
			let min = 0
			let max = 50
			this.marginTop = (Math.random() * (max - min)) + min
		},
	},
	props: {
		post: Object,
		triggerExpand: Number,

	},
	data: function () {
		return {
			isExpanded: false,
			assets: [],
			marginTop: 0,
			positionVP: 0
		}
	},
	watch: {
		triggerExpand: function () {
			this.toggleExpand()
		},
		scrollPosition: function () {
			let right = this.$refs.post.getBoundingClientRect().right
			let left = this.$refs.post.getBoundingClientRect().left
			let middle = left + ((right - left) / 2)
			this.positionVP = middle
		},
		positionVP: function (oldVal, newVal) {
			let ltr = (oldVal <= this.$store.getters.getPostTriggerWidth && newVal >= this.$store.getters.getPostTriggerWidth)
			let rtl = (oldVal >= this.$store.getters.getPostTriggerWidthBack && newVal <= this.$store.getters.getPostTriggerWidthBack)
			if (ltr || rtl) {
				this.isExpanded = true
			} else if (newVal < this.$store.getters.getScreenMiddle / 6 || newVal > this.$store.getters.getScreenMiddle * 1.7) {
				this.isExpanded = false
			}
		}
	},
	computed: {
		scrollPosition() {
			return this.$store.getters.getScrollPosition
		},

	},
	mounted() {
		this.setRandomMarginTop()
	},



}
