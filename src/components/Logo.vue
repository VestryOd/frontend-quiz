<template>
  <router-link to="/" class="logo" tag="a">
    <logo />
  </router-link>
</template>

<script>
  import logo from '../assets/pics/icons/logo.svg';

  export default {
    name: "Logo",
    components: {
      logo,
    }
  }
</script>
