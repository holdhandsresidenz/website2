<template>
  <div
      v-bind:id="id + '-modal'"
      ref="modal"
      class="modal"
      v-bind:style="{top: top + 'px'}"
  >
    <div class="leftBorder"></div>
    <div class="rightBorder"></div>
    <iframe
        v-bind:id="id + '-iframe'"
        allowfullscreen
        frameborder="0"
        v-bind:src="videoUrl + '?&autoplay=1&start=2'"></iframe>
    <div class="name">
      <Title v-bind:title="title" v-bind:z-index="60000" @title-clicked="currentPos = 2950;"></Title>
    </div>
    <CloseButton @close="$emit('close')"></CloseButton>
    <TextBox
        v-bind:id="id + '-Biografie'"
        v-bind:close-at-vw="3000"
        v-bind:container-style=" this.smallScreen  ?
        {position: 'absolute', top: '60vw', left: '-1vw'} :
        {position: 'absolute', top: 0, left: '-4vw'}"
        v-bind:current-position-vw="currentPos"
        v-bind:height=" this.smallScreen  ? '55vh' : '20.625vw'"
        v-bind:mark="false"
        v-bind:open-at-vw="this.smallScreen  ? 0 : 2900"
        v-bind:title="'INFO'"
        v-bind:width-open="this.smallScreen  ? '90vw' : '60vw'"
        v-bind:z-base="5000"
        @content-clicked="currentPos=3333; currentPos=3320"
    >
      <p v-html="biografie"></p>
    </TextBox>
  </div>
</template>

<script>
import CloseButton from "@/pages/public/components/CloseButton";
import TextBox from "@/pages/public/components/TextBox";
import Title from "@/pages/public/components/Title";
export default {
  name: "VideoModal",
  components: {Title, TextBox, CloseButton},
  props: {
    title: String,
    id: String,
    videoUrl: String,
    biografie: String
  },
  data: function () {
    return {
      top: 0,
      currentPos: 0
    }
  },
  methods: {
    setTop() {
      let modalHeight = window.innerWidth * 0.9 * 0.5625
      let freeHeight = window.innerHeight - modalHeight
      freeHeight = freeHeight < 0 ? 0 : freeHeight / 2
      if( screen.height <= 1000) {
        this.top = '42'
      } else {
        this.top = freeHeight < 0 ? 0 : freeHeight / 2
      }
    }
  },
  computed: {
    smallScreen() {
      return screen.width <= 1000
    }
  },
  mounted() {
    window.addEventListener('resize', this.setTop)
    this.setTop()
  },
  destroyed() {
    window.removeEventListener('resize', this.setTop)
  }
}
</script>

<style scoped>
.modal {
  z-index: 1035;
  position: fixed;
  overflow: visible;
  width: 90vw;
  left: 5vw;
  right: 5vw;
  height: 50.625vw;
  background: #b2b2b2;
}

.leftBorder {
  z-index: 200;
  position: absolute;
  width: 4vw;
  left: -0.8vw;
  height: 100%;
  background: url("../../../assets/Verlauf_blau.png");
  background-size: 100%;
  transition: 1.4s;
}

.rightBorder {
  z-index: 200;
  position: absolute;
  height: 100%;
  top: 0;
  right: -3vw;
  width: 4vw;
  background: url("../../../assets/Verlauf_blau.png");
  background-size: 100%;
  transition: 1.4s;
}

iframe {
  width: 100%;
  height: 100%;
  z-index: 80;
  position: absolute;
}

.name {
  position: absolute;
  top: 2.9rem;
  overflow: visible;
  left: -4vw;
}

@media all and (max-width: 1000px) {
  .rightBorder {
    width: 6vh;
    left:88.5vw;
  }
  .leftBorder{
    left: -1.5vw;
    width: 6vh;
  }
  .name {
    left: -0.5vw;
    top: 70vw;
  }
  .modal {
    width: 90vw;
    left: 1vw;
  }
}
</style>
