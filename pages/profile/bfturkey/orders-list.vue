<template>
  <div class="lg:col-span-9">
    <div
      v-if="statistics != null"
      class="grid gap-4 font-medium lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 font-fa w-full"
    >
      <div class="p-6 border rounded-lg bg-white dark:bg-box">
        <div class="flex items-start content-between justify-between">
          <div class="content-left">
            <span class="text-sm text-gray-500">همه سفارشات</span>
            <div class="flex items-center my-1">
              <h4 class="mb-0 ml-2 font-bold">{{ statistics.total_orders }}</h4>
            </div>
            <span class="text-xs text-gray-500"
              >تمامی سفارشات بین المللی ذکری مارکت
            </span>
          </div>
          <span
            class="flex items-center justify-center w-8 h-8 p-2 text-green-500 bg-green-100 rounded badge"
          >
            <i class="fa-duotone fa-bags-shopping"></i>
          </span>
        </div>
      </div>
      <div class="p-6 border rounded-lg bg-white dark:bg-box">
        <div class="flex items-start content-between justify-between">
          <div class="content-left">
            <span class="text-sm text-gray-500">سفارشات در حال بررسی</span>
            <div class="flex items-center my-1">
              <h4 class="mb-0 ml-2 font-bold">{{ statistics.pendings.total }}</h4>
              <span class="font-bold text-green-500"
                >(+{{ parseInt(statistics.pendings.percent) }}%)</span
              >
            </div>
            <span class="text-xs text-gray-500"> مجموع سفارشات در حال بررسی</span>
          </div>
          <span
            class="flex items-center justify-center w-8 h-8 p-2 text-orange-500 bg-orange-100 rounded badge"
          >
            <i class="fa-duotone fa-user-gear"></i>
          </span>
        </div>
      </div>

      <div class="p-6 border rounded-lg bg-white dark:bg-box">
        <div class="flex items-start content-between justify-between">
          <div class="content-left">
            <span class="text-sm text-gray-500">سفارشات تکمیل شده</span>
            <div class="flex items-center my-1">
              <h4 class="mb-0 ml-2 font-bold">{{ statistics.deliverds.total }}</h4>
              <span class="font-bold text-green-500"
                >(+{{ parseInt(statistics.deliverds.percent) }}%)</span
              >
            </div>
            <span class="text-xs text-gray-500">سفارشات تحویل داده شده به مشتری</span>
          </div>
          <span
            class="flex items-center justify-center w-8 h-8 p-2 text-indigo-500 bg-indigo-100 rounded badge"
          >
            <i class="fa-duotone fa-calendar-clock"></i>
          </span>
        </div>
      </div>

      <div class="p-6 border rounded-lg bg-white dark:bg-box">
        <div class="flex items-start content-between justify-between">
          <div class="content-left">
            <span class="text-sm text-gray-500">سفارشات لغو شده</span>
            <div class="flex items-center my-1">
              <h4 class="mb-0 ml-2 font-bold">{{ statistics.cancelds.total }}</h4>
              <span class="font-bold text-green-500"
                >(+{{ parseInt(statistics.cancelds.percent) }}%)</span
              >
            </div>
            <span class="text-xs text-gray-500">مجموع سفارشات لغو شده</span>
          </div>
          <span
            class="flex items-center justify-center w-8 h-8 p-2 text-red-500 bg-red-100 rounded badge"
          >
            <i class="fa-duotone fa-xmark"></i>
          </span>
        </div>
      </div>
    </div>
    <dataset
      v-slot="{ ds }"
      :ds-data="ordersList"
      :ds-sortby="sortBy"
      :ds-search-in="['order_id']"
    >
      <div class="col-span-12 font-fa">
        <div class="mt-6 mb-6 bg-white border border-gray-200 product-info rounded-xl">
          <div
            class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200"
          >
            <h6
              class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa"
            >
              <i
                class="fa-duotone fa-cart-circle-check text-[20px] !w-5 !h-5 text-teal-500 ml-1"
              ></i
              >سفارشات
            </h6>
            <p
              class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
            >
              از این بخش می توانید سفارشات را مدیریت یا حذف نمایید
            </p>
          </div>

          <div
            class="grid gap-4 px-6 py-6 bg-stripes-purple lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
          >
            <div class="relative flex w-full gap-4">
              <dataset-show />
              <nuxt-link
                to="/profile/bfturkey/"
                class="box-border relative z-0 flex items-center justify-center w-full p-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-indigo-500 rounded-md cursor-pointer group ease focus:outline-none"
              >
                <span
                  class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                ></span
                ><span
                  class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                ></span
                ><span
                  class="relative z-20 flex items-center justify-center w-full text-center"
                  ><i class="pl-2 text-2xl text-white fa-duotone fa-cart-plus"></i
                  ><span class="w-full">ایجاد سفارش جدید</span></span
                >
              </nuxt-link>
            </div>
            <div></div>
            <div class="relative w-full lg:justify-end hidden">
              <button
                v-on:click.prevent="Export = !Export"
                class="box-border relative z-0 flex lg:w-40 w-full items-center justify-center p-2.5 overflow-hidden font-medium text-gray-500 transition-all duration-300 bg-gray-100 rounded-md cursor-pointer group ease focus:outline-none"
              >
                <span
                  class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                ></span
                ><span
                  class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                ></span
                ><span
                  class="relative z-20 flex items-center justify-center w-full text-center"
                  ><i class="pl-2 text-2xl text-gray-400 fa-duotone fa-file-export"></i
                  ><span class="w-full">انتخاب خروجی</span></span
                >
              </button>
              <div
                v-if="Export"
                class="absolute z-10 w-full mt-6 bg-white border rounded-lg top-6 lg:w-40"
              >
                <ul
                  class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
                  aria-labelledby="dropdownSearchButton"
                >
                  <!-- <export-excel
                    :data="usersList"
                    :fields="excelFields"
                    :title="`لیست سفارشات فروشگاه اینترنتی ذکری مارکت`"
                    :name="`alish.xls`"
                  >
                    <li class="cursor-pointer">
                      <div
                        class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                      >
                        <input
                          id="checkbox-item-11"
                          type="hidden"
                          value=""
                          class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-lg"
                        /><label
                          for="checkbox-item-11"
                          class="flex items-center justify-center w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                          ><span class="flex items-center w-full pr-2 text-right"
                            >اکسل</span
                          ><i
                            class="flex items-center pl-2 text-left text-green-500 fa-duotone fa-file-spreadsheet"
                          ></i>
                        </label>
                      </div>
                    </li>
                  </export-excel> -->
                </ul>
              </div>
            </div>

            <dataset-search ds-search-placeholder="جستجو در لیست..." />
          </div>

          <div class="flex flex-col">
            <div class="overflow-hidden">
              <div class="min-w-full align-middle">
                <div class="flex flex-col lg:hidden">
                  <div class="overflow-hidden">
                    <div class="inline-block min-w-full align-middle">
                      <div class="relative overflow-hidden">
                        <div class="w-full table-auto min-w-max">
                          <div>
                            <div
                              class="text-sm leading-normal text-right text-gray-600 uppercase border-t border-gray-200"
                            >
                              <div scope="col" class="px-6 py-3 font-semibold">
                                سفارشات
                              </div>
                            </div>
                          </div>
                          <dataset-item
                            tag="ul"
                            class="bg-white divide-gray-200 last:border-b"
                            name="fade"
                            is="transition-group"
                          >
                            <template #default="{ row, rowIndex }">
                              <li
                                class="flex border-t border-gray-200 divide-gray-200 cursor-pointer items-centerjustify-between"
                                v-on:click.prevent="openSubMobileTable(row._id)"
                              >
                                <div class="flex px-6 py-2 text-right whitespace-nowrap">
                                  <div class="w-12 h-12 avatar avatar-sm me-2">
                                    <img src="/5.png" alt="Avatar" class="rounded-full" />
                                  </div>
                                  <div class="pr-3">
                                    <div class="text-base font-semibold">
                                      {{ row.user.name }}
                                    </div>

                                    <div class="font-normal text-gray-500">
                                      {{ row.user.mobile }}
                                    </div>
                                  </div>
                                </div>

                                <div class="px-6 py-3" scope="col">
                                  <div
                                    class="flex justify-center cursor-pointer item-center"
                                  >
                                    <div
                                      class="flex items-center justify-center w-4 font-extrabold transform hover:text-gray-500 hover:scale-110"
                                    >
                                      <i
                                        :class="{
                                          'fa-minus': mobileSubmenuIndex == row._id,
                                          'fa-plus': mobileSubmenuIndex != row._id,
                                        }"
                                        class="w-4 h-4 text-indigo-500 transition-transform transform fa-solid"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <collapse-transition>
                                <div
                                  v-show="mobileSubmenuIndex == row._id"
                                  class="border-transparent border-y border-b-slate-200"
                                >
                                  <div colspan="100" class="p-0">
                                    <div class="border-l border-r rounded-b-lg">
                                      <div class="pb-4">
                                        <div
                                          class="min-w-full overflow-x-auto is-scrollbar-hidden"
                                        >
                                          <div class="w-full text-left is-hoverable">
                                            <div
                                              class="border-b border-gray-200 divide-gray-200"
                                            >
                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  شناسه :
                                                  <span
                                                    class="mr-1 font-medium text-indigo-500 ltr"
                                                  >
                                                    #{{ row.order_id }}
                                                  </span>
                                                </div>
                                              </div>

                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  وضعیت:
                                                  <span
                                                    v-if="row.status == 1"
                                                    class="w-full py-2 px-2 mr-2 badge bg-green-500 text-white rounded-lg text-center"
                                                    >پرداخت شده</span
                                                  >
                                                  <span
                                                    v-if="row.status == 0"
                                                    class="w-full py-2 px-2 mr-2 badge bg-red-500 text-white rounded-lg text-center"
                                                    >پرداخت نشده</span
                                                  >
                                                </div>
                                              </div>

                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  وب سایت مربوطه
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                  >
                                                    سفارش از {{ row.brand.title }}</span
                                                  >
                                                </div>
                                              </div>
                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  تاریخ ایجاد:
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                  >
                                                    {{ row.created_at }}</span
                                                  >
                                                </div>
                                              </div>

                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  تاریخ پرداخت:
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                    >{{
                                                      row.payed_at != null
                                                        ? row.payed_at
                                                        : "-"
                                                    }}</span
                                                  >
                                                </div>
                                              </div>

                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  مجموع:
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                  >
                                                    {{
                                                      row.total_price != null
                                                        ? rial_separate(row.total_price) +
                                                          " ریال"
                                                        : "-"
                                                    }}
                                                  </span>
                                                </div>
                                              </div>

                                              <div
                                                class="flex px-6 py-3 text-right whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  <span class="mr-1">
                                                    <div
                                                      class="flex justify-center item-center"
                                                    >
                                                      <nuxt-link
                                                        :to="`/profile/bfturkey/order/${row.order_id}`"
                                                      >
                                                        <button
                                                          class="w-4 ml-4 cursor-pointer hover:text-gray-500 hover:scale-110"
                                                        >
                                                          <i
                                                            class="fa-solid fa-eye text-[18px] !w-5 !h-5 font-normal"
                                                          ></i>
                                                        </button>
                                                      </nuxt-link>
                                                    </div>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="mr-6 text-right">
                                          <button
                                            v-on:click.prevent="Expanded = false"
                                            class="btn mt-2 h-8 rounded px-3 text-xs+ font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25"
                                          >
                                            بستن
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </collapse-transition>
                            </template>
                          </dataset-item>
                        </div>

                        <nav
                          class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                          aria-label="Table navigation"
                        >
                          <dataset-info />
                          <dataset-pager />
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="relative hidden overflow-x-auto border-t lg:block Desktop-Table"
                >
                  <table class="w-full" id="printMe">
                    <thead>
                      <tr
                        class="text-sm leading-normal text-right text-gray-600 uppercase border border-gray-200 divide-x"
                      >
                        <th
                          scope="col"
                          v-for="(th, index) in cols"
                          :key="th.field"
                          :class="['sort', th.sort]"
                          @click="click($event, index)"
                          class="px-3 py-2 font-semibold text-center uppercase align-middle bg-transparent border-b border-collapse border-solid shadow-none d text-xxs tracking-none whitespace-nowrap text-slate-700 opacity-70"
                        >
                          <div
                            v-if="th.hasIcon == 'orderTrendUp'"
                            class="flex items-center justify-center"
                          >
                            <span>{{ th.name }}</span>
                            <i class="fa fa-arrow-trend-up"></i>
                          </div>

                          <div v-else class="flex items-center justify-center">
                            <i class="ml-1 gg-select" v-if="th.hasIcon != 'checkbox'"></i>
                            <span>{{ th.name }}</span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <dataset-item
                      tag="tbody"
                      class="bg-white divide-gray-200"
                      name="fade"
                      is="transition-group"
                    >
                      <template #default="{ row, rowIndex }">
                        <tr class="border-b border-gray-200 divide-x">
                          <td
                            class="relative px-6 py-2 font-bold text-right text-indigo-500 border-l ltr whitespace-nowrap"
                          >
                            #{{ row.order_id }}
                          </td>

                          <td class="flex px-6 py-2 text-right whitespace-nowrap">
                            <div
                              class="w-12 h-12 avatar avatar-sm me-2"
                              v-if="row.user != null"
                            >
                              <img src="/5.png" alt="Avatar" class="rounded-full" />
                            </div>
                            <div class="pr-3">
                              <div>
                                <div class="text-base font-semibold">
                                  {{ row.user.name }}
                                </div>
                              </div>

                              <div class="font-normal text-gray-500">
                                {{ row.user.mobile }}
                              </div>
                            </div>
                          </td>

                          <td
                            class="px-6 py-2 text-right whitespace-nowrap"
                            v-if="row.brand != null"
                          >
                            سفارش از {{ row.brand.title }}
                          </td>

                          <td class="px-6 py-2 text-right whitespace-nowrap">
                            <div class="flex items-center justify-start">
                              <span
                                v-if="row.status == 1"
                                class="w-full py-2 badge bg-green-500 text-white rounded-lg text-center"
                                >پرداخت شده</span
                              >
                              <span
                                v-if="row.status == 0"
                                class="w-full py-2 badge bg-red-500 text-white rounded-lg text-center"
                                >پرداخت نشده</span
                              >
                            </div>
                          </td>

                          <td class="px-6 py-2 text-right whitespace-nowrap">
                            {{ row.created_at }}
                          </td>

                          <td class="px-6 py-2 text-right whitespace-nowrap">
                            {{ row.payed_at == null ? "-" : row.payed_at + " ریال" }}
                          </td>

                          <td class="px-6 py-2 text-center whitespace-nowrap">
                            {{
                              row.total_price == null
                                ? "-"
                                : rial_separate(row.total_price) + " ریال"
                            }}
                          </td>

                          <td scope="col" class="px-3 py-3 text-center border-l">
                            <div class="flex justify-center item-center">
                              <nuxt-link
                                :to="`/profile/bfturkey/order/${row.order_id}`"
                                class="w-4 ml-4 cursor-pointer hover:text-gray-500 hover:scale-110"
                              >
                                <i
                                  class="fa-solid fa-eye text-[18px] !w-5 !h-5 text-pink-500"
                                ></i>
                              </nuxt-link>
                            </div>
                          </td>
                        </tr>
                      </template>
                    </dataset-item>
                  </table>

                  <nav
                    class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                    aria-label="Table navigation"
                  >
                    <dataset-info />
                    <dataset-pager />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dataset>
  </div>
