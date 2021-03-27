<template>
<div id="SubmitQuestion">
  <textarea v-model="newQuestion" placeholder="Stelle eine Frage ..."></textarea>
  <BUTTON>Enter</BUTTON>
</div>
</template>

<script>
export default {
  name: "QuestionsAddNew",
  data: function () {
    return {
      newQuestion: ""
    }
  }
}
</script>

<style scoped>
*{
  font-family: Akzi;
  line-height: 2.33vw;
  font-size: 1vw;
}
textarea {
  border: unset;
  resize: none;
  box-sizing: border-box;
  width: 100%;
  height: 60%;
  background: unset;
  padding: 0.4rem;
}
button {
  display: block;
  float: right;
  background: unset;
  border: unset;
  padding-right: 1rem;
  cursor: pointer;
}
#SubmitQuestion {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  border-radius: 2rem;
  border: #3c2832 solid 1rem;

}
</style>
