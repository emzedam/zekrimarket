<template>
  <div
    class="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24"
    id="headlessui-dialog-16"
    role="dialog"
    aria-modal="true"
    data-headlessui-state="open"
  >
    <div
      class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100"
    ></div>
    <div
      class="relative w-full max-w-lg transform px-4 transition-all opacity-100 scale-100"
    >
      <div class="overflow-hidden rounded-lg bg-white shadow-md">
        <div class="relative">
          <input
            class="block w-full appearance-none py-4 pr-4 pl-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6 border border-gray-100 bg-none rounded-lg"
            placeholder="جستجو..."
            type="text"
            value=""
          />

          <i
            class="pointer-events-none absolute left-4 top-4 text-2xl h-6 w-6 text-slate-400 fa-regular fa-search"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>
