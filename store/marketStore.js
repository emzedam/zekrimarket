import api from '~/axios'
import { useCookies } from "vue3-cookies";
const cookies = process.client == true ? useCookies().cookies : null;


const state = () => ({
    loading: true,
    basketInfo: {
        count: 0,
        products: []
    },
    userAdressList: [],
    selectedUserAddress: null,
    products_list: [],
    comments: [],
    favorites_list: []
})

const actions = {

    async init_app() {
        if(process.client == true){
            const basketObj = cookies.get("zekri-basket")
            if(basketObj != undefined){
                if(JSON.parse(basketObj).length != 0){
                    this.basketInfo.count = 0
                    JSON.parse(basketObj).forEach((val , index) => {
                        this.basketInfo.count = this.basketInfo.count + val.count;
                    })
                    this.basketInfo.products = JSON.parse(basketObj)
                }
            }
        }

        this.get_all_products_list()

    },

    async get_all_products_list() {
        const result = await api.get("/front/products/get-list")
        if(result.status == 200){
            if(result.data && result.data.result.length != 0){
                this.products_list = result.data.result
            }
        }
    },

    async initUserSelectedAddress() {
        if(cookies.get("user-address")){
            this.selectedUserAddress = cookies.get("user-address");
        }else{
            if(this.userAdressList.length != 0) {
                this.selectedUserAddress = this.userAdressList[0]
                cookies.set("user-address" , JSON.stringify(this.selectedUserAddress) , {
                    path: "/"
                })
            }
            
        }
    },

    async categoryLists() {
        const result = await api.get("/front/category/get-list")
        if(result.data){
           return result.data
        }else{
           return null
        }
    },

    async get_slider_list() {
        const result = await api.get("/front/slider/get-list")
        if(result.data){
            return result.data
        }else{
            return null
        }
    },


    async get_vitrin_items() {
        const result = await api.get("/front/vitrin/get-vitrin-items")
        if(result.data){
            return result.data
        }else{
            return null
        }
    },

    async get_vitrin_more_products(vitrin_name) {
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/vitrin/get-vitrin-details" , {vitrin_name} , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },


    async get_product_by_slug(id) {
        const result = await api.get('/front/products/get-by-id' , {
            params: {'id': id}
        }).catch((err) => {
            console.log(err.response.data.message)
        })

        if(result.data){
            return result.data
        }else{
            return null
        }
    },

    // async add_products_to_basket(product){
    //     const proExists = this.basketInfo.products.filter((val , index) => {
    //         return val.id == product._id
    //     })
    //     if(proExists == null){
    //         return {data: 'exists'}
    //     }else{
    //         this.basketInfo.products = [...this.basketInfo.products , {id: product._id , count: 1}]
    //         return {data: this.basketInfo}
    //     }
    // },

    async increase_basket_count(product) {
        console.log(this.basketInfo.products.findIndex(product))
    },
    async clear_basket_info(product) {
        this.basketInfo = {
            count: 0,
            products: []
        }
    },

    async get_basket_products(basketobject) {
        const result = await api.get('/front/basket/get-by-ids' , {
            params: {'basket_products': basketobject}
        }).catch((err) => {
            console.log(err.response.data.message)
        })

        if(result.data){
            return result.data
        }else{
            return null
        }
    },

    async load_states_list(){
        const result = await api.get("/front/geocoding/states-list")
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async load_cities_list(data){
        const result = await api.post("/front/geocoding/cities-list/" , {
            state_name: data.state_name
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async save_user_address(data) {
        const token = cookies.get("UToken")
        const result = await api.post("/front/geocoding/save-user-address" , {addressData: data} , {
            headers: {
                "Authorization": "Bearer "+ token
            }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async set_user_address_list(data , type){
        if(type == "update"){

            let newData = []
            this.userAdressList.forEach((address , index) => {
                if(address._id === data._id){
                    newData = [...newData , data]
                }else{
                    newData = [...newData , address]
                }
            })

            this.userAdressList = newData

        }else{
            this.userAdressList = [data , ...this.userAdressList]
        }
    },

    async get_user_addresses_list(){
        const token = cookies.get("UToken")
        const result = await api.get("/front/geocoding/address-list" , {
            headers: {
                "Authorization": "Bearer "+ token
            }
        })

        if(result.status == 200){
            if(result.data.message == "success"){
                this.userAdressList = result.data.result
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    set_select_user_address(address){
        this.selectedUserAddress = address
        cookies.set("user-address" , JSON.stringify(address) , {
            path: "/"
        })
    },

    async edit_user_address(data) {
        const token = cookies.get("UToken")
        const result = await api.post("/front/geocoding/edit-user-address" , {addressData: data} , {
            headers: {
                "Authorization": "Bearer "+ token
            }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async create_user_order(data){
        const token = cookies.get("UToken")
        const result = await api.post("/front/order/create" , data , {
            headers: {
                "Authorization": "Bearer "+ token
            }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_order_detail_by_id(id){
        const token = cookies.get("UToken")
        const result = await api.get("/front/order/get-detail" , {
            params: {
                order_id: id
            },
            headers: {
                "Authorization": "Bearer "+ token
            }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_category_products(data){
        const result = await api.get("/front/category/get-products" , {
            params: {
                cat_id: data.id
            }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async create_user_comment(data){
        const token = cookies.get("UToken")
        const result = await api.post("/front/comments/create" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async add_helpful_comment(data){
        const token = cookies.get("UToken")
        const result = await api.post("/front/comments/helpful" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_init_order_info() {
        const token = cookies.get("UToken")
        const result = await api.get("/front/profile/get-init-data" , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_user_order_history() {
        const token = cookies.get("UToken")
        const result = await api.get("/front/profile/orders/get-history" , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async remove_user_address(data) {
        const token = cookies.get("UToken")
        const result = await api.post("/front/profile/address/remove-address" , {id: data.id} , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async do_change_user_password(data){
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/profile/personinfo/change-password" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async do_change_user_birthday(data){
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/profile/personinfo/change-birthday" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async do_change_user_mobile(data){
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/profile/personinfo/change-mobile" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async do_user_verify_profile_mobile(data){
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/profile/personinfo/verify-mobile" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async do_edit_user_fullname(data){
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/profile/personinfo/change-fullname" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },


    async do_edit_user_codemelli(data){
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/profile/personinfo/change-codemelli" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async do_edit_user_email(data){
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/profile/personinfo/change-email" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async do_edit_user_job(data){
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/profile/personinfo/change-job" , data , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async add_product_to_user_favs(product_id) {
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/favorites/add" , {product_id} , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_pages_list() {
        const token = cookies.get("UToken") || ''
        const result = await api.get("/front/pages/get-pages-list" , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_page_by_slug(slug) {
        const token = cookies.get("UToken") || ''
        const result = await api.get("/front/pages/get-page-by-slug" , {
            params: {slug: slug},
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_question_list() {
        const token = cookies.get("UToken") || ''
        const result = await api.get("/front/pages/get-question-list" , {
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_product_list(product_ids) {
        const token = cookies.get("UToken") || ''
        const result = await api.get("/front/pages/get-product-list" , {
            params: {product_ids: product_ids},
            headers: {
                Authorization: "Bearer "+token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async pay_order_after_save(data) {
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/order/pay-order" , data , {
            headers: {
                Authorization: "Bearer "+ token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },


    async get_national_sites(data) {
        const token = cookies.get("UToken") || ''
        const result = await api.get("/front/profile/national-market/get-brands" , {
            headers: {
                Authorization: "Bearer "+ token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_national_market_brand_details(brand_id) {
        const token = cookies.get("UToken") || ''
        const result = await api.get("/front/profile/national-market/get-brand-detail" , {
            params: {id: brand_id},
            headers: {
                Authorization: "Bearer "+ token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_national_orders_list() {
        const token = cookies.get("UToken") || ''
        const result = await api.get("/front/profile/national-market/get-orders" , {
            headers: {
                Authorization: "Bearer "+ token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async get_detail_national_order(id) {
        const token = cookies.get("UToken") || ''
        const result = await api.get("/front/profile/national-market/get-order" , {
            params: {orderId: id},
            headers: {
                Authorization: "Bearer "+ token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    async register_national_market_orders(data){
        const token = cookies.get("UToken") || ''
        const result = await api.post("/front/profile/national-market/national-market-save-order" , data , {
            headers: {
                Authorization: "Bearer "+ token
            }
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },

    
}

const getters = {
    get_user_addresses(state) {
        return state.userAdressList
    },
    get_user_selected_address(state){
        return state.selectedUserAddress
    }
}

export const useMarketStore = defineStore({
    id: "market-store",
    state: state,
    actions: actions,
    getters: getters
})