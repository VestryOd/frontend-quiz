<template>
  <div class="header">
    <router-link
            v-for="item in navItems"
            :to="item.path"
            class="router-link"
            :key="item.id"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
  import { routerConfig } from "../constants";

  export default {
    name: "Header",
    props: {},
    computed: {
      navItems() {
        return routerConfig;
      },
    },
  }
</script>