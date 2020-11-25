export default {
    posts: (state) => (category, updatedAt) => {
        return category === 'last' ?
            state.posts.filter(post => post.created_at >= updatedAt) :
            state.posts.filter(post => post.category === category)
    },
    post: (state) => (id) => {
        return state.posts.filter(post => post.id === id)
    }
}
