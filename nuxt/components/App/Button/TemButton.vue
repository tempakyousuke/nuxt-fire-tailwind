<template>
  <div class="inline-block" :class="{ 'w-full': block }">
    <template v-if="to !== ''">
      <nuxt-link :to="to" :target="target">
        <button
          class="button"
          :class="buttonClass"
          type="button"
          @click="submit"
        >
          <slot></slot>
        </button>
      </nuxt-link>
    </template>
    <template v-else-if="href !== ''">
      <a :href="href" :target="target">
        <button
          class="button"
          :class="buttonClass"
          type="button"
          @click="submit"
        >
          <slot></slot>
        </button>
      </a>
    </template>
    <template v-else>
      <button class="button" :class="buttonClass" type="button" @click="submit">
        <slot></slot>
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component
export default class TemButton extends Vue {
  @Prop({ type: String, default: "" })
  private to!: string;

  @Prop({ type: String, default: "" })
  private href!: string;

  @Prop({ type: String, default: "" })
  private target!: string;

  @Prop({ type: String, default: "bg-blue-500" })
  private bgColor!: string;

  @Prop({ type: String, default: "bg-opacity-100" })
  private bgOpacity!: string;

  @Prop({ type: String, default: "hover:bg-opacity-80" })
  private hoverBgOpacity!: string;

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  private block!: boolean;

  get buttonClass() {
    const buttonClass: any = {
      disabled: this.disabled,
    };
    buttonClass[this.bgColor] = true;
    buttonClass[this.bgOpacity] = true;
    buttonClass[this.hoverBgOpacity] = !this.disabled;
    if (this.block) {
      buttonClass["w-full"] = true;
    }
    return buttonClass;
  }

  submit() {
    if (this.disabled) {
      return;
    }
    this.$emit("click");
  }
}
</script>

<style scoped>
.button {
  @apply py-1 px-3 rounded focus:outline-none focus:shadow-outline;
}

.disabled {
  opacity: 0.7;
}
</style>
