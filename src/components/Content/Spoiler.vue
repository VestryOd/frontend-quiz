<template>
  <div class="spoiler">
    <h3 class="spoiler__title spoiler__title-wrapper" :class="{ active: isShowed }" @click="onClick">{{ item.title }}</h3>
    <transition name="fade">
      <TheoryItem :item="item" v-if="isShowed" />
    </transition>
  </div>
</template>

<script>
import TheoryItem from "@/components/TheoryItem";

export default {
  name: "Spoiler",
  props: {
    item: {
      type: Object,
      default() {
        return {
          title: 'Вопрос',
        }
      }
    }
  },
  data() {
    return {
      isShowed: false,
    };
  },
  methods: {
    onClick() {
      this.isShowed = !this.isShowed;
    }
  },
  components: {
    TheoryItem,
  }
}
</script>

