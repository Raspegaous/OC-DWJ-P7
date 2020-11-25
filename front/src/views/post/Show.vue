<template>
  <div>
    <Nav></Nav>
    <section class="newsfeed">
      <div class="container">
        <div class="col">
          <router-link :to="{name: 'Index'}">Retour</router-link>
          <Post :post="post" :comments="comments()"></Post>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
import Post from "@/components/Post";

export default {
  name: 'Show',
  components: {Post, Nav},
  data () {
    return {
      post: this.$store.getters['post/post'](this.$route.params.id)[0]
    }
  },
  methods: {
    comments: function () {
      return this.$store.getters['comment/comments'](this.$route.params.id)
    },
  }
}
</script>
