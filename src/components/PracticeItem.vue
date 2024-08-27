<template>
  <section :id="indexNumber">
    <div class="practice-item practice-item__wrapper">
      <div class="content-code__wrapper">
        <Code :content="item.code" />
      </div>
      <PracticeQuestionsList
          :v-if="options"
          :options="options"
          :clickHandler="onClick" :rightAnswer="item.right_answer"/>
      <div class="content-table__wrapper" v-if="(!item.right_answer && !item.answers) || selected">
        <Description :content="item.details" />
      </div>
    </div>
    <hr>
  </section>
</template>

<script>
import Code from '@/components/Content/Code.vue';
import PracticeQuestionsList from "@/components/Content/PracticeQuestionsList.vue";
import Description from '@/components/Content/Description.vue';

export default {
  name: "PracticeItem",
  components: {Description, Code, PracticeQuestionsList},
  props: {
    indexNumber: {
      type: Number,
      default: 0
    },
    item: {
      type: Object || Function,
      default: () => ({
        "id": "b5dccc43-f414-48e7-99ff-f753af1a9c83",
        "code": "function sayHi() {\n    console.log(name);\n    console.log(age);\n    var name = \"Lydia\";\n    let age = 21;\n}\n\nsayHi();",
        "answers": {
          "A": "A: Lydia и undefined",
          "B": "B: Lydia и ReferenceError",
          "C": "C: ReferenceError и 21",
          "D": "D: undefined и ReferenceError"
        },
        "right_answer": "D",
        "details": "В функции мы сначала определяем переменную name с помощью ключевого слова var. Это означает, что name поднимется в начало функции. Name будет иметь значение undefined до тех пор, пока выполнение кода не дойдет до строки, где ей присваивается значение Lydia. Мы не определили значение name, когда пытаемся вывести ее в консоль, поэтому будет выведено undefined. Переменные, определенные с помощью ключевого слова let (и const), также поднимаются, но в отличие от var, не инициализируются. Доступ к ним до инициализации невозможен. Это называется 'временной мертвой зоной'. Когда мы пытаемся обратиться к переменным до их определения, JavaScript выбрасывает исключение ReferenceError."
      })
    }
  },
  data() {
    return {
      options: this.$props.item.answers ? Object.entries(this.$props.item.answers).map((elem) => ({ key: elem[0], value: elem[1] })) : [],
      selected: ""
    }
  },
  methods: {
    onClick: function(key) {
      this.selected = key;
      this.$emit(key ===  this.$props.item.right_answer ? 'rightAnswer' : 'wrongAnswer');
    }
  }
}
</script>
