<template>
    <div
    :class="activeTab == 3 ? '' : 'hidden'"
    class="bg-white border border-t-0 rounded-b-lg shadow-sm h-full p-4"
    >
        <div class="w-full h-[400px] bg-gray-50 py-10 px-10 rounded-lg flex items-center justify-center">
            <div class="w-full bg-gray-200 h-full rounded-lg lg:max-w-xl mx-auto">
                <video class="w-full h-full" controls>
                    <source :src="`https://api.zekrimarket.com/storage/products/videos/${videoName}`" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["activeTab" , "videoName"]);
</script>