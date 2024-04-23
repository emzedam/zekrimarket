<template>
  <main class="lg:col-span-9">
    <div class="lg:rounded-md relative mb-4 border">
      <div class="flex flex-col lg:grid lg:grid-cols-2">
        <div
          class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b"
        >
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">نام و نام خانوادگی</p>
            </div>
            <p class="font-medium text-gray-700">
              {{
                authuser != null && authuser.name != null
                  ? authuser.name
                  : "نام و نام خانوادگی ثبت نشده"
              }}
            </p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block">
              <div class="flex" @click="open_modals('personalinfo')">
                <i
                  class="fa-light fa-pen-to-square hover:text-red-500 transition-all duration-300 text-2xl text-gray-500"
                ></i>
              </div> </span
            ><span class="inline-block lg:hidden">
              <div class="flex text-gray-400" @click="open_modals('personalinfo')">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-red-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">کد ملی</p>
            </div>
            <p class="font-medium text-gray-700">
              {{
                authuser != null && authuser.codemelli != null
                  ? authuser.codemelli
                  : "کدملی ثبت نشده"
              }}
            </p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block">
              <div class="flex" @click="open_modals('codemelli')">
                <i
                  class="fa-light fa-pen-to-square hover:text-red-500 transition-all duration-300 text-2xl text-gray-500"
                ></i>
              </div> </span
            ><span class="inline-block lg:hidden">
              <div class="flex text-gray-400" @click="open_modals('codemelli')">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-red-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div
          class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b"
        >
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">شماره موبایل</p>
              <div class="rounded-lg px-2 text-caption-strong text-white bg-green-500">
                تاییدشده
              </div>
            </div>
            <p class="font-medium text-gray-700">
              {{
                authuser != null && authuser.mobile != null
                  ? authuser.mobile
                  : "شماره همراه ثبت نشده"
              }}
            </p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block">
              <div class="flex" @click="open_modals('mobile')">
                <i
                  class="fa-light fa-pen-to-square hover:text-red-500 transition-all duration-300 text-2xl text-gray-500"
                ></i>
              </div> </span
            ><span class="inline-block lg:hidden">
              <div class="flex text-gray-400" @click="open_modals('mobile')">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-red-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">ایمیل</p>
            </div>
            <p class="font-medium text-gray-700">
              {{
                authuser != null && authuser.email != null
                  ? authuser.email
                  : "ایمیل ثبت نشده"
              }}
            </p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block">
              <div class="flex" @click="open_modals('email')">
                <i
                  class="fa-light fa-pen-to-square hover:text-red-500 transition-all duration-300 text-2xl text-gray-500"
                ></i>
              </div> </span
            ><span class="inline-block lg:hidden">
              <div class="flex text-gray-400" @click="open_modals('email')">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-red-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div
          class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b"
        >
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">رمز عبور</p>
            </div>
            <p class="font-medium text-gray-700">•••••••</p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block">
              <div class="flex" @click="open_modals('password')">
                <i
                  class="fa-light fa-pen-to-square hover:text-red-500 transition-all duration-300 text-2xl text-gray-500"
                ></i>
              </div> </span
            ><span class="inline-block lg:hidden">
              <div class="flex text-gray-400" @click="open_modals('password')">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-red-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">روش بازگرداندن پول من</p>
              <div
                class="hidden rounded-lg px-2 text-caption-strong text-white bg-green-500"
              >
                تاییدشده
              </div>
            </div>
            <p class="font-medium text-gray-700">کیف پول ذکری پی</p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block">
              <div class="flex" @click="open_modals('referredway')">
                <i
                  class="fa-light fa-pen-to-square hover:text-red-500 transition-all duration-300 text-2xl text-gray-500"
                ></i>
              </div> </span
            ><span class="inline-block lg:hidden">
              <div class="flex text-gray-400" @click="open_modals('referredway')">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-red-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div
          class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b lg:border-b-0"
        >
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">تاریخ تولد</p>
            </div>
            <p class="font-medium text-gray-700">
              {{
                authuser != null && authuser.birthday != null
                  ? `${authuser.birthday.year}/${authuser.birthday.month}/${authuser.birthday.day}`
                  : "تاریخ تولد ثبت نشده"
              }}
            </p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block">
              <div class="flex" @click="open_modals('birthday')">
                <i
                  class="fa-light fa-pen-to-square hover:text-red-500 transition-all duration-300 text-2xl text-gray-500"
                ></i>
              </div> </span
            ><span class="inline-block lg:hidden">
              <div class="flex text-gray-400" @click="open_modals('birthday')">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-red-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center py-3 lg:py-4 px-4">
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">شغل</p>
            </div>
            <p class="font-medium text-gray-700">
              {{
                authuser != null && authuser.job != null
                  ? authuser.job
                  : "شغل شما ثبت نشده"
              }}
            </p>
          </div>
          <div class="cursor-pointer">
            <div class="flex" @click="open_modals('job')">
              <i
                class="fa-light fa-plus text-2xl text-gray-500 hover:text-red-500 transition-all duration-300"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);

const emit = defineEmits(["open_modals"]);

const open_modals = (modalname) => {
  emit("open_modals", modalname);
};
</script>
