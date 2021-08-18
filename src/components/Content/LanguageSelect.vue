<template>
  <div class="main-nav">
    <div v-for="item in navItems"
         :to="item.path"
         class="main-nav__item"
         :key="item.id">
<!--      <router-link class="link router-link">-->
<!--        <v-icon :name="item.icon" class="main-nav__icon"/>{{ item.name }}-->
<!--      </router-link>-->
      <v-icon :name="item.icon" class="main-nav__icon"/>{{ item.name }}
    </div>
  </div>
</template>

<script>
  import { routerConfig } from "@/constants/";
  import 'vue-awesome/icons/brands/html5';
  import 'vue-awesome/icons/brands/css3-alt';
  import 'vue-awesome/icons/brands/js-square';
  import 'vue-awesome/icons/brands/react';
  import 'vue-awesome/icons/brands/vuejs';

  export default {
    name: "LanguageSelect",
    props: {},
    computed: {
      navItems() {
        return routerConfig;
      },
    },
  }
</script>
