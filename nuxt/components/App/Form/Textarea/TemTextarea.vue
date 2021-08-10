<template>
  <ValidationProvider v-slot="{ valid, errors }" :name="label" :rules="rules">
    <BaseTextarea
      :value="value"
      :label="label"
      :disabled="disabled"
      :placeholder="placeholder"
      :error-messages="errors"
      :is-invalid="!valid"
      :rows="rows"
      @input="$emit('input', $event)"
    />
  </ValidationProvider>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import BaseTextarea from "./BaseTextarea.vue";

@Component({ components: { BaseTextarea } })
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

  @Prop({ type: String, default: "" })
  private rules!: string;
}
</script>
