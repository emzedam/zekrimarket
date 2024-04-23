<template>
  <main class="product-content lg:col-span-5 col-span-12">
    <nav
      class="flex py-1 text-cyan-700 rounded-lg bg-wite lg:px-0 px-6"
      aria-label="Breadcrumb"
    >
      <ol class="inline-flex items-center">
        <li class="inline-flex items-center relative">
          <a
            v-if="product.brand != null"
            href="javascript:void(0)"
            class="inline-flex items-center text-xl font-medium text-cyan-500 mr-0 hover:text-red-600 darker:text-gray-400 darker:hover:text-white"
          >
            {{ product.brand.title }}
          </a>
        </li>

        <li aria-current="page">
          <div class="flex items-center">
            <span
              class="before:content-['/'] before:pl-2 before:text-gray-300 mr-1 pr-2 font-medium text-cyan-500 md:ml-2 darker:text-gray-400"
            >
              {{ product.categories[0].title }}
            </span>
          </div>
        </li>
      </ol>
    </nav>
    <header class="lg:px-0 px-6">
      <h1 class="py-1 font-semibold text-2xl text-gray-700">
        {{ product.fa_title }}
      </h1>

      <span class="text-gray-400 font-en text-xs" v-if="product.en_title != null">{{
        product.en_title
      }}</span>
    </header>

    <div class="border p-4 rounded-lg mt-2">
      <div class="flex items-center text-xs mx-2">
        <div class="flex items-center ml-2">
          <div class="flex mx-1">
            <i class="fa fa-star text-yellow-500 text-xs"></i>
          </div>
          <p class="mr-1 text-body-2 font-semibold">
            {{ star }}
          </p>
          <p class="mr-1 text-caption text-gray-400"></p>
        </div>
        <div class="flex items-center ml-2">
          <div class="flex color-300">
            <i class="fa fa-circle text-[7px] text-gray-300"></i>
          </div>
          <span
            class="inline-flex items-center mx-1 cursor-pointer text-cyan-500 font-semibold"
            >
            <!-- <span>{{ commentsCount }} دیدگاه</span> -->
            <span>0 دیدگاه</span>
            </span
          >
        </div>
      </div>

      <ul class="inline-flex mt-3 text-sm font-semibold mx-2">
        <li>
          <i class="fa fa-thumbs-up text-green-500 pl-2"></i>
          <!-- <span class="text-gray-600 font-light"
            >{{ darsadRezayat }}% ({{ tedadRezayatmandi }} نفر) از خریداران، این کالا را
            پیشنهاد کرده‌اند</span
          > -->
          <span class="text-gray-600 font-light"
            >0% (0 نفر) از خریداران، این کالا را
            پیشنهاد کرده‌اند</span
          >

          <!-- <div class="bg-gray-700 text-white rounded-lg p-4 max-w-sm leading-7 font-normal">خریداران کالا با انتخاب یکی از گزینه‌های پیشنهاد یا عدم پیشنهاد، تجربه خرید خود را با کاربران به اشتراک می‌گذارند.</div> -->

          <i class="fa fa-circle-info text-gray-500 pr-2"></i>
        </li>
      </ul>

      <div class="mb-4 mt-8" v-if="product.features.length != 0">
        <h3
          class="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize mx-2"
        >
          <span v-if="product.product_type == 'patterned'">طرح</span>
          <span v-if="product.product_type == 'colored'">رنگ</span>
          : {{ activeVariableName }}
        </h3>

        <!-- هنگامی که روی رنگ کلیک می شود روی رنگ چکمارک شود -->
        <ul class="flex flex-wrap relative z-0" v-if="product.product_type == 'colored'">
          <li
            class="mx-2 colorStyles"
            v-for="(feature, index) in product.features"
            :key="index"
            :style="{ 'border-color': activeVariable == index ? '#27c9d0' : '#c3c6c7' }"
            @click="do_change_variable(feature, index)"
          >
            <label
              for="color1"
              :style="{ 'background-color': feature.color.color }"
              class="w-9 h-9 rounded-full text-sm flex items-center justify-center transition-all relative cursor-pointer capitalize"
            ></label>
          </li>
        </ul>
        <ul
          class="flex flex-wrap relative z-0"
          v-if="product.product_type == 'patterned'"
        >
          <li
            class="mx-2 colorStyles"
            v-for="(feature, index) in product.features"
            :key="index"
            :style="{ 'border-color': activeVariable == index ? '#27c9d0' : '#c3c6c7' }"
            @click="do_change_variable(feature, index)"
          >
            <label
              for="color1"
              :style="{
                'background-size': 'cover',
                'background-image': `url(https://api.zekrimarket.com/storage/files_container/patterns/${feature.pattern.image})`,
              }"
              class="w-9 h-9 rounded-full text-sm flex items-center justify-center transition-all relative cursor-pointer capitalize"
            ></label>
          </li>
        </ul>
      </div>

      <div class="mb-4 mt-8 mx-2" v-if="product.properties.length != 0">
        <h3 class="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
          ویژگی‌ها
        </h3>
        <ul class="space-y-2">
          <li
            class="flex items-start mb-1"
            v-for="(property, index) in JSON.parse(product.properties).slice(0, 3)"
          >
            <span class="text-gray-500 font-medium flex items-start"
              >{{ property.properties_title }} : </span
            ><span class="font-medium text-sm pr-2">{{
              property.properties_description
            }}</span>
          </li>
        </ul>
      </div>

      <div class="radius my-3 border p-3 rounded-md">
        <div class="flex">
          <div class="flex mt-1">
            <i class="fa fa-circle-info text-gray-500 pr-2"></i>
          </div>
          <span class="mr-2 text-justify text-gray-400 text-sm"
            >درخواست مرجوع کردن کالا در گروه {{ product.categories[0].title }} با دلیل "انصراف از خرید" تنها در
            صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا
            نباید باز شده باشد).</span
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const props = defineProps(["product"]);
const emit = defineEmits(["changeVariable"]);

const activeVariableName = ref(null);
const activeVariable = ref(0);

const darsadRezayat = Math.floor(Math.random() * 100);
const tedadRezayatmandi = Math.floor(Math.random() * 100);
const star = parseFloat(Math.random() * 5).toFixed(1);
const commentsCount = Math.floor(Math.random() * 200);

onMounted(() => {
  if (props.product.features.length != 0) {
    do_change_variable(props.product.features[0], 0);
  }
});

const do_change_variable = (feature, index) => {
  activeVariableName.value = feature.variable_name;
  activeVariable.value = index;
  emit("changeVariable", feature);
};
</script>

<style>
.colorStyles {
  border: 3px solid #c3c6c7;
  border-radius: 100%;
  /* padding: 1px; */
  box-sizing: border-box !important;
  padding: 2px;
}
</style>
