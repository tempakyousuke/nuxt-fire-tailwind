<template>
  <div class="py-2 px-5">
    <div v-for="(val, idx) in $breadcrumbs.items" :key="idx" class="inline">
      <template v-if="idx !== 0">
        <fontawesome class="mx-3" icon="chevron-right" />
      </template>
      <nuxt-link v-if="val.to" class="hover:text-blue-500" :to="val.to">
        {{ val.label }}
      </nuxt-link>
      <span v-else class="text-gray-700">{{ val.label }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
@Component
export default class Breadcrumb extends Vue {}
</script>
