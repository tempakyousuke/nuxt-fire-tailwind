<template>
  <div
    class="w-full text-gray-700 bg-gray-300 dark-mode:text-gray-200 dark-mode:bg-gray-800"
  >
    <div class="flex flex-col max-w-screen-xl px-4 mx-auto">
      <div class="p-4 flex flex-row items-center justify-between">
        <nuxt-link
          class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          to="/"
        >
          {{ title }}
        </nuxt-link>
        <button
          class="rounded-lg focus:outline-none focus:shadow-outline"
          @click="$emit('click')"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component
export default class TopNav extends Vue {
  @Prop({ type: String, default: "" })
  private title!: string;
}
</script>
