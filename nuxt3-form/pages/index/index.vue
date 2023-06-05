<template>
  <section>
    <div class="form-wrapper max-w-[800px] mx-auto mt-[100px] p-[20px]">
      <p ref="username_element">
        <label for="username">用戶名</label>
        <input
          type="text"
          v-model.trim="username"
          id="username"
          placeholder="請輸入用戶名"
          class="w-full my-[10px] p-[10px] border-solid border-2 divide-slate-400 rounded-md"
        />
        <span class="hidden text-rose-800 mb-[20px]"
          >請輸入用戶名，不能包含數字</span
        >
      </p>
      <p ref="phone_element">
        <label for="phone">手機電話</label>
        <input
          type="phone"
          v-model.trim="phone"
          id="phone"
          placeholder="請輸入手機電話"
          class="w-full my-[10px] p-[10px] border-solid border-2 divide-slate-400 rounded-md"
        />
        <span class="hidden text-rose-800 mb-[20px]">請輸入正確的電話號碼</span>
      </p>
      <p ref="email_element">
        <label for="email">郵箱地址</label>
        <input
          type="text"
          v-model.trim="email"
          id="email"
          placeholder="請輸入郵箱地址"
          class="w-full my-[10px] p-[10px] border-solid border-2 divide-slate-400 rounded-md"
        />
        <span class="hidden text-rose-800 mb-[20px]">請輸入郵箱地址</span>
      </p>
      <p>
        <textarea
          class="w-full my-[10px] p-[10px] border-solid border-2 divide-slate-400 rounded-md"
          rows="10"
        ></textarea>
      </p>

      <button
        class="rounded-md bg-slate-400 py-[10px] px-[15px] mt-[20px] hover:cursor-pointer"
        @click.stop="onSubmit"
      >
        提交
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import { useCommon } from "~/stores/useCommon";

const common_store = useCommon();

const username = ref("Ryan");
const phone = ref("88888888");
const email = ref("23@gamil.com");
const textarea = ref("");

const username_element = ref(null);
const phone_element = ref(null);
const email_element = ref(null);

const hideError = (target) => {
  target.value?.childNodes[2].classList.add("hidden");
  target.value?.childNodes[2].classList.remove("block");
};

const showError = (target) => {
  target.value?.childNodes[2].classList.add("block");
  target.value?.childNodes[2].classList.remove("hidden");
};

const validator_form = (type, target) => {
  if (type === "username") {
    if (/^[^0-9]*$/.test(username.value)) {
      hideError(target);
      return true;
    } else {
      showError(target);
      return false;
    }
  } else if (type === "phone") {
    if (/^\d{8}$/.test(phone.value)) {
      hideError(target);
      return true;
    } else {
      showError(target);
      return false;
    }
  } else if (type === "email") {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
      hideError(target);
      return true;
    } else {
      showError(target);
      return false;
    }
  }
};

const onSubmit = () => {
  new Promise((resolve, reject) => {
    const username_result = validator_form("username", username_element);
    const phone_result = validator_form("phone", phone_element);
    const email_result = validator_form("email", email_element);

    if (username_result && phone_result && email_result) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};
</script>
