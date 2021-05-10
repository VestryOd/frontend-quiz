<template>
  <div class="content-nav">
    <div class="content-nav__item-wrapper" v-for="(item, index) in items" :key="item.id || `nav-${index}`">
      <NavItem :item-data="item" />
    </div>
  </div>
</template>

<script>
  import NavItem from "./NavItem";

  export default {
    name: "Nav",
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    components: {
      NavItem,
    }
  }
</script>