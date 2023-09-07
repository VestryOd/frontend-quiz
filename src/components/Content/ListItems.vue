<template>
  <ul class="content-list content-list__wrapper">
    <li class="content-list__item" v-for="item in content" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "ListItems",
    props: {
      content: {
        type: Array,
        default() {
          return [];
        },
      },
    },
  }
</script>
