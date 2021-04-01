<template>
  <div
    id="longText"
    class="trns"
    ref="post"
    v-bind:style="{
      marginTop: marginTop + 'vh',
      height: height + 'vh',
      width: widthOpen + 'vw',
      marginRight: '-3vw',
      marginLeft: '6vw',
    }"
    @click="toggleExpand"
  >
    <div class="mark">
      <OrangeFade v-bind:style="{ height: '16.5px' }"></OrangeFade>
    </div>
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
    this.widthOpen = this.randomNumberBetween(20, 30);
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
  margin-left: 1.5rem;
  background: #b2b2b2;
}
.mark {
  position: absolute;
  top: 0;
  height: 27.5px;
}
</style>
