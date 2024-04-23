<template>
  <main class="lg:col-span-9">
    <VerifyNotif />

    <!-- ===============خلاصه فعالیت ها======================== -->

    <div class="border lg:rounded-lg tab-1">
      <h2
        class="px-4 py-4 flex justify-between relative overflow-hidden items-center border-b"
      >
        <span class="font-semibold">سفارش‌های من</span>
        <span class="text-cyan-500 font-medium cursor-pointer">
          <i class="fa fa-file-invoice pl-1"></i> <span>مشاهده همه</span></span
        >
      </h2>

      <div class="flex flex-row justify-evenly items-center my-5 lg:pr-6 w-full">
        <nuxt-link
          class="flex flex-col lg:flex-row lg:gap-3 items-center xs:justify-start"
          to="/profile/orders/"
        >
          <div class="relative">
            <div>
              <img
                class="w-[64px] h-[64px] inline-block"
                src="@/assets/status-processing.svg"
              />
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div class="color-700 text-subtitle-strong">
              {{ order_info ? order_info.online_order_count : 0 }} سفارش
            </div>
            <span class="text-body2-strong color-700">سفارش آنلاین</span>
          </div> </nuxt-link
        ><nuxt-link
          class="flex flex-col lg:flex-row lg:gap-3 items-center xs:justify-start lg:pr-8"
          to="/profile/orders"
        >
          <div class="relative">
            <div>
              <img
                class="w-[64px] h-[64px] inline-block"
                src="@/assets/status-delivered.svg"
              />
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div class="color-700 text-subtitle-strong">
              {{ order_info ? order_info.delivered_count : 0 }} سفارش
            </div>
            <span class="text-body2-strong color-700">تحویل شده</span>
          </div> </nuxt-link
        ><nuxt-link
          class="flex flex-col lg:flex-row lg:gap-3 items-center xs:justify-start lg:pr-8"
          to="/profile/orders/"
        >
          <div class="relative">
            <div>
              <img
                class="w-[64px] h-[64px] inline-block"
                src="@/assets/status-returned.svg"
              />
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div class="color-700 text-subtitle-strong">
              {{ order_info ? order_info.offline_order_count : 0 }} سفارش
            </div>
            <span class="text-body2-strong color-700">سفارش آفلاین</span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- ===============خلاصه فعالیت ها======================== -->
  </main>
</template>

<script setup>
import VerifyNotif from "@/components/Profile/Account/VerifyNotif.vue";

const props = defineProps(["order_info"]);
</script>
