<template>
  <div class="test-view">
    <h1>Select your quiz</h1>
    <div class="select-quiz-form__wrapper">
      <QuizSelectForm
          :items="disciplineItems"
          @submitForm="submitHandle"
          @resetForm="resetHandle" />
    </div>
    <div class="quiz-content">
      <section class="quiz-content__content-item" v-if="theoryLength">
        <h3>Theory</h3>
        <Spoiler v-for="item in theory" :key="item.id" :title="item.title">
          <TheoryItem :item="item" />
        </Spoiler>
      </section>
      <section class="quiz-content__content-item" v-if="practiceLength">
        <h3>Practice</h3>
        <QuizCounter
            v-if="practiceLength"
            :right="right"
            :total="practiceLength"
            :wrong="wrong"
        />
        <PracticeItem
            v-for="item in practice"
            :item="item"
            :key="item.id"
            @rightAnswer="handleRight"
            @wrongAnswer="handleWrong"
        />
      </section>
    </div>
  </div>
</template>

<script>
import QuizSelectForm from "@/components/QuizSelectForm";
import { quizSelectItems } from '@/constants/configs';
import { getRandomSuit } from '@/api';
import TheoryItem from '@/components/TheoryItem.vue';
import Spoiler from '@/components/Content/Spoiler.vue';
import PracticeItem from '@/components/PracticeItem.vue';
import QuizCounter from '@/components/QuizCounter.vue';
export default {
    name: "Quiz",
    data() {
      return {
        theory: [],
        practice: [],
        right: 0,
        wrong: 0
      }
    },
    components: {
      PracticeItem,
      Spoiler,
      TheoryItem,
      QuizSelectForm,
      QuizCounter
    },
    computed: {
        disciplineItems() {
          return quizSelectItems;
        },
        theoryLength() {
          return this.theory.length;
        },
        practiceLength() {
          return this.practice.length;
        }
    },
    methods: {
        async submitHandle(args) {
          const { theory, practice } = await getRandomSuit(args);
          this.theory = theory ?? [];
          this.practice = practice ?? [];
        },
      resetHandle() {
        this.theory = [];
        this.practice = [];
      },
      handleRight() {
          this.right += 1;
      },
      handleWrong() {
          this.wrong += 1;
      }
    }
  }
</script>
