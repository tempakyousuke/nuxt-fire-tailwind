<template>
  <div class="heading">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
@Component
export default class TemHeading extends Vue {}
</script>

<style scoped>
.heading {
  @apply border-l-8 border-lime-500 pl-3;
}
</style>
