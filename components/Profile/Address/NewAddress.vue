<template>
  <main class="lg:col-span-9">
    <!-- ===============  ثبت آدرس جدید======================== -->
    <div class="border lg:rounded-lg tab-3">
      <h2
        class="px-4 py-4 flex justify-between relative overflow-hidden items-center border-b"
      >
        <span class="font-semibold">آدرس</span>
        <span
          @click="openMapModal()"
          class="text-red-500 font-medium cursor-pointer border px-4 py-2 rounded-md flex items-center"
        >
          <i class="fa fa-location pl-1"></i>
          <span>ثبت آدرس جدید </span></span
        >
      </h2>

      <div class="px-5 lg:px-6-lg" v-if="userAdressList.length != 0">
        <div
          class="br-list-vertical-0 py-4"
          v-for="(address, index) in userAdressList"
          :class="index < userAdressList.length - 1 ? 'border-b' : ''"
          :key="index"
        >
          <div class="flex lg:items-center lg:justify-between mb-4">
            <div class="flex items-center justify-start text-gray-900">
              {{ address.fullAddress }}
            </div>
            <div>
              <button
                class="flex"
                type="button"
                @click="removeAddress(index, address._id)"
              >
                <div
                  class="flex outline-none border border-red-500 bg-red-500 p-2 rounded-lg"
                >
                  <i class="fa-solid fa-trash text-white"></i>
                </div>
              </button>
            </div>
          </div>
          <div class="flex items-start lg:justify-between">
            <div class="text-body-1 text-gray-500">
              <div class="mb-1 flex items-center">
                <div class="flex ml-2">
                  <i class="fa-light fa-location-dot"></i>
                </div>
                {{ address.state + "/" + address.city }}
              </div>
              <div class="mb-1 flex items-center">
                <div class="flex ml-2">
                  <i class="fa-light fa-envelope"></i>
                </div>
                {{ address.codePosti }}
              </div>
              <div class="mb-1 flex items-center">
                <div class="flex ml-2">
                  <i class="fa-light fa-mobile"></i>
                </div>
                {{ address.mobile }}
              </div>
              <div class="mb-1 flex items-center">
                <div class="flex ml-2">
                  <i class="fa-light fa-user"></i>
                </div>
                {{ address.name }}
              </div>

              <div
                @click="do_edit_location_list(address)"
                class="mb-3 inline-flex items-center cursor-pointer text-indigo-500 font-bold text-button-2 mr-4"
              >
                <span>ویرایش</span>
                <div class="flex">
                  <i class="fa fa-angle-left mr-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center h-[300px] bg-gray-50 font-bold text-gray-600" v-else>لیست آدرس های شما خالی میباشد</div>
    </div>
    <!-- ===============  ثبت آدرس جدید======================== -->
    
  </main>
</template>

<script setup>
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useRouter } from "vue-router";

const $toast = useToast();
const router = useRouter();
const marketStore = useMarketStore();
const { userAdressList } = storeToRefs(marketStore);
const props = defineProps(["userAdressList"]);
const emit = defineEmits(["openMapModal", "openEditModalAddress"]);

const do_edit_location_list = (address) => {
  emit("openEditModalAddress", address);
};

const openMapModal = () => {
  emit("openMapModal");
};

const removeAddress = async (index, id) => {
  if (confirm("آیا از حذف آدرس مورد نظر مطمهن هستید ؟")) {
    const result = await marketStore.remove_user_address({ id: id });
    if (result.statusCode == 200) {
      userAdressList.value.splice(index, 1);
      $toast.success(result.message, {
        position: "top-left",
      });
    } else if (result.statusCode == 401) {
      $toast.error(result.message, {
        position: "top-left",
      });

      router.push("/auth/login");
    } else {
      $toast.error(result.message, {
        position: "top-left",
      });
    }
  }
};
</script>
