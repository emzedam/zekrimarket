<template>
    <!-- ==================TOP MENU START================= -->
    <div class="w-full bg-white h-10 border-b border-gray-100 quomodo-shop-top-bar z-20 relative hidden">
      <div class="px-6 mx-auto h-full">
        <div class="flex justify-between items-center h-full">
      <MenuDropDown/>
      <languageDrodown/>
        </div>
      </div>
    </div>
   <!-- ==================TOP MENU END================= -->
</template>

<script>
import MenuDropDown from "@/components/Header/TopMenu/menuDropdown.vue";
import languageDrodown from "@/components/Header/TopMenu/languageDrodown.vue";
export default {

  components: {
    MenuDropDown,languageDrodown
  },

}
</script>