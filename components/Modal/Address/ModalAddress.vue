<template>
  <!--  ویرایش آدرس مدال-->
  <div
    class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
  >
    <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
    <div
      class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-[500px] max-w-3xl bg-white m-auto inset-0 w-full"
    >
      <button
        type="button"
        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <i class="text-lg fa fa-times"></i>
      </button>
      <div
        class="text-right flex-col items-center pr-8 py-4 border-b w-full justify-start"
      >
        <div class="info">
          <h3 class="text-xl font-semibold block text-gray-500">ویرایش آدرس</h3>
        </div>
        <span class="text-gray-400">موقعیت مکانی آدرس را مشخص کنید.</span>
      </div>
      <div
        class="modal-body font-fa relative overflow-hidden h-full bg-white rounded-b-lg"
      >
        <form class="relative z-10 px-6 py-6">
          <div class="relative">
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
            >
              <i class="fa fa-search text-xl text-gray-400"></i>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-5 pr-12 text-md font-semibold text-gray-600 border-0 shadow-md border-gray-300 rounded-lg bg-white focus:ring-transparent focus:border-transparent placeholder:text-gray-400/60"
              placeholder="جستجوی آدرس"
              required
            />
          </div>
        </form>

        <MapboxMap
          class="h-full w-full rounded-b-lg"
          map-id="{ID}"
          :options="{
            style: 'mapbox://styles/babaweb/ck8w1rzep1hb61in1d9lb01qx', // style URL
            center: [38.552655, 44.929126], // starting position
            zoom: 5, // starting zoom
          }"
        />

        <div class="absolute bottom-0 w-full">
          <div
            class="flex items-center justify-between w-full bg-white p-4 relative z-10 rounded-b-lg"
          >
            <div class="text-gray-500 items-center">
              مرسوله‌های شما به این موقعیت ارسال خواهد شد.
            </div>
            <button
              class="btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white flex items-center justify-between rounded-lg z-10 w-48 font-semibild text-lg"
            >
              تایید و ادامه <i class="fa-solid fa-chevron-left pl-2 text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ویرایش شغل -->
</template>
