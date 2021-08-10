<template>
  <div class="relative border-1" :style="style">
    <div
      v-for="item in items"
      :ref="`tab${item.value}`"
      :key="item.value"
      class="absolute transition"
      :class="{
        active: item.value === value,
        deactive: item.value !== value,
      }"
    >
      <slot :name="item.value"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

interface TabItem {
  value: string | number;
  text?: string;
}
@Component
export default class TemTabItems extends Vue {
  @Prop({ type: [String, Number], required: true })
  value!: string | number;

  @Prop({ type: Array, required: true })
  items!: TabItem[];

  height = 0;

  get style() {
    return {
      height: this.height + "px",
    };
  }

  mounted() {
    this.calcHeight();
  }

  calcHeight() {
    let maxHeight = 0;
    for (const key in this.$refs) {
      const ref = this.$refs[key];
      if (!Array.isArray(ref)) {
        continue;
      }
      ref.forEach((element: any) => {
        if (maxHeight < element.clientHeight) {
          maxHeight = element.clientHeight;
        }
      });
    }
    this.height = maxHeight;
  }
}
</script>

<style scoped>
.deactive {
  z-index: -1;
  opacity: 0;
}

.active {
  opacity: 1;
}
</style>
