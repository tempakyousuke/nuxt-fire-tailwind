<template>
  <div class="py-2">
    <template v-for="item in nav">
      <AccordionButton
        v-if="item.children"
        :key="item.label"
        :item="item"
        :open-nav="open"
        @open="openNav"
      />
      <NavLink v-else :key="item.label" :item="item" />
    </template>
    <div
      v-if="isLoggedIn"
      class="
        py-3
        flex
        link
        mt-3
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
      ログアウト
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { nav } from "./nav";
import AccordionButton from "./AccordionButton.vue";
import NavLink from "./NavLink.vue";
@Component({ components: { AccordionButton, NavLink } })
export default class AccordionMenu extends Vue {
  @Prop({ type: Boolean, default: false })
  open!: boolean;

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

  openNav() {
    if (!this.open) {
      this.$emit("open");
    }
  }
}
</script>

<style scoped>
.link {
  font-size: 1rem;
  font-weight: 600;
}

.icon-area {
  width: 3rem;
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>
