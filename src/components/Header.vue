<template>
  <div class="header">
    <div class="container space-between">
      <Logo />
      <MenuButton :is-opened="isMenuOpened" @click.native="toggleMenu" />
    </div>
  </div>
</template>

<script>
  import { routerConfig } from "../constants/configs.js";
  import Logo from "./Logo";
  import MenuButton from "./MenuButton";

  export default {
    name: "Header",
    props: {},
    data() {
      return {
        isMenuOpened: false,
      }
    },
    computed: {
      navItems() {
        return routerConfig;
      },
    },
    components: {
      Logo,
      MenuButton,
    },
    mounted() {
      console.log('--mounted', this.navItems);
    },
    methods: {
      toggleMenu() {
        console.log('--menu toggled');
        this.isMenuOpened = !this.isMenuOpened;
      }
    }
  }
</script>
