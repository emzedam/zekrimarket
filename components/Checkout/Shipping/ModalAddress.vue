<template>
  <!-- get user location map modal -->
  <div
    class="fixed lg:top-0 bottom-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
    :class="locationModalState == true ? 'visible' : 'invisible'"
  >
    <div
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
      @click="closeMapModal()"
    ></div>
    <div
      class="relative rounded-lg transition-all shadow-lg shadow-gray-300/40 h-full bg-white mx-auto w-full"
      :class="locationModalState == true ? 'translate-y-[0px]' : '-translate-y-[700px]'"
    >
      <div class="flex items-center justify-between">
        <div
          class="text-right flex-col items-center pr-8 py-4 border-b w-full justify-start"
        >
          <div class="info">
            <h3 class="text-xl font-semibold block text-gray-500">ویرایش آدرس</h3>
          </div>
          <span class="text-gray-400">موقعیت مکانی آدرس را مشخص کنید.</span>
        </div>
        <button
          type="button"
          @click="closeMapModal()"
          class="w-8 h-8 text-gray-400 flex items-center justify-center ml-4"
        >
          <i class="text-lg fa fa-times"></i>
        </button>
      </div>

      <div class="modal-body font-fa relative h-full w-full bg-white rounded-b-lg">
        <form class="relative z-10 px-6 py-4">
          <div class="relative lg:w-1/4">
            <div
              class="absolute inset-y-0 left-4 flex items-center pr-3 pointer-events-none z-10"
            >
              <i class="fa fa-search text-md text-gray-400"></i>
            </div>

            <input
              type="search"
              id="default-search"
              class="block w-full p-3 pr-5 text-md font-semibold text-gray-600 border-0 shadow-md border-gray-300 rounded-lg bg-white focus:ring-transparent focus:border-transparent placeholder:text-gray-400/60 relative overflow-hidden"
              placeholder="جستجوی آدرس"
              @keyup="(e) => keyUpSearchText(e)"
              required
            />
            <div
              v-if="searchResult.length != 0"
              style="height: 250px; overflow-y: scroll"
              class="absolute top-15 right-0 w-full bg-white shadow-lg p-4 rounded"
            >
              <ul class="w-full">
                <li
                  class="border-b cursor-pointer py-2"
                  v-for="(item, index) in searchResult"
                  :key="index"
                  @click="clickedOnAddress(item)"
                >
                  <div>
                    <span class="ml-1">
                      <i class="fa-light fa-location-dot text-xs"></i>
                    </span>
                    <b>{{ item.title }}</b>
                  </div>
                  <small>{{ item.address }}</small>
                </li>
              </ul>
            </div>
          </div>
        </form>

        <div id="map" class="!absolute top-0 right-0 w-full h-full"></div>

        <div class="w-full">
          <div
            class="flex items-center justify-between w-full bg-white p-4 absolute bottom-20 z-10 rounded-b-lg"
          >
            <div class="text-gray-500 items-center hidden lg:block">
              مرسوله‌های شما به این موقعیت ارسال خواهد شد.
            </div>
            <button
              @click="addUserAddress()"
              class="btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white flex items-center justify-between rounded-lg z-10 w-full lg:w-48 font-semibild text-lg"
            >
              <span class="w-full block relative" v-if="loadingButton == false">
                تایید و ادامه
                <i class="fa-solid fa-chevron-left pl-2 text-xl absolute left-0"></i>
              </span>
              <span class="w-full block relative" v-if="loadingButton == true">
                در حال پردازش ...
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- get user location map modal -->

  <!-- get address info modal -->
  <div
    class="fixed lg:top-0 bottom-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
    :class="getAddressModalState == true ? 'visible' : 'invisible'"
  >
    <div
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
      @click="closeModalUserAddress()"
    ></div>
    <div
      class="relative rounded-lg transition-all shadow-lg shadow-gray-300/40 h-[400px] lg:max-w-2xl bg-white mx-auto lg:top-10 w-full"
      :class="getAddressModalState == true ? 'translate-y-[0px]' : '-translate-y-[700px]'"
    >
      <div class="flex items-center justify-between">
        <div
          class="text-right flex-col items-center pr-8 py-4 border-b w-full justify-start"
        >
          <div class="info">
            <h3 class="text-xl font-semibold block text-gray-500">جزییات آدرس</h3>
          </div>
        </div>
        <button
          @click="closeModalUserAddress()"
          type="button"
          class="w-8 h-8 text-gray-400 flex items-center justify-center ml-4"
        >
          <i class="text-lg fa fa-times"></i>
        </button>
      </div>

      <div class="modal-body font-fa relative h-full bg-white rounded-b-lg">
        <form class="w-full p-3 h-[287px] overflow-y-scroll bg-white">
          <div class="flex flex-wrap -mx-3 mb-6 w-full">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                نشانی پستی <span class="text-red-500">*</span>
              </label>
              <textarea
                class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                v-model="addressData.fullAddress"
                >{{
                  addressData.fullAddress != null ? addressData.fullAddress : ""
                }}</textarea
              >
              <p class="text-gray-600 text-xs">
                آدرس بالا بر اساس موقعیت انتخابی شما وارد شده است.
              </p>
            </div>
          </div>
          <span
            @click="doEditUserLocation()"
            class="flex items-center mt-2 text-button-1 text-blue-500 cursor-pointer user-select-none border-b pb-2"
            >اصلاح موقعیت مکانی روی نقشه</span
          >

          <div class="flex flex-wrap -mx-3 mb-6 mt-3 border-b pb-5">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0" v-if="statesList.length != 0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                استان <span class="text-red-500">*</span>
              </label>
              <select
                v-model="addressData.state"
                @change="changeState()"
                class="block appearance-none w-full border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="0">هیچکدام</option>
                <option
                  v-for="(state, index) in statesList"
                  :key="index"
                  :value="state.name"
                >
                  {{ state.name }}
                </option>
              </select>
            </div>
            <div class="w-full md:w-1/2 px-3" v-if="citiesList.length != 0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                شهر <span class="text-red-500">*</span>
              </label>
              <select
                v-model="addressData.city"
                :disabled="addressData.state == 0 ? true : false"
                class="block appearance-none w-full border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option :value="0">هیچکدام</option>
                <option
                  v-for="(city, index) in citiesList"
                  :key="index"
                  :value="city.name"
                >
                  {{ city.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-2 border-b pb-5">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                پلاک <span class="text-red-500">*</span>
              </label>
              <input
                class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="number"
                v-model="addressData.pelak"
                placeholder="پلاک"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                واحد
              </label>
              <input
                class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="number"
                v-model="addressData.vahed"
                placeholder="واحد"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                کدپستی <span class="text-red-500">*</span>
              </label>
              <input
                class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="number"
                v-model="addressData.codePosti"
                placeholder="کدپستی"
              />
              <small class="text-gray-500">
                کد‌پستی باید ۱۰ رقم و بدون خط تیره باشد.
              </small>
            </div>
          </div>

          <label class="flex items-center user-select-none cursor-pointer mt-3">
            <label
              class="flex items-center cursor-pointer styles_Checkbox__checkboxContainer__7joRB py-1"
              ><input
                class="cursor-pointer"
                type="checkbox"
                v-model="isRecieverMe"
                @change="changeRecieve()"
                name="iAmReceiver"
              />
            </label>
            <span class="mr-2 text-body-1">گیرنده سفارش خودم هستم.</span>
          </label>

          <div class="flex flex-wrap -mx-3 mb-6 mt-8">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                نام گیرنده <span class="text-red-500">*</span>
              </label>
              <input
                :class="isRecieverMe == true ? 'bg-gray-200' : ''"
                class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                v-model="addressData.name"
                :disabled="isRecieverMe == true ? true : false"
                placeholder="مثال: علی"
              />
              <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                شماره موبایل گیرنده <span class="text-red-500">*</span>
              </label>
              <input
                class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                :class="isRecieverMe == true ? 'bg-gray-200' : ''"
                v-model="addressData.mobile"
                :disabled="isRecieverMe == true ? true : false"
                placeholder="0914*******"
              />
            </div>
          </div>
        </form>

        <div class="absolute bottom-0 w-full">
          <div
            class="flex items-center justify-between w-full bg-white p-4 relative z-10 rounded-b-lg"
          >
            <div class="text-gray-500 items-center hidden lg:block">
              مرسوله‌های شما به این موقعیت ارسال خواهد شد.
            </div>
            <button
              v-if="editable_address == null"
              @click="saveUserAddressDetail()"
              class="btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white flex items-center justify-between rounded-lg z-10 w-full lg:w-48 font-semibild text-lg"
            >
              <span class="w-full block relative" v-if="saveAddressLoading == false">
                ثبت آدرس
                <i class="fa-solid fa-chevron-left pl-2 text-xl absolute left-0"></i>
              </span>
              <span class="w-full block relative" v-if="saveAddressLoading == true">
                در حال پردازش ...
              </span>
            </button>
            <button
              v-else
              @click="editUserAddressDetail()"
              class="btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white flex items-center justify-between rounded-lg z-10 w-full lg:w-48 font-semibild text-lg"
            >
              <span class="w-full block relative" v-if="saveAddressLoading == false">
                ویرایش آدرس
                <i class="fa-solid fa-chevron-left pl-2 text-xl absolute left-0"></i>
              </span>
              <span class="w-full block relative" v-if="saveAddressLoading == true">
                در حال ویرایش ...
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- get address info modal -->

  <!-- get address info modal -->
  <div
    class="fixed lg:top-0 bottom-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
    :class="openEditAddressModalStateProp == true ? 'visible' : 'invisible'"
  >
    <div
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
      @click="closeAddressListModal()"
    ></div>
    <div
      class="relative rounded-lg transition-all shadow-lg shadow-gray-300/40 h-[400px] lg:max-w-xl bg-white mx-auto lg:top-10 w-full"
      :class="
        openEditAddressModalStateProp == true
          ? 'translate-y-[0px]'
          : '-translate-y-[700px]'
      "
    >
      <div class="flex items-center justify-between">
        <div
          class="text-right flex-col items-center pr-8 py-4 border-b w-full justify-start"
        >
          <div class="info">
            <h3 class="text-xl font-semibold block text-gray-500">انتخاب آدرس</h3>
          </div>
        </div>
        <button
          @click="closeAddressListModal()"
          type="button"
          class="w-8 h-8 text-gray-400 flex items-center justify-center ml-4"
        >
          <i class="text-lg fa fa-times"></i>
        </button>
      </div>

      <div class="modal-body font-fa relative h-full bg-white rounded-b-lg">
        <div class="grow flex flex-col overflow-y-auto">
          <div class="grow flex flex-col styles_children__hHq5Q py-4 px-5">
            <div class="h-full overflow-auto">
              <div
                class="break-words py-3 cursor-pointer"
                data-cro-id="shipping-add-new-address"
              >
                <div class="flex items-center grow" @click="do_add_new_address()">
                  <div class="flex shrink-0 ml-2"></div>
                  <p class="grow text-lg font-bold text-neutral-900">
                    <span class="relative">افزودن آدرس جدید</span>
                  </p>
                  <div class="flex mr-2 shrink-0">
                    <i class="fa fa-angle-left"></i>
                  </div>
                </div>
              </div>
              <div
                class="mt-4 border-t pt-2 overflow-y-scroll h-[300px]"
                v-if="marketStore.get_user_addresses.length != 0"
              >
                <div
                  v-for="(address, index) in marketStore.get_user_addresses"
                  :key="index"
                  class="border-b"
                >
                  <label class="flex items-start pt-3">
                    <input
                      class="cursor-pointer"
                      type="radio"
                      :value="address"
                      v-model="selected_address"
                    />
                    <div class="mr-2 grow">
                      <p class="text-body-1">
                        {{ address.fullAddress }}
                      </p>
                      <div class="pt-4 cursor-pointer">
                        <div class="flex items-center mb-2">
                          <div class="flex">کد پستی:</div>
                          <p class="text-neutral-600 text-body-2 mr-4">
                            {{ address.codePosti }}
                          </p>
                        </div>
                        <div class="flex items-center mb-2">
                          <div class="flex">شماره تماس:</div>
                          <p class="text-neutral-600 text-body-2 mr-4">
                            {{ address.mobile }}
                          </p>
                        </div>
                        <div class="flex items-center mb-2">
                          <div class="flex">کاربر:</div>
                          <p class="text-neutral-600 text-body-2 mr-4">
                            {{ address.name }}
                          </p>
                        </div>
                        <div class="flex items-center mb-2">
                          <div class="flex">پلاک:</div>
                          <p class="text-neutral-600 text-body-2 mr-4">
                            {{ address.pelak }}
                          </p>
                        </div>
                        <div class="flex items-center mb-2">
                          <div class="flex">واحد:</div>
                          <p class="text-neutral-600 text-body-2 mr-4">
                            {{ address.vahed }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </label>
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
        </div>
      </div>
    </div>
  </div>
  <!-- get address info modal -->
</template>

<script setup>
import api from "~/axios";
import { useMarketStore } from "~/store/marketStore";
import { useAuthStore } from "~/store/authStore";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useCookies } from "vue3-cookies";

const cookies = useCookies().cookies;
const $toast = useToast();
const searchResult = ref([]);
const mapCenter = ref([51.38866839337672, 35.69080481760244]);
const current_address = ref("تهران");
const loadingButton = ref(false);
const saveAddressLoading = ref(false);
const addressDetail = ref(null);
const statesList = ref([]);
const citiesList = ref([]);
const errorMessage = ref(null);
const selected_address = ref("");
const addressData = reactive({
  fullAddress: "",
  state: "",
  city: "",
  pelak: "",
  vahed: "",
  codePosti: "",
  name: "",
  mobile: "",
});
const isRecieverMe = ref(false);
const editable_address = ref(null);
const UToken = useCookie("UToken");
const marketStore = useMarketStore();
const authStore = useAuthStore();

defineProps([
  "locationModalState",
  "getAddressModalState",
  "openEditAddressModalStateProp",
]);

const emit = defineEmits("closeMapModal", "openAddressModal", "closeEditAddressModal");

onMounted(async () => {
  if (cookies.get("user-address")) {
    selected_address.value = cookies.get("user-address");
  } else {
    setTimeout(() => {
      if (marketStore.get_user_addresses.length != 0) {
        selected_address.value = marketStore.get_user_addresses[0];
      }
    }, 1000);
  }

  map_init();
});

const map_init = () => {
  setTimeout(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaHNuZW16ZWQiLCJhIjoiY2xvcGdxOTI4MGEweTJpazRmM2JsYjA5YSJ9.8eqD-GBF4CO9Ma8aSYlM8A";

    const map = new mapboxgl.Map({
      container: "map",
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/hsnemzed/clotwhfvh00s801pm2u1sce3v",
      center: mapCenter.value,
      zoom: 16,
    });

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });

    map.addControl(nav, "top-left");

    const marker = new mapboxgl.Marker({ color: "black", rotation: 45 })
      .setLngLat(mapCenter.value)
      .addTo(map);

    map.on("move", function (e) {
      mapCenter.value = [map.getCenter().lng, map.getCenter().lat];
      marker.setLngLat(map.getCenter());
    });

    marker.setDraggable(false);
  }, 500);
};

