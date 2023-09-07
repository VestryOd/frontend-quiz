<template>
  <img :src="content" alt="" class="content-picture" />
</template>

<script>
  export default {
    name: "Picture",
    props: {
      content: {
        type: String,
        default: ''
      }
    },
  }
</script>