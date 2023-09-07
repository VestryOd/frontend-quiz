<template>
  <div class="menu" :class="{menu_active: isMenuOpened}">
    <header class="menu-header">
      <MenuButton :is-opened="!isMenuOpened" @click.native="$emit('toggleMenu')" />
    </header>
    <section>
      <ul class="menu-list">
        <router-link
            v-for="item in navItems"
            :key="item.id"
            :to="item.path"
            v-slot="{ href, route, navigate, isExactActive }"
            custom
        >
          <li class="menu-link" :class="[isExactActive && 'menu-link_active']">
            <a :href="href" @click="handleCLick(navigate)">{{ item.name }}</a>
          </li>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue';
import { routerConfig } from '@/constants/configs';

export default {
  name: "Menu",
  props: {
    isMenuOpened: {
      type: Boolean,
      default: false
    }
  },
  components: {MenuButton},
  computed: {
    navItems() {
      return routerConfig;
    },
  },
  methods: {
    handleCLick(navigate) {
      navigate();
      this.$emit('toggleMenu');
    }
  }
}
</script>
