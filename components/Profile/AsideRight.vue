<template>
  <aside class="lg:col-span-3 border lg:rounded-lg">
    <!-- ===============پروفایل کاربر======================== -->
    <div class="profile p-4 bg-gray-50 rounded-t-lg">
      <div class="py-3 grow-1 flex w-full p-2">
        <div class="ml-4 flex items-center">
          <div class="relative">
            <i class="fa-duotone fa-circle-user text-[50px] text-gray-400"></i>
            <div class="flex absolute text-blue-500 top-2 -left-1 mr-1">
              <i class="fa fa-badge-check"></i>
            </div>
          </div>
        </div>

        <div class="flex items-center mb-2 w-full justify-between text-gray-700">
          <div>
            <p class="color-700 ml-2 text-subtitle font-semibold">
              {{ authuser ? authuser.name : "" }}
            </p>
            <p>{{ authuser ? authuser.mobile : "" }}</p>
          </div>
          <nuxt-link to="/profile/account" class="py-1">
            <p class="font-medium text-cyan-500 text-2xl">
              <i class="fa-regular fa-pen-to-square"></i>
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- ===============پروفایل کاربر======================== -->

    <!-- ===============منو سمت راست داشبورد کاربر======================== -->
    <ul class="flex-col flex">
      <NuxtLink to="/profile">
        <li
          class="border-b p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium items-center justify-start flex relative overflow-hidden"
        >
          <span><i class="fa-light fa-home pl-2 text-xl"></i></span
          ><span>خلاصه فعالیت ‌ها</span>
          <div
            v-if="route.path == '/profile'"
            class="before:absolute before:bottom-0 before:bg-red-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
          ></div>
        </li>
      </NuxtLink>
      <NuxtLink to="/profile/orders">
        <li
          class="border-b p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium items-center justify-start flex relative overflow-hidden"
        >
          <span><i class="fa-light fa-bag-shopping pl-2 text-xl"></i></span
          ><span> سفارش ها</span>

          <div
            v-if="route.path == '/profile/orders'"
            class="before:absolute before:bottom-0 before:bg-red-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
          ></div>
        </li>
      </NuxtLink>
      <NuxtLink to="/profile/bfturkey">
        <li
          class="border-b p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium items-center justify-start flex relative overflow-hidden"
        >
          <span><i class="fa-light fa-credit-card pl-2 text-xl"></i></span
          ><span> خرید از ترکیه </span>

          <div
            v-if="route.path == '/profile/bfturkey'"
            class="before:absolute before:bottom-0 before:bg-red-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
          ></div>
        </li>
      </NuxtLink>
      <NuxtLink to="/profile/bfturkey/orders-list">
        <li
          class="border-b p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium items-center justify-start flex relative overflow-hidden"
        >
          <span><i class="fa-light fa-list pl-2 text-xl"></i></span
          ><span> سفارشات بین المللی </span>

          <div
            v-if="route.path == '/profile/bfturkey/orders-list'"
            class="before:absolute before:bottom-0 before:bg-red-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
          ></div>
        </li>
      </NuxtLink>
      <NuxtLink to="/profile/favorites">
        <li
          class="border-b p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium items-center justify-start flex relative overflow-hidden"
        >
          <span><i class="fa-light fa-heart pl-2 text-xl"></i></span
          ><span>علاقه مندی های من</span>
          <div
            v-if="route.path == '/profile/favorites'"
            class="before:absolute before:bottom-0 before:bg-red-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
          ></div>
        </li>
      </NuxtLink>

      <!--  <li
                class="border-b p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-start flex">
                <span><i class="fa-light fa-comment  pl-2 text-xl"></i></span><span>دیدگاه ها</span>
            </li>
            <li
                class="border-b p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-start flex">
                <span><i class="fa-light fa-bell  pl-2 text-xl"></i></span><span> پیغام ها</span>
            </li> -->

      <NuxtLink to="/profile/addresses">
        <li
          class="border-b p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium items-center justify-start flex relative overflow-hidden"
        >
          <span><i class="fa-light fa-map-location-dot pl-2 text-xl"></i></span
          ><span>آدرس ها</span>

          <div
            v-if="route.path == '/profile/addresses'"
            class="before:absolute before:bottom-0 before:bg-red-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
          ></div>
        </li>
      </NuxtLink>

      <!-- <li
                class="border-b p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-start flex">
                <span><i class="fa-light fa-clock  pl-2 text-xl"></i></span><span>بازدیدهای اخیر</span>
            </li> -->
      <NuxtLink to="/profile/account">
        <li
          class="border-b p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium items-center justify-start flex relative overflow-hidden"
        >
          <span><i class="fa-light fa-user pl-2 text-xl"></i></span
          ><span> اطلاعات حساب کاربری</span>

          <div
            v-if="route.path == '/profile/account'"
            class="before:absolute before:bottom-0 before:bg-red-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
          ></div>
        </li>
      </NuxtLink>
      <li
        @click="user_logout()"
        class="p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium items-center justify-start flex"
      >
        <span><i class="fa-light fa-right-from-bracket pl-2 text-xl"></i></span
        ><span> خروج</span>
      </li>
    </ul>
    <!-- ===============منو سمت راست داشبورد کاربر======================== -->
  </aside>
</template>

<script setup>
import { useAuthStore } from "~/store/authStore";
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

const marketStore = useMarketStore();
const { userAdressList, selectedUserAddress, comments } = storeToRefs(marketStore);
const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);
const user_logout = async () => {
  if (confirm("آیا از خروج از حساب کاربری خود مطمعنید ؟ ")) {
    const result = await authStore.doLogout();
    if (result != null && result.statusCode == 200) {
      userAdressList.value = [];
      selectedUserAddress.value = null;
      comments.value = [];
      router.push("/auth/login");
    }
  }
};
</script>
