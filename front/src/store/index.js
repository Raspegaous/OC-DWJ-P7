import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import auth from './modules/auth'
import user from './modules/user'
import post from './modules/post'
import comment from './modules/comment'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        post,
        user,
        comment
    },
    state: {
        alert: {
            show: false,
            variant: '',
            content: ''
        }
    },
    mutations,
    getters,
    strict: true
})

export default store
