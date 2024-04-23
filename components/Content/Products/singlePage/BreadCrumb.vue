<template>

<nav
      class="flex px-5 py-4 text-gray-700 border border-gray-200 rounded-lg bg-wite darker:bg-gray-800 darker:border-gray-700"
      aria-label="Breadcrumb">
      <ol class="inline-flex items-center">
        <li class="inline-flex items-center">
          <nuxt-link to="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 md:ml-2 hover:text-red-600 darker:text-gray-400 darker:hover:text-white">
            <i class="fa fa-angle-left w-3 h-3 ml-2.5 text-sm"></i>
            خانه
          </nuxt-link>
        </li>
        <li v-if="breadcrumb.parent != null">
          <div class="flex items-center">
            <i class="fa fa-angle-left w-3 h-3 ml-2.5 text-sm"></i>
            <a href="#"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-red-600 md:ml-2 darker:text-gray-400 darker:hover:text-white">{{ breadcrumb.parent.title }}</a>
          </div>
        </li>
        <li aria-current="page" v-if="breadcrumb.parent != null && breadcrumb.parent.parent != null">
          <div class="flex items-center">
            <i class="fa fa-angle-left w-3 h-3 ml-2.5 text-sm"></i>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 darker:text-gray-400">{{ breadcrumb.parent.parent.title }}</span>
          </div>
        </li>
        <li aria-current="page" v-if="breadcrumb.parent == null">
          <div class="flex items-center">
            <i class="fa fa-angle-left w-3 h-3 ml-2.5 text-sm"></i>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 darker:text-gray-400">{{ breadcrumb.title }}</span>
          </div>
        </li>
      </ol>
    </nav>
</template>

<script setup>
const props = defineProps(['breadcrumb'])
</script>