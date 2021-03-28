<template>
<div id="Questions">
  <QuestionsList></QuestionsList>
  <QuestionsAddNew></QuestionsAddNew>
</div>
</template>

<script>
import QuestionsList from "@/pages/public/sections/ResidenzSection/Questions/QuestionsList";
import QuestionsAddNew from "@/pages/public/sections/ResidenzSection/Questions/QuestionsAddNew";
export default {
name: "Questions",
  components: {QuestionsAddNew, QuestionsList}
}
</script>

<style scoped>
#Questions {
  position: relative;
  height: 100%;
  width: 30vw;
  display: flex;
  flex-direction: column;
}
</style>
