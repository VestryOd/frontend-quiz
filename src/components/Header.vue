<template>
  <div class="header">
    <div class="container space-between">
      <Logo />
      <MenuButton :is-opened="isMenuOpened" @click.native="$emit('toggleMenu')" />
    </div>
  </div>
</template>

<script>
  import { routerConfig } from "@/constants/configs.js";
  import Logo from "./Logo";
  import MenuButton from "./MenuButton";

  export default {
    name: "Header",
    props: {
      isMenuOpened: {
        type: Boolean,
        default: false
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
  }
</script>
