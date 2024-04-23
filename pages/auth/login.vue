<template>
  <div class="container-fluid">
    <div class="h-screen md:overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-12">
        <div class="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3 relative z-50">
          <div class="w-full bg-white xl:p-12 p-10 dark:bg-zinc-800">
            <div class="flex h-[90vh] flex-col">
              <div class="mx-auto">
                <nuxt-link to="/" class="">
                  <img src="../../assets/logo.png" alt="" class="h-8 inline" />
                </nuxt-link>
              </div>

              <div class="lg:my-auto my-8">
                <form class="mt-4 pt-2" @submit.prevent="doLogin()">
                  <div
                    class="mb-3 relative rounded-md border border-gray-300 dark:border-gray-400 px-3 py-3 shadow-sm focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600"
                  >
                    <label
                      for="name"
                      class="absolute -top-2 right-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900 dark:bg-zinc-800 dark:text-gray-400"
                      >شماره موبایل</label
                    >
                    <input
                      type="number"
                      name="name"
                      id="name"
                      class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm pl-8 text-left dark:bg-zinc-800"
                      placeholder=" موبایل را وارد کنید"
                      v-model="loginData.mobile"
                    />

                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <i class="fa-thin fa-mobile text-gray-400"></i>
                    </div>
                  </div>

                  <div
                    class="mb-3 relative rounded-md border border-gray-300 dark:border-gray-400 px-3 py-3 shadow-sm focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600"
                  >
                    <label
                      for="password"
                      class="absolute -top-2 right-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900 dark:bg-zinc-800 dark:text-gray-400"
                    >
                      رمز عبور</label
                    >
                    <input
                      type="password"
                      name="password"
                      class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm text-left pl-8 dark:bg-zinc-800"
                      placeholder="رمز عبور"
                      v-model="loginData.password"
                    />

                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <i class="fa-thin fa-eye text-gray-400"></i>
                    </div>
                  </div>

                  <div class="row mb-6">
                    <div class="col flex justify-between items-center">
                      <div>
                        <input
                          type="checkbox"
                          class="h-4 w-4 border border-gray-300 rounded bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right ml-2 cursor-pointer focus:ring-offset-0"
                          checked
                          id="exampleCheck1"
                        />
                        <label
                          class="align-middle text-gray-600 font-medium dark:bg-zinc-800 dark:text-gray-400"
                        >
                          مرا به خاطر بسپار
                        </label>
                      </div>

                      <div class="hidden">
                        <a
                          href="/auth/forget/"
                          class="text-sm align-middle text-red-500 dark:bg-zinc-800 dark:text-gray-400 font-medium"
                        >
                          بازیابی رمز
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <button
                      v-if="loader == false"
                      class="btn border-transparent bg-red-500 dark:bg-gray-700 dark:text-gray-400 w-full py-2.5 text-white w-100 waves-effect waves-light shadow-md shadow-red-200 dark:shadow-zinc-600/10 rounded-lg"
                      type="submit"
                    >
                      ورود به حساب
                    </button>
                    <button
                      v-if="loader == true"
                      class="btn border-transparent bg-red-500 dark:bg-gray-700 dark:text-gray-400 w-full py-2.5 text-white w-100 waves-effect waves-light shadow-md shadow-red-200 dark:shadow-zinc-600/10 rounded-lg"
                      type="button"
                    >
                      در حال ورود ...
                    </button>
                  </div>
                </form>

                <div class="mt-12 text-center">
                  <p class="text-gray-500 dark:text-zinc-100">
                    حساب کاربری ندارید؟
                    <nuxt-link to="/auth/register" class="text-red-500 font-semibold">
                      ایجاد حساب
                    </nuxt-link>
                  </p>
                </div>
              </div>

              <div class="text-center">
                <p class="text-gray-500 dark:text-gray-100 relative mb-5">© alish</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9 hidden lg:block"
        >
          <div
            class="h-screen bg-cover relative p-5 bg-[url('../../assets/auth-bg.jpg')]"
          >
            <div class="absolute inset-0 bg-red-500/90"></div>

            <ul
              class="bg-bubbles absolute top-0 left-0 w-full h-full overflow-hidden animate-square"
            >
              <li class="h-10 w-10 rounded-3xl bg-white/10 absolute left-[10%]"></li>
              <li class="h-28 w-28 rounded-3xl bg-white/10 absolute left-[20%]"></li>
              <li class="h-10 w-10 rounded-3xl bg-white/10 absolute left-[25%]"></li>
              <li class="h-20 w-20 rounded-3xl bg-white/10 absolute left-[40%]"></li>
              <li class="h-24 w-24 rounded-3xl bg-white/10 absolute left-[70%]"></li>
              <li class="h-32 w-32 rounded-3xl bg-white/10 absolute left-[70%]"></li>
              <li class="h-36 w-36 rounded-3xl bg-white/10 absolute left-[32%]"></li>
              <li class="h-20 w-20 rounded-3xl bg-white/10 absolute left-[55%]"></li>
              <li class="h-12 w-12 rounded-3xl bg-white/10 absolute left-[25%]"></li>
              <li class="h-36 w-36 rounded-3xl bg-white/10 absolute left-[90%]"></li>
            </ul>

            <div class="grid grid-cols-12 content-center h-screen">
              <div class="col-span-8 col-start-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "~/store/authStore";
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const { loading } = storeToRefs(useMarketStore());
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();
const $toast = useToast();

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 900);
});

const loginData = reactive({
  mobile: null,
  password: null,
});

const loader = ref(false);

const doLogin = async () => {
  if (loginData.mobile != null && loginData.password != null) {
    loader.value = true;
    const sendDataForLogin = await authStore.login_with_password({
      mobile: "0" + loginData.mobile,
      password: loginData.password,
    });
    if (
      sendDataForLogin.statusCode == 101 ||
      sendDataForLogin.statusCode == 102 ||
      sendDataForLogin.statusCode == 103 ||
      sendDataForLogin.statusCode == 401
    ) {
      loader.value = false;
      $toast.error(sendDataForLogin.statusMessage, {
        position: "top-left",
      });
    } else if (sendDataForLogin.statusCode == 200) {
      loader.value = false;

      const UserToken = useCookie("UToken", { maxAge: 60 * 60 * 24, path: "/" });
      UserToken.value = sendDataForLogin.access_token;

      $toast.success("به حساب کاربری خود در ذکری مارکت خوش آمدید", {
        position: "top-left",
      });

      if (route.query.backto) {
        router.push("/profile/orders/" + route.query.backto);
      } else {
        router.push("/profile");
      }
    } else {
      loader.value = false;
      $toast.error("خطایی رخ داده", {
        position: "top-left",
      });
    }
  } else {
    $toast.error("لطفا با دقت همه فیلد هارا پر کنید", {
      position: "top-left",
    });
  }
};

definePageMeta({
  layout: "auth-layout",
  middleware: "guest",
  pageTransition: {
    mode: "default",
  },
});
</script>

<style></style>
