<template>
  <div>
    <Nav></Nav>
    <section class="newsfeed">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3">
            <Drh v-for="post in category('drh')" :key="post.id" :post="post"></Drh>
            <div class="trending-box hidden-xs hidden-md">
              <div class="row">
                <div class="col-lg-12">
                  <router-link to="/post/drh">
                    <h4>En voir plus</h4>
                  </router-link>
                </div>
              </div>
            </div>

          </div>
          <div class="col-lg-6">
            <Cardbox v-for="post in category('last')" :post="post" :key="post.id" :comments="comments(post.id)"></Cardbox>
          </div>
          <div class="col-lg-3">

            <div class="suggestion-box full-width">
              <div class="suggestions-list">
                <h3>Derniers connectés</h3>
                <Suggestion v-for="user in suggestion()" :key="user.id" :user="user"></Suggestion>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Nav from '../../components/Nav'
import Drh from '../../components/Drh'
import Cardbox from '../../components/Cardbox'
import Suggestion from '../../components/Suggestion'
import {mapActions} from 'vuex'

export default {
  components: { Nav, Drh, Cardbox, Suggestion },
  methods: {
    ...mapActions(['post/getPosts', 'comment/getComments', 'user/getUsers']),
    category: function (category) {
      return this.$store.getters['post/posts'](category)
    },
    suggestion: function () {
      return this.$store.getters['user/users'](this.$store.getters['auth/user'].updated_at)
    },
    comments: function (postId) {
      return this.$store.getters['comment/comments'](postId)
    }
  },
  beforeMount() {
    this['post/getPosts']()
    this['comment/getComments']()
    this['user/getUsers']()
  }
}
</script>

<style>

/* ==========================================================================
   Fluffs - Ultimate Bootstrap Social Network UI Kit
   ========================================================================== */
/*
* Author Name: TheMashaBrand
* Author URI: http://themeforest.net/user/themashabrand
* Website: http://www.themashabrand.com

/* -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
/* Import Section
&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
/*@import url("../base.css");				/* Default Reset, Typography, Forms, etc. */
/*@import url("../bootstrap.min.css");			/* Bootstrap 3.3.7 */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css");		/* Font-awesome 5.0.10 */
/*@import url("../skins/skin_two.css");				/* Color of common Elements */
@import url("http://fonts.googleapis.com/css?family=Montserrat:400,700");
@import url("https://fonts.googleapis.com/css?family=Varela+Round");
@import url("https://fonts.googleapis.com/css?family=Pacifico");
@import url("https://fonts.googleapis.com/css?family=Abhaya+Libre");
@import url("https://fonts.googleapis.com/css?family=Lato");


/* ==========================================================================
   The Kafe - Ultimate Freelance Marketplace Template
   ========================================================================== */
/*
* Author Name: TheMashaBrand
* Author URI: http://themeforest.net/user/themashabrand
* Website: http://www.themashabrand.com
*/

/* -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
/* Table of Contents
&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;
1. Reset & Basics                   - Line 28
2. Base Styles
    - Typogrphy Section             - Line 85
	- Links Section                 - Line 127
	- Lists Section                 - Line 157
	- Kafe Button Section           - Line 176
3. Job List
    - Category List Section         - Line 297
	- Search Section                - Line 336
	- Job Section                   - Line 394
	- Pagination Section            - Line 526
	- Media Queries                 - Line 576
4. Sidebar - Affix Section          - Line 638
5. Form Signup                      - Line 669

&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */

/* #Reset & Basics (Inspired by E. Meyers)
================================================== */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, fieldset, form, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* ==========================================================================
   Base Styles
   ========================================================================== */
html, body {
  overflow-x: hidden;
  text-align: left;
  -webkit-font-smoothing: antialiased; /* Fix for webkit rendering */
  -webkit-text-size-adjust: 100%;
}

/* -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
/* Typography
&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  color: #2C3E50;
  letter-spacing: 1px;
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  font-weight: inherit;
}

h1 { font-size: 30px; line-height: 54px; }
h2 { font-size: 24px; line-height: 48px; }
h3 { font-size: 22px; line-height: 44px; }
h4 { font-size: 18px; line-height: 36px; }
h5 { font-size: 16px; line-height: 28px; }
h6 { font-size: 14px; line-height: 24px; }

p {
  font-family: 'Varela Round', sans-serif;
  line-height: 24px;
  margin: 0;
  font-size: 14px;
  letter-spacing: 1px;
}
p img { margin: 0; }
p.lead { font-size: 21px; line-height: 27px; color: #555;  }

em { font-style: italic; }
strong { font-weight: 700; color: #333; }
small { font-size: 80%; }

/* -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
/* Links
&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
a {
  color: #fff;
  text-decoration: none;
  outline: 0;
  -webkit-transition:0.5s all ease;
  -moz-transition:0.5s all ease;
  -o-transition:0.5s all ease;
  -ms-transition:0.5s all ease;
  transition:0.5s all ease;
}

a:hover,
a:focus,
a:active,
a.active {
  text-decoration: none !important;
  outline: 0;
  -webkit-transition:0.5s all ease;
  -moz-transition:0.5s all ease;
  -o-transition:0.5s all ease;
  -ms-transition:0.5s all ease;
  transition:0.5s all ease;
}

p a, p a:visited { line-height: inherit; }

/* -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
/* Lists
&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
ul, ol { margin: 0; }
ul { list-style: none outside; }
ol { list-style: decimal; }
ol, ul.square, ul.circle, ul.disc { margin-left: 10px; }
ul.square { list-style: square outside; color: #3d464d;}
ul.circle { list-style: circle outside; color: #3d464d; }
ul.disc { list-style: disc outside; color: #3d464d;}
ul ul, ul ol,
ol ol, ol ul {}
ul ul li, ul ol li,
ol ol li, ol ul li { line-height: 24px;}
li { line-height: 24px; }
ul.large li { line-height: 21px; }
li p { line-height: 24px; }


/* ==========================================================================
   News Feed Styles
   ========================================================================== */
.newsfeed {
  background: #f4f4f4;
  padding: 40px 0px;
}

/* ==========================================================================
   Suggestion Box Styles
   ========================================================================== */
.suggestion-box {
  float: left;
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 5px 25px 0 rgba(123,123,123,.15);
}
.suggestion-box .suggestions-list {
  float: left;
  width: 100%;
  padding: 17px 0 10px 0;
}
.suggestion-box .suggestion-body> span {
  float: right;
  margin-top: 4px;
  position: relative;
  top: -12px;
}
</style>
