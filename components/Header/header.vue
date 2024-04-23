<template>
  <!-- ==================HEADER START================= -->
  <header class="header-section-wrapper relative shadow-md shadow-slate-200/50">
    <div
      class="bg-black/20 w-full h-full fixed right-0 top-0"
      :class="submenuStatus == false ? 'hidden' : ''"
      @click="submenuStatus = false"
    ></div>
    <TopMenu />
    <div
      class="w-full h-[65px] bg-white lg:block hidden z-20 fixed right-0 top-0 top-header border-b"
    >
      <div class="px-6 mx-auto h-full">
        <div class="relative h-full">
          <div class="flex justify-between items-center h-full">
            <Logo />
            <Search />
            <div class="flex gap-8 items-center">
              <LoginButton />
              <CartButton />
              <BookmarkButton />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <NavMenuMobile /> -->
    <NavMenuDesktop />
  </header>
  <!-- ==================HEADER START================= -->
</template>

<script>
import TopMenu from "@/components/Header/TopMenu/topmenu.vue";
import Logo from "@/components/Header/Logo/logo.vue";
import Search from "@/components/Header/Search/search.vue";
import LoginButton from "@/components/Header/LeftButtons/Account/login.vue";
import BookmarkButton from "@/components/Header/LeftButtons/Bookmark/bookmark.vue";
import CartButton from "@/components/Header/LeftButtons/Cart/cart.vue";
import NavMenuMobile from "@/components/Header/MenuMobile/NavMenuMobile.vue";
import NavMenuDesktop from "@/components/Header/megamenu/nav.vue";
export default {
  components: {
    TopMenu,
    Logo,
    Search,
    LoginButton,
    CartButton,
    BookmarkButton,
    NavMenuMobile,
    NavMenuDesktop,
  },
  data() {
    return {
      submenuStatus: false,
      blockmenuStatus: true,
      block2menuStatus: false,
      submenuStatus: false,
    };
  },
};
</script>
