import axios from 'axios'

export default {
    async getUsers({commit, rootGetters}) {
        await axios.post('http://localhost:3000/api/users',{
            user: {
                updated_at: rootGetters['auth/user'].updated_at
            }
        }, {
            headers: {
                authorization: rootGetters['auth/token']
            }
        })
            .then(response => commit('users', response.data))
            .catch(error => { throw error })
    },

    async delete({commit, rootGetters}, id) {
        await axios.post('http://localhost:3000/api/user/delete/' + id, {}, {
            headers: {
                authorization: rootGetters['auth/token']
            }
        })
            .then((response) => commit('alert', {
                show: true,
                variant: 'success',
                content: response.data.message
            }))
            .catch(error => { throw error })
    }
}
