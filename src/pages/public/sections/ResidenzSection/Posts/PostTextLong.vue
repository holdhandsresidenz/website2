<template>
  <div
    id="longText"
    class="trns"
    ref="post"
    v-bind:style="{
      marginTop: marginTop + 'vh',
      height: height + 'vh',
      width: widthOpen + 'vw',
      marginRight: '3vw',
      marginLeft: '6vw',
    }"
    @click="toggleExpand"
  >
    <div class="mark"></div>
    <OrangeFade></OrangeFade>
    <div
      class="textBox trns"
      v-bind:style="{
        opacity: isExpanded ? '100' : '0',
        width: isExpanded ? '100%' : '0%',
      }"
      @mouseenter="deactivateScroll"
      @mouseleave="activateScroll"
    >
      {{ post.contentHTML }}
    </div>
    <OrangeFade
      v-bind:style="{
        transition: '2.4s',
        opacity: isExpanded ? 100 : 0,
      }"
    ></OrangeFade>
  </div>
</template>

<script>
import OrangeFade from "@/pages/public/components/OrangeFade";
import { postMixin } from "@/pages/public/sections/ResidenzSection/Posts/PostMixin";
export default {
  mixins: [postMixin],
  name: "PostTextLong",
  components: { OrangeFade },
  data: function () {
    return {
      height: 0,
      widthOpen: 0,
    };
  },
  mounted() {
    this.height = this.randomNumberBetween(30, 50);
    this.widthOpen = this.randomNumberBetween(20, 34);
  },
};
</script>

<style scoped>
#longText {
  display: flex;
  flex-direction: row;
}
.textBox {
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-left: 1.2rem;
  margin-right: 0.2rem;
  padding-right: 0.3rem;
  background: #b2b2b2;
}
.mark {
  background: url("../../../../../assets/Verlauf2.png") no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  margin-left: -0.7rem;
  width: 4vw;
  height: 2rem;
}
*::-webkit-scrollbar {
  width: 1rem;
}
*::-webkit-scrollbar-track {
  z-index: 300;
  background: rgba(21,255,0,0);
  width: 3rem;
}
*::-webkit-scrollbar-thumb {
  z-index: 300;
  background: #3c2832;
  width: 3rem;
}
*::-webkit-scrollbar-thumb:hover {
  z-index: 300;
  background: #3c2832;
  width: 3rem;
}
</style>
