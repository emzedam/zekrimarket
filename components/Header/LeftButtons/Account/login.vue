<template>
  <nuxt-link to="/auth/login" class="flex items-center" v-if="authuser == null">
    <button type="button">
      <span><i class="fa-light fa-user text-xl text-gray-700"></i></span>
    </button>
    <span class="text-sm mr-2 text-gray-600 font-semibold">ورود یا ثبت نام</span>
  </nuxt-link>
  <nuxt-link to="/profile" class="flex items-center" v-if="authuser != null">
    <button type="button">
      <span><i class="fa-light fa-user text-xl text-gray-700"></i></span>
    </button>
    <span class="text-sm mr-2 text-gray-600 font-semibold">{{ authuser.name }}</span>
  </nuxt-link>
</template>

<script setup>
import { useAuthStore } from "~/store/authStore";
const authStore = useAuthStore();

const authuser = ref(null);
if (authStore.get_current_user != null) {
  authuser.value = authStore.get_current_user;
}
</script>
