<template>
  <div
    class="h-screen container justify-center items-center flex mt-10 mx-auto"
  >
    <TemCard class="w-full max-w-md" title="ログイン">
      <ValidationObserver ref="observer" v-slot="{ invalid }">
        <form class="bg-white px-8 pt-6 pb-8 mb-4">
          <div class="mb-8">
            <ValidationProvider
              v-slot="{ valid, errors }"
              name="メールアドレス"
              rules="required|email"
            >
              <TemInput
                v-model="email"
                label="メールアドレス"
                :error-messages="errors"
                :is-invalid="!valid"
              ></TemInput>
            </ValidationProvider>
          </div>
          <div class="mb-10">
            <ValidationProvider
              v-slot="{ valid, errors }"
              name="パスワード"
              rules="required"
            >
              <TemInput
                v-model="password"
                label="パスワード"
                type="password"
                :error-messages="errors"
                :is-invalid="!valid"
              ></TemInput>
            </ValidationProvider>
          </div>
          <div class="flex items-center justify-between">
            <TemButton :disabled="invalid" @click="submit">ログイン</TemButton>
          </div>
        </form>
      </ValidationObserver>
    </TemCard>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import TemInput from "@/components/Form/Input/TemInput.vue";
import TemButton from "@/components/Button/TemButton.vue";
import TemCard from "@/components/Card/TemCard.vue";

@Component({ components: { TemInput, TemButton, TemCard }, layout: "login" })
export default class Login extends Vue {
  private email: string = "";
  private name: string = "";
  private password: string = "";
  get refs(): any {
    return this.$refs;
  }

  private submit() {
    this.refs.observer.validate().then(this.signup);
  }

  private async signup() {
    try {
      await this.$fire.auth.signInWithEmailAndPassword(
        this.email,
        this.password
      );
      this.$router.push("/");
    } catch (e) {
      this.$toast.error(e.message);
    }
  }
}
</script>
