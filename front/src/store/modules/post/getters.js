export default {
    posts: (state) => (category) => {
        return category === 'last' ?
            state.posts.filter(post => new Date(post.created_at) >= (Date.now() - (60 * 60 * 48) * 1000))  :
            state.posts.filter(post => post.category === category)
    },
    post: (state) => (id) => {
        return state.posts.filter(post => post.id === id)
    }
}
