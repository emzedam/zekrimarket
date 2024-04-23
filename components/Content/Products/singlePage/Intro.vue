<template>
    <div 
    :class="activeTab == 0 ? '' : 'hidden'"
    class="bg-white border border-t-0 rounded-b-lg shadow-sm h-full p-4" v-html="description">
          
        </div>
</template>

<script setup>
const props = defineProps(['activeTab' , 'description'])
</script>