<template>
  <div
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      @click="open = true"
      v-bind:id="this.id"
      class="container transitionTime minMaxValues"
      v-bind:style="this.containerStyle"
  >

    <div
        v-bind:id="this.id + '-borderL'"
        class="leftBorder transitionTime minMaxValues"
        v-bind:style="{
          height: height,
          minHeight: minHeightPx+ 'px',
          }"></div>

    <p class="inline title">{{title}}</p>
    <div
         v-bind:id="this.id + '-content'"
         v-bind:style="{
           height: height,
           minHeight: minHeightPx + 'px',
           maxWidth: maxWidthPx + 'px',
           width: !this.open ? '0' : widthOpen,
           overflowY: !this.open ? 'hidden' : 'auto',
           opacity: this.open ? '' : '0',
          left: this.screenW * (widthOpen / 100) > maxWidthPx ? this.offsetLeftAtMaxWidth + 'px' : '-3.3vw'

         }"
         class="content transitionTime grey "
    >

      <slot></slot>


    </div>

    <div
        v-bind:id="this.id + '-borderR'"
        class="rightBorder transitionTime minMaxValues"
         v-bind:style="{
      height: height,
  opacity: this.open ? '' : '0',
      left: !this.open ? '-4.7vw' : '-4vw',
      minHeight: minHeightPx + 'px',
    }"
    ></div>

  </div>
</template>

<script>
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
    closeAtVw: Number
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
      this.open = !(this.currentPositionVw <= this.openAtVw || this.currentPositionVw >= this.closeAtVw);
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
.minMaxValues {

}
.title {
  position: absolute;
  left: 2vw;
  z-index: 101;
}


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
}

.leftBorder {
  width: 4vw;
  background: url("../assets/Verlauf2.png");
  background-size: 100%;
  transition: 1.4s;
  z-index: 100;
}

.rightBorder {
  position: relative;
  width: 4vw;

  background: url("../assets/Verlauf2.png");
  background-size: 100%;
  transition: 1.4s;
  z-index: 100;
}

@media all and (max-width: 1000px) {
  .container {
    flex-direction: row;

  }
  .content {
    position: relative;
    transform: rotate(-90deg) translate(-100%);
    transform-origin:left top;

    overflow-y: hidden;
    overflow-x: auto;
  }
  .rightBorder {

  }
}

</style>
