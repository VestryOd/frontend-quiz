<template>
  <div class="practice-view">
    <h3>Practice</h3>
    <PracticeItem v-for="item in practice" :item="item" :key="item.id" />
  </div>
</template>

<script>
import PracticeItem from "@/components/PracticeItem.vue";
import { apiService } from '@/api';
  export default {
    name: "Practice",
    components: {
      PracticeItem,
    },
    data() {
      return {
        practice: {
          type: Array,
          default: () => {
            return [];
          }
        }
      }
    },
    async mounted() {
      const data = await apiService('javascript');
      this.practice = data.practice;
    }
  }
</script>
