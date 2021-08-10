<template>
  <div class="py-2">
    <div class="link mt-5">サイト名</div>
    <template v-for="item in nav">
      <AccordionButton
        v-if="item.children"
        :key="item.label"
        :item="item"
        @close="$emit('close')"
      />
      <NavLink v-else :key="item.label" :item="item" @close="$emit('close')" />
    </template>
    <div
      v-if="isLoggedIn"
      class="link md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      @click="logout"
    >
      ログアウト
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { nav } from "./nav";
import AccordionButton from "./AccordionButton.vue";
import NavLink from "./NavLink.vue";
@Component({ components: { AccordionButton, NavLink } })
export default class AccordionMenu extends Vue {
  get nav() {
    return nav;
  }

  get user() {
    return this.$store.state.user.user;
  }

  get isLoggedIn() {
    return this.$store.state.user.authUser;
  }

  get payoutsEnabled() {
    return this.user.payoutsEnabled;
  }

  private logout() {
    this.$fire.auth.signOut();
    this.$router.push("/login/");
    this.$emit("close");
  }
}
</script>

<style scoped>
.link {
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
