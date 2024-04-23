<template>
  <main class="lg:col-span-9">
    <div class="border lg:rounded-lg tab-2">
      <h2
        class="px-4 py-4 flex justify-between relative overflow-hidden items-center border-b"
      >
        <span class="font-semibold">تاریخچه سفارشات</span>
        <span class="text-gray-600 font-medium cursor-pointer">
          <i class="fa fa-search text-2xl"></i
        ></span>
      </h2>
      <Tabs
        :orderHistory="orderHistory"
        @changeTabActivate="(index) => changeTabContainerActivate(index)"
      />
      <TabContentNow
        :currentOrders="orderHistory.length != 0 ? orderHistory.current_orders : []"
        v-if="tabContentActiveIndex == 0"
      />
      <TabContentEmpty v-if="tabContentActiveIndex == 4" />
      <TabContentCancelled
        :canceled_pays="orderHistory.length != 0 ? orderHistory.canceled_pays : []"
        v-if="tabContentActiveIndex == 2"
      />
      <TabContentPayed
        :paid_ones="orderHistory.length != 0 ? orderHistory.paid_ones : []"
        v-if="tabContentActiveIndex == 3"
      />
      <TabContentReturned v-if="tabContentActiveIndex == 5" />
      <TabContentDelivered
        :delivereds="orderHistory.length != 0 ? orderHistory.delivereds : []"
        v-if="tabContentActiveIndex == 1"
      />
    </div>
  </main>
</template>

<script setup>
import { useMarketStore } from "~/store/marketStore";
import Tabs from "./tabs.vue";
import TabContentEmpty from "./TabContentEmpty.vue";
import TabContentNow from "./TabContentNow.vue";
import TabContentCancelled from "./TabContentCancelled.vue";
import TabContentPayed from "./TabContentPayed.vue";
import TabContentReturned from "./TabContentReturned.vue";
import TabContentDelivered from "./TabContentDelivered.vue";
import { storeToRefs } from "pinia";

const tabContentActiveIndex = ref(0);
const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);
const orderHistory = ref([]);

const get_all_user_orders = async () => {
  const result = await marketStore.get_user_order_history();
  if (result.statusCode == 200) {
    loading.value = false;
    if (result.result.length != 0) {
      orderHistory.value = result.result;
    }
  }
  changeTabContainerActivate(tabContentActiveIndex.value);
};

onMounted(async () => {
  loading.value = true;
  await get_all_user_orders();
});

const changeTabContainerActivate = (index) => {
  switch (index) {
    case 0:
      if (
        orderHistory.value.length != 0 &&
        orderHistory.value.current_orders.length != 0
      ) {
        tabContentActiveIndex.value = index;
      } else {
        tabContentActiveIndex.value = 4;
      }

      break;

    case 1:
      if (orderHistory.value.length != 0 && orderHistory.value.delivereds.length != 0) {
        tabContentActiveIndex.value = index;
      } else {
        tabContentActiveIndex.value = 4;
      }
      break;

    case 2:
      if (
        orderHistory.value.length != 0 &&
        orderHistory.value.canceled_pays.length != 0
      ) {
        tabContentActiveIndex.value = index;
      } else {
        tabContentActiveIndex.value = 4;
      }
      break;

    case 3:
      if (orderHistory.value.length != 0 && orderHistory.value.paid_ones.length != 0) {
        tabContentActiveIndex.value = index;
      } else {
        tabContentActiveIndex.value = 4;
      }
      break;

    default:
      tabContentActiveIndex.value = 4;
      break;
  }
};
</script>