const keyUpSearchText = async (e) => {
  if (e.target.value != "") {
    let requestUrl = `https://api.zekrimarket.com/api/front/geocoding/suggests`;
    const result = await api.post(
      requestUrl,
      {
        term: e.target.value,
        lat: mapCenter.value[1],
        lng: mapCenter.value[0],
      },
      {
        headers: {
          Authorization: "Bearer " + UToken.value,
        },
      }
    );
    if (result) {
      if (result.status == 200) {
        if (result.data.statusCode == 200) {
          searchResult.value = result.data.result.items;
        }
      }
    }
  } else {
    searchResult.value = [];
  }
};

const clickedOnAddress = async (address) => {
  mapCenter.value = [address.location.x, address.location.y];
  current_address.value = address.address;
  map_init();
  searchResult.value = [];
};

const addUserAddress = async () => {
  loadingButton.value = true;
  let requestUrl = `https://api.zekrimarket.com/api/front/geocoding/reverse-geocode`;
  const result = await api.post(
    requestUrl,
    {
      lat: mapCenter.value[1],
      lng: mapCenter.value[0],
    },
    {
      headers: {
        Authorization: "Bearer " + UToken.value,
      },
    }
  );
  if (result) {
    if (result.status == 200) {
      if (result.data.statusCode == 200) {
        const addressObj = result.data.result;
        addressDetail.value = addressObj;
        loadingButton.value = false;
        emit("closeMapModal");
        emit("openAddressModal");

        addressData.fullAddress = addressDetail.value.formatted_address;

        const loadStatesList = await marketStore.load_states_list();
        if (loadStatesList.message == "success") {
          statesList.value = loadStatesList.result;
          addressData.state = addressDetail.value.state;

          const loadCitiesList = await marketStore.load_cities_list({
            state_name: addressData.state,
          });

          if (loadCitiesList.message == "success") {
            addressData.city = addressDetail.value.city;
            citiesList.value = loadCitiesList.result;
          }
        }
      }
    }
  }
};

