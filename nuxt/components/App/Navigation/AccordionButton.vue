<template>
  <div class="accordion">
    <div
      class="parent hover:bg-gray-400 rounded-md"
      :class="{ open: open }"
      @click="toggle"
    >
      <div class="icon-area">
        <fontawesome v-if="item.icon" :icon="item.icon" />
      </div>
      <div>
        {{ item.label }}
        <fontawesome icon="chevron-down" />
      </div>
    </div>
    <ul class="submenu">
      <li
        v-for="(value, key) in item.children"
        :key="key"
        class="hover:bg-gray-400 rounded-md"
        :class="{ 'close-link': !open, 'open-link': open }"
      >
        <nuxt-link :to="value.to">
          <div class="link">{{ value.label }}</div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
@Component
export default class AccordionButton extends Vue {
  @Prop({
    type: Object,
    default: () => {
      return {};
    },
  })
  private item!: any;

  @Prop({ type: Boolean, default: false })
  openNav!: boolean;

  private open = false;

  @Watch("openNav")
  closeSub(val: boolean) {
    if (!val) {
      this.open = false;
    }
  }

  toggle() {
    this.open = !this.open;
    if (this.open) {
      this.$emit("open");
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
}
.accordion .parent {
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  transition: all 0.4s ease;
  overflow: hidden;
}
.accordion .parent >>> svg {
  margin-left: 1rem;
  font-size: 18px;
  color: #595959;
  transition: all 0.4s ease;
}
.accordion .open >>> svg.fa-chevron-down {
  transform: rotate(180deg);
}
.submenu li {
  transition: all 0.25s ease;
  overflow: hidden;
}
.close-link {
  border-width: 0;
  height: 0;
}
.open-link {
  height: 3rem;
}
.submenu a {
  display: block;
  text-decoration: none;
  padding: 10px;
  padding-left: 4rem;
  transition: all 0.25s ease;
}

.icon-area {
  width: 3rem;
  margin-right: 1rem;
}
</style>
