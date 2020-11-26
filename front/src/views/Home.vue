<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <img alt="Vue logo" src="../assets/icon-above-font.png" height="500" width="auto">
    <p>Bienvenue sur le réseau social de Groupomania</p>
    <p>
      <router-link :to="{name: 'Login'}">Identifiez-vous</router-link> pour accéder au contenu ou <router-link to="/signup">créez un compte</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
