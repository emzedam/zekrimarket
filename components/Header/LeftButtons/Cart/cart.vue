<template>
    <div class="cart-wrapper group relative py-4">
        <div class="cart relative cursor-pointer">
            <nuxt-link to="/checkout/cart" class="flex items-center">
                <span class="relative">
                    <i class="fa-light fa-bag-shopping text-xl text-gray-700"></i>
                    <span
                        class="w-[18px] h-[18px] rounded-full absolute -top-3 -left-3 flex justify-center items-center text-[9px] bg-red-500 text-white">{{ basketInfo.count }}</span>
                </span>
                <span class="text-sm mr-2 text-gray-600 font-semibold"> سبد خرید </span>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>

import {useMarketStore} from '@/store/marketStore';
import { storeToRefs } from 'pinia'
const marketStore = useMarketStore()
const { basketInfo } = storeToRefs(marketStore)

</script>