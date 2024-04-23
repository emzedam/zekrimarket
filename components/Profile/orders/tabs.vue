<template>
  <div class="Tabs">
    <ul
      class="flex relative hide-scrollbar border-b text-no-wrap overflow-x-auto font-medium text-gray-400 lg:text-lg md:text-md sm:text-sm xs:text-sm"
    >
      <li
        @click="do_change_tab_activate(0)"
        class="relative px-4 py-2 flex flex-row items-center grow-1 justify-center lg:grow-0 text-subtitle-strong cursor-pointer"
      >
        <div class="flex items-center">
          <div class="text-subtitle" :class="currentTabIndex == 0 ? 'text-red-500' : ''">
            جاری
          </div>
          <div
            :class="currentTabIndex == 0 ? 'bg-red-500' : 'bg-gray-400'"
            class="px-2 text-center flex items-center justify-center rounded-sm mr-1 text-white"
          >
            {{ orderHistory.length != 0 ? orderHistory.current_orders.length : 0 }}
          </div>
        </div>
      </li>
      <li
        @click="do_change_tab_activate(3)"
        class="relative px-4 py-4 flex flex-row items-center grow-1 justify-center lg:grow-0 text-subtitle color-500 cursor-pointer"
      >
        <div class="flex items-center">
          <div class="text-subtitle" :class="currentTabIndex == 3 ? 'text-red-500' : ''">
            پرداخت شده ها
          </div>
          <div
            :class="currentTabIndex == 3 ? 'bg-red-500' : 'bg-gray-400'"
            class="px-2 text-center flex items-center justify-center rounded-sm mr-1 text-white"
          >
            {{ orderHistory.length != 0 ? orderHistory.paid_ones.length : 0 }}
          </div>
        </div>
      </li>
      <li
        @click="do_change_tab_activate(1)"
        class="relative px-4 py-4 flex flex-row items-center grow-1 justify-center lg:grow-0 text-subtitle color-500 cursor-pointer"
      >
        <div class="flex items-center">
          <div class="text-subtitle" :class="currentTabIndex == 1 ? 'text-red-500' : ''">
            تحویل شده
          </div>
          <div
            :class="currentTabIndex == 1 ? 'bg-red-500' : 'bg-gray-400'"
            class="px-2 text-center flex items-center justify-center rounded-sm mr-1 text-white"
          >
            {{ orderHistory.length != 0 ? orderHistory.delivereds.length : 0 }}
          </div>
        </div>
      </li>

      <li
        @click="do_change_tab_activate(2)"
        class="relative px-4 py-2 flex flex-row items-center grow-1 justify-center lg:grow-0 text-subtitle color-500 cursor-pointer"
      >
        <div class="flex items-center">
          <div class="text-subtitle" :class="currentTabIndex == 2 ? 'text-red-500' : ''">
            لغو شده
          </div>
          <div
            :class="currentTabIndex == 2 ? 'bg-red-500' : 'bg-gray-400'"
            class="px-2 text-center flex items-center justify-center rounded-sm mr-1 text-white"
          >
            {{ orderHistory.length != 0 ? orderHistory.canceled_pays.length : 0 }}
          </div>
        </div>
      </li>
      <li
        class="relative hidden px-4 py-2 flex flex-row items-center grow-1 justify-center lg:grow-0 text-subtitle color-500 cursor-pointer"
      >
        <div class="flex items-center">
          <div class="text-subtitle text-red-500">مرجوع شده</div>
          <div
            class="px-2 text-center flex items-center justify-center rounded-sm mr-1 bg-red-500 text-white"
          >
            ۰
          </div>
        </div>
        <div
          class="before:absolute before:bottom-0 before:bg-red-500 before:rounded-t-sm before:h-1 before:left-2/4 before:w-full before:transform before:-translate-x-2/4"
        ></div>
      </li>
    </ul>
  </div>

  <!-- =============== تب تاریخچه سفارشات======================== -->
</template>

<script setup>
const props = defineProps(["orderHistory"]);
const emit = defineEmits(["changeTabActivate"]);
const currentTabIndex = ref(0);

const do_change_tab_activate = (index) => {
  currentTabIndex.value = index;
  emit("changeTabActivate", index);
};
</script>
