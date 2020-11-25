<template>
  <section>
    <Nav></Nav>
    <h1>Mes informations</h1>
    <article class="d-flex flex-row justify-content-center align-items-center">
      <img :src="require('../../../../back/images/' + user.avatar + '.svg')" alt="Avatar" class="w-25">
      <div class="text-info font-weight-bold">
        <p>{{ getName(user.id) }}</p>
        <p>Inscris {{ user.created_at | moment }}</p>
        <p>Connecté {{ user.updated_at | moment }}</p>
        <p>Modifier mon mot de passe</p>
        <p>Modifier mon avatar</p>
      </div>
    </article>
    <b-table v-if="user.role === 'root'" striped :items="users"></b-table>
  </section>
</template>
<script>
import Nav from '@/components/Nav'
export default {
  name: 'Account',
  components: {Nav},
  data () {
    return {
      user: this.$store.getters['auth/user'],
      users: this.$store.getters['user/users'](this.$store.getters['auth/user'].created_at)
    }
  },
  methods: {
    getName: function (userId) {
      let name = this.$store.getters['user/name'](userId)
      if (name === undefined) return
      return this.$store.getters['user/name'](userId).email.split('@groupomania.fr')[0]
    },
  }
}
</script>
