<template>
  <form class="select-quiz-form" @submit.prevent="submitForm" @reset.prevent="submitReset">
    <fieldset class="select-quiz-form__fieldset">
      <legend class="select-quiz-form__legend">Select category</legend>
      <div v-for="item of items" :key="item.id" class="select-quiz-form__radio">
        <input
            type="radio"
            :id="item.id"
            name="discipline"
            :value="item.value"
            v-model="discipline"
        />
        <label :for="item.id">{{ item.name }}</label>
      </div>
    </fieldset>
    <fieldset class="select-quiz-form__fieldset">
      <legend class="select-quiz-form__legend">Set Quantity</legend>
      <input
          class="select-quiz-form__input"
          type="number" name="quantity"
          id="quantity"
          min="1"
          v-model="quantity"
      >
    </fieldset>
    <input class="select-quiz-form__submit" type="submit" value="Generate quiz" />
    <input class="select-quiz-form__submit" type="reset" value="Reset" />
  </form>
</template>

<script>

export default {
  name: "QuizSelectForm",
  data() {
    return {
      discipline: "theory,practice",
      quantity: 10
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      const { discipline, quantity } = this;
      const payload = { discipline: discipline.split(","), quantity: +quantity };
      this.$emit("submitForm", payload);
    },
    submitReset() {
      this.discipline = "theory,practice";
      this.quantity = 10;
      this.$emit("resetForm");
    }
  }
}
</script>
