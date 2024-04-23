<template>
  <!-- اطلاعات شناسایی -->
  <div
    :class="activemodal == 'personalinfo' ? '' : 'hidden'"
    class="fixed top-0 p-4 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
  >
    <div
      @click="reset_modals()"
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
    ></div>
    <div
      class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full"
    >
      <button
        type="button"
        @click="reset_modals()"
        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <i class="text-lg fa fa-times"></i>
      </button>
      <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
        <div class="info">
          <h3 class="text-xl font-semibold block text-gray-500">ثبت اطلاعات شناسایی</h3>
        </div>
      </div>
      <div class="modal-body font-fa mx-2 px-6 my-4">
        <p class="py-2 font-medium text-gray-700">
          لطفا اطلاعات شناسایی خود را وارد کنید. نام و نام خانوادگی شما باید با اطلاعاتی
          که وارد می‌کنید همخوانی داشته باشند.
        </p>
        <div class="grid grid-cols-1 gap-6">
          <div class="relative">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              ><span>نام</span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 curdor-pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-user text-red-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-red-500 focus:ring-red-500 sm:text-sm py-4"
                  placeholder="نام"
                  v-model="personalinfo.fullname"
                  @keyup.enter="do_edit_user_personal_info()"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          v-if="sendRequestLoading == false"
          @click="do_edit_user_personal_info()"
          class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-8 flex items-center rounded-lg justify-center"
        >
          <i class="fa-solid fa-edit pl-2 text-xl"></i> ویرایش
        </button>
        <button
          v-if="sendRequestLoading == true"
          class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-8 flex items-center rounded-lg justify-center"
        >
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
    </div>
  </div>
  <!-- اطلاعات شناسایی -->

  <!-- کد ملی -->
  <div
    :class="activemodal == 'codemelli' ? '' : 'hidden'"
    class="fixed top-0 p-4 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
  >
    <div
      @click="reset_modals()"
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
    ></div>
    <div
      class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full"
    >
      <button
        @click="reset_modals()"
        type="button"
        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <i class="text-lg fa fa-times"></i>
      </button>
      <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
        <div class="info">
          <h3 class="text-xl font-semibold block text-gray-500">ثبت کد ملی</h3>
        </div>
      </div>
      <div class="modal-body font-fa mx-2 px-6 my-4">
        <div class="gap-6">
          <div class="relative col-span-4 sm:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              ><span>کد ملی</span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-id-card text-red-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-red-500 focus:ring-red-500 sm:text-sm py-4"
                  placeholder="کد ملی "
                  v-model="codemelliData.codemelli"
                  @keyup.enter="do_edit_user_codemelli()"
                />
              </div>
            </div>
          </div>

          <button
            v-if="sendRequestLoading == false"
            @click="do_edit_user_codemelli()"
            class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center justify-center border rounded-lg"
          >
            <i class="fa-solid fa-edit pl-2 text-xl"></i> ویرایش
          </button>
          <button
            v-if="sendRequestLoading == true"
            class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center justify-center border rounded-lg"
          >
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- کد ملی -->

  <!-- ویرایش شماره موبایل -->
  <div
    :class="activemodal == 'mobile' ? '' : 'hidden'"
    class="fixed top-0 p-4 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
  >
    <div
      @click="reset_modals()"
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
    ></div>
    <div
      class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full"
    >
      <button
        @click="reset_modals()"
        type="button"
        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <i class="text-lg fa fa-times"></i>
      </button>
      <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
        <div class="info">
          <h3 class="text-xl font-semibold block text-gray-500">ویرایش شماره موبایل</h3>
        </div>
      </div>
      <div class="modal-body font-fa mx-2 px-6 my-4">
        <div class="gap-6">
          <div class="relative col-span-4 sm:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              ><span>شماره موبایل</span></label
            >
            <div class="mt-1 input">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-mobile text-red-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="number"
                  v-model="mobileData.mobile"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-red-500 focus:ring-red-500 sm:text-sm py-3"
                  placeholder="شماره موبایل"
                  @keyup.enter="change_user_mobile()"
                />
              </div>
              <div class="py-2 radius mt-3 pr-0">
                <div class="flex">
                  <div class="flex mt-1">
                    <i class="fa fa-info-circle text-gray-500"></i>
                  </div>
                  <span class="mr-4 text-body-1 text-gray-500"
                    >برای ثبت این شماره باید آن را تایید کنید.</span
                  >
                </div>
              </div>
            </div>
          </div>

          <button
            v-if="sendRequestLoading == false"
            @click="change_user_mobile()"
            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"
          >
            <i class="fa-solid fa-edit pl-2 text-xl"></i> دریافت کد تایید و تغییر شماره
          </button>
          <button
            v-if="sendRequestLoading == true"
            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"
          >
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ویرایش شماره موبایل -->

  <!-- پست الکترونیک -->
  <div
    :class="activemodal == 'email' ? '' : 'hidden'"
    class="fixed top-0 p-4 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
  >
    <div
      @click="reset_modals()"
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
    ></div>
    <div
      class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full"
    >
      <button
        @click="reset_modals()"
        type="button"
        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <i class="text-lg fa fa-times"></i>
      </button>
      <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
        <div class="info">
          <h3 class="text-xl font-semibold block text-gray-500">ویرایش پست الکترونیکی</h3>
        </div>
      </div>
      <div class="modal-body font-fa mx-2 px-6 my-4 w-full">
        <div class="gap-6">
          <div class="relative">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              ><span>ایمیل</span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-envelope text-red-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="email"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-red-500 focus:ring-red-500 sm:text-sm py-3"
                  placeholder="ایمیل"
                  v-model="emailData.email"
                  @keyup.enter="do_edit_user_email()"
                />
              </div>
            </div>
          </div>

          <button
            v-if="sendRequestLoading == false"
            @click="do_edit_user_email()"
            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"
          >
            <i class="fa-solid fa-edit pl-2 text-xl"></i> ویرایش
          </button>
          <button
            v-if="sendRequestLoading == true"
            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"
          >
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- پست الکترونیک -->

  <!--  رمز عبور -->
  <div
    :class="activemodal == 'password' ? '' : 'hidden'"
    class="fixed top-0 p-4 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
  >
    <div
      @click="reset_modals()"
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
    ></div>
    <div
      class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full"
    >
      <button
        @click="reset_modals()"
        type="button"
        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <i class="text-lg fa fa-times"></i>
      </button>
      <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
        <div class="info">
          <h3 class="text-xl font-semibold block text-gray-500">تغییر رمز عبور</h3>
        </div>
      </div>
      <div class="modal-body font-fa mx-2 px-6 my-4 w-full">
        <div class="gap-6">
          <div class="relative col-span-4 sm:col-span-2">
            <label for="password" class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              ><span>رمز عبور فعلی*</span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-user-lock text-red-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  v-model="passwordData.password"
                  type="password"
                  class="items-center block w-full pr-10 border-gray-300 rounded-md focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  placeholder="رمز عبور"
                />
                <div
                  class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
                >
                  <div position="top" tooltip="نمایش" paid="نمایش" balance="نمایش">
                    <i
                      class="fa-duotone fa-eye text-red-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"
                    ></i
                    ><!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle
                          <i
                            @click="switchVisibility"
                            class="fa-duotone fa-eye-slash text-red-500 h-5 w-5 flex leading-[1px] pl-1"
                          ></i> -->
                  </div>
                </div>
              </div>
            </div>

            <nuxt-link
              to="/forget-password"
              class="text-cyan-500 font-medium my-2 block text-sm cursor-pointer"
            >
              بازیابی رمز عبور</nuxt-link
            >
          </div>

          <div class="relative col-span-4 sm:col-span-2 mt-4">
            <label
              for="new-password"
              class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              ><span>رمز عبور جدید*</span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-user-lock text-red-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  :value="passwordData.newPassword"
                  @input="(e) => set_new_password_value(e)"
                  type="password"
                  :class="
                    password_validator_results.length != 0
                      ? 'focus:border-red-500 focus:ring-red-500'
                      : 'focus:border-green-500 focus:ring-green-500'
                  "
                  class="items-center block w-full pr-10 border-gray-300 rounded-md sm:text-sm"
                  placeholder="رمز عبور"
                />
                <div
                  class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
                >
                  <div position="top" tooltip="نمایش" paid="نمایش" balance="نمایش">
                    <i
                      class="fa-duotone fa-eye text-red-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"
                    ></i
                    ><!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle
                          <i
                            @click="switchVisibility"
                            class="fa-duotone fa-eye-slash text-red-500 h-5 w-5 flex leading-[1px] pl-1"
                          ></i> -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul
            v-if="password_validator_results.length != 0"
            class="p-3 mt-4 list-decimal flex flex-col bg-gray-50 rounded-md pr-6"
          >
            <li
              v-for="(result, index) in password_validator_results"
              :key="index"
              class="color-500 text-caption"
            >
              {{ result.message }}
            </li>
          </ul>

          <div class="relative col-span-4 sm:col-span-2 mt-6">
            <label
              for="repeat-password"
              class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              ><span>تکرار رمز عبور جدید*</span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-user-lock text-red-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="password"
                  :class="{
                    'focus:border-green-500 focus:ring-green-500':
                      passwordData.repeatPassword == passwordData.newPassword &&
                      passwordData.repeatPassword != '',
                    'focus:border-red-500 focus:ring-red-500':
                      passwordData.repeatPassword != passwordData.newPassword ||
                      passwordData.repeatPassword == '',
                    'bg-gray-100':
                      password_validator_results.length != 0 ||
                      passwordData.newPassword == '',
                  }"
                  v-model="passwordData.repeatPassword"
                  :disabled="
                    password_validator_results.length != 0 &&
                    passwordData.newPassword == ''
                      ? true
                      : false
                  "
                  class="items-center block w-full pr-10 border-gray-300 rounded-md sm:text-sm"
                  placeholder="رمز عبور"
                />
                <div
                  class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
                >
                  <div position="top" tooltip="نمایش" paid="نمایش" balance="نمایش">
                    <i
                      class="fa-duotone fa-eye text-red-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"
                    ></i
                    ><!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle
                          <i
                            @click="switchVisibility"
                            class="fa-duotone fa-eye-slash text-red-500 h-5 w-5 flex leading-[1px] pl-1"
                          ></i> -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            @click="change_password()"
            v-if="sendRequestLoading == false"
            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"
          >
            <i class="fa-solid fa-edit pl-2 text-xl"></i> تغییر رمز عبور
          </button>
          <button
            v-if="sendRequestLoading == true"
            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"
          >
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- رمز عبور-->

  <!--  روش بازگرداندن وجه مرجوعی -->
  <!-- :class="activemodal == 'referredway' ? '' : 'hidden'" -->
  <div
    class="hidden fixed top-0 p-4 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
  >
    <div
      @click="reset_modals()"
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
    ></div>
    <div
      class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-md bg-white m-auto inset-0 w-full"
    >
      <button
        @click="reset_modals()"
        type="button"
        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <i class="text-lg fa fa-times"></i>
      </button>
      <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
        <div class="info">
          <h3 class="text-xl font-semibold block text-gray-500">
            روش بازگرداندن وجه مرجوعی
          </h3>
        </div>
      </div>
      <div class="modal-body font-fa mx-2 px-6 my-4">
        <p class="py-2 font-medium text-gray-700 flex flex-col">
          لطفا روش بازگرداندن وجوه خود را انتخاب نمایید. برای کسب اطلاعات بیشتر می‌توانید
          ملاحظات بازگشت وجه در دیجی‌کالا را مطالعه نمایید.
          <NuxtLink to="" class="text-cyan-500 font-medium mt-3 text-md items-center flex"
            ><span>ملاحظات بازگشت وجه توسط ذکری مارکت</span
            ><span class="text-xs"><i class="fa fa-chevron-left pr-1"></i></span>
          </NuxtLink>
        </p>

        <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Choose technology:
        </h3>
        <ul class="grid w-full gap-y-6 grid-cols-1">
          <li>
            <input
              type="checkbox"
              id="react-option"
              value=""
              class="hidden peer"
              required
            />
            <label
              for="react-option"
              class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer"
            >
              <div class="block">
                <i class="mb-2 w-7 h-7 text-sky-500 fa fa-wallet text-3xl"></i>
                <div class="w-full text-lg font-semibold">
                  واریز به کیف پول ذکری مارکت
                </div>
                <div class="w-full text-sm text-justify">
                  شما می‌توانید با انتخاب کیف پول به عنوان روش بازگشت وجه، از مزایای
                  انتقال سریع تر وجوه درخواستی بهره‌مند شوید.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="checkbox" id="flowbite-option" value="" class="hidden peer" />
            <label
              for="flowbite-option"
              class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-cyan-600 hover:text-gray-600"
            >
              <div class="block">
                <i class="mb-2 w-7 h-7 text-red-500 fa fa-credit-card text-3xl"></i>
                <div class="w-full text-lg font-semibold">واریز به حساب بانکی</div>
                <div class="w-full text-sm text-justify">
                  در این روش، ذکری مارکت به شماره شبا حساب بانکی شما نیاز دارد. در صورتی
                  که شماره شبا خود را نمیدانید شما می‌توانید در مرحله بعد با شماره حساب و
                  یا شماره کارت بانکی خود نسبت به محاسبه شبا اقدام نمایید.
                </div>
              </div>
            </label>
          </li>
        </ul>

        <div class="flex gap-4 items-center">
          <button
            class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-gray-300 px-6 py-3 text-gray-500 w-full mt-8 flex items-center rounded-lg justify-center"
          >
            انصراف
          </button>

          <button
            class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-8 flex items-center rounded-lg justify-center"
          >
            <i class="fa-solid fa-edit pl-2 text-xl"></i> ادامه
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--  روش بازگرداندن وجه مرجوعی -->

  <!--  ویرایش شغل -->
  <div
    :class="activemodal == 'job' ? '' : 'hidden'"
    class="fixed top-0 p-4 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
  >
    <div
      @click="reset_modals()"
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
    ></div>
    <div
      class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full"
    >
      <button
        @click="reset_modals()"
        type="button"
        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <i class="text-lg fa fa-times"></i>
      </button>
      <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
        <div class="info">
          <h3 class="text-xl font-semibold block text-gray-500">ویرایش شغل</h3>
        </div>
      </div>
      <div class="modal-body font-fa mx-2 px-6 my-4">
        <div class="gap-6">
          <div class="grid grid-cols-1 gap-6">
            <div class="relative">
              <label
                for="last-name"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                ><span>شغل</span></label
              >
              <div class="flex mt-1 rounded-md">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 curdor-pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-user text-red-500 h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="text"
                    class="block w-full pr-10 border-gray-300 rounded-md focus:border-red-500 focus:ring-red-500 sm:text-sm py-4"
                    placeholder="شغل خود را وارد کنید"
                    v-model="jobData.job"
                    @keyup.enter="do_edit_user_job()"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            v-if="sendRequestLoading == false"
            @click="do_edit_user_job()"
            class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center justify-center border rounded-lg"
          >
            <i class="fa-solid fa-edit pl-2 text-xl"></i> ویرایش
          </button>
          <button
            v-if="sendRequestLoading == true"
            class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center justify-center border rounded-lg"
          >
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ویرایش شغل -->

  <!-- هنگام احراز هویت شماره موبایل نمایش داده شود -->
  <div
    :class="activemodal == 'otp' ? '' : 'hidden'"
    class="fixed top-0 p-4 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
  >
    <div
      @click="reset_modals()"
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
    ></div>
    <div
      class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full"
    >
      <button
        @click="reset_modals()"
        type="button"
        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <i class="text-lg fa fa-times"></i>
      </button>
      <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
        <div class="info">
          <h3 class="text-xl font-semibold block text-gray-500">ویرایش شماره موبایل</h3>
        </div>
      </div>
      <div class="modal-body font-fa mx-2 px-6 my-4">
        <p class="py-2 font-medium text-gray-700">
          کد ۵ رقمی به شماره‌ی {{ mobileData.mobile }} ارسال گردید .
          <span
            class="text-indigo-500 cursor-pointer underline"
            @click="open_mobile_modal()"
            >ویرایش شماره</span
          >
        </p>
        <div class="gap-6">
          <div class="relative col-span-12 sm:col-span-12 w-full pt-8 pb-6">
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-hashtag text-red-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="number"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-red-500 focus:ring-red-500 sm:text-sm py-3"
                  placeholder="کد ارسال شده را وارد نمایید"
                  v-model="mobileData.otp"
                  @keyup.enter="do_verify_mobile()"
                />
              </div>
            </div>
          </div>

          <button v-if="otpTimer != 0">
            <div
              class="send-code-again w-full mx-auto text-center pb-4 text-cyan-500 font-semibold"
            >
              ارسال مجدد کد تایید تا {{ otpTimer }} ثانیه دیگر
            </div>
          </button>
          <button v-else @click="resend_otp_code()">
            <div
              class="send-code-again w-full mx-auto text-center pb-4 text-cyan-500 font-semibold"
            >
              ارسال مجدد کد
            </div>
          </button>

          <button
            @click="do_verify_mobile()"
            v-if="sendRequestLoading == false"
            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"
          >
            <i class="fa-solid fa-edit pl-2 text-xl"></i> ادامه
          </button>
          <button
            v-if="sendRequestLoading == true"
            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"
          >
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- هنگام احراز هویت شماره موبایل نمایش داده شود -->

  <!-- تاریخ تولد -->
  <div
    :class="activemodal == 'birthday' ? '' : 'hidden'"
    class="fixed top-0 p-4 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
  >
    <div
      @click="reset_modals()"
      class="absolute inset-0 transition-opacity duration-300 bg-black/20"
    ></div>
    <div
      class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full"
    >
      <button
        @click="reset_modals()"
        type="button"
        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <i class="text-lg fa fa-times"></i>
      </button>
      <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
        <div class="info">
          <h3 class="text-xl font-semibold block text-gray-500">تاریخ تولد</h3>
        </div>
      </div>
      <div class="modal-body font-fa mx-2 px-6 my-4">
        <div class="mt-6">
          <form class="w-full flex justify-between gap-5">
            <div class="">
              <div class="select-none text-body-1 mb-2 color-700">سال</div>
              <div class="relative">
                <input
                  @click="yearDropDownStatus = !yearDropDownStatus"
                  type="text"
                  readonly
                  placeholder="سال"
                  class="h-16 cursor-pointer w-full px-3 py-2 outline-none text-md bg-100 bg-000-lg curdor-pointer radius border border-gray-200 rounded-lg"
                  :value="userBirthDay.year == 0 ? 'انتخاب کنید' : userBirthDay.year"
                />
                <div
                  class="flex curdor-pointer absolute top-0 left-0 ml-3 select-none curdor-pointer h-full items-center"
                >
                  <i class="fa-regular fa-chevron-down"></i>
                </div>
                <div
                  v-if="yearDropDownStatus"
                  class="absolute p-2 z-[10] overflow-y-scroll text-center top-15 right-0 w-full bg-white rounded-lg h-[200px]"
                >
                  <ul>
                    <li
                      :class="{ 'bg-red-500 text-white': userBirthDay.year == year }"
                      class="cursor-pointer hover:bg-red-500 hover:text-white py-2 border-b"
                      @click="setUserBirthday(year, 'year')"
                      v-for="(year, index) in birthDaysInfo.yearsList"
                      :key="index"
                    >
                      {{ year }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="">
              <div class="select-none text-body-1 mb-2 color-700">ماه</div>
              <div class="relative cursor-pointer">
                <input
                  @click="monthDropDownStatus = !monthDropDownStatus"
                  type="text"
                  readonly
                  placeholder="ماه"
                  class="h-16 cursor-pointer w-full px-3 py-2 outline-none text-md bg-100 bg-000-lg curdor-pointer radius border border-gray-200 rounded-lg"
                  :value="birthDaysInfo.monthList[userBirthDay.month]"
                />
                <div
                  class="flex curdor-pointer absolute top-0 left-0 ml-3 select-none curdor-pointer h-full items-center"
                >
                  <i class="fa-regular fa-chevron-down"></i>
                </div>

                <div
                  v-if="monthDropDownStatus == true"
                  class="absolute p-2 z-[10] overflow-y-scroll text-center top-15 right-0 w-full bg-white rounded-lg h-[200px]"
                >
                  <ul>
                    <li
                      :class="{ 'bg-red-500 text-white': userBirthDay.month == index }"
                      class="cursor-pointer hover:bg-red-500 hover:text-white py-2 border-b"
                      @click="setUserBirthday(index, 'month')"
                      v-for="(month, index) in birthDaysInfo.monthList"
                      :key="index"
                    >
                      {{ month }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="">
              <div class="select-none text-body-1 mb-2 color-700">روز</div>
              <div class="relative">
                <input
                  @click="dayDropDownStatus = !dayDropDownStatus"
                  type="text"
                  readonly
                  placeholder="روز"
                  class="h-16 cursor-pointer w-full px-3 py-2 outline-none text-md bg-100 bg-000-lg curdor-pointer radius border border-gray-200 rounded-lg"
                  :value="userBirthDay.day == 0 ? 'انتخاب کنید' : userBirthDay.day"
                />
                <div
                  class="flex curdor-pointer absolute top-0 left-0 ml-3 select-none curdor-pointer h-full items-center"
                >
                  <i class="fa-regular fa-chevron-down"></i>
                </div>
                <div
                  v-if="dayDropDownStatus"
                  class="absolute p-2 z-[10] overflow-y-scroll text-center top-15 right-0 w-full bg-white rounded-lg h-[200px]"
                >
                  <ul>
                    <li
                      :class="{ 'bg-red-500 text-white': userBirthDay.day == day }"
                      class="cursor-pointer hover:bg-red-500 hover:text-white py-2 border-b"
                      @click="setUserBirthday(day, 'day')"
                      v-for="(day, index) in birthDaysInfo.daysList"
                      :key="index"
                    >
                      {{ day }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>

          <button
            v-if="sendRequestLoading == false"
            @click="do_update_user_birthday()"
            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center rounded-lg justify-center"
          >
            <i class="fa-solid fa-edit pl-2 text-xl"></i> ثبت تاریخ تولد
          </button>
          <button
            v-if="sendRequestLoading == true"
            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-red-500 px-6 py-3 text-white w-full mt-4 flex items-center rounded-lg justify-center"
          >
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- تاریخ تولد -->
</template>

<script setup>
import moment from "moment-jalaali";
import { useMarketStore } from "~/store/marketStore";
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";
import passwordValidator from "password-validator";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const marketStore = useMarketStore();
const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);
const $toast = useToast();
const passwordValidatorSchema = new passwordValidator();
const passwordData = reactive({
  password: "",
  newPassword: "",
  repeatPassword: "",
});

const mobileData = reactive({
  mobile: authuser.value != null ? authuser.value.mobile : "",
  otp: "",
});

const birthDaysInfo = reactive({
  daysList: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ],
  monthList: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ],
  yearsList: [],
});

