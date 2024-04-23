import {useMarketStore} from "../store/marketStore"

export default defineNuxtRouteMiddleware(async ({req}) => {
    const marketStore = useMarketStore()
    await marketStore.init_app()
})