<template>
  <div
    class="
      w-full
      text-gray-700
      bg-white
      dark-mode:text-gray-200 dark-mode:bg-gray-800
      fixed
      z-50
    "
  >
    <div class="flex flex-col max-w-screen-xl px-4 mx-auto h-16">
      <div class="my-auto flex flex-row items-center">
        <button
          class="
            rounded-lg
            focus:outline-none focus:shadow-outline
            relative
            xl:-left-10
          "
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
        <nuxt-link
          class="
            flex-grow
            text-lg
            font-semibold
            tracking-widest
            text-gray-900
            uppercase
            rounded-lg
            dark-mode:text-white
            focus:outline-none focus:shadow-outline
            xl:ml-0
            ml-5
          "
          to="/"
        >
          {{ title }}
        </nuxt-link>
        <div
          v-if="isLoggedIn"
          class="
            p-2
            flex flex-shrink
            link
            hover:text-gray-900
            focus:text-gray-900
            hover:bg-gray-400
            focus:bg-gray-200 focus:outline-none focus:shadow-outline
            rounded-md
          "
          @click="logout"
        >
          <div class="icon-area">
            <fontawesome icon="sign-out-alt" />
          </div>
        </div>
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

  get isLoggedIn() {
    return this.$store.state.user.authUser;
  }

  private logout() {
    this.$fire.auth.signOut();
    this.$router.push("/login/");
    this.$emit("close");
  }
}
</script>
