<template>
  <section class="nav-sec mt-5 mb-5">
    <div class="d-flex justify-content-between">
      <div class="p-2 nav-icon-lg mint-green d-flex align-items-center justify-content-center p-2">
        <router-link :to="{name: 'Index'}" class="nav-icon">
          <em class="fa fa-home"></em>
          <span>Accueil</span>
        </router-link>
      </div>

      <div class="p-2 nav-icon-lg d-flex align-items-center justify-content-center"
           :class="category.id % 2 ? 'clean-black' : 'dark-black'"
           v-for="category in categories"
           :key="category.id">
        <router-link :to="{name: 'Category', params: {category: category.link}}" class="nav-icon">
          <em class="fa" :class="category.fontAwesome"></em>
          <span>{{ category.name}}</span>
        </router-link>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      categories: [
        {
          id: 1,
          name: "DRH",
          fontAwesome: "fa-align-justify",
          link: "drh",
        },
        {
          id: 2,
          name: "Annonce",
          fontAwesome: "fa-bullhorn",
          link: "annonce",
        },
        {
          id: 3,
          name: "Formation",
          fontAwesome: "fa-graduation-cap",
          link: "formation",
        },
        {
          id: 4,
          name: "Pause café",
          fontAwesome: "fa-coffee",
          link: "coffee",
        },
      ]
    }
  }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css");		/* Font-awesome 5.0.10 */

.nav-sec {
  margin: 0px 0px 0px 0px;
  height: 150px;
  border-top: 1px solid rgba(90, 90, 90, 0.12);
  background-color: grey;
  box-shadow: 0 -5px 25px 0 rgba(123, 123, 123, 0.15);
  color: #90a4ae;
}
.nav-sec a:hover{
  color: #f4f4f4 !important;
}

.nav-icon {
  display: block;
  border-bottom: 2px solid transparent;
  font-size: 2rem;
  color: #fff !important;
  text-decoration: none !important;
  text-transform: uppercase;
}
.nav-icon-lg {
  height: 150px;
  width: 270px !important;
}
.nav-icon em {
  padding: 0px 0px 10px 0px;
  font-size: 30px;
}
.nav-icon span{
  font-family: 'Abhaya Libre', serif;
  font-size: 14px !important;
  display: block;
}
.dark-black {
  background-color: #4e514e;
}
.clean-black {
  background-color: #545654;
}
.mint-green {
  background-color: #0fc19e;
}

@media(max-width:768px) {
  .nav-sec {
    height: 100px;
  }
  .nav-icon-lg {
    height: 100px !important;
  }
  .nav-icon span{
    font-family: 'Abhaya Libre', serif;
    font-size: 12px !important;
    display: block;
  }
  .nav-icon em {
    padding: 0px 0px 10px 0px;
    font-size: 20px;
  }
}
</style>
