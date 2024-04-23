<template>
  <div class="container-fluid">
    <div class="h-screen md:overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-12">
        <div class="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3 relative z-50">
          <div class="w-full bg-white xl:p-12 p-10 dark:bg-zinc-800">
            <div class="flex h-[90vh] flex-col">
              <div class="mx-auto">
                <a href="/" class="">
                  <img src="../../assets/logo.png" alt="" class="h-8 inline" />
                </a>
              </div>

              <div class="lg:my-auto my-8">
                <form class="mt-4 pt-2" action="/">
                  <div class="mb-4">جهت تغییر رمز عبور شماره موبایل خود را کنید</div>

                  <div
                    class="mb-3 relative rounded-md border border-gray-300 dark:border-gray-400 px-3 py-3 shadow-sm focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600"
                  >
                    <label
                      for="name"
                      class="absolute -top-2 right-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900 dark:bg-zinc-800 dark:text-gray-400"
                      >شماره موبایل</label
                    >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm pl-8 text-left dark:bg-zinc-800"
                      placeholder=" موبایل را وارد کنید"
                    />

                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <i class="fa-thin fa-mobile text-gray-400"></i>
                    </div>
                  </div>

                  <div class="mb-3">
                    <nuxt-link to="/auth/verify">
                      <button
                        class="btn border-transparent bg-red-500 dark:bg-gray-700 dark:text-gray-400 w-full py-2.5 text-white w-100 waves-effect waves-light shadow-md shadow-red-200 dark:shadow-zinc-600/10 rounded-lg"
                        type="submit"
                      >
                        احراز هویت
                      </button>
                    </nuxt-link>
                  </div>
                </form>
              </div>

              <div class="text-center">
                <p class="text-gray-500 dark:text-gray-100 relative mb-5">© alish</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9 hidden lg:block"
        >
          <div
            class="h-screen bg-cover relative p-5 bg-[url('../../assets/auth-bg.jpg')]"
          >
            <div class="absolute inset-0 bg-red-500/90"></div>

            <ul
              class="bg-bubbles absolute top-0 left-0 w-full h-full overflow-hidden animate-square"
            >
              <li class="h-10 w-10 rounded-3xl bg-white/10 absolute left-[10%]"></li>
              <li class="h-28 w-28 rounded-3xl bg-white/10 absolute left-[20%]"></li>
              <li class="h-10 w-10 rounded-3xl bg-white/10 absolute left-[25%]"></li>
              <li class="h-20 w-20 rounded-3xl bg-white/10 absolute left-[40%]"></li>
              <li class="h-24 w-24 rounded-3xl bg-white/10 absolute left-[70%]"></li>
              <li class="h-32 w-32 rounded-3xl bg-white/10 absolute left-[70%]"></li>
              <li class="h-36 w-36 rounded-3xl bg-white/10 absolute left-[32%]"></li>
              <li class="h-20 w-20 rounded-3xl bg-white/10 absolute left-[55%]"></li>
              <li class="h-12 w-12 rounded-3xl bg-white/10 absolute left-[25%]"></li>
              <li class="h-36 w-36 rounded-3xl bg-white/10 absolute left-[90%]"></li>
            </ul>

            <div class="grid grid-cols-12 content-center h-screen">
              <div class="col-span-8 col-start-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth-layout",
  middleware: "guest",
});
</script>

<style></style>
