<template>
  <div class="flex justify-center items-center">
    <div class="relative w-full" :class="{ empty: !value && !placeholder }">
      <textarea
        class="w-full border-gray-300 p-2 transition-all border-blue rounded"
        :class="{
          'border-red-500': haveError,
        }"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="value"
        :rows="rows"
        @input="$emit('input', $event.target.value)"
      />
      <p v-if="haveError" class="text-red-500 text-xs italic">
        {{ errorMessages[0] }}
      </p>
      <label class="absolute left-2 transition-all bg-white px-1">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component
export default class TaInput extends Vue {
  @Prop()
  private value!: any;

  @Prop({ type: String, default: "" })
  private label!: string;

  @Prop({ type: String, default: "" })
  private placeholder!: string;

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  private isInvalid!: boolean;

  @Prop({ type: Number, default: 5 })
  private rows!: number;

  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  private errorMessages!: Array<string>;

  get haveError() {
    return this.isInvalid && !this.disabled;
  }
}
</script>

<style scoped>
label {
  top: 0%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  color: rgba(37, 99, 235, 1);
}
.empty textarea:not(:focus) + label {
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
}
textarea:not(:focus) + label {
  color: rgba(150, 150, 150, 1);
}
textarea {
  border-width: 1px;
}
textarea:focus {
  outline: none;
  border-color: rgba(37, 99, 235, 1);
}
</style>