</template>
<script setup>
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";
import { useMarketStore } from "@/store/marketStore";
import { useRouter } from "vue-router";

import Dataset from "@/components/DataTable/Dataset.vue";
import DatasetInfo from "@/components/DataTable/DatasetInfo.vue";
import DatasetItem from "@/components/DataTable/DatasetItem.vue";
import DatasetPager from "@/components/DataTable/DatasetPager.vue";
import DatasetSearch from "@/components/DataTable/DatasetSearch.vue";
import DatasetShow from "@/components/DataTable/DatasetShow.vue";
import DatasetStatus from "@/components/DataTable/DatasetStatus.vue";
import { ref, reactive, computed, onMounted } from "vue";

const router = useRouter();
const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);
const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);

const mobileSubmenuIndex = ref(null);
const ShowDetailes = ref(false);
const isOpenA = ref(false);
const activeBtn = ref("");
const Addorder = ref(false);
const Export = ref(false);
const Status = ref(false);
const Count = ref(false);
const Expanded = ref(null);
const Shipping = ref(false);
const Discount = ref(false);
const ordersList = ref([]);
const filteredContainer = ref([]);
const statistics = ref(null);
const cols = ref([
  {
    name: "شماره سفارش",
    field: "orderId",
    sort: "",
    hasIcon: "orderId",
  },
  {
    name: "درخواست کننده",
    field: "user",
    sort: "",
    hasIcon: "user",
  },
  {
    name: "نوع درخواست",
    field: "orderName",
    sort: "",
    hasIcon: "orderName",
  },
  {
    name: "وضعیت",
    field: "orderStatus",
    sort: "",
    hasIcon: "orderStatus",
  },
  {
    name: "نوع سفارش",
    field: "orderCreate",
    sort: "",
    hasIcon: "orderStatus",
  },
  {
    name: "تاریخ پرداخت",
    field: "orderDueDate",
    sort: "",
    hasIcon: "orderDueDate",
  },
  {
    name: "مجموع",
    field: "orderTotal",
    sort: "",
    hasIcon: "orderTotal",
  },
  {
    name: "جزئئیات",
    field: "orderAction",
    sort: "",
    hasIcon: "orderAction",
  },
]);

