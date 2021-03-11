<template>
  <div v-bind:id="this.id" class="container transitionTime minValues" v-bind:style="position">
    <div class="leftBorder transitionTime minValues" v-bind:style="{height: height}"></div>
    <div
         v-bind:id="this.id + 'content'"
         v-bind:style="{
           height: height,
           width: !this.open ? '0vw' : widthOpen
         }"
         class="content transitionTime grey minValues"
    >
      <slot></slot>
    </div>

    <div class="rightBorder transitionTime minValues"
         v-bind:style="{
      height: height,
      position: 'relative',
    }"
         v-bind:class="{rightBorderOpen: this.open, rightBorderClosed: !this.open}"
    ></div>
  </div>
</template>

<script>
export default {
  name: "TextBox",
  props: {
    id: String,
    position: Object,
    height: String,
    widthOpen: String,
    currentPositionVw: Number,
    openAtVw: Number,
    closeAtVw: Number
  },
  data: function () {
    return {}
  },
  computed: {
    open() {
      return !(this.currentPositionVw <= this.openAtVw || this.currentPositionVw >= this.closeAtVw);
    }
  }
}
</script>

<style scoped>
.minValues {
  min-height: 250px;
  max-width: 800px;
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
  left: -3.3vw;
  padding-left: 1.3vw;
}

.leftBorder {
  width: 4vw;
  background: url("../assets/Verlauf.png");
  background-size: 100%;
  transition: 1.4s;
  z-index: 100;
}

.rightBorder {
  position: relative;
  left: -4vw;
  width: 4vw;
  background: url("../assets/Verlauf.png");
  background-size: 100%;
  transition: 1.4s;
  z-index: 100;
}

.rightBorderClosed {

  transition: 1.4s;
}

.rightBorderOpen {

  transition: 1.4s;
}
</style>