const changeState = async () => {
  const loadCitiesList = await marketStore.load_cities_list({
    state_name: addressData.state,
  });

  if (loadCitiesList.message == "success") {
    addressData.city = 0;
    citiesList.value = loadCitiesList.result;
  }
};

const closeModalUserAddress = () => {
  emit("closeAddressModal");
};

const closeMapModal = () => {
  emit("closeMapModal");
};

const doEditUserLocation = () => {
  emit("closeAddressModal");
  emit("openMapModal");
};

const changeRecieve = () => {
  if (isRecieverMe.value == true) {
    addressData.name = authStore.get_current_user.name;
    addressData.mobile = authStore.get_current_user.mobile;
  } else {
    addressData.name = null;
    addressData.mobile = null;
  }
};

const saveUserAddressDetail = async () => {
  saveAddressLoading.value = true;

  if (isValidationData()) {
    const savedData = {
      ...addressData,
      isRecieverMe: isRecieverMe.value,
      lat: mapCenter.value[1],
      lng: mapCenter.value[0],
    };
    const response = await marketStore.save_user_address(savedData);
    if (response.message == "success") {
      $toast.success("عملیات ذخیره سازی با موفقیت انجام گردید", {
        position: "top-left",
      });
      emit("closeAddressModal");

      addressData.pelak = "";
      addressData.vahed = "";
      addressData.codePosti = "";
      addressData.name = "";
      addressData.mobile = "";
      isRecieverMe.value = false;

      await marketStore.set_user_address_list(response.result, "create");
      marketStore.set_select_user_address(response.result);

      selected_address.value = response.result;

      saveAddressLoading.value = false;
    } else {
      saveAddressLoading.value = false;
      $toast.error("خطایی رخ داده !", {
        position: "top-left",
      });
    }
  } else {
    saveAddressLoading.value = false;
    $toast.error(errorMessage.value, {
      position: "top-left",
    });
  }
};