if (authuser.value == null) {
  router.push("/auth/login");
}

onMounted(async () => {
  loading.value = true;

  await get_orders_list();
});

const get_orders_list = async () => {
  const result = await marketStore.get_national_orders_list();
  if (result.status == 200) {
    loading.value = false;
    ordersList.value = result.result.list;
    filteredContainer.value = result.result.list;
    statistics.value = result.result.statistics;
  } else {
    loading.value = false;
  }
};

const rial_separate = (Number) => {
  Number += "";
  Number = Number.replace(",", "");
  let x = Number.split(".");
  let y = x[0];
  let z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
};

const openSubMobileTable = (stateId) => {
  if (stateId == mobileSubmenuIndex.value) mobileSubmenuIndex.value = null;
  else mobileSubmenuIndex.value = stateId;
};

const click = (event, i) => {
  let toset;
  const sortEl = cols.value[i];

  if (!event.shiftKey) {
    cols.value.forEach((o) => {
      if (o.field !== sortEl.field) {
        o.sort = "";
      }
    });
  }
  if (!sortEl.sort) {
    toset = "asc";
  }
  if (sortEl.sort === "desc") {
    toset = event.shiftKey ? "" : "asc";
  }
  if (sortEl.sort === "asc") {
    toset = "desc";
  }
  sortEl.sort = toset;
};

const sortBy = computed(() => {
  return cols.value.reduce((acc, o) => {
    if (o.sort) {
      o.sort === "asc" ? acc.push(o.field) : acc.push("-" + o.field);
    }

    return acc;
  }, []);
});

definePageMeta({
  layout: "user-dashboard",
  pageTransition: {
    mode: "default",
  },
});
</script>
