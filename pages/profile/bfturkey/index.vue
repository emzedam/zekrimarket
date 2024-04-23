<template>
  <div class="lg:col-span-9">
    <div class="lg:rounded-md relative mb-4 border">
      <div
        class="flex items-center justify-between gap-4 text-2xl font-semibold p-4 border-b"
      >
        <div class="title flex items-center">
          <span
            class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
            ><i class="fa-duotone fa-arrow-right !leading-3"></i></span
          ><span class="leading-3 pr-3"> خرید کالا و تحویل در ایران</span>
        </div>

        <div class="relative flex justify-end hidden lg:block">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <i
              class="fa-duotone fa-search text-[22px] w-5 h-5 text-gray-500 leading-[15px]"
            ></i>
          </div>
          <input
            type="text"
            class="font-normal border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-3"
            placeholder="جستجو در لیست..."
          />
        </div>
      </div>

      <div class="flex w-full flex-col space-y-4">
        <div class="p-4">
          <div
            v-if="sitesList.length != 0"
            class="grid grid-cols-2 items-center justify-start gap-8 sm:gap-5 md:grid-cols-3 2xl:grid-cols-4"
          >
            <div
              v-for="(site, index) in sitesList"
              :key="index"
              class="flex h-fit flex-col font-Estedad sm:h-fit border rounded-lg"
            >
              <div
                class="relative mb-4 aspect-video h-2 min-h-[120px] w-full overflow-hidden rounded-xl sm:mb-8 sm:h-48 sm:min-h-[194px]"
              >
                <a class="w-full block h-full cursor-pointer" href="">
                  <img
                    :alt="site.title"
                    class="w-full h-full object-cover"
                    :src="`https://api.zekrimarket.com/storage/files_container/national_market/brands/${site.image}`"
                  />
                </a>
              </div>
              <div class="flex justify-center px-2 dark:text-gray-300 xl:gap-y-5">
                <a
                  class="w-full cursor-pointer truncate break-words text-right text-[11px] font-semibold sm:text-sm"
                  href=""
                  >{{ site.title }}</a
                >
                <div class="hidden text-sm sm:block">
                  <nuxt-link :to="`/profile/bfturkey/${site.brand_id}`">
                    <div
                      class="mr-2 flex cursor-pointer select-none items-center justify-end whitespace-pre font-bold text-primary dark:text-neon-primary xl:py-0"
                    >
                      <p class="ml-2">ثبت سفارش</p>
                      <i
                        class="text-primary dark:text-neon-primary text-sm fa-solid fa-chevron-left"
                      ></i>
                    </div>
                  </nuxt-link>
                </div>
              </div>
              <div class="group flex justify-start px-2 xl:gap-y-5 pb-3">
                <a
                  class="relative mt-1 flex cursor-pointer items-center justify-start text-right text-[10px] font-medium dark:text-neon-primary sm:text-sm"
                  target="_blank"
                  :href="site.link"
                >
                  <p>لینک سایت محصول</p>
                  <i class="fa-regular fa-up-left mr-2 text-xl"></i>
                  <p
                    class="absolute -left-5 top-5 z-50 hidden rounded-md bg-gray-800 px-2 text-white group-hover:flex"
                    dir="ltr"
                  >
                    {{ site.link }}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div
            v-else
            class="w-full h-[100px] text-center flex items-center justify-center font-bold text-xl"
          >
            <p>هنوز وب سایت برای سفارش ثبت نشده !</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";
import { useMarketStore } from "@/store/marketStore";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);
const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);
const sitesList = ref([]);

onMounted(async () => {
  loading.value = true;

  await get_national_sites();
});

if (authuser.value == null) {
  router.push("/auth/login");
}

const get_national_sites = async () => {
  const result = await marketStore.get_national_sites();
  if (result.status == 200) {
    sitesList.value = result.result;
    loading.value = false;
  } else {
    loading.value = false;
  }
};

definePageMeta({
  layout: "user-dashboard",
  pageTransition: {
    mode: "default",
  },
});
</script>
