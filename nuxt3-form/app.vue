<template>
  <NuxtLayout>
    <show-loading-message v-if="isLoading"> 驗證中... </show-loading-message>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useCommon } from "~/stores/useCommon";
import { storeToRefs } from "pinia";

const common_store = useCommon();

const { isLoading } = storeToRefs(common_store);
</script>
