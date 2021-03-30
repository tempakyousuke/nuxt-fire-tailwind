<template>
  <div class="relative">
    <div class="content" :class="{ open: value }">
      <AccordionMenu @close="close"></AccordionMenu>
    </div>
    <div
      class="overlay"
      :class="{ hidden: !value, 'opacity-0': !value, 'opacity-50': value }"
      @click="close"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import AccordionMenu from "./AccordionMenu.vue";

@Component({ components: { AccordionMenu } })
export default class Drawer extends Vue {
  @Prop({ type: Boolean, default: false })
  private value!: any;

  private close() {
    this.$emit("input", false);
  }
}
</script>

<style scoped>
.content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 90%;
  max-width: 330px;
  height: 100%;
  background: #fff;
  transition: 0.3s ease-in-out;
  transform: translateX(-105%);
}
.open {
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
}
.overlay {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  transition: 0.3s ease-in-out;
}
</style>
