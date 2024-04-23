<template>
    <div class="flex flex-col lg:flex-row lg:pt-8 pb-16 lg:pb-20">
        <div
            class="flex-shrink-0 hidden lg:block lg:w-80 xl:w-[350px] 2xl:w-96 lg:sticky lg:top-16 category-mobile-sidebar">
            <div class="border border-[#EFF2F4] shadow-vendorSidebar rounded-lg">
                <div class="flex flex-col pt-10 lg:pt-14 px-6">
                    <div class="text-center w-full border-b border-gray-base pb-8 px-5 sm:px-8 lg:px-0 2xl:px-7">
                        <div class="w-32 h-32 mx-auto border rounded-lg">
                            <img src="@/assets/Arzum_202301262152.webp">
                        </div>
                        <h2
                            class="text-skin-base mt-6 mb-1.5 text-[20px] xl:text-[20px] font-medium xl:leading-8 بخدف-سثئهذخمی">
                            ذکری مارکت</h2>
                        <p class="text-md leading-[1.85em] text-justify">فروش محصولات لوازم خانگی و آشئزخانه با برندهای اصل
                            و معتبر
                            <span role="button"
                                class="text-skin-primary ms-0.5 font-semibold block hover:text-skin-muted text-center">اطلاعات
                                بیشتر</span>
                        </p>
                        <div class="flex items-center flex-wrap justify-center space-s-2 pt-4 mt-0.5">
                            <i class="fa-brands fa-instagram text-xl ml-2 text-pink-600"></i>
                            <i class="fa-brands fa-whatsapp text-xl ml-2 text-green-600"></i>
                            <i class="fa-brands fa-telegram text-xl text-sky-500"></i>
                        </div>
                    </div>
                    <div class="space-y-6 py-7">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-10">
                                <i class="fa-duotone fa-map text-xl"></i>
                            </div>
                            <div class="-mt-1">
                                <h4 class="text-skin-base font-medium text-15px mb-1">آدرس:</h4>
                                <p class="text-md lg:leading-[27px]">خوی خیابان امام خمینی </p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-10">
                                <i class="fa-duotone fa-mobile text-xl"></i>
                            </div>
                            <div class="-mt-1">
                                <h4 class="text-skin-base font-medium text-15px mb-1">شماره تماس:</h4>
                                <p class="text-md lg:leading-[27px] font-en ltr">+989142766601</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-10">
                                <i class="fa-duotone fa-browser text-xl"></i>
                            </div>
                            <div class="-mt-1">
                                <h4 class="text-skin-base font-medium text-15px mb-1">وبسایت</h4>
                                <p class="text-md lg:leading-[27px]"><a href=""
                                        class="text-[#0077E5] hover:text-skin-muted font-en ltr">petoman.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:ps-7 mt-4 lg:mt-0">
            <div class="border rounded-lg w-full">

                <div class="flex items-center border-b gap-4 lg:hidden px-4">
                    <div class="relative">
                        <div class="break-words py-3 ">
                            <div class="flex items-center grow-1 relative">
                                <div class="flex shrink-0 ml-2 relative">
                                    <i class="fa fa-sliders text-xl"></i>
                                    <span
                            class="bg-red-500 rounded-full absolute right-0 -top-[2px] w-2 h-2"></span>
                                </div>
                                <p class="grow-1 pointer text-subtitle-strong whitespace-nowrap color-700 font-semibold">فیلتر</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row items-center gap-x-4 grow-1">
                        <div class="break-words py-3">
                            <div class="flex items-center grow-1">
                                <div class="flex shrink-0 ml-2" data-cro-id="plp-sort-icon">
                                   <i class="fa fa-arrow-down-wide-short text-xl"></i>
                                </div>
                                <p class="grow-1 pointer whitespace-nowrap color-700 font-semibold">پربازدیدترین</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="flex items-center justify-between mb-4 w-full m">
                    <div class="lg:flex hidden items-center border-b gap-4  px-6 py-2 w-full overflow-hidden ">
                        <div class="flex flex-row items-center gap-x-4 grow-1 w-full overflow-y-auto">
                            <div class="break-words py-3 ">
                                <div class="flex items-center grow-1">
                                    <div class="flex shrink-0 ml-2">
                                        <i class="fa fa-arrow-down-wide-short"></i>
                                    </div>
                                    <p class="grow-1 cursor-pointer whitespace-nowrap text-gray-700 text-body2-strong">مرتب
                                        سازی:</p>
                                </div>
                            </div>
                            <div class="header-sort contents w-full font-medium"><span
                                    class="cursor-pointer whitespace-nowrap font-semibold text-red-500">پربازدیدترین</span><span
                                    class="cursor-pointer whitespace-nowrap text-md text-gray-500">جدیدترین</span><span
                                    class="cursor-pointer whitespace-nowrap text-md text-gray-500">پرفروش‌ترین‌</span><span
                                    class="cursor-pointer whitespace-nowrap text-md text-gray-500">ارزان‌ترین</span><span
                                    class="cursor-pointer whitespace-nowrap text-md text-gray-500">گران‌ترین</span><span
                                    class="cursor-pointer whitespace-nowrap text-md text-gray-500">سریع‌ترین
                                    ارسال</span><span class="cursor-pointer whitespace-nowrap text-md text-gray-500">پیشنهاد
                                    خریداران</span></div>
                            <div class="mr-auto d-block"><span
                                    class="text-cyan-500 font-semibold whitespace-nowrap text-md ellispis-1 xl:flex items-center gap-2">۱۰
                                    کالا</span></div>
                        </div>
                    </div>

                </div>
                <div
                    class="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 md:gap-4 2xl:gap-5  p-3">
                    <article
                        class="flex flex-col product-card relative card-image--jump px-2 sm:px-3  h-full border rounded-lg"
                        title="">
                        <div class="relative flex-shrink-0  mt-4">
                            <div class="card-img-container overflow-hidden max-w-full mx-auto relative">
                                <div>

                                    <img alt="" class="w-full"
                                        src="https://demos.mahdisweb.net/fashion/wp-content/uploads/2020/02/enamad_logo.png">

                                </div>
                            </div>
                            <div class="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 z-10 -mx-0.5 sm:-mx-1"><button
                                    class="buttons--quickview px-4 py-2 bg-skin-inverted rounded-full hover:bg-skin-primary hover:text-skin-inverted"
                                    aria-label="Quick View Button"></button></div>
                        </div>
                        <div class="flex flex-col mb-2 h-full overflow-hidden text-center relative">
                            <div class="text-md mt-auto leading-6 text-gray-400 mb-1.5">لوازم آشپزخانه</div><a
                                class="text-skin-base text-md leading-5  line-clamp-2 mb-2 hover:text-skin-primary"
                                href="">هیتر برقی گلد کیش</a>
                            <div class="space-s-2 mb-4 lg:mb-4"><span
                                    class="inline-block font-semibold text-15px lg:text-base text-skin-primary">1250000
                                    تومان</span></div>
                            <div class="inline-block product-cart-button"><button
                                    class="min-w-[150px] px-4 py-2 bg-red-500 rounded-full  text-white text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
                                    aria-label="Count Button">جزئیات بیشتر</button></div>
                        </div>
                    </article>

                    <article
                        class="flex flex-col product-card relative card-image--jump px-2 sm:px-3  h-full border rounded-lg"
                        title="">
                        <div class="relative flex-shrink-0  mt-4">
                            <div class="card-img-container overflow-hidden max-w-full mx-auto relative">
                                <div>

                                    <img alt="" class="w-full"
                                        src="https://demos.mahdisweb.net/fashion/wp-content/uploads/2020/02/enamad_logo.png">

                                </div>
                            </div>
                            <div class="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 z-10 -mx-0.5 sm:-mx-1"><button
                                    class="buttons--quickview px-4 py-2 bg-skin-inverted rounded-full hover:bg-skin-primary hover:text-skin-inverted"
                                    aria-label="Quick View Button"></button></div>
                        </div>
                        <div class="flex flex-col mb-2 h-full overflow-hidden text-center relative">
                            <div class="text-md mt-auto leading-6 text-gray-400 mb-1.5">لوازم آشپزخانه</div><a
                                class="text-skin-base text-md leading-5  line-clamp-2 mb-2 hover:text-skin-primary"
                                href="">هیتر برقی گلد کیش</a>
                            <div class="space-s-2 mb-4 lg:mb-4"><span
                                    class="inline-block font-semibold text-15px lg:text-base text-skin-primary">1250000
                                    تومان</span></div>
                            <div class="inline-block product-cart-button"><button
                                    class="min-w-[150px] px-4 py-2 bg-red-500 rounded-full  text-white text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
                                    aria-label="Count Button">جزئیات بیشتر</button></div>
                        </div>
                    </article>

                    <article
                        class="flex flex-col product-card relative card-image--jump px-2 sm:px-3  h-full border rounded-lg"
                        title="">
                        <div class="relative flex-shrink-0  mt-4">
                            <div class="card-img-container overflow-hidden max-w-full mx-auto relative">
                                <div>

                                    <img alt="" class="w-full"
                                        src="https://demos.mahdisweb.net/fashion/wp-content/uploads/2020/02/enamad_logo.png">

                                </div>
                            </div>
                            <div class="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 z-10 -mx-0.5 sm:-mx-1"><button
                                    class="buttons--quickview px-4 py-2 bg-skin-inverted rounded-full hover:bg-skin-primary hover:text-skin-inverted"
                                    aria-label="Quick View Button"></button></div>
                        </div>
                        <div class="flex flex-col mb-2 h-full overflow-hidden text-center relative">
                            <div class="text-md mt-auto leading-6 text-gray-400 mb-1.5">لوازم آشپزخانه</div><a
                                class="text-skin-base text-md leading-5  line-clamp-2 mb-2 hover:text-skin-primary"
                                href="">هیتر برقی گلد کیش</a>
                            <div class="space-s-2 mb-4 lg:mb-4"><span
                                    class="inline-block font-semibold text-15px lg:text-base text-skin-primary">1250000
                                    تومان</span></div>
                            <div class="inline-block product-cart-button"><button
                                    class="min-w-[150px] px-4 py-2 bg-red-500 rounded-full  text-white text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
                                    aria-label="Count Button">جزئیات بیشتر</button></div>
                        </div>
                    </article>

                    <article
                        class="flex flex-col product-card relative card-image--jump px-2 sm:px-3  h-full border rounded-lg"
                        title="">
                        <div class="relative flex-shrink-0  mt-4">
                            <div class="card-img-container overflow-hidden max-w-full mx-auto relative">
                                <div>

                                    <img alt="" class="w-full"
                                        src="https://demos.mahdisweb.net/fashion/wp-content/uploads/2020/02/enamad_logo.png">

                                </div>
                            </div>
                            <div class="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 z-10 -mx-0.5 sm:-mx-1"><button
                                    class="buttons--quickview px-4 py-2 bg-skin-inverted rounded-full hover:bg-skin-primary hover:text-skin-inverted"
                                    aria-label="Quick View Button"></button></div>
                        </div>
                        <div class="flex flex-col mb-2 h-full overflow-hidden text-center relative">
                            <div class="text-md mt-auto leading-6 text-gray-400 mb-1.5">لوازم آشپزخانه</div><a
                                class="text-skin-base text-md leading-5  line-clamp-2 mb-2 hover:text-skin-primary"
                                href="">هیتر برقی گلد کیش</a>
                            <div class="space-s-2 mb-4 lg:mb-4"><span
                                    class="inline-block font-semibold text-15px lg:text-base text-skin-primary">1250000
                                    تومان</span></div>
                            <div class="inline-block product-cart-button"><button
                                    class="min-w-[150px] px-4 py-2 bg-red-500 rounded-full  text-white text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
                                    aria-label="Count Button">جزئیات بیشتر</button></div>
                        </div>
                    </article>

                    <article
                        class="flex flex-col product-card relative card-image--jump px-2 sm:px-3  h-full border rounded-lg"
                        title="">
                        <div class="relative flex-shrink-0  mt-4">
                            <div class="card-img-container overflow-hidden max-w-full mx-auto relative">
                                <div>

                                    <img alt="" class="w-full"
                                        src="https://demos.mahdisweb.net/fashion/wp-content/uploads/2020/02/enamad_logo.png">

                                </div>
                            </div>
                            <div class="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 z-10 -mx-0.5 sm:-mx-1"><button
                                    class="buttons--quickview px-4 py-2 bg-skin-inverted rounded-full hover:bg-skin-primary hover:text-skin-inverted"
                                aria-label="Quick View Button"></button></div>
                    </div>
                    <div class="flex flex-col mb-2 h-full overflow-hidden text-center relative">
                        <div class="text-md mt-auto leading-6 text-gray-400 mb-1.5">لوازم آشپزخانه</div><a
                            class="text-skin-base text-md leading-5  line-clamp-2 mb-2 hover:text-skin-primary"
                            href="">هیتر برقی گلد کیش</a>
                        <div class="space-s-2 mb-4 lg:mb-4"><span
                                class="inline-block font-semibold text-15px lg:text-base text-skin-primary">1250000
                                تومان</span></div>
                        <div class="inline-block product-cart-button"><button
                                class="min-w-[150px] px-4 py-2 bg-red-500 rounded-full  text-white text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
                                aria-label="Count Button">جزئیات بیشتر</button></div>
                    </div>
                </article>

            </div>
        </div>
    </div>
</div></template>