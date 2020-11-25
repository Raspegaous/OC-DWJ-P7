<template>
  <router-link :to="{name: 'Show', params: {id: post.id}}">
    <div class="storybox d-flex flex-column justify-content-center align-items-center">
      <div class="story-body p-3 text-center">
        <h3 class="text-white m-3 text-uppercase">{{ post.title }}</h3>
        <p>{{ post.content.substring(0, 400) }} ...</p>
      </div>
      <b-button v-if="$store.getters['auth/user'].role === 'admin' ||  $store.getters['auth/user'].role === 'root' || $store.getters['auth/user'].id === post.user_id"
                squared
                class="d-flex align-items-center justify-content-center"
                variant="border-none"
                :click="delete(post.id)"
      >
        <b-icon icon="x-circle"
                variant="danger">
        </b-icon>
      </b-button>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Drh',
  props: {
    post: Object
  },
  methods: {
    delete: function (id) {
      console.log(id)
    }
  }
}
</script>

<style type="scss">
.storybox {
  background-size: cover;
  background: linear-gradient(rgba(34, 34, 34, 0.78), rgba(34, 34, 34, 0.78)) center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  color: #fff;
  height: 200px;

  border-radius: 3px;
  box-shadow: 0 5px 25px 0 rgba(123,123,123,.15);
  margin-bottom: 20px;
  padding: 0 !important;
}

.story-body h3 {
  font-family: 'Abhaya Libre', serif;
}

.story-body p {
  font-family: 'Abhaya Libre', serif;
  font-size: 12px;
  color: #fff;
  line-height: 1;
}


</style>
