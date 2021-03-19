<template>
  <div
      v-bind:id="this.id">
    <Mark v-if="mark" v-bind:position="{position: 'absolute', top: 0, left: this.containerStyle.left}"></Mark>
    <div
        class="container transitionTime minMaxValues"
        v-bind:style="this.containerStyle"
        @click="open = !open"
        @mouseover="mouseenter"
        @mouseleave="mouseleave"
    >
      <Title v-bind:title="title"
             v-bind:z-index="!this.open ? zBase + 1002 : zBase + 1002"
      ></Title>
      <div
          v-bind:id="this.id + '-borderL'"
          class="leftBorder transitionTime minMaxValues"
          v-bind:style="{
          height: height,
          minHeight: minHeightPx+ 'px',
          zIndex: !this.open ? zBase + 1 : zBase + 1001,
          }"></div>
      <div
          @click="$emit('content-clicked')"
          v-bind:id="this.id + '-content'"
          class="content transitionTime grey "
          v-bind:style="{
           height: height,
           minHeight: minHeightPx + 'px',
           maxWidth: maxWidthPx + 'px',
           width: !this.open ? '0' : widthOpen,
           overflowY: !this.open ? 'hidden' : 'auto',
           opacity: this.open ? '' : '0',
           zIndex: !this.open ? zBase : zBase + 1000,
           left: this.screenW < 1000 ?
           (this.screenW * (widthOpen / 100) > maxWidthPx ? this.offsetLeftAtMaxWidth + 'px' : '-5vh') :
           (this.screenW * (widthOpen / 100) > maxWidthPx ? this.offsetLeftAtMaxWidth + 'px' : '-3.3vw')

         }"
      >
        <slot></slot>
      </div>

      <div
          v-bind:id="this.id + '-borderR'"
          class="rightBorder transitionTime minMaxValues"
          v-bind:style="{
        height: height,
        opacity: this.open ? '' : '0',
        left: this.screenW < 1000 ?
        (!this.open ? '-6vh' : '-6vh') :
        (!this.open ? '-4.7vw' : '-4vw'),
        minHeight: minHeightPx + 'px',
        zIndex: !this.open ? zBase + 1 : zBase + 1001,
    }"
      ></div>
    </div>
  </div>
  </template>

<script>
import Mark from "@/components/Mark";
import Title from "@/components/Title";
export default {
  name: "TextBox",
  props: {
    title: String,
    id: String,
    containerStyle: Object,
    height: String,
    widthOpen: String,
    maxWidthPx: Number,
    minHeightPx: Number,
    currentPositionVw: Number,
    openAtVw: Number,
    closeAtVw: Number,
    mark: Boolean,
    zBase: Number
  },
  components: {
    Title,
    Mark
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    screenW() {
      return screen.width
    },
    screenH() {
      return screen.height
    },
    offsetLeftAtMaxWidth() {
      return this.maxWidthPx * 0.61
    }
  },
  watch: {
    currentPositionVw: function () {
     this.open = ((this.currentPositionVw >= this.openAtVw) && (this.currentPositionVw <= this.closeAtVw));

    }
  },
  methods: {
    mouseenter() {
      if (this.open) {
        this.$emit('suspend-scroll', this.id)
      }
    },
    mouseleave() {
      this.$emit('continue-scroll', this.id)
    }
  }
}
</script>

<style scoped>
*::-webkit-scrollbar {
  width: 0.8vw;
}

.transitionTime {
  transition: 1.4s;
}

.container {
  display: flex;
}

.content {
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  padding-left: 1.3vw;
  padding-right: 0.5vw;
}

.leftBorder {
  width: 4vw;
  background: url("../assets/Verlauf_blau.png");
  background-size: 100%;
  transition: 1.4s;

}

.rightBorder {
  position: relative;
  width: 4vw;
  background: url("../assets/Verlauf_blau.png");
  background-size: 100%;
  transition: 1.4s;
}


@media all and (max-width: 1000px) {
.rightBorder {
  width: 6vh;
}
  .leftBorder{
    width: 6vh;
  }
  .content{
    padding-left: 1.9vw;
    padding-right: 1vw;
  }
}


</style>
