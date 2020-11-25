exports.login = (state, data) => {
    state.authenticated = true
    state.token = data.token
    state.user = data.user
}
exports.logout = (state) => {
    state.authenticated = false
    state.token = null
    state.user = null
}
