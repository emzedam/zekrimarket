<template>
  <PersonalInfo @open_modals="(name) => open_modals(name)" />
  <account-modals
    @open_modals="(name) => open_modals(name)"
    @reset_modals="reset_modals()"
    :activemodal="activemodal"
  />
</template>

<script setup>
import PersonalInfo from "@/components/Profile/Account/Edit/personalinfo.vue";
import AccountModals from "@/components/Modal/Account/Modals.vue";
import { useAuthStore } from "~/store/authStore";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useMarketStore } from "@/store/marketStore";
const marketStore = useMarketStore();

const { loading } = storeToRefs(marketStore);
const router = useRouter();
const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);

if (authuser.value == null) {
  router.push("/auth/login");
}

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 900);
});

const activemodal = ref("");

const open_modals = (modalname) => {
  activemodal.value = modalname;
};

const reset_modals = () => {
  activemodal.value = "";
};

definePageMeta({
  layout: "user-dashboard",
  pageTransition: {
    mode: "default",
  },
});
</script>
