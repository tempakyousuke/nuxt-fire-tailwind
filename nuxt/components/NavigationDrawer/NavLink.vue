<template>
  <nuxt-link :to="item.to">
    <div
      class="link"
      :class="{ 'text-gray-900': rootMatch, 'bg-gray-200': rootMatch }"
      @click="$emit('close')"
    >
      {{ item.label }}
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component
export default class NavLink extends Vue {
  @Prop({
    type: Object,
    default: () => {
      return {};
    },
  })
  private item: any;

  get rootMatch() {
    return this.$route.path === this.item.to;
  }
}
</script>

<style scoped>
.link {
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.link:hover {
  background: #bbb;
}
</style>
