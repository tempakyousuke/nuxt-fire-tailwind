<template>
  <nuxt-link :to="item.to">
    <div
      class="link hover:bg-gray-400 rounded-md"
      :class="{ 'text-gray-900': rootMatch, 'bg-gray-300': rootMatch }"
      @click="$emit('close')"
    >
      <div v-if="item.icon" class="icon-area">
        <fontawesome :icon="item.icon" />
      </div>
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
  display: flex;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
}

.icon-area {
  width: 3rem;
  margin-right: 1rem;
}
</style>
