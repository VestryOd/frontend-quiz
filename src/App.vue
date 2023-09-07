<template>
  <div id="app">
    <Menu @toggleMenu="toggleMenu" :isMenuOpened="!isMenuOpened" />
    <div class="container">
      <div class="wrapper">
        <vHeader @toggleMenu="toggleMenu" :isMenuOpened="isMenuOpened" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from "./components/Header";
  import Menu from "./components/Menu";

export default {
  name: 'App',
  components: {
    vHeader,
    Menu
  },
  data() {
    return {
      isMenuOpened: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    }
  }
}
</script>
