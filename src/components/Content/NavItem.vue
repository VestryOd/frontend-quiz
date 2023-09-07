<template>
  <div class="content-nav-item" @click="openLink" v-if="itemData.src">
    <div
            class="img-icon"
            v-if="iconName"
            :style="{ 'background-image': 'url(' + iconPath + ')' }"
    />
    <vk-icon class="empty" v-else icon="link" />
    <div class="content-nav-item__title">
      {{ itemData.title || 'Ссылка' }}
      <div class="content-nav-item__underscore"/>
    </div>
  </div>
</template>

<script>
  import { defineNavLinkIconName } from "../../services/helpers";

  export default {
    name: "NavItem",
    props: {
      itemData: {
        type: Object,
        default: () => ({
          name: '',
          src: '',
          title: ''
        })
      }
    },
    computed: {
      iconName() {
        return defineNavLinkIconName(this.itemData?.src);
      },
      iconPath() {
        return `/pics/${this.iconName}.png`
      }
    },
    methods: {
      openLink() {
        window.open(this.itemData?.src || '', '_blank');
      }
    }
  }
</script>