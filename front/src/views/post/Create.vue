<template>
  <div>
    <Nav></Nav>
    <div class="container-fluid d-flex align-items-center justify-content-center flex-column">
      <h2 class="m-5">Poster un article</h2>
      <b-form class="w-100" @submit="onSubmit" @reset="onReset">

        <b-form-group id="title" label-cols="4" label-size="lg" label="Titre" label-for="title">
          <b-form-input v-model="form.title" id="title" class="col-12"></b-form-input>
        </b-form-group>

        <b-form-group id="category" label-cols="4" label-size="lg" label="Categorie" label-for="Categorie">
          <b-form-select v-model="form.category" :options="categories" size="lg"></b-form-select>
          <p>Votre choix : {{ form.category }}</p>
        </b-form-group>

        <b-form-group id="image" label-cols="4" label-size="lg" label="Image" label-for="image">
          <b-form-file v-model="form.image" accept="image/*" size="lg" plain></b-form-file>
        </b-form-group>

        <b-form-group id="content" label-cols="4" label-size="lg" label="Contenu" label-for="content">
          <b-form-textarea v-model="form.content" size="lg" id="content" rows="6"></b-form-textarea>
        </b-form-group>

        <b-button type="reset" variant="outline-danger" class="mr-5">Supprimer</b-button>
        <b-button type="submit" variant="outline-success" class="ml-5">Envoyer</b-button>

      </b-form>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav"
import {mapActions} from "vuex"

export default {
  name: 'Create',
  components: {Nav},
  data () {
    return {
      form: {
        title: '',
        category: [],
        image: null,
        content: ''
      },
      selected: null,
      categories: [
        { value: null, text: 'Selectionnez une categorie' },
        { value: 'drh', text: 'DRH' },
        { value: 'annonce', text: 'Annonce' },
        { value: 'cofee', text: 'Café' },
        { value: 'formation', text: 'Formation' },
      ],
    }
  },
  methods: {
    ...mapActions(['post/createPost']),
    onSubmit (e) {
      e.preventDefault()
      this['post/createPost'](this.form)
          .then(() => {
            this.$root.$emit('alert', {show: true, variant: 'success', content: "Post créé avec succès !"})
            this.$router.push({name: 'Index'})
          })
          .catch(error => console.log(error))
    },
    onReset (e) {
      e.preventDefault()
      this.form.title = ''
      this.form.category = null
      this.form.image = ''
      this.form.content = ''
    }
  }
}
</script>
