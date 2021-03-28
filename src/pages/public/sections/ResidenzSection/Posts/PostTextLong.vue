<template>
  <div
      id="longText"
      v-bind:style="{
          height: height + 'vh',
          width: width + 'vw'
        }"
      @click="toggleExpand"
  >
    <OrangeFade ></OrangeFade>
    <div
        class="textBox trns"
        v-bind:style="{
          width: isExpanded ? widthOpen + '%': '0%',
          opacity: isExpanded ? '100' : '0'
        }"
        @mouseenter="deactivateScroll"
        @mouseleave="activateScroll"
    >
      {{post.contentHTML}}
    </div>
    <OrangeFade
        v-bind:style="{
      transition: '2.4s',
      opacity: isExpanded ? 100 : 0
    }"
    ></OrangeFade>
  </div>
</template>

<script>
import OrangeFade from "@/pages/public/components/OrangeFade";
import {postMixin} from "@/pages/public/sections/ResidenzSection/Posts/PostMixin";
export default {
  mixins: [postMixin],
  name: "PostTextLong",
  components: {OrangeFade},
  data: function () {
    return {
      height: 0,
      widthOpen: 0,
      width: 25
    }
  },
  mounted() {
    this.height = this.randomNumberBetween( 30, 50)
    this.widthOpen = this.randomNumberBetween(100 , 130)
    this.width = this.randomNumberBetween(25,33)
  }
}
</script>

<style scoped>
#longText {
  border: 1px solid navajowhite;
  display: flex;
  flex-direction: row;
}
.textBox {
  overflow-y: scroll;
  overflow-x: hidden;
  margin-left: 1.5rem;
  background: #b2b2b2;
}
</style>
