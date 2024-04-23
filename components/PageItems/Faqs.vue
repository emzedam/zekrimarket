<template>
  <div
    id="accordion-collapse"
    v-if="faqsList.length != 0"
    data-accordion="collapse"
    class="mb-8"
  >
    <div class="w-full" v-for="(faq, index) in faqsList" :key="index">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          @click="activeIndex == index ? (activeIndex = null) : (activeIndex = index)"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <span>{{ faq.question }}</span>
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        :class="activeIndex != index ? 'hidden' : ''"
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div
          class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
        >
          <p>{{ faq.response }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["faqsList"]);
const activeIndex = ref(null);
</script>

<style scoped></style>
