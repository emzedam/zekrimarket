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
                <form class="mt-4 pt-2" @submit.prevent="doRegister()">
                  <div
                    class="mb-3 relative rounded-md border border-gray-300 dark:border-gray-400 px-3 py-3 shadow-sm focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600"
                  >
                    <label
                      for="name"
                      class="absolute -top-2 right-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900 dark:bg-zinc-800 dark:text-gray-400"
                      >شماره نام و نام خانوادگی</label
                    >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm pr-8 text-right dark:bg-zinc-800"
                      placeholder="نام و نام خانوادگی"
                      v-model="registerData.name"
                    />

                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      <i class="fa-thin fa-user text-gray-400"></i>
                    </div>
                  </div>

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
                      v-model="registerData.mobile"
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
                      :value="registerData.password"
                      @keyup="(e) => set_password_value(e)"
                    />

                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <i class="fa-thin fa-eye text-gray-400"></i>
                    </div>
                  </div>

                  <ul
                    v-if="password_validator_results.length != 0"
                    class="p-3 mt-4 mb-4 list-decimal flex flex-col bg-gray-50 rounded-md pr-6"
                  >
                    <li
                      v-for="(result, index) in password_validator_results"
                      :key="index"
                      class="color-500 text-caption text-sm"
                    >
                      {{ result.message }}
                    </li>
                  </ul>

                  <div class="mb-3">
                    <a v-if="loader == false" href="javascript:void(0)">
                      <button
                        class="btn border-transparent bg-red-500 dark:bg-gray-700 dark:text-gray-400 w-full py-2.5 text-white w-100 waves-effect waves-light shadow-md shadow-red-200 dark:shadow-zinc-600/10 rounded-lg"
                        type="submit"
                      >
                        ایجاد حساب
                      </button>
                    </a>
                    <a v-if="loader == true" href="javascript:void(0)">
                      <button
                        class="btn border-transparent bg-red-500 dark:bg-gray-700 dark:text-gray-400 w-full py-2.5 text-white w-100 waves-effect waves-light shadow-md shadow-red-200 dark:shadow-zinc-600/10 rounded-lg"
                        type="button"
                      >
                        در حال پردازش ...
                      </button>
                    </a>
                  </div>
                </form>

                <div class="mt-12 text-center">
                  <p class="text-gray-500 dark:text-zinc-100">
                    حساب کاربری دارید؟
                    <nuxt-link href="/auth/login" class="text-red-500 font-semibold">
                      وارد شوید
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
import passwordValidator from "password-validator";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useAuthStore } from "~/store/authStore";
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";

const { loading } = storeToRefs(useMarketStore());
const passwordValidatorSchema = new passwordValidator();
const authStore = useAuthStore();
const $toast = useToast();
const router = useRouter();
const loader = ref(false);
const password_validator_results = ref([]);

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 900);
});

passwordValidatorSchema
  .is()
  .min(8, "رمز عبور شما باید حداقل ۸ حرف باشد.") // Minimum length 8
  .is()
  .max(100, "حداکثر تعداد کاراکتر مجاز 30 کاراکتر میباشد") // Maximum length 100
  .has()
  .uppercase(1, "حداقل باید از 1 حرف از حروف بزرگ لاتین استفاده کنید") // Must have uppercase letters
  .has()
  .lowercase(1, "حداقل باید از 1 حرف از حروف کوچک لاتین استفاده کنید") // Must have lowercase letters
  .has()
  .digits(2, "حداقل باید 2 کاراکتر از نوع عدد استفاده کنید") // Must have at least 2 digits
  .has()
  .not()
  .spaces(0, "نباید فاصله خالی بین کاراکتر ها وجود اشته باشد") // Should not have spaces
  .is()
  .not()
  .oneOf(
    ["Passw0rd", "Password123"],
    "گذرواژه وارد کرده باید گذرواژه ای به غیر از این ها باشد (Passw0rd , Password123)"
  );

const registerData = reactive({
  name: null,
  mobile: null,
  password: "",
});

const set_password_value = (e) => {
  registerData.password = e ? e.target.value : "";

  const validator_result = passwordValidatorSchema.validate(registerData.password, {
    details: true,
  });
  password_validator_results.value = validator_result;
};

set_password_value();

const doRegister = async () => {
  if (password_validator_results.value.length != 0) {
    $toast.error("لطفا تمامی معیار های تعیین شده برای گذرواژه را رعایت کنید", {
      position: "top-left",
    });
    return false;
  }

  loader.value = true;

  const sendOtpForRegister = await authStore.send_otp({
    name: registerData.name,
    mobile: "0" + registerData.mobile,
    password: registerData.password,
  });
  if (sendOtpForRegister.statusCode == 200) {
    const userMobile = useCookie("mobile", { maxAge: 3600, path: "/" });
    userMobile.value = sendOtpForRegister.mobile;

    loader.value = false;
    router.push("/auth/verify");
    $toast.success(sendOtpForRegister.statusMessage, {
      position: "top-left",
    });
  } else if (sendOtpForRegister.statusCode == 100) {
    loader.value = false;
    $toast.error(sendOtpForRegister.statusMessage, {
      position: "top-left",
    });
  } else {
    loader.value = false;
    $toast.error("خطایی رخ داده", {
      position: "top-left",
    });
  }
};

definePageMeta({
  layout: "auth-layout",
  middleware: "guest",
});
</script>

<style scoped>
#msg {
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
  border-radius: 10px;
  font-size: 12px;
}
</style>
