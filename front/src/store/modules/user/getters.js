export default {
    users: (state) => (date) => {
        return state.users.filter(user => user.updated_at >= date)
    },
    name: (state) => (id) => {
        return state.users.filter(user => user.id === id)[0]
    },
}
