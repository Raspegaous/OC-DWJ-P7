<template>
  <div class="d-flex justify-content-center align-items-center flex-column h-auto">
    <h1>{{ msg }}</h1>
    <p>Bienvenue sur le réseau social de Groupomania</p>
    <p>
      <router-link to="/login">Identifiez-vous</router-link> pour accéder au contenu ou <router-link to="/signup">créez un compte</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
