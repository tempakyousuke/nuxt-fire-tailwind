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

  get payoutsEnabled() {
    return this.user.payoutsEnabled;
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
