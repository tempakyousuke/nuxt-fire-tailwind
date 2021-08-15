<template>
  <div class="accordion">
    <div class="parent" :class="{ open: open }" @click="open = !open">
      {{ item.label }}
      <fontawesome icon="chevron-down"></fontawesome>
    </div>
    <ul class="submenu">
      <li
        v-for="(value, key) in item.children"
        :key="key"
        :class="{ 'close-link': !open, 'open-link': open }"
      >
        <nuxt-link :to="value.to">
          <div class="link" @click="$emit('close')">{{ value.label }}</div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component
export default class AccordionButton extends Vue {
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
ul {
  list-style-type: none;
}
.accordion .parent {
  cursor: pointer;
  display: block;
  padding: 15px 15px 15px 42px;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
  position: relative;
  transition: all 0.4s ease;
}
.accordion li:last-child .parent {
  border-bottom: 0;
}
.accordion .parent >>> svg {
  position: absolute;
  top: 1.3rem;
  right: 1.3rem;
  font-size: 1rem;
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
  border-bottom: 1px solid #ccc;
  height: 3rem;
}
.submenu a {
  display: block;
  text-decoration: none;
  padding: 12px;
  padding-left: 42px;
  transition: all 0.25s ease;
}
.submenu a:hover {
  background: #bbb;
}
</style>
