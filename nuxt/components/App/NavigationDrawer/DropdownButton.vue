<template>
  <div class="relative">
    <button
      class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      @click="open = !open"
    >
      <span>{{ item.label }}</span
      ><svg
        class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        :class="{ 'rotate-180': open, 'rotate-0': !open }"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div
      v-if="open"
      class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
      x-transition:enter="transition ease-out duration-100"
      x-transition:enter-start="transform opacity-0 scale-95"
      x-transition:enter-end="transform opacity-100 scale-100"
      x-transition:leave="transition ease-in duration-75"
      x-transition:leave-start="transform opacity-100 scale-100"
      x-transition:leave-end="transform opacity-0 scale-95"
    >
      <div
        class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"
        @click="open = false"
      >
        <nuxt-link
          v-for="(value, key) in item.children"
          :key="key"
          class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          :to="value.to"
          >{{ value.label }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component
export default class DropdownButton extends Vue {
  @Prop({
    type: Object,
    default: () => {
      return {};
    },
  })
  private item!: any;

  private open = false;
}
</script>

<style scoped>
.relative {
  z-index: 3;
}
</style>
