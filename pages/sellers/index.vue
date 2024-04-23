<template>
     <div class="bg-white border border-t-0 rounded-b-lg shadow-sm h-full px-6">
    <ShopInfo/>
    <Products />
    </div>
    </template>
    
    <script>
    import ShopInfo from "@/components/Seller/ShopInfo.vue";
    import Products from "@/components/Seller/Products.vue";
    export default {
    
      components: {
          Products,ShopInfo
      },
    
    };
    </script>