const userBirthDay = reactive({
  year: 0,
  month: 0,
  day: 0,
});
const password_validator_results = ref([]);
const sendRequestLoading = ref(false);

const monthDropDownStatus = ref(false);
const dayDropDownStatus = ref(false);
const yearDropDownStatus = ref(false);

const otpTimer = ref(0);

const personalinfo = reactive({
  fullname: "",
});

const codemelliData = reactive({
  codemelli: "",
});

const emailData = reactive({
  email: "",
});

const jobData = reactive({
  job: "",
});

const props = defineProps({
  activemodal: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["reset_modals", "open_modals"]);

onMounted(() => {
  const currentYear = moment().format("jYYYY");
  const yearsList = getYearsArray(currentYear - 100, currentYear - 5);
  birthDaysInfo.yearsList = yearsList;

  if (authuser.value != null) {
    userBirthDay.year = authuser.value.birthday ? authuser.value.birthday.year : 0;
    userBirthDay.month = authuser.value.birthday ? authuser.value.birthday.month - 1 : 0;
    userBirthDay.day = authuser.value.birthday ? authuser.value.birthday.day : 0;

    personalinfo.fullname = authuser.value.name != null ? authuser.value.name : "";
    codemelliData.codemelli =
      authuser.value.codemelli != null ? authuser.value.codemelli : "";
    emailData.email = authuser.value.email != null ? authuser.value.email : "";
  }
});

const getYearsArray = (startYear, endYear) => {
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return years.reverse();
};

passwordValidatorSchema
  .is()
  .min(8, "رمز عبور شما باید حداقل ۸ حرف باشد.") // Minimum length 8
  .is()
  .max(100, "حداکثر تعداد کاراکتر مجاز 30 کاراکتر میباشد") // Maximum length 100
  .has()
  .uppercase(1, "حداقل باید از 1 حرف از حروف بزرگ لاتین استفاده کنید") // Must have uppercase letters
  .has()
  .lowercase(1, "حداقل باید از 1 حرف از حروف کوچک لاتین استفاده کنید") // Must have lowercase letters
  .has()
  .digits(2, "حداقل باید 2 کاراکتر از نوع عدد استفاده کنید") // Must have at least 2 digits
  .has()
  .not()
  .spaces(0, "نباید فاصله خالی بین کاراکتر ها وجود اشته باشد") // Should not have spaces
  .is()
  .not()
  .oneOf(
    ["Passw0rd", "Password123"],
    "گذرواژه وارد کرده باید گذرواژه ای به غیر از این ها باشد (Passw0rd , Password123)"
  );

const set_new_password_value = (e) => {
  passwordData.newPassword = e ? e.target.value : "";

  const validator_result = passwordValidatorSchema.validate(passwordData.newPassword, {
    details: true,
  });
  password_validator_results.value = validator_result;
};

set_new_password_value();

const reset_modals = () => {
  emit("reset_modals");
};

const change_password = async () => {
  if (is_validate_password()) {
    sendRequestLoading.value = true;
    const result = await marketStore.do_change_user_password(passwordData);
    if (result.statusCode == 200) {
      sendRequestLoading.value = false;
      $toast.success(result.message, {
        position: "top-left",
      });

      passwordData.password = "";
      passwordData.newPassword = "";
      passwordData.repeatPassword = "";

      reset_modals();
    } else {
      sendRequestLoading.value = false;
      $toast.error(result.message, {
        position: "top-left",
      });
    }
  }
};

const is_validate_password = () => {
  if (passwordData.password == "") {
    $toast.error("رمز عبور فعلی خود را خالی نگدارید", {
      position: "top-left",
    });
    return false;
  } else if (passwordData.newPassword == "") {
    $toast.error("رمز عبور جدید خود را وارد کنید", {
      position: "top-left",
    });
    return false;
  } else if (passwordData.repeatPassword == "") {
    $toast.error("تکرار رمز عبور جدید الزامی است", {
      position: "top-left",
    });
    return false;
  } else if (password_validator_results.value.length != 0) {
    $toast.error("لطفا تمامی معیار های تعیین شده برای گذرواژه را رعایت کنید", {
      position: "top-left",
    });
    return false;
  } else if (passwordData.newPassword != passwordData.repeatPassword) {
    $toast.error("گذرواژه جدید با تکرار گذرواژه یکسان نیست", {
      position: "top-left",
    });
    return false;
  } else {
    return true;
  }
};

const setUserBirthday = (value, type) => {
  monthDropDownStatus.value = false;
  dayDropDownStatus.value = false;
  yearDropDownStatus.value = false;

  if (type == "year") {
    userBirthDay.year = value;
  } else if (type == "month") {
    userBirthDay.month = value;
  } else if (type == "day") {
    userBirthDay.day = value;
  }
};

const do_update_user_birthday = async () => {
  if (userBirthDay.year != 0 && userBirthDay.month != 0 && userBirthDay.day != 0) {
    sendRequestLoading.value = true;
    const result = await marketStore.do_change_user_birthday({
      year: userBirthDay.year,
      month: userBirthDay.month + 1,
      day: userBirthDay.day,
    });

    if (result.statusCode == 200) {
      sendRequestLoading.value = false;
      $toast.success(result.message, {
        position: "top-left",
      });

      reset_modals();
      authuser.value.birthday = {
        year: userBirthDay.year,
        month: userBirthDay.month + 1,
        day: userBirthDay.day,
      };
    } else {
      sendRequestLoading.value = false;
      $toast.error(result.message, {
        position: "top-left",
      });
    }
  } else {
    $toast.error("لطفا با دقت تمامی فیلد های مربوط به تاریخ تولد را انتخاب کنید", {
      position: "top-left",
    });
  }
};

const change_user_mobile = async () => {
  if (mobileData.mobile != "") {
    sendRequestLoading.value = true;
    const result = await marketStore.do_change_user_mobile({
      mobile:
        startsWithZero(mobileData.mobile) == true
          ? mobileData.mobile
          : "0" + mobileData.mobile,
    });
    if (result.statusCode == 200) {
      sendRequestLoading.value = false;
      $toast.success(result.message, {
        position: "top-left",
      });
      const userMobile = useCookie("user-mobile", { maxAge: 3600, path: "/" });
      userMobile.value = result.result;
      reset_modals();

      emit("open_modals", "otp");
      startTimer();
    } else {
      sendRequestLoading.value = false;
      $toast.error(result.message, {
        position: "top-left",
      });
    }
  } else {
    $toast.error("لطفا شماره همراه را وارد کنید", {
      position: "top-left",
    });
  }
};

const do_verify_mobile = async () => {
  const userMobile = useCookie("user-mobile");
  if (userMobile.value != undefined && mobileData.otp != "") {
    sendRequestLoading.value = true;
    const result = await marketStore.do_user_verify_profile_mobile({
      mobile:
        startsWithZero(mobileData.mobile) == true
          ? mobileData.mobile
          : "0" + mobileData.mobile,
      otp: mobileData.otp,
    });
    if (result.statusCode == 200) {
      sendRequestLoading.value = false;
      $toast.success(result.message, {
        position: "top-left",
      });

      reset_modals();

      authuser.value.mobile = result.result;
    } else {
      sendRequestLoading.value = false;
      $toast.error(result.message, {
        position: "top-left",
      });
    }
  } else {
    $toast.error("شماره همراه و یا کد ارسال شده تکمیل نیست", {
      position: "top-left",
    });
  }
};

const startsWithZero = (num) => {
  let str = num.toString();
  return str[0] === "0";
};

const startTimer = () => {
  otpTimer.value = 120;
  let timer = setInterval(() => {
    otpTimer.value = otpTimer.value - 1;
    if (otpTimer.value == 0) {
      clearInterval(timer);
    }
  }, 1000);
};

const resend_otp_code = () => {
  otpTimer.value = 120;
  change_user_mobile();
};

const open_mobile_modal = () => {
  reset_modals();
  emit("open_modals", "mobile");
};

const do_edit_user_personal_info = async () => {
  if (personalinfo.fullname != "") {
    if (personalinfo.fullname.toString().length <= 4) {
      $toast.error("تعداد حروف این فیلد باید از 4 حرف بالاتر باشد", {
        position: "top-left",
      });
      return false;
    }

    sendRequestLoading.value = true;
    const result = await marketStore.do_edit_user_fullname(personalinfo);
    if (result.statusCode == 200) {
      sendRequestLoading.value = false;
      $toast.success(result.message, {
        position: "top-left",
      });
      authuser.value.name = result.result;

      reset_modals();
    } else {
      sendRequestLoading.value = false;
      $toast.error(result.message, {
        position: "top-left",
      });
    }
  } else {
    sendRequestLoading.value = false;
    $toast.error("لطفا نام کامل خود را وارد کنید", {
      position: "top-left",
    });
  }
};

const do_edit_user_codemelli = async () => {
  if (codemelliData.codemelli != "") {
    if (codemelliData.codemelli.toString().length != 10) {
      $toast.error("کد ملی وارد شده نامعتبر است", {
        position: "top-left",
      });
      return false;
    }
    sendRequestLoading.value = true;
    const result = await marketStore.do_edit_user_codemelli(codemelliData);
    if (result.statusCode == 200) {
      sendRequestLoading.value = false;
      $toast.success(result.message, {
        position: "top-left",
      });
      authuser.value.codemelli = result.result;

      reset_modals();
    } else {
      sendRequestLoading.value = false;
      $toast.error(result.message, {
        position: "top-left",
      });
    }
  } else {
    sendRequestLoading.value = false;
    $toast.error("لطفا کد ملی  خود را وارد کنید", {
      position: "top-left",
    });
  }
};

const do_edit_user_email = async () => {
  if (emailData.email != "") {
    if (emailData.email.toString().length <= 8) {
      $toast.error("تعداد حروف ایمیل باید از 8 حرف بالاتر باشد", {
        position: "top-left",
      });
      return false;
    }
    sendRequestLoading.value = true;
    const result = await marketStore.do_edit_user_email(emailData);
    if (result.statusCode == 200) {
      sendRequestLoading.value = false;
      $toast.success(result.message, {
        position: "top-left",
      });
      authuser.value.email = result.result;

      reset_modals();
    } else {
      sendRequestLoading.value = false;
      $toast.error(result.message, {
        position: "top-left",
      });
    }
  } else {
    sendRequestLoading.value = false;
    $toast.error("لطفا کد ملی  خود را وارد کنید", {
      position: "top-left",
    });
  }
};

const do_edit_user_job = async () => {
  if (jobData.job != "") {
    if (jobData.job.toString().length <= 4) {
      $toast.error("تعداد حروف شغل باید از 4 حرف بالاتر باشد", {
        position: "top-left",
      });
      return false;
    }
    sendRequestLoading.value = true;
    const result = await marketStore.do_edit_user_job(jobData);
    if (result.statusCode == 200) {
      sendRequestLoading.value = false;
      $toast.success(result.message, {
        position: "top-left",
      });
      authuser.value.job = result.result;

      reset_modals();
    } else {
      sendRequestLoading.value = false;
      $toast.error(result.message, {
        position: "top-left",
      });
    }
  } else {
    sendRequestLoading.value = false;
    $toast.error("لطفا شغل خود را وارد کنید", {
      position: "top-left",
    });
  }
};
</script>

<style>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 24px;
}
.lds-ellipsis div {
  position: absolute;
  top: 9px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
