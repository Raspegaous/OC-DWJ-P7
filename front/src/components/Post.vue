<template>
    <div class="row">
      <div class="col-md-6 d-flex justify-content-center flex-column">
        <img :src="post.image" :alt="post.title" class="img-responsive h-50">
        <p class="text-justify mt-5">{{ post.content }}</p>
      </div>
      <div class="col-md-6 modal-meta">
        <div class="modal-meta-top">
          <div class="img-poster clearfix">
            <img class="img-responsive img-circle" :src="require('../../../back/images/1.svg')" alt="Image"/>
            <div>
              <strong>{{ getName(post.user_id) }}</strong>
            </div>
            <span>{{ post.created_at | moment }}</span>
          </div>
          <ul class="img-comment-list">
            <li v-for="comment in comments" :key="comment.id">
              <div class="comment-img">
                <img :src="require('../../../back/images/1.svg')" alt="Avatar" class="img-responsive img-circle">
              </div>
              <div class="comment-text">
                <strong class="d-flex align-items-center justify-content-between">
                  {{ getName(comment.user_id) }}
                  <span class="date sub-text">{{ comment.created_at | moment }}</span>
                  <b-button v-if="user.role === 'admin' ||  user.role === 'root' || user.id === comment.user_id"
                            squared
                            class="p-1 d-flex align-items-center justify-content-center"
                            variant="border-none"
                            @click="del(comment.id)"
                  >
                    <b-icon icon="x-circle"
                            variant="danger">
                    </b-icon>
                  </b-button>
                </strong>
                <p>{{ comment.content }}</p>
              </div>
            </li>
          </ul><!--/ comment-list -->
        </div>
      </div>
      <div class="col-12">

        <b-form @submit.prevent="sendComment">
          <b-form-group id="com" label-size="lg" label-cols="2" label="Commenter" label-for="com">
            <b-form-textarea v-model="com" rows="4" size="lg" id="com"></b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="outline-success">Commenter</b-button>
        </b-form>

      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "Post",
  props: ['post', 'comments'],
  data () {
    return {
      user: this.$store.getters['auth/user'],
      com: ''
    }
  },
  methods: {
    ...mapActions(['comment/createComment', 'comment/deleteComment', 'post/getPosts']),
    del: function (comment) {
      this['comment/deleteComment'](comment)
    },
    getName: function (userId) {
      let name = this.$store.getters['user/name'](userId)
      if (name === undefined) return
      return this.$store.getters['user/name'](userId).email.split('@groupomania.fr')[0]
    },
    sendComment: function () {
      this['comment/createComment']({
        postId: this.post.id,
        comment: this.com
      })
      this['post/getPosts']()
    }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
</style>
