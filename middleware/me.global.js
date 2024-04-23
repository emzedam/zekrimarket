import { useAuthStore } from "../store/authStore";

export default defineNuxtRouteMiddleware(async ({req}) => {
    const authStore = useAuthStore()
    const userLogedInInfo = await authStore.init_app()
    authStore.authuser = userLogedInInfo
    // console.log(userLogedInInfo)
})