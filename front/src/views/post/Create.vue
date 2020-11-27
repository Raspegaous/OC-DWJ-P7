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
          <b-form-radio-group v-model="form.image" :options="images"></b-form-radio-group>
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
        { value: 'coffee', text: 'Café' },
        { value: 'formation', text: 'Formation' },
      ],
      images: [
        { html: '<img src="https://picsum.photos/400/400/?image=10" class="w-25">', value: "https://picsum.photos/400/400/?image=10"},
        { html: '<img src="https://picsum.photos/400/400/?image=20" class="w-25">', value: "https://picsum.photos/400/400/?image=20"},
        { html: '<img src="https://picsum.photos/400/400/?image=30" class="w-25">', value: "https://picsum.photos/400/400/?image=30"},
        { html: '<img src="https://picsum.photos/400/400/?image=40" class="w-25">', value: "https://picsum.photos/400/400/?image=40"},
        { html: '<img src="https://picsum.photos/400/400/?image=50" class="w-25">', value: "https://picsum.photos/400/400/?image=50"},
        { html: '<img src="https://picsum.photos/400/400/?image=60" class="w-25">', value: "https://picsum.photos/400/400/?image=60"},
        { html: '<img src="https://picsum.photos/400/400/?image=70" class="w-25">', value: "https://picsum.photos/400/400/?image=70"},
        { html: '<img src="https://picsum.photos/400/400/?image=80" class="w-25">', value: "https://picsum.photos/400/400/?image=80"},
        { html: '<img src="https://picsum.photos/400/400/?image=90" class="w-25">', value: "https://picsum.photos/400/400/?image=90"},
        { html: '<img src="https://picsum.photos/400/400/?image=100" class="w-25">', value: "https://picsum.photos/400/400/?image=100"},
      ]
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
