<template>
  <div class="flex cursor-pointer">
    <slot v-for="item in items" :name="item.value">
      <div
        :key="item.value"
        class="py-2 px-6 bg-white rounded-t-lg"
        :class="{
          active: item.value === value,
          deactive: item.value !== value,
        }"
        @click="$emit('input', item.value)"
      >
        {{ item.text }}
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

interface TabItem {
  value: string | number;
  text?: string;
}

@Component
export default class TemTabs extends Vue {
  @Prop({ type: [String, Number], required: true })
  value!: string | number;

  @Prop({ type: Array, required: true })
  items!: TabItem[];
}
</script>

<style scoped>
.active {
  @apply border-b-6 border-blue-300 bg-amber-100 font-bold;
}

.deactive {
  @apply text-gray-400 bg-amber-100;
}
</style>
