<template>
  <div class="border rounded-lg py-8 bg-white mb-6 relative">
    <nuxt-link to="/" class="w-full flex justify-center pb-12">
      <img src="@/assets/logo.png" class="w-40" />
    </nuxt-link>

    <ul
      class="nav w-full flex flex-wrap text-sm font-medium text-center text-gray-500 py-5 darker:text-gray-400"
    >
      <li class="nav-item flex-grow relative">
        <nuxt-link
          to="/checkout/cart"
          class="nav-link group active"
          data-tw-toggle="tab"
          data-tw-target="seller-details"
        >
          <div
            class="bg-white border border-gray-100 inline-block h-14 w-14 rounded-full darker:bg-transparent darker:border-gray-1000/30 group-[.active]:border-red-500"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="سبد خرید"
          >
            <i class="fa fa-cart-shopping text-22 !leading-[2.5] text-red-500"></i>
          </div>
        </nuxt-link>
        <div
          class="after:content-[''] after:absolute after:w-[75%] after:h-[2px] after:bg-red-400 after:right-[62%] after:top-[50%] sm:block hidden after:darker:bg-zinc-700"
        ></div>
      </li>
      <li class="nav-item flex-grow relative">
        <nuxt-link
          to="/checkout/shipping"
          class="nav-link group active"
          data-tw-toggle="tab"
          data-tw-target="company-document"
        >
          <div
            class="bg-white border border-gray-100 inline-block h-14 w-14 rounded-full darker:bg-transparent darker:border-gray-1000/30 group-[.active]:border-red-500"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="زمان و نحوه ارسال"
          >
            <i class="fa fa-truck-fast text-22 !leading-[2.5] text-red-500"></i>
          </div>
        </nuxt-link>
        <div
          class="after:content-[''] after:absolute after:w-[75%] after:h-[2px] after:bg-gray-100 after:right-[62%] after:top-[50%] sm:block hidden after:darker:bg-zinc-700"
        ></div>
      </li>
      <li class="nav-item flex-grow">
        <a
          href="javascript:void(0)"
          class="nav-link group"
          data-tw-toggle="tab"
          data-tw-target="bank-detail"
        >
          <div
            class="bg-white border border-gray-100 inline-block h-14 w-14 rounded-full darker:bg-transparent darker:border-gray-1000/30 group-[.active]:border-red-500"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="پرداخت"
          >
            <i class="fa fa-credit-card text-22 !leading-[2.5] text-red-500"></i>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
