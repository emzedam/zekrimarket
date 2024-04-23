<template>
  <div
    role="Sticky"
    id="Sticky"
    class="main-menu nav-widget-wrapper w-full relative bg-white border-gray-100 lg:block hidden top-[65px] shadow transition-all"
  >
    <div class="px-6 mx-auto h-full">
      <div class="w-full h-full relative">
        <div class="w-full h-full flex justify-between items-center">
          <div class="category-and-nav flex xl:gap-x-7 gap-x-3 items-center">
            <div class="nav">
              <ul class="nav-wrapper flex xl:gap-x-6 gap-x-4">
                <li
                  @mouseenter="submenuStatus = true"
                  @mouseleave="submenuStatus = false"
                >
                  <span
                    class="flex items-center text-sm cursor-pointer text-gray-700 border-l pl-3 py-3"
                    ><span class="ml-1.5"> <i class="fa fa-bars"></i> </span
                    ><span class="font-semibold">دسته بندی کالاها</span></span
                  >

                  <ul
                    v-if="categoryList != null"
                    class="sub-menu w-full absolute left-0 top-[45px] shadow z-20"
                    :class="submenuStatus == false ? 'hidden' : ''"
                  >
                    <div class="mega-menu-wrapper w-full bg-white shadow-lg rounded-b-lg">
                      <div
                        class="categories-wrapper h-full grid grid-cols-12 justify-around"
                      >
                        <div class="row-span-2 border-l font-semibold lg:col-span-2">
                          <div class="category-items">
                            <ul class="flex flex-col text-gray-800">
                              <li
                                v-for="(category, index) in categoryList"
                                :key="index"
                                @mousemove="openNextLevelCategory(index)"
                                :class="
                                  currentChildData != null &&
                                  category._id == currentChildData._id
                                    ? 'bg-gray-100/60'
                                    : ''
                                "
                                class="hover:bg-gray-100/50 hover:border-b cursor-pointer hover:border-gray-300 p-4 hover:text-red-500"
                              >
                                <a
                                  class="inline-flex items-center"
                                  href="javascript:void(0)"
                                >
                                  <i
                                    class="fa-duotone fa-draw-circle ml-2 w-6 h-4 text-sm"
                                  ></i>
                                  <span
                                    class="text-sm text-gray-700 font-400 hover:text-red-500"
                                    >{{ category.title }}</span
                                  ></a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>

                        <!-- content -->
                        <div
                          class="w-full lg:col-span-10 xl:col-span-10"
                          v-if="currentChildData != null"
                        >
                          <div
                            class="w-full p-4 flex items-center justify-start font-semibold text-cyan-500"
                          >
                            <nuxt-link
                              :to="`/category/${currentChildData.slug}-${currentChildData.category_id}`"
                              >همه محصولات {{ currentChildData.title }}</nuxt-link
                            >
                            <i class="fa-solid fa-chevron-left mr-2"></i>
                          </div>
                          <div
                            class="MENU-BLOCKS grid lg:grid-cols-4 xl:grid-cols-6"
                            v-if="currentChildData.childs.length != 0"
                          >
                            <div
                              class="Menu-Block p-4"
                              v-for="(child, index) in currentChildData.childs"
                              :key="index"
                            >
                              <div class="category">
                                <h1
                                  class="he w-full col-span-10 mb-3 flex items-center justify-start font-semibold text-gray-900 text-sm"
                                >
                                  <nuxt-link
                                    :to="`/category/${child.slug}-${child.category_id}`"
                                    >{{ child.title }}</nuxt-link
                                  >
                                  <i class="fa-solid fa-chevron-left mr-2"></i>
                                </h1>
                              </div>
                              <div class="category-items" v-if="child.childs.length != 0">
                                <ul class="flex flex-col space-y-2">
                                  <li
                                    v-for="(subchild, index) in child.childs"
                                    :key="index"
                                  >
                                    <nuxt-link
                                      :to="`/category/${subchild.slug}-${subchild.category_id}`"
                                      ><span
                                        class="text-gray-700 text-sm font-400 hover:text-red-500 hover:border-red-500"
                                        >{{ subchild.title }}</span
                                      ></nuxt-link
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pr-3 text-center flex flex-col items-center justify-center mt-5 border-t pt-10"
                            v-else
                          >
                            <div>
                              <i class="fa fa-empty-set text-lg"></i>
                            </div>
                            <h3 class="text-gray-900">
                              زیر دسته برای این دسته اضافه نشده
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>

                <li v-for="(page, index) in pagesList" :key="index">
                  <nuxt-link
                    :to="`/page/${page.slug_page}`"
                    v-if="page.showing_header == true"
                    class="flex items-center text-sm cursor-pointer text-gray-500 py-3 relative overflow-hidden hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-red-500 hover:after:bottom-0 hover:after:duration-300 after:transition-all after:duration-300 after:ease-in-out w-full"
                    ><span class="ml-1">
                      <i :class="`fa-duotone fa-${page.icon_name}`"></i> </span
                    ><span class="font-normal">{{ page.page_title }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <SellerButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SellerButton from "@/components/Header/CreateStoreButton/becomeSaller.vue";
import { onMounted } from "vue";
import { useMarketStore } from "~/store/marketStore";
const marketStore = useMarketStore();

const submenuStatus = ref(false);
const categoryList = ref(null);
const currentChildData = ref(null);
const pagesList = ref([]);

onMounted(async () => {
  window.addEventListener("scroll", function () {
    stickyHeader();
  });

  const stickyMarket = document.getElementById("Sticky");
  const sticky = stickyMarket.offsetTop;

  function stickyHeader() {
    if (window.scrollY >= sticky) {
      stickyMarket.classList.add("sticky");
    } else {
      stickyMarket.classList.remove("sticky");
    }
  }

  get_category_lists();
  await get_pages_list();
});

const get_category_lists = async () => {
  const result = await marketStore.categoryLists();
  if (result.result != null) {
    categoryList.value = result.result;
    currentChildData.value = categoryList.value[0];
  }
};

const openNextLevelCategory = (index) => {
  if (categoryList.value.length != 0) {
    currentChildData.value = categoryList.value[index];
  }
};

const get_pages_list = async () => {
  const result = await marketStore.get_pages_list();
  if (result.status == 200) {
    pagesList.value = result.result;
  }
};
</script>