const isValidationData = () => {
  if (addressData.fullAddress == "") {
    errorMessage.value = "نشانی پستی نمیتواند خالی باشد";
    return false;
  } else if (addressData.state == "") {
    errorMessage.value = "استان خود را انتخاب کنید";
    return false;
  } else if (addressData.city == "") {
    errorMessage.value = "شهر خود را انتخاب کنید";
    return false;
  } else if (addressData.pelak == "") {
    errorMessage.value = "پلاک خود را وارد کنید";
    return false;
  } else if (addressData.codePosti == "") {
    errorMessage.value = "کد پستی خود را وارد کنید";
    return false;
  } else if (addressData.codePosti.toString().length != 10) {
    errorMessage.value = "کد پستی وارد شده نامعتبر میباشد";
    return false;
  } else if (addressData.name == "") {
    errorMessage.value = "نام گیرنده را وارد کنید";
    return false;
  } else if (addressData.mobile == "") {
    errorMessage.value = "شماره همراه گیرنده را وارد کنید";
    return false;
  } else {
    errorMessage.value = "";
    return true;
  }
};

const closeAddressListModal = () => {
  emit("closeEditAddressModal");
};

watch(selected_address, (newVal, oldVal) => {
  emit("closeEditAddressModal");
  marketStore.set_select_user_address(newVal);
});

