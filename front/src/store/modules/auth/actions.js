import axios from "axios"

export default {
    async logged({commit}, form) {
        await axios.post('http://localhost:3000/api/auth/login', {
            email: form.email,
            password: form.password
        })
            .then(response => {
                window.localStorage.setItem('token', response.data.token)
                window.localStorage.setItem('user', response.data.user)
                commit('login', response.data)
            })
            .catch(error => {
                throw error
            })
    },
    async signed(context, form) {
        await axios.post('http://localhost:3000/api/auth/signup', {
            email: form.email,
            password: form.password
        })
            .then((response) => {
                return response.data
            })
            .catch(error => {
                throw error
            })
    },

    async logout({commit, rootGetters}) {
        await axios.get('http://localhost:3000/api/auth/logout', {
            headers: {
                authorization: rootGetters['auth/token']
            },
            body: {
                userId: rootGetters['auth/user'].id
            }
        })
            .then(() => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                commit('logout')
            })
            .catch(error => {
                throw error
            })
    },

    async password({rootGetters}, data) {
        await axios.post('http://localhost:3000/api/auth/password', {
            userId: rootGetters['auth/user'].id,
            password: data
        }, {
            headers: {
                authorization: rootGetters['auth/token']
            }
        })
            .then(response => response.data.message)
            .catch(error => error)
    }

}
