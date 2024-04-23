import { useAuthStore } from "../store/authStore";

export default defineNuxtRouteMiddleware(async () => {
    const authStore = useAuthStore()
    if(authStore.get_current_user != null){
        return navigateTo('/profile')
    }
})