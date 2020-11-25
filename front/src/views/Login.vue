<template>
  <div class="container">
    <h2 class="m-5">{{ $route.name === 'Login' ? 'Identification' : 'Inscription' }}</h2>
    <b-form
        class="d-flex align-items-center justify-content-center flex-column col-12 mt-5"
        @submit.stop.prevent="$route.name === 'Login' ? login() : register()"
        @reset.stop.prevent="onReset">
      <b-form-group class="col-8" id="email" label="Adresse E-mail" label-for="email">
        <b-form-input :state="email" id="email" type="email" v-model="form.email" required placeholder="Adresse E-mail">
        </b-form-input>
      </b-form-group>
      <b-form-group class="col-8" id="password" label="Mot de passe" label-for="password">
        <b-form-input :state="pass" id="password" type="password" v-model="form.password" required placeholder="Mot de passe">
        </b-form-input>
      </b-form-group>
      <b-form-group v-show="$route.name === 'Signup'" class="col-8" id="passwordConfirm" label="Confirmation du mot de passe" label-for="passwordConfirm">
        <b-form-input :state="validate"  id="passwordConfirm" type="password" v-model="form.passwordConfirm" required placeholder="Mot de passe">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-button class="mr-4" type="submit" variant="outline-success">Valider</b-button>
        <b-button class="ml-4" type="reset" variant="outline-danger">Annuler</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        email: '',
        password: 'khuM12a58Z#',
        passwordConfirm: 'khuM12a58Z#'
      },
      error: {
        password: null,
        email: null
      }
    }
  },
  computed: {
    validate () {
      if (this.form.passwordConfirm === '') return null
      return this.form.password === this.form.passwordConfirm
    },
    email () {
      return this.error.email
    },
    pass () {
      if (this.form.password === '') return null
      return this.error.password
    }
  },
  methods: {
    ...mapActions('auth', ["logged", "signed"]),
    login() {
      this.logged({
        email: this.form.email,
        password: this.form.password
      })
      .then(() => {
        this.$root.$emit('authenticate', true)
        this.$router.push({name: 'Index'})
      })
      .catch(error => {
        this.error = error.response.data.error
        this.$root.$emit('alert', {show: true, variant: 'danger', content: error.response.data.message})
        throw error
      })
    },
    register () {
      if (this.form.password === this.form.passwordConfirm) {
        this.signed({
          email: this.form.email,
          password: this.form.password
        })
            .then(() => {
              this.$root.$emit('alert', {show: true, variant: 'success', content: "Bienvenue sur le réseau social de GROUPOMANIA"})
              this.login()
            })
            .catch(error => {
              this.error = error.response.data.error
              this.$root.$emit('alert', {show: true, variant: 'danger', content: error.response.data.message})
            })
      } else {
        this.error.password = true
        this.$root.$emit('alert', {show: true, variant: 'info', content: "Le mot de passe n'est pas identique"})
      }
    },
    onReset() {
      this.form.email = '';
      this.form.password = '';
      this.form.passwordConfirm = '';
    }
  }
}
</script>
