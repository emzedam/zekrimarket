<template>
<NavMobile/>
  <footer class="footer-section-wrapper bg-white print:hidden border-t hidden lg:block">
    <div class="block pt-8">
      <div class="lg:flex justify-between mb-[20px] container-x block mx-auto">
        <div class="lg:w-[424px] ml-0 w-full mb-10 lg:mb-0">
          <h1 class="text-[18] font-500 text-[#2F2F2F] mb-5 ">پل های ارتباطی</h1>


          <div class="address">
            <ul class="space-y-6">
              <li class="flex items-center gap-4"> <i class="fa-light fa-map text-gray-500"></i> <span>خوی - خیابان شریعتی - پاساژ مستضعفان - طبقه همکف</span></li>
              <li class="flex items-center gap-2"><i class="fa-light fa-phone text-gray-500"></i> ۳۶۲۳۴۷۴۸<span><span
                    class="font-bold text-red-500">044</span></span> </li>
              <li class="flex items-center gap-2">
                <i class="fa-light fa-mobile text-gray-500"></i> 09143611624 <span></span> 
              </li>
              <li class="flex items-center gap-4"><i
                  class="fa-light fa-envelope text-gray-500"></i>info@zekrimarket.com<span></span> </li>
            </ul>
          </div>
        </div>
        <div class="flex-1 lg:flex">

          <div class="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
            <div>
              <div class="mb-5">
                <h6 class="text-[18] font-500 text-[#2F2F2F]">راهنمای خرید</h6>
              </div>
              <div>
                <ul class="flex flex-col space-y-4">
                  <li>
                    <nuxt-link to="/page/سوالات-متداول"><span
                        class="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        سوالات متداول</span></nuxt-link>
                  </li>
                  <li>
                    <a href="/tracking-order"><span
                        class="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">رویه
                        بازگردانی کالا</span></a>
                  </li>
                  <li>
                    <a href="/become-saller"><span
                        class="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">حریم
                        خصوصی</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
            <div>
              <div class="mb-5">
                <h6 class="text-[18] font-500 text-[#2F2F2F]">خدمات مشتریان</h6>
              </div>
              <div>
                <ul class="flex flex-col space-y-4">
                  <li>
                    <a href="/flash-sale"><span
                        class="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">وبلاگ</span></a>
                  </li>
                  <li>
                    <nuxt-link to="page/تماس-با-ما"><span
                        class="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">ارتباط
                        با ما</span></nuxt-link>
                  </li>
                  <li>
                    <a href="/about"><span
                        class="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">سفارش</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 w-full mb-10 lg:mb-0">
            <div class="mb-5">
              <h6 class="text-[18] font-500 text-[#2F2F2F]">اعتماد شما افتخار ماست</h6>
            </div>
            <div>
              <ul class="flex gap-4">
                <li class="border  rounded-lg flex  items-center justify-center">
                  <a href="javascript:void(0)"><img
                      src="https://demos.mahdisweb.net/fashion/wp-content/uploads/2020/02/enamad_logo.png"
                      class="p-2"></a>
                </li>
                <li class="border  rounded-lg flex items-center justify-center">
                  <a href="javascript:void(0)"><img
                      src="https://demos.mahdisweb.net/fashion/wp-content/uploads/2020/02/samandehi_logo.png"
                      class="p-2"></a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-qgray-border"></div>

    <div class="bottom-barlg:h-[82px] lg:flex justify-between items-center  container-x  mx-auto p-8">
      <div class="flex justify-between items-center">
        <span class="sm:text-base text-[10px] text-qgray font-300">کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد و
          هرگونه کپی برداری شامل
          پیگرد قانونی می باشد.</span>
      </div>
      <div class="">
        <div class="flex space-x-5 items-center">
          <a href="#">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="fill-current text-qgray hover:text-qblack"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.1016 4.90039C12.6538 4.90039 13.1016 4.45268 13.1016 3.90039C13.1016 3.34811 12.6538 2.90039 12.1016 2.90039C11.5493 2.90039 11.1016 3.34811 11.1016 3.90039C11.1016 4.45268 11.5493 4.90039 12.1016 4.90039Z">
              </path>
              <path
                d="M8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6Z">
              </path>
              <path
                d="M12 16H4C1.9 16 0 14.1 0 12V4C0 1.9 1.9 0 4 0H12C14.1 0 16 1.9 16 4V12C16 14.1 14.1 16 12 16ZM4 2C3.1 2 2 3.1 2 4V12C2 13 3 14 4 14H12C12.9 14 14 12.9 14 12V4C14 3.1 12.9 2 12 2H4Z">
              </path>
            </svg></a><a href="#"><svg width="10" height="16" viewBox="0 0 10 16" fill="none"
              class="fill-current text-qgray hover:text-qblack" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z">
              </path>
            </svg></a><a href="#"><svg width="16" height="12" viewBox="0 0 16 12" fill="none"
              class="fill-current text-qgray hover:text-qblack" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.8 2.8C15.6 1.5 15 0.6 13.6 0.4C11.4 8.9407e-08 8 0 8 0C8 0 4.6 8.9407e-08 2.4 0.4C1 0.6 0.3 1.5 0.2 2.8C0 4.1 0 6 0 6C0 6 0 7.9 0.2 9.2C0.4 10.5 1 11.4 2.4 11.6C4.6 12 8 12 8 12C8 12 11.4 12 13.6 11.6C15 11.3 15.6 10.5 15.8 9.2C16 7.9 16 6 16 6C16 6 16 4.1 15.8 2.8ZM6 9V3L11 6L6 9Z">
              </path>
            </svg>

          </a>

        </div>
      </div>
    </div>
</footer>
</template>
<script>
import NavMobile from "./mobile/nav.vue";
import Sidebar from "./mobile/sidebar.vue";

export default {

    components: {
      NavMobile,Sidebar
    },

};

</script>

