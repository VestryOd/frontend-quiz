<template>
  <div class="content-code">
    <highlightjs language='javascript' :code="content" />
  </div>
</template>

<script>
  export default {
    name: "Code",
    props: {
      content: {
        type: String,
        default: ''
      }
    }
  }
</script>
