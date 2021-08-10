<template>
  <div
    class="
      modal
      fixed
      w-full
      h-full
      top-0
      left-0
      flex
      items-center
      justify-center
    "
    :class="{ 'opacity-0': !value, 'pointer-events-none': !value }"
  >
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
    <div
      class="
        modal-container
        bg-white
        mx-auto
        rounded
        shadow-lg
        z-50
        overflow-y-auto
        w-11/12
        md:max-w-md
      "
    >
      <div
        class="
          modal-close
          absolute
          top-0
          right-0
          cursor-pointer
          flex flex-col
          items-center
          mt-4
          mr-4
          text-white text-sm
          z-50
        "
        @click="$emit('input', false)"
      >
        <svg
          class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          ></path></svg
        ><span class="text-sm">(Esc)</span>
      </div>
      <div class="modal-content text-left overflow-y-scroll">
        <!-- Title-->
        <div
          class="flex justify-between items-center p-4 bg-blue-500 text-white"
        >
          <p class="text-2xl font-bold">{{ title }}</p>
          <div
            class="modal-close cursor-pointer z-50"
            @click="$emit('input', false)"
          >
            <svg
              class="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              ></path>
            </svg>
          </div>
        </div>
        <!-- Body-->
        <div class="px-6 mt-5">
          <slot></slot>
        </div>
        <slot name="footer">
          <div class="flex justify-end p-6">
            <div class="w-24 mr-3">
              <TemButton
                v-if="!hideOk"
                class="text-white"
                block
                @click="$emit('ok')"
              >
                {{ okText }}
              </TemButton>
            </div>
            <div class="w-24">
              <TemButton
                v-if="!hideCancel"
                bg-color="bg-blue-100"
                block
                @click="$emit('input', false)"
              >
                {{ cancelText }}
              </TemButton>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
@Component
export default class AppModal extends Vue {
  @Prop({ type: Boolean, default: false })
  private value!: boolean;

  @Prop({ type: String, default: "" })
  private title!: string;

  @Prop({ type: Boolean, default: false })
  private hideOk!: boolean;

  @Prop({ type: String, default: "OK" })
  private okText!: string;

  @Prop({ type: Boolean, default: false })
  private hideCancel!: boolean;

  @Prop({ type: String, default: "CANCEL" })
  private cancelText!: string;

  private escClicked(evt: KeyboardEvent) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    }
    if (isEscape) {
      this.$emit("input", false);
    }
  }

  @Watch("value")
  private onValueChange(val: boolean) {
    if (val) {
      document.addEventListener("keydown", this.escClicked);
    } else {
      this.$emit("closed");
      document.removeEventListener("keydown", this.escClicked);
    }
  }

  destroyed() {
    document.removeEventListener("keydown", this.escClicked);
  }
}
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
.modal-content {
  max-height: 80vh;
}
</style>
