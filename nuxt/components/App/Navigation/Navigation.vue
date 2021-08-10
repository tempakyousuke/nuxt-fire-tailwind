<template>
  <div
    class="relative duration-300 flex-shrink"
    :class="{ 'parent-open': value, 'parent-close': !value }"
  >
    <div class="content" :class="{ open: value }">
      <AccordionMenu :open="value" @open="$emit('input', true)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import AccordionMenu from "./AccordionMenu.vue";

@Component({ components: { AccordionMenu } })
export default class Navigation extends Vue {
  @Prop({ type: Boolean, default: false })
  private value!: any;

  private close() {
    this.$emit("input", false);
  }
}
</script>

<style scoped>
.content {
  overflow: hidden;
  z-index: 9999;
  max-width: 330px;
  height: 100%;
  white-space: nowrap;
  transition: 0.3s ease-in-out;
}
.open {
  width: 100%;
}

.parent-open {
  width: 15rem;
}

.parent-close {
  width: 3rem;
}
</style>
