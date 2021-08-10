import { Plugin } from "@nuxt/types";
import Vue from "vue";

interface crumb {
  label: string;
  to?: string;
}

declare module "vue/types/vue" {
  interface Vue {
    $breadcrumbs: {
      items: crumb[];
    };
  }
}

const breadcrumbs: Plugin = (_context, inject) => {
  inject("breadcrumbs", Vue.observable({ items: {} }));
};

export default breadcrumbs;
