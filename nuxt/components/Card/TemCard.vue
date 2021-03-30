<template>
  <div>
    <div class="shadow-xl rounded-xl">
      <div
        v-if="title"
        class="p-3 text-xl text-white rounded-t-xl bg-amber-900"
      >
        {{ title }}
      </div>
      <div class="p-6 bg-white rounded-b-xl">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component
export default class TemCard extends Vue {
  @Prop({ type: String, default: "" })
  private title!: string;
}
</script>
