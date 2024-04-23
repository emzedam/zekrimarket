<template>
    <div class="pt-10 lg:pt-12 xl:pt-28 pb-14 lg:pb-16 xl:pb-20 px-4 md:px-8">
        <div class="w-full  mx-auto">
            <div class="header flex items-center justify-start text-xl font-semibold mb-8">
                <i class="fa-duotone fa-store text-red-500"></i>
                            <h2 class="text-skin-base pr-2">لیست فروشگاه ها</h2>
                           
            </div>


        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 xl:gap-6">
            <a
                class="flex items-center px-5 xl:px-7 py-5 xl:py-7 border  rounded-lg  cursor-pointer relative bg-white transition-all hover:bg-gray-50 duration-300"
                href="/sellers/seller">
                <div
                    class="relative flex flex-shrink-0 items-center justify-center bg-sky-500 rounded-md border overflow-hidden w-16 xl:w-20 h-16 xl:h-20">
            
                        <img alt="text-logo" src="@/assets/Altus_202301262144.webp">
                    
                </div>
                <div class="flex flex-col ms-4 xl:ms-5">
                    <h3 class="flex items-center justify-between pb-1.5 text-base lg:text-[21px] lg:leading-7 font-medium text-cyan-500 w-full">
                        <span>فروشگاه اتابک</span>
                        <span><i class="fa fa-badge-check text-blue-500 text-sm pr-1"></i></span>
                    </h3>
                    <p class="text-sm lg:leading-[27px] xl:leading-6">تهران خیابان ولیعصر</p>
                </div>
            </a>

            <a
                class="flex items-center px-5 xl:px-7 py-5 xl:py-7 border  rounded-lg  cursor-pointer relative bg-white transition-all hover:bg-gray-50 duration-300"
                href="/sellers/seller">
                <div
                    class="relative flex flex-shrink-0 items-center justify-center bg-sky-500 rounded-md border overflow-hidden w-16 xl:w-20 h-16 xl:h-20">
            
                        <img alt="text-logo" src="@/assets/ArcElik_202301262144.webp">
                    
                </div>
                <div class="flex flex-col ms-4 xl:ms-5">
                    <h3 class="flex items-center justify-between pb-1.5 text-base lg:text-[21px] lg:leading-7 font-medium text-cyan-500 w-full">
                        <span>فروشگاه جم کالا</span>
                        <span><i class="fa fa-badge-check text-blue-500 text-sm pr-1"></i></span>
                    </h3>
                    <p class="text-sm lg:leading-[27px] xl:leading-6">تهران خیابان ولیعصر</p>
                </div>
            </a>
          
        </div>
    </div>
</div></template>