<template>
  <ValidationProvider v-slot="{ valid, errors }" :name="label" :rules="rules">
    <BaseSelect
      :value="value"
      :label="label"
      :options="options"
      :error-messages="errors"
      :is-invalid="!valid"
      :add-empty="addEmpty"
      :empty-value="emptyValue"
      :disabled="disabled"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    />
  </ValidationProvider>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import BaseSelect from "./BaseSelect.vue";
@Component({ components: { BaseSelect } })
export default class TemInput extends Vue {
  @Prop({
    type: [Number, String],
    default: null,
  })
  private value!: any;

  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  private options!: Array<any>;

  @Prop({ type: String, default: "" })
  private label!: string;

  @Prop({ type: Boolean, default: false })
  private addEmpty!: boolean;

  @Prop({ type: [String, Number, Boolean], default: "" })
  private emptyValue!: any;

  @Prop({ type: String, default: "" })
  private rules!: string;

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;
}
</script>
