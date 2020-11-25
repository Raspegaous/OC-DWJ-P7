import axios from 'axios'

export default {

    /**
     *
     * @param context
     * @return {Promise<void>}
     */
    async getPosts({commit, rootGetters}) {
        await axios.get('http://localhost:3000/api/post/', {
            headers: {
                authorization: rootGetters["auth/token"]
            }
        })
            .then(response => commit('posts', response.data))
            .catch(error => {
                throw error
            })
    },

    async createPost({rootGetters}, data) {
        await axios.post('http://localhost:3000/api/post', {
            userId: rootGetters["auth/user"].id,
            title: data.title,
            category: data.category,
            content: data.content,
            image: data.image
        }, {
            headers: {
                authorization: rootGetters["auth/token"]
            }
        })
            .then(response => response)
            .catch(error => error)
    },

    async liking({rootGetters}, data) {
        await axios.put('http://localhost:3000/api/post/liking', {
            postId: data.postId,
            liked: data.liked.toString()
        }, {
            headers: {
                authorization: rootGetters['auth/token']
            }
        })
            .then(response => response)
            .catch(error => error)
    }
}
