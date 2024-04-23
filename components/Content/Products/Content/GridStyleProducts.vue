<template>
  <section class="section-style-one mb-[20px] pb-10">
    <div class="section-wrapper w-full">
      <div class="container-x mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="col-span-12">
            <div class="section-title flex justify-between items-center mb-5">
              <div class="block-title has_url">
                <div class="title">
                  <i class="fal fa-headset"></i>{{ products.title }}
                </div>
                <nuxt-link
                  :to="`/more/${products.title.replace(/ /g, '-')}`"
                  class="bk_view_more"
                  :title="products.title"
                  ><i class="fal fa-angle-left"></i>مشاهده همه
                </nuxt-link>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <nuxt-link
                :to="`${product.fa_slug.replace(/\//g, '-')}-${product.productZMP}`"
                v-for="(product, index) in products.selected_products"
                :key="index"
                class="flex justify-between w-full p-4 bg-white hover:blur-[1px] relative overflow-hidden rounded-lg shadow-sm border border-gray-200/80"
              >
                <div
                  class="elm_txt_l out_of_stock"
                  v-if="
                    product.features.length == 0 &&
                    product.productBuyedCount >= product.productStock
                  "
                >
                  <span>ناموجود</span>
                </div>
                <div class="elm_txt_l out_of_stock" v-else>
                  <span>موجود</span>
                </div>
                <div
                  class="elm_txt_l out_of_stock"
                  v-if="
                    product.features.length != 0 &&
                    product.features[0].productBuyedCount >=
                      product.features[0].productStock
                  "
                >
                  <span>ناموجود</span>
                </div>
                <div class="elm_txt_l out_of_stock" v-else>
                  <span>موجود</span>
                </div>

                <img
                  :alt="product.fa_title"
                  :title="product.fa_title"
                  class="flex-shrink-0 w-20 h-20 ml-3 bg-gray-300 rounded-xl"
                  :src="`https://api.zekrimarket.com/storage/products/images/${product.indexPic}`"
                />
                <div class="flex-1 truncate">
                  <div class="block text-right">
                    <h2 class="text-xs font-medium truncate text-gray-700">
                      {{ product.fa_title }}
                    </h2>
                    <div class="block pt-4 text-xs">
                      <span
                        class="price text-gray-600"
                        v-if="product.features.length == 0"
                      >
                        <del
                          class="mr-2"
                          aria-hidden="true"
                          v-if="product.discountPercent != 0"
                        >
                          <span
                            class="commerce-Price-amount amount relative overflow-hidden"
                          >
                            {{ rial_separate(product.mainPrice)
                            }}<span
                              class="woocommerce-Price-currencySymbol text-xs hidden"
                              >ریال</span
                            >
                          </span>
                        </del>

                        <span
                          v-if="product.discountPercent != 0"
                          class="commerce-Price-amount amount text-red-500 mr-2"
                        >
                          {{
                            rial_separate(
                              product.mainPrice -
                                (product.mainPrice * product.discountPercent) / 100
                            )
                          }}&nbsp;<span
                            class="commerce-Price-currencySymbol text-gray-700 text-xs"
                            >ریال</span
                          >
                        </span>
                      </span>
                      <span class="price text-gray-600" v-else>
                        <del
                          class="mr-2"
                          aria-hidden="true"
                          v-if="product.features[0].discountPercent != 0"
                        >
                          <span
                            class="commerce-Price-amount amount relative overflow-hidden"
                          >
                            {{ rial_separate(product.features[0].mainPrice)
                            }}<span
                              class="woocommerce-Price-currencySymbol text-xs hidden"
                              >ریال</span
                            >
                          </span>
                        </del>

                        <span
                          v-if="product.features[0].discountPercent != 0"
                          class="commerce-Price-amount amount text-red-500 ml-2"
                        >
                          {{
                            rial_separate(
                              product.features[0].mainPrice -
                                (product.features[0].mainPrice *
                                  product.features[0].discountPercent) /
                                  100
                            )
                          }}
                          <span
                            class="commerce-Price-currencySymbol text-gray-700 text-xs"
                            >ریال</span
                          >
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["products"]);
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

<style></style>
