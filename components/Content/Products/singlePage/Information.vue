<template>
    <div 
    :class="activeTab == 1 ? '' : 'hidden'"
    class="bg-white border border-t-0 rounded-b-lg shadow-sm h-full p-4">
          <ul v-if="properties.length != 0" class="grid lg:grid-cols-12 items-center" v-for="(item , index) in JSON.parse(properties)" :key="index">
            <li class="flex items-center p-4 lg:col-span-3 font-semibold border-l border-b">{{ item.properties_title }}</li>
            <li class="font-en flex items-center p-4 lg:col-span-9 border-b text-gray-400">{{ item.properties_description }}</li>
          </ul>
        </div>
</template>

<script setup>
const props = defineProps(['activeTab' , 'properties'])
</script>