<template>
  <div class="container">
    <h1>Groupomania</h1>
    <div class="row">
      <div class="col-12 col-md-3 border p-2">
        <b-card
            v-for="post in lastPostsDRH()"
            :key="post.id"
            overlay
            :img-src="post.image"
            :img-alt="post.title"
            text-variant="primary"
            :title="post.title"
            class="m-2"
            @click="link(post)"
        >
        </b-card>
        <!--<Post v-for="post in lastPostsDRH()" :key="post.id" :post="post" class="align-items-center"></Post>-->
      </div>
      <div class="col-12 col-md-9">
        <Post v-for="post in lastPostsDRH()" :key="post.id" :post="post" class="flex-row"></Post>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '../../components/Post';
import {mapActions} from 'vuex';
// import axios from 'axios';

export default {
  components: {Post},
  data() {
    return {
      posts: null
    }
  },
  methods: {
    ...mapActions(["getPosts"]),
    link (post) {
      console.log(post)
      //TODO: redirect to post/:id
    },
    lastPostsDRH() {
      return [
        {
          id: 1,
          title: 'Bouh',
          author: 'Jérémy',
          date: "22 Août 2020",
          image: "https://picsum.photos/400/400/?image=25",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut beatae doloribus ducimus exercitationem laborum libero magnam molestiae nesciunt odio omnis possimus, recusandae repudiandae similique sint ullam voluptate! Accusamus, nisi."
        },
        {
          id: 2,
          title: 'BouhBouh',
          author: 'Jérémy',
          date: "24 Août 2020",
          image: "https://picsum.photos/400/400/?image=26",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut beatae doloribus ducimus exercitationem laborum libero magnam molestiae nesciunt odio omnis possimus, recusandae repudiandae similique sint ullam voluptate! Accusamus, nisi."
        },
        {
          id: 3,
          title: 'BouhBouh',
          author: 'Jérémy',
          date: "24 Août 2020",
          image: "https://picsum.photos/400/400/?image=29",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut beatae doloribus ducimus exercitationem laborum libero magnam molestiae nesciunt odio omnis possimus, recusandae repudiandae similique sint ullam voluptate! Accusamus, nisi."
        }
      ]
    }
  },

}
</script>
