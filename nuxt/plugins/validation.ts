import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import {
  required,
  email,
  min,
  min_value as minValue,
  max_value as maxValue,
  integer,
} from "vee-validate/dist/rules";

import Vue from "vue";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

extend("email", { ...email, message: "メールアドレスが正しくありません" });

extend("required", {
  ...required,
  message: "{_field_}は必須項目です",
});

extend("min", {
  ...min,
  message: "{_field_}には{length}文字以上の文字を入力してください",
});

extend("min_value", {
  ...minValue,
  message: "{_field_}には{min}以上の数値を入力してください",
});

extend("max_value", {
  ...maxValue,
  message: "{_field_}には{max}以下の数値を入力してください",
});

extend("integer", {
  ...integer,
  message: "{_field_}には整数を入力してください",
});
