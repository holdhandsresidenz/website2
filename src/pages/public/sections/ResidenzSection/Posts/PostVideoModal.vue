<template>
  <div
    class="modalVideo trns"
	ref="modalVideo"
    v-bind:style="{
	top: '7vh',
	width: videoWidth + 'vw',
	height: videoHeight + 'vw',
	opacity: opacity,
	}"
	@click="show"
>
	<template v-if="isVisible">
		<OrangeFade v-bind:style="{ opacity: opacity }"></OrangeFade>
		<iframe
			v-bind:src="link + '?&autoplay=1'"
			v-bind:style="{ opacity: opacity }"
		></iframe>
		<OrangeFade v-bind:style="{ opacity: opacity }"></OrangeFade>
	</template>
</div>
</template>

<script>
import OrangeFade from "@/pages/public/components/OrangeFade";
		export default {
			name: "PostVideoModal",
			data: function () {
				return {
					testLink: "https://www.youtube.com/embed/TXsNk03ygD4",
					videoWidth: 67,
					isVisible: false,
					opacity: 0,
					videoTop: 0
				};
			},
			components: {
				OrangeFade,
			},
			props: {
				link: String,
			},
			methods: {
				randomNumberBetween(a, b) {
					return Math.random() * (b - a) + a;
				},
				show() {
					console.log("show modal");
					this.isVisible = true;
					this.opacity = 100;
				},
				setVideoTop() {
					this.videoTop = this.$refs.videoModal.clientHight / 2
				},
			},
			computed: {
				videoHeight() {
					return this.videoWidth / (16 / 9 ) 
				},
			},
			mounted() {
				this.videoWidth = this.randomNumberBetween(77, 82);
			},
		};
</script>

<style scoped>
.modalVideo {
	display: flex;
	flex-direction: row;
	position: absolute;
	width: 100%;
	z-index: 33333;
	overflow-x: unset;
}
iframe {
	width: 100%;
	height: 100%;
}
</style>
