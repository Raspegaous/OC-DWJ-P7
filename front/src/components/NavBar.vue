<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand>
        <router-link to="/">Groupomania</router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="authenticated" class="ml-auto">
            <b-dropdown id="dropdown-1" no-caret class="m-2" size="lg" dropleft block>
              <template #button-content >
                <!--TODO: Mettre un avatar-->
                <img :src="require('../../../back/images/1.svg')" width="35px" alt="Avatar">
              </template>
              <b-dropdown-item><router-link :to="{name: 'Index'}">Accueil</router-link></b-dropdown-item>
              <b-dropdown-item><router-link :to="{name: 'Create'}">Poster un article</router-link></b-dropdown-item>
              <b-dropdown-item><router-link :to="{name: 'Account'}">Mon compte</router-link></b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="logout">Se deconnecter</b-dropdown-item>
            </b-dropdown>
        </b-navbar-nav>
        <b-navbar-nav v-else class="ml-auto">
          <b-nav-item to="/login">Se connecter</b-nav-item>
          <b-nav-item to="/signup">Inscription</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      authenticated: false
    }
  },
  mounted () {
    this.$root.$on('authenticate', data => {
      this.authenticated = data
    })
  },
  methods: {
    logout () {
      window.localStorage.removeItem('token')
      this.$store.commit('auth/logout')
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
</style>
