<template>
  <div class="home-view">
    <h1>This is a Home Page</h1>
    <hr>
<!--    <router-link :to="{ name: 'topic-page', params: { id: '7' } }">Go to the topic</router-link>-->
<!--    <router-link :to="{ name: 'task-page', params: { id: '3' } }">Go to the task</router-link>-->
<!--    <TheoryItem v-for="item in allData.theory" :key="item.id" :item="item" />-->
    <Spoiler v-for="item in allData.theory" :key="item.id" :title="item.title">
      <TheoryItem :item="item" />
    </Spoiler>
  </div>
</template>

<script>
  // import TheoryItem from "../components/TheoryItem";
  import Spoiler from "@/components/Content/Spoiler";
  import TheoryItem from "@/components/TheoryItem.vue";
  import { apiService } from "@/api";

  export default {
    name: "Home",
    components: {
      TheoryItem,
      Spoiler,
    },
    data() {
      return {
        allData: {
          type: Object,
          default() {
            return {
              theory: [],
              practice: [],
            };
          }
        }
      };
    },
    async mounted() {
      const data = await apiService('javascript');
      console.log('we mounted', data)
      this.allData = data;
    }
  }
</script>
