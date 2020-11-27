<template>
  <div class="cardbox">
    <div class="cardbox-heading">
      <div class="d-flex align-items-start m-0">
        <div class="media-body">
          <p class="m-0">Par {{ getName(post.user_id) }}</p>
          <small>
            <span>{{ post.created_at | moment }}</span>
          </small>
        </div>
      </div>
    </div>
    <div class="cardbox-item d-flex justify-content-center">
      <router-link :to="{name: 'Show', params: {id: post.id}}">
        <h3>{{ post.title }}</h3>
        <img class="img-responsive" :src="post.image" :alt="post.title">
      </router-link>
    </div>
    <div class="cardbox-like" :class="{red: userHasLike}">
      <ul class="text-center">
        <li>
          <a href="#" @click.prevent="like()">
            <i class="fa fa-heart"></i>
          </a>
          <span>{{ likes }}</span>
        </li>
        <li>
          <a href="#" title="" class="com" v-b-modal="'modal-comment-' + post.id">
            <i class="fa fa-comments"></i>
          </a>
          <span class="span-last">{{ comments.length }}</span>
        </li>
      </ul>
    </div>


    <b-modal :id="'modal-comment-' + post.id">

      <template #modal-header>
        <b-button @click="$bvModal.hide('modal-comment-' + post.id)" aria-hidden="true" class="close">
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close</span>
        </b-button>
      </template>

      <template #default>
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
                    <span class="date sub-text">{{ comment.created_at | moment }}</span>
                  </div>
                </li>
              </ul><!--/ comment-list -->
            </div>
          </div>
        </div>
      </template>

      <template #modal-footer>
        <form class="modal-meta-bottom" @submit.prevent="sendComment">
          <div class="comment-body">
            <label for="comment"></label>
            <textarea v-model="com" name="comment" id="comment" rows="3" class="form-control" placeholder="Laisser un commentaire..."></textarea>
          </div><!--/ comment-body -->
          <div class="comment-body text-right mt-4">
            <button class="btn btn-outline-success btn-xs">Commenter</button>
          </div>
        </form><!--/ modal-meta-bottom -->
      </template>

    </b-modal>

  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Cardbox',
  props: {
    post: {
      type: Object,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      user: this.$store.getters['auth/user'],
      com: null,
      likes: this.post.liked,
      userHasLike: false
    }
  },
  methods: {
    ...mapActions(['comment/getComments', 'comment/createComment', 'comment/deleteComment', 'post/liking', 'post/getPosts']),
    sendComment: function () {
      this['comment/createComment']({
        postId: this.post.id,
        content: this.com
      })
      this.com = null
      this['post/getPosts']()
    },
    del : function (comment) {
      this['comment/deleteComment'](comment)
    },
    getName: function (userId) {
      let name = this.$store.getters['user/name'](userId)
      if (name === undefined) return
      return this.$store.getters['user/name'](userId).email.split('@groupomania.fr')[0]
    },
    like: function () {
      if (this.userHasLike) {
        this.likes -= 1
        this.userHasLike = false
      } else {
        this.likes += 1
        this.userHasLike = true
      }
      this['post/liking'](this.likes)
    }
  }
}
</script>

<style>

.cardbox {
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 5px 25px 0 rgba(123, 123, 123, .15);
  margin-bottom: 20px;
  padding: 0 !important;
}

.cardbox .cardbox-heading {
  padding: 16px;
  margin: 0;
}

.cardbox .pull-right a:hover {
  background: #f4f4f4 !important;
}

.media-body p {
  font-family: 'Abhaya Libre', serif;
  font-weight: 700 !important;
  font-size: 14px;
  color: #88898a;
}

.media-body small span {
  font-family: 'Abhaya Libre', serif;
  font-size: 14px;
  color: #aaa;
}

.cardbox-like ul {
  padding: 0 0 10px 0 !important;
  font-size: 0;
}

.cardbox .cardbox-item {
  position: relative;
  display: block;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

.cardbox-like li a {
  color: #aaa;
  font-size: 14px;
  float: left;
  padding-top: 6px;
  margin-right: 5px;
}

.red li:first-child a, .red li:first-child span {
  color: #e16a70 !important;
}

.cardbox-like li a:hover {
  text-decoration: none;
  color: #e16a70 !important;
}

.cardbox-like li span {
  font-family: 'Abhaya Libre', serif;
  float: left;
  color: #aaa;
  font-size: 18px;
  padding-top: 6px;
}

.cardbox-like li:first-child {
  display: inline-block;
  margin-right: 5px;
  padding-right: 20px;
  border-right: 2px solid #f4f4f4;
}

.cardbox-like li:last-child {
  display: inline-block;
  text-align: center;
  margin-left: 15px;
}

.cardbox-like li span.span-last {
  color: #b2b2b2;
}

.cardbox-like li a.com {
  color: #b2b2b2;
  font-size: 14px;
  padding-top: 6px;
  margin-right: 5px;
}

/* ==========================================================================
   Modal Styles
   ========================================================================== */

.modal-image img {
  width: 600px !important;
  height: 540px !important;
}

.img-poster {
  margin-bottom: 10px;
  border-bottom: solid 1px #f4f4f4;
  padding-bottom: 5px;
}

.modal-meta-top .img-poster img {
  height: 34px;
  width: 34px;
  float: left !important;
  margin-right: 10px;
  border: 4px solid #f4f4f4;
}

.modal-meta-top .img-poster a {
  font-family: 'Abhaya Libre', serif;
  font-size: 14px;
  color: #88898a !important;
}

.modal-meta-top .img-poster span {
  font-family: 'Abhaya Libre', serif;
  color: #aaa;
  font-size: 12px;
}

.img-comment-list {
  list-style: none;
  padding: 0 10px 30px 0;
  height: 390px !important;
  overflow-y: scroll;
}

.img-comment-list li {
  margin: 5px 0 10px 0;
}

.img-comment-list li > div {
  display: table-cell;
}

.img-comment-list .comment-img {
  float: left !important;
  margin-right: 10px !important;
  margin-top: 5px;
}

.img-comment-list img {
  width: 22px;
  height: 22px;
}

.img-comment-list li a {
  font-family: 'Abhaya Libre', serif;
  font-size: 14px;
  color: #88898a !important;
}

.img-comment-list p {
  font-family: 'Abhaya Libre', serif;
  margin: 0;
  font-size: 13px;
  color: #848484;
}

.img-comment-list span {
  font-family: 'Abhaya Libre', serif;
  font-size: .8em;
  color: #aaa;
}


.modal-meta-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px;
  border-top: solid 1px #f4f4f4;
  display: block;
  width: 100%;
}



/* ==========================================================================
   Media Queries for Modal
   ========================================================================== */

@media (max-width: 992px) {

  .img-poster {
    padding-top: 5px;
  }
}

@media (max-width: 768px) {

  .modal-image img {
    height: auto !important;
  }

  .img-poster {
    padding-top: 5px;
  }
}

/* Mobile phones */
@media (max-width: 600px) {

  .img-poster {
    padding-top: 5px;
  }
}

@media (max-width: 548px) {

  .img-poster {
    padding-top: 5px;
  }
}

@media (max-width: 480px) {

  .img-poster {
    padding-top: 5px;
  }
}

@media (max-width: 320px) {

  .modal-image img {
    height: auto !important;
  }

  .img-poster {
    padding-top: 5px;
  }
}


</style>
