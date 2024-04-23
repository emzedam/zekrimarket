import api from '~/axios'
import { useCookies } from "vue3-cookies";
const cookies = process.client == true ? useCookies().cookies : null;



const state = () => ({
    authuser: null
})

const actions = {

    async init_app() {
        if(process.client == true){
            const token = cookies.get("UToken")
            if(token != null){
                const userdata = await api.get("/front/users/me" , {
                    headers: {
                        Authorization : "Bearer "+ token
                    }
                }).catch((err) => {
                    if(err.response.status == 401){
                        cookies.remove("UToken")
                    }
                })

                if(userdata){
                    return userdata.data;
                }else{
                    return null
                }
            }else{
                return null
            }
        }
    },

    async login_with_password(loginData){
        const {data} = await api.post("/front/users/login-pass" , loginData, {
            headers: {
                "Content-Type": "application/json"
            }
        }).catch((err) => {
            console.log(err.response.data)
        })

        if(data){
            return data
        }else{
            return {statusCode: 400}
        }
    },

    async send_otp(registerData){
        const {data} = await api.post("/front/users/otp" , registerData, {
            headers: {
                "Content-Type": "application/json"
            }
        }).catch((err) => {
            console.log(err.response.data)
        })

        if(data){
            return data
        }else{
            return {statusCode: 400}
        }

    },
    
    async verify_otp_code_and_register(userData){
        const {data} = await api.post("/front/users/login" , userData, {
            headers: {
                "Content-Type": "application/json"
            }
        }).catch((err) => {
            console.log(err.response.data)
        })

        if(data){
            return data
        }else{
            return {statusCode: 400}
        }

    },

    async doLogout() {
        const token = cookies.get("UToken")
        const userdata = await api.post("/front/users/logout" ,{}, {
            headers: {
                Authorization : "Bearer "+ token
            }
        }).catch((err) => {
            if(err.response.status == 401){
                cookies.remove("UToken")
            }
        })

        if(userdata){
            cookies.remove("UToken")
            this.authuser = null
            return userdata.data
        }else{
            return null
        }
    }
}

const getters = {
    get_current_user(state) {
        return state.authuser
    }
}


export const useAuthStore = defineStore({
    id: "auth-store",
    state: state,
    actions: actions,
    getters: getters
})