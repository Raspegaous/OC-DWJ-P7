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
        <a href="#" v-b-modal="'password'">Modifier mon mot de passe</a>
        <p>Modifier mon avatar</p>
      </div>
    </article>
    <b-table v-if="user.role === 'root'" striped :items="users"></b-table>

    <b-modal id="password" @ok="submit" @cancel="reset">
     <b-form @reset="reset" @submit="submit">
       <b-form-group id="password" label="Mot de passe">
         <b-form-input v-model="form.password" id="password" title="Mot de passe" label-size="lg" type="password"></b-form-input>
       </b-form-group>
       <b-form-group  id="passwordConfirm" label="Confirmation du mot de passe">
         <b-form-input v-model="form.confirm" :state="form.password === form.confirm" id="passwordConfirm" title="Confirmation du mot de passe" label-size="lg" type="password"></b-form-input>
       </b-form-group>
     </b-form>
    </b-modal>

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
      users: this.$store.getters['user/users'](this.$store.getters['auth/user'].created_at),
      form: {
        password: '',
        confirm: ''
      }
    }
  },
  methods: {
    getName: function (userId) {
      let name = this.$store.getters['user/name'](userId)
      if (name === undefined) return
      return this.$store.getters['user/name'](userId).email.split('@groupomania.fr')[0]
    },
    submit: function () {
      if (this.form.password === this.form.confirm) {
        this.$store.dispatch['auth/password'](this.form.password)
      }
    },
    reset: function () {
      this.form.password = ''
      this.form.confirm = ''
    }
  }
}
</script>
