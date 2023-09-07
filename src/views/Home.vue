<template>
  <div class="home-view">
    <h1>This is a Home Page</h1>
    <hr>
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
      this.allData = await apiService('javascript');
    }
  }
</script>
