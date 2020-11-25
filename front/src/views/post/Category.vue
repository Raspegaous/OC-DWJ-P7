<template>
  <div>
    <Nav></Nav>
    <section class="newsfeed">
      <div class="container">
          <div class="col">
            <Cardbox v-for="post in posts()" :key="post.id" :post="post" :comments="comments(post.id)"></Cardbox>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
import Cardbox from '../../components/Cardbox'

export default {
  name: 'Category',
  components: { Nav, Cardbox },
  methods: {
    posts: function () {
      return this.$store.getters['post/posts'](this.$route.params.category)
    },
    comments: function (postId) {
      return this.$store.getters['comment/comments'](postId)
    }
  }
}
</script>
