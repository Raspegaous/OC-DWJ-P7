import axios from 'axios'

export default {

    async getComments({commit, rootGetters}) {
        await axios.get('http://localhost:3000/api/comment/', {
            headers: {
                authorization: rootGetters['auth/token']
            }
        })
            .then(response => commit('comments', response.data))
            .catch(error => {
                throw error
            })
    },

    async createComment({commit, rootGetters}, data) {
        await axios.post('http://localhost:3000/api/comment', {
            userId: rootGetters['auth/user'].id,
            postId: data.postId,
            content: data.content
        }, {
            headers: {
                authorization: rootGetters['auth/token']
            }
        })
            .then((response) => commit('createComment', {
                content: data.content,
                id: response.data.response[0].insertId,
                postId: data.postId,
                userId: rootGetters['auth/user'].id
            }))
            .catch(error => {
                throw error
            })
    },

    async deleteComment({commit, rootGetters}, data) {
        await axios.post('http://localhost:3000/api/comment/delete', {
            id: data
        }, {
            headers: {
                Authorization: rootGetters['auth/token']
            }
        })
            .then((response) => commit('deleteComment', {
                id: response.data.response
            }))
            .catch(error => {
                console.log('erroooooooooooooooooooooooooor')
                throw error
            })
    }
}
