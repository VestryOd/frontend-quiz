<template>
  <div class="main-nav">
<!--    <router-link-->
<!--            v-for="item in navItems"-->
<!--            :to="item.path"-->
<!--            class="router-link"-->
<!--            :key="item.id"-->
<!--    >-->
<!--      {{ item.name }}-->
<!--    </router-link>-->
    <div v-for="item in navItems"
         class="main-nav__item"
         :key="item.id">
            <router-link
                    class="link router-link"
                    :to="item.path"
                    :exact="item.path === '/'"
            >
              <v-icon :name="item.icon" class="main-nav__icon"/>{{ item.name }}
            </router-link>
    </div>
  </div>
</template>

<script>
  import { routerConfig } from "@/constants";
  import 'vue-awesome/icons/home';
  import 'vue-awesome/icons/book-open';
  import 'vue-awesome/icons/code';
  import 'vue-awesome/icons/laptop-code';

  export default {
    name: "MainNav",
    props: {},
    computed: {
      navItems() {
        return routerConfig;
      },
    },
  }
</script>
