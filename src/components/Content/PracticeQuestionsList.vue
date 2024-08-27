<template>
  <ul class="practice-questions-list practice-questions-list__wrapper">
    <li
        class="practice-questions-list__item"
        v-for="item in options"
        :key="item.key"
        v-on:click="onClick(item.key)"
        :class="getAnsweredClassName(item.key)">
      {{ item.value }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "PracticeQuestionsList",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    clickHandler: {
      type: Function,
      default: () => {}
    },
    rightAnswer: {
      type: String,
      default() {
        return ""
      }
    }
  },
  data() {
    return {
      selected: ""
    }
  },
  methods: {
    onClick(value) {
      if (this.selected) return;
      this.selected = value;
      this.clickHandler(value);
    },
    getAnsweredClassName(key) {
      if (!this.selected) return "";
      if (key !== this.selected && key === this.rightAnswer) return "practice-questions-list__item-wrong-success";
      if (key !== this.selected) return "practice-questions-list__item-is-answered";
      return key === this.rightAnswer && this.selected === key
          ? "practice-questions-list__item-success"
          : "practice-questions-list__item-wrong"
    }
  }
}
</script>
