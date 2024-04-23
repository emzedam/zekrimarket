<template>
  <div class="lg:col-span-9">
    <div class="border lg:rounded-lg tab-2">
      <h2
        class="px-4 py-4 flex justify-between relative overflow-hidden items-center border-b"
      >
        <span class="font-semibold">لیست علاقه مندیها</span>
      </h2>

      <div
        class="px-3 products-section w-full gap-3 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        v-if="favorite_list.length != 0"
      >
        <div class="" v-for="(favorite, index) in favorite_list" :key="index">
          <nuxt-link
            :to="`/${favorite.product.fa_slug.replace(/\//g, '-')}-${
              favorite.product.productZMP
            }`"
            data-aos="fade-up"
            class="item aos-init aos-animate"
          >
            <div
              class="product-card-one w-full h-full bg-white relative group overflow-hidden rounded-lg shadow-sm border border-gray-200/80"
            >
              <div
                class="product-card-img w-full h-[300px] !bg-contain"
                :style="`background: url(https://api.zekrimarket.com/storage/products/images/${favorite.product.indexPic}) center center no-repeat;`"
              ></div>
              <div
                class="product-card-details px-[20px] pb-[60px] relative pt-4 border-t"
              >
                <div>
                  <p
                    class="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600"
                  >
                    {{ favorite.product.fa_title }}
                  </p>
                </div>
                <p class="price" v-if="favorite.product.features.length == 0">
                  <span
                    :class="{ 'line-through': favorite.product.discountPercent != 0 }"
                    class="main-price text-gray-500 font-600 text-[15px]"
                    >{{ rial_separate(favorite.product.mainPrice) }} ریال</span
                  ><span
                    v-if="favorite.product.discountPercent != 0"
                    class="offer-price text-red-500 font-600 text-[15px] mr-2"
                    >{{
                      rial_separate(
                        favorite.product.mainPrice -
                          (favorite.product.mainPrice *
                            favorite.product.discountPercent) /
                            100
                      )
                    }}
                    ریال</span
                  >
                </p>
                <p class="price" v-else>
                  <span
                    :class="{
                      'line-through': favorite.product.features[0].discountPercent != 0,
                    }"
                    class="main-price text-gray-500 font-600 text-[15px]"
                    >{{
                      rial_separate(favorite.product.features[0].mainPrice)
                    }}
                    ریال</span
                  ><span
                    v-if="favorite.product.features[0].discountPercent != 0"
                    class="offer-price text-red-500 font-600 text-[15px] mr-2"
                    >{{
                      rial_separate(
                        favorite.product.features[0].mainPrice -
                          (favorite.product.features[0].mainPrice *
                            favorite.product.features[0].discountPercent) /
                            100
                      )
                    }}
                    ریال</span
                  >
                </p>
              </div>

              <div
                class="absolute w-full px-[15px] pt-5 right-0 bottom-4 transition-all duration-300 ease-in-out bg-transparent flex justify-start gap-3"
              >
                <a
                  @click.stop="add_to_favorites(favorite.product._id)"
                  href="javascript:void(0)"
                  class="border-red-500 rounded-lg border w-full p-1 bg-transparent text-red-500 hover:bg-red-500 hover:text-white transition-all text-center"
                >
                  حذف
                </a>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <ul v-else class="p-5 lg:p-4">
        <li>
          <div class="bg-000 flex flex-col items-center justify-center py-20">
            <div>
              <img
                class="w-[180px] h-[135px] inline-block"
                src="@/assets/order-empty.svg"
              />
            </div>
            <div class="text-body-1 color-900 mt-3">لیست علاقه مندی ها خالی است</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { useMarketStore } from "~/store/marketStore";
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { onMounted } from "vue";

const { authuser } = storeToRefs(useAuthStore());
const marketStore = useMarketStore();
const props = defineProps(["favorite_list"]);
const $toast = useToast();

const add_to_favorites = async (product_id) => {
  if (confirm("آیا از حذف این محصول از  لیست علاقه مندیها مطمعن هستید ؟")) {
    if (product_id != null) {
      const result = await marketStore.add_product_to_user_favs(product_id);
      if (result.statusCode == 200) {
        authuser.value.favorites = result.result;
        $toast.success("محصول با موفقیت از سبد خریدتان حذف گردید", {
          position: "top-left",
        });
      } else {
        $toast.error(
          `${result.message} <a href="/auth/login" class="cursor-pointer underline mr-3">ورود به حساب کاربری</a>`,
          {
            position: "top-left",
          }
        );
      }
    } else {
      $toast.error("متاسفانه خطایی رخ داده!", {
        position: "top-left",
      });
    }
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
</script>
