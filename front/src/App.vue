<template>
  <div id="app">
    <navbar id="nav"></navbar>
    <Alert class="col-4" v-if="alert.show" :variant="alert.variant" :content="alert.content"></Alert>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar'
import Alert from '@/components/Alert'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar, Alert
  },
  data () {
    return {
      alert: {
        show: false,
        variant: null,
        content: null
      }
    }
  },
  methods: {
    ...mapGetters(['auth/authenticated'])
  },
  mounted() {
    this.$root.$on('alert', data => {
      this.alert = data
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
