<template>
  <div id="app">
    <div class="container">
      <div class="wrapper">
        <vHeader />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from "./components/Header";

export default {
  name: 'App',
  components: {
    vHeader,
  }
}
</script>