const do_add_new_address = () => {
  map_init();
  mapCenter.value = [51.38866839337672, 35.69080481760244];
  editable_address.value = null;
  addressData.pelak = "";
  addressData.codePosti = "";
  addressData.vahed = "";
  addressData.name = "";
  addressData.mobile = "";
  isRecieverMe.value = false;
  emit("closeEditAddressModal");
  emit("openMapModal");
};

const do_edit_location_list = (address) => {
  emit("closeEditAddressModal");
  emit("openMapModal");

  selected_address.value = address;
  marketStore.set_select_user_address(address);

  editable_address.value = address;
  addressData.pelak = editable_address.value.pelak;
  addressData.codePosti = editable_address.value.codePosti;
  addressData.vahed = editable_address.value.vahed;
  if (editable_address.value.isRecieverMe == true) {
    isRecieverMe.value = editable_address.value.isRecieverMe;
    addressData.name = editable_address.value.name;
    addressData.mobile = editable_address.value.mobile;
  }

  mapCenter.value = [editable_address.value.lng, editable_address.value.lat];
  map_init();
};

const editUserAddressDetail = async () => {
  saveAddressLoading.value = true;
  if (isValidationData()) {
    const editableData = {
      ...addressData,
      _id: editable_address.value._id,
      isRecieverMe: isRecieverMe.value,
      lat: mapCenter.value[1],
      lng: mapCenter.value[0],
    };

    const response = await marketStore.edit_user_address(editableData);
    if (response.message == "success") {
      $toast.success("عملیات بروزرسانی با موفقیت انجام گردید", {
        position: "top-left",
      });
      emit("closeAddressModal");

      await marketStore.set_user_address_list(response.result, "update");

      // let findAddress = response.result.find(
      //   (loc) => loc._id == editable_address.value._id
      // );

      selected_address.value = response.result;
      marketStore.set_select_user_address(response.result);
      saveAddressLoading.value = false;
    } else {
      saveAddressLoading.value = false;
      $toast.error("خطایی رخ داده !", {
        position: "top-left",
      });
    }
  } else {
    saveAddressLoading.value = false;
    $toast.error(errorMessage.value, {
      position: "top-left",
    });
  }
};

defineExpose({
  do_edit_location_list,
  do_add_new_address,
});
</script>
