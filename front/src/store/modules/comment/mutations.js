exports.comments = (state, data) => {
    state.comments = data
}

exports.createComment = (state, data) => {
    state.comments.push({
        content: data.content,
        id: data.id,
        post_id: data.postId,
        user_id: data.userId,
        created_at: + new Date()
    })
}

exports.deleteComment = (state, data) => {
    state.comments.forEach(function (item, index, object) {
        if (item.id === data.id) {
            object.splice(index, 1)
        }
    })
}
