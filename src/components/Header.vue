<template>
  <div class="header">
    <div class="logo"></div>
<!--    <router-link-->
<!--            v-for="item in navItems"-->
<!--            :to="item.path"-->
<!--            class="router-link"-->
<!--            :key="item.id"-->
<!--    >-->
<!--      {{ item.name }}-->
<!--    </router-link>-->
    <MainNav :items="navItems" />
    <div class="profile-icon"></div>
  </div>
</template>

<script>
  import { routerConfig } from "../constants/configs.js";
  import MainNav from "./MainNav";

  export default {
    name: "Header",
    props: {},
    computed: {
      navItems() {
        return routerConfig;
      },
    },
    components: {
      MainNav,
    },
    mounted() {
      console.log('--mounted', this.navItems);
    }
  }
</script>
