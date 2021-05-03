<template>
  <div class="code__wrapper">
    <highlightjs language='javascript' :code="codeFragment" />
  </div>
</template>

<script>
  export default {
    name: "Code",
    props: {
      codeFragment: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .code__wrapper {
    max-width: 800px;
    width: 80%;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 3px rgba(0,0,0,.1);
    margin: 2em auto;
  }
</style>