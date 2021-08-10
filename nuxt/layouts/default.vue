<template>
  <div>
    <TopNavigation
      @click="
        () => {
          console.log('test');
          open = !open;
        }
      "
    />
    <nuxt />
    <NavigationDrawer v-model="open" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import TopNavigation from "@/components/App/TopNavigation/TopNavigation.vue";
import NavigationDrawer from "@/components/App/NavigationDrawer/NavigationDrawer.vue";

@Component({ components: { TopNavigation, NavigationDrawer } })
export default class Default extends Vue {
  private open = false;
  console = console;

  created() {
    if (!this.$fire.auth.currentUser) {
      this.$router.push("/login/");
    }
  }
}
</script>
