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
                  <div>
                    <div
                      class="bg-gray-500/10 h-16 w-16 text-primary text-center mx-auto rounded-full flex items-center justify-center"
                    >
                      <i class="fa fa-envelope text-3xl leading-[2.2] text-red-500"></i>
                    </div>
                  </div>

                  <div class="text-center mt-6">
                    <h4 class="text-gray-700 font-bold text-2xl dark:text-gray-100">
                      تایید شماره موبایل
                    </h4>
                    <div class="mb-4 mt-3 text-xs font-medium">
                      <span>کد ارسال شده به شماره</span
                      ><nuxt-link
                        to="/auth/register"
                        class="text-red text-red-500 mx-2 items-center"
                        >{{ userMobile }} <i class="fa fa-edit"></i
                      ></nuxt-link>
                      <span> را وارد نمایید</span>
                    </div>
                  </div>

                  <div
                    class="mb-3 relative rounded-md border border-gray-300 dark:border-gray-400 px-3 py-3 shadow-sm focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600"
                  >
                    <label
                      for="password"
                      class="absolute -top-2 right-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900 dark:bg-zinc-800 dark:text-gray-400"
                    >
                      کد تایید</label
                    >
                    <input
                      type="number"
                      name="password"
                      class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm text-left pl-8 dark:bg-zinc-800"
                      placeholder="کد تایید"
                      v-model="registerData.otp"
                    />

                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <i class="fa-thin fa-eye text-gray-400"></i>
                    </div>
                  </div>

                  <div class="mb-3">
                    <button
                      v-if="loader == false"
                      class="btn border-transparent bg-red-500 dark:bg-gray-700 dark:text-gray-400 w-full py-2.5 text-white w-100 waves-effect waves-light shadow-md shadow-red-200 dark:shadow-zinc-600/10 rounded-lg"
                      type="submit"
                    >
                      احراز هویت
                    </button>
                    <button
                      v-if="loader == true"
                      class="btn border-transparent bg-red-500 dark:bg-gray-700 dark:text-gray-400 w-full py-2.5 text-white w-100 waves-effect waves-light shadow-md shadow-red-200 dark:shadow-zinc-600/10 rounded-lg"
                      type="button"
                    >
                      در حال ارسال ...
                    </button>
                  </div>

                  <div v-if="codeTimer != 0">
                    <p class="text-gray-700 text-sm">
                      ارسال مجدد کد تایید تا
                      <span class="text-red-500 mx-2 !text-md">{{ codeTimer }}</span>
                      ثانیه دیگر
                    </p>
                  </div>
                  <div class="mt-10 text-center" v-if="codeTimer == 0">
                    <p class="text-gray-500 dark:text-zinc-100 mb-0">
                      کد احراز هویت را دریافت نکردید ؟<a
                        @click="resendOtploader == false ? doResendOtp() : ''"
                        href="javascript:void(0)"
                        class="text-red-500 font-regular"
                        >{{
                          resendOtploader == false ? "ارسال مجدد  " : "در حال ارسال ..."
                        }}</a
                      >
                    </p>
                  </div>
                </form>
              </div>

              <div class="text-center">
                <p class="text-gray-500 dark:text-gray-200 relative mb-5">© alish</p>
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
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useAuthStore } from "~/store/authStore";
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";

const { loading } = storeToRefs(useMarketStore());
const loader = ref(false);
const codeTimer = ref(120);
let timerInterval;
const resendOtploader = ref(false);
const $toast = useToast();
const authStore = useAuthStore();

const router = useRouter();
const userMobile = useCookie("mobile");

const registerData = reactive({
  otp: null,
});

const intervalFunction = () => {
  if (codeTimer.value <= 0) {
    codeTimer.value = 0;
    clearInterval(timerInterval);
    return false;
  } else {
    codeTimer.value--;
  }
};

const setGlobalInterVal = () => {
  timerInterval = setInterval(intervalFunction, 1000);
};

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 900);
  setGlobalInterVal();
});

const doLogin = async () => {
  if (registerData.otp != null && userMobile.value != null) {
    loader.value = true;

    const loginData = {
      otp: registerData.otp,
      mobile: userMobile.value,
    };

    const snedForRegister = await authStore.verify_otp_code_and_register(loginData);
    if (snedForRegister.statusCode == 200) {
      loader.value = false;

      const UserToken = useCookie("UToken", { maxAge: 60 * 60 * 24, path: "/" });
      UserToken.value = snedForRegister.access_token;

      $toast.success("ثبت نام شما با موفقیت انجام شد", {
        position: "top-left",
      });
      router.push("/profile");
    } else {
      loader.value = false;
      $toast.error(snedForRegister.statusMessage, {
        position: "top-left",
      });
    }
  } else {
    loader.value = false;
    $toast.error("کد تایید نمیتواند خالی باشد", {
      position: "top-left",
    });
  }
};

const doResendOtp = async () => {
  if (userMobile != null) {
    resendOtploader.value = true;
    const sendOtp = await store.dispatch("send_otp", { mobile: userMobile });
    if (sendOtp.statusCode == 200) {
      resendOtploader.value = false;
      codeTimer.value = 180;

      setGlobalInterVal();
    }
  } else {
    router.push("/auth/register");
  }
};

definePageMeta({
  layout: "auth-layout",
  middleware: "guest",
});
</script>

<style></style>
