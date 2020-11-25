<template>
  <div class="suggestion-body d-flex align-items-center">
    <img class="img-responsive img-circle rounded border" :src="require('../../../back/images/' + user.avatar + '.svg')" alt="Image">
    <div class="name-box d-flex align-items-center justify-content-center pl-2">
      <h4>{{ user.email }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Suggestion',
  props: ['user']
}
</script>

<style>
.suggestion-body {
  float: left;
  width: 100%;
  padding: 5px 20px;
}
.suggestion-body img {
  width: 37px;
  height: 37px;
  float: left;
  padding: 2px;
  border: 2px solid #f4f4f4;
}
.name-box h4 {
    font-family: 'Abhaya Libre', serif;
    color: #88898a;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
}
.name-box span {
  font-family: 'Abhaya Libre', serif;
  font-size: 14px;
  color: #aaa;
}
</style>
