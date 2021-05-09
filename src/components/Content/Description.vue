<template>
  <div class="content-description">
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    name: "Description",
    props: {
      content: {
        type: String,
        default: '',
      }
    }
  }
</script>