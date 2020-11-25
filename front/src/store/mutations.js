exports.alert = (state, data) => {
    state.alert = {
        show: data.show,
        variant: data.variant,
        content: data.content
    }
}
