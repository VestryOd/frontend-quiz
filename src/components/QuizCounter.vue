<template>
  <section id="quiz-answers-counter" class="quiz-counter__wrapper">
    <div class="quiz-counter">
      <span class="quiz-counter__right">{{right}}</span>
      <span>/</span>
      <span class="quiz-counter__wrong">{{wrong}}</span>
      <span>/</span>
      <span>{{total}}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuizCounter',
  props: {
    total: {
      type: Number,
      default: 0
    },
    right: {
      type: Number,
      default: 0
    },
    wrong: {
      type: Number,
      default: 0
    }
  }
}
</script>