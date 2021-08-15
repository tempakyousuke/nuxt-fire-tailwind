<template>
  <div class="flex justify-center items-center">
    <div class="relative h-10 w-full" :class="{ empty: !value }">
      <select
        ref="select"
        class="border p-2 rounded min-100 w-full"
        :class="{
          'border-red-500': isInvalid,
          'focus:shadow-outline': !isInvalid,
        }"
        :disabled="disabled"
        @change="changeValue($event)"
      >
        <option
          v-for="(val, idx) in selectOptions"
          :key="idx"
          :value="val.value"
        >
          {{ val.label }}
        </option>
      </select>
      <label class="absolute left-2 transition-all bg-white px-1">
        {{ label }}
      </label>
      <p v-if="haveError" class="text-red-500 text-xs italic">
        {{ errorMessages[0] }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { klona } from "klona";
@Component
export default class AppSelect extends Vue {
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

  @Prop({ type: [String, Number], default: null })
  private labelCols!: string;

  @Prop({ type: Boolean, default: false })
  private isInvalid!: boolean;

  @Prop({ type: Boolean, default: false })
  private addEmpty!: boolean;

  @Prop({ type: [String, Number, Boolean], default: "" })
  private emptyValue!: any;

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;

  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  private errorMessages!: Array<string>;

  @Watch("value")
  private valueChanged() {
    this.setOption();
  }

  @Watch("options")
  private optionChanged() {
    this.setOption();
  }

  get refs(): any {
    return this.$refs;
  }

  get selectOptions() {
    if (this.addEmpty) {
      const options = klona(this.options);
      options.unshift({ label: "", value: this.emptyValue });
      return options;
    } else {
      return this.options;
    }
  }

  private setOption() {
    const index = this.selectOptions.findIndex((v) => {
      return v.value === this.value;
    });
    if (index === undefined) {
      return;
    }
    this.$nextTick(() => {
      if (this.refs.select.options[index] === undefined) {
        return;
      }
      this.refs.select.options[index].selected = true;
    });
  }

  get haveError() {
    return this.isInvalid && !this.disabled;
  }

  private changeValue(event: any) {
    this.$emit("input", event.target.value);
    this.$emit("change", event);
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

select:not(:focus) + label {
  color: rgba(150, 150, 150, 1);
}

.min-100 {
  min-width: 100px;
}

.empty select:not(:focus) + label {
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
}
</style>
