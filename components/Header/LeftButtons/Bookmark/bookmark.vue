<template>
  <div class="cart-wrapper group relative py-4" v-if="authuser != null">
    <div class="cart relative cursor-pointer">
      <nuxt-link class="flex items-center" to="/profile/favorites">
        <span class="relative">
          <i class="fa-light fa-heart text-xl text-gray-700"></i>
          <span
            class="w-[18px] h-[18px] rounded-full absolute -top-2 -right-3 flex justify-center items-center text-[9px] bg-red-500 text-white"
          >
            {{ authuser.favorites.length }}
          </span>
        </span>
        <span class="text-sm mr-2 text-gray-600 font-semibold"> لیست علاقه مندی ها </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";

const { authuser } = storeToRefs(useAuthStore());
</script>
