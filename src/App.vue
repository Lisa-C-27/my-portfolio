<template @scroll="handleScroll">
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './layout/TheHeader.vue';
import TheFooter from './layout/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  methods: {
    handleScroll() {
      let header = document.querySelector('.main-header');
      if(window.scrollY > 100 && !header.className.includes('sticky')) {
        header.classList.add('sticky');
      } else if(window.scrollY < 100) {
        header.classList.remove('sticky');
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);

  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },

}
</script>

<style>
html {
  font-size: 18px;
}
:root {
  --primary-colour: #12969E;
  --secondary-colour: hsl(300, 8%, 31%);
  --grey: hsl(300, 6%, 66%);
}
* {
  box-sizing: border-box;
}
body {
  background-color: hsl(225, 6%, 13%);
  font-family: 'Karla', sans-serif;
  color: #fff;
  background-image: url('./assets/blob-background-1.svg');
  background-size: 75%;
  background-position: top right;
  background-repeat: no-repeat;
  font-weight: 300;
}
h1 {
  font-size: 3rem;
  color: var(--primary-colour);
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 10px;
}
.flex {
  display: flex;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
a {
  color: var(--primary-colour);
}
.underline-effect::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: var(--primary-colour);
  transition: width .3s;
}
.underline-effect:hover::after {
  width: 100%;
}
a svg {
  fill: inherit;
  margin: 0 0 -3px 5px;
}
.column-50 {
  width: 50%;
}
.column-40 {
  width: 40%;
}
.column-60 {
  width: 60%;
}
h2 {
  font-size: 2.5rem;
  color: var(--primary-colour);
  text-transform: lowercase;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
}
h3 {
  text-transform: lowercase;
  padding: 5px 0 8px 20px;
  border-left: 5px solid var(--primary-colour);
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3rem;
}
h4 {
  font-family: 'Open Sans', sans-serif;
}
p {
  line-height: 1.5;
}
.star-list {
  list-style-type: none;
  columns: 2;
}
.star-list li {
  line-height: 1.3;
  display: flex;
  margin-bottom: 15px;
}
.star-list img {
  margin-right: 5px;
  padding-top: 1px;
}
.section-anchor {
  padding-top: 80px;
}
hr {
  border-color: var(--primary-colour);
  box-shadow: 0 0 10px var(--primary-colour);
}

@media only screen and (max-width: 1500px) {
  body {
    background-size: 80%;
  }
}
@media only screen and (max-width: 1250px) {
  .container {
    padding: 0 20px;
  }
}
@media only screen and (max-width: 800px) {
  .section-anchor {
    margin-top: -50px;
  }
}
@media only screen and (max-width: 600px) {
  .star-list {
    columns: 1;
    padding-left: 20px;
  }
  h4 {
    font-size: 0.9rem;
  }
}
@media only screen and (max-width: 500px) {
  .star-list {
    padding-left: 0;
  }
  .section-anchor {
    margin-top: -80px;
  }
}
</style>
