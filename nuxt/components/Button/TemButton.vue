<template>
  <div class="inline-block" :class="{ 'w-full': block }">
    <template v-if="to !== ''">
      <nuxt-link :to="to" :target="target">
        <button
          class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
          class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          :class="buttonClass"
          type="button"
          @click="submit"
        >
          <slot></slot>
        </button>
      </a>
    </template>
    <template v-else>
      <button
        class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        :class="buttonClass"
        type="button"
        @click="submit"
      >
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

  @Prop({ type: String, default: "blue" })
  private color!: string;

  @Prop({ type: Number, default: 500 })
  private brightness!: number;

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  private block!: boolean;

  get buttonClass() {
    const class1 = `bg-${this.color}-${this.brightness}`;
    const class2 = `hover:bg-${this.color}-${this.brightness + 200}`;
    const buttonClass: any = { disabled: this.disabled };
    buttonClass[class1] = true;
    buttonClass[class2] = true;
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
.disabled {
  opacity: 0.7;
}
</style>
