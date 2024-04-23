<template>
  <div class="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
    <div class="w-full h-full flex justify-between items-center px-5">
      <nuxt-link to="/auth/login">
        <i class="fa-light fa-user text-2xl text-gray-500"></i>
      </nuxt-link>

      <NuxtLink to="/"
        ><img width="152" height="36" src="/logo.png" alt="logo"
      /></NuxtLink>

      <div class="cart relative cursor-pointer">
        <a href="javascript:void(0)"
          ><span>
            <i class="fa-light fa-question-circle text-2xl text-gray-500"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
