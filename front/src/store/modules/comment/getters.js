export default {
    comments: (state) => postId =>
        state.comments.filter(comment => comment.post_id === postId),
}
