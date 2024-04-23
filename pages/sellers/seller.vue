<template>
    <main class="lg:py-16 mx-auto wp-full px-6 lg:my-10 my-4 py-4">
       <SellerHeader />
    <Seller/> 
    </main>

   </template>
   
   
   <script>
   import Seller from "@/components/Seller/SellerInfo.vue";
   import SellerHeader from "@/components/Seller/SellerHeader.vue";
   export default {
   
     components: {
        Seller,SellerHeader
     },
   
   };
   </script>