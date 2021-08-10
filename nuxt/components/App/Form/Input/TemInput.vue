<template>
  <ValidationProvider v-slot="{ valid, errors }" :name="label" :rules="rules">
    <BaseInput
      :value="value"
      :label="label"
      :error-messages="errors"
      :is-invalid="!valid"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :type="type"
      @click="$emit('click')"
      @input="$emit('input', $event)"
    />
  </ValidationProvider>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import BaseInput from "./BaseInput.vue";
@Component({ components: { BaseInput } })
export default class TemInput extends Vue {
  @Prop()
  private value!: any;

  @Prop({ type: String, default: "" })
  private label!: string;

  @Prop({ type: String, default: "" })
  private placeholder!: string;

  @Prop({ type: String, default: "text" })
  private type!: string;

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  private readonly!: boolean;

  @Prop({ type: String, default: "" })
  private rules!: string;
}
</script>
