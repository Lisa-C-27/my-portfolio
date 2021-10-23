<template>
  <header class="main-header">
    <div class="container flex">
      <router-link to="/" class="main-logo flex">
        <img src="../assets/lisa-50x50.jpg" width="50" height="50"><span>Lisa Clark</span>
      </router-link>
      <nav :class="{'menu-active' : menuIsActive === true}">
        <div class="toggle-menu" @click="toggleMenu"><span></span><span></span><span></span></div>
        <ul class="flex">
          <li><router-link to="/#about" class="underline-effect">Get to know me</router-link></li>
          <li><router-link to="/#skills" class="underline-effect bold">My skills</router-link></li>
          <li><base-button url="/projects" mode="ghost">My projects <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="16px" viewBox="0 0 24 24" width="16px"><rect fill="none" height="24" width="24"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/></svg></base-button></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    menuIsActive() {
      return this.$store.getters.menuActive;
    }
  },
  methods: {
    toggleMenu() {
      this.updateMenuActive(!this.menuIsActive);
    },
    ...mapMutations(['updateMenuActive'])
  }
}
</script>

<style scoped>
  header {
    position: fixed;
    width: 100%;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    z-index: 9;
  }
  header.sticky {
    background-color: hsl(225, 6%, 13%);
    box-shadow: 0 0 5px var(--primary-colour);
  }
  .container {
    justify-content: space-between;
  }
  img {
    border-radius: 50%;
    display: block;
    margin: 5px;
  }
  div {
    align-items: center;
  }
  ul {
    list-style-type: none;
  }
  li {
    text-transform: lowercase;
    padding: 10px 10px 0;
  }
  header a {
    text-decoration: none;
    color: #fff;
  }
  .main-logo {
    align-items: center;
  }
  .underline-effect::after {
    margin-top: 10px;
  }
  .bold {
    font-weight: 700;
  }
  @media only screen and (min-width: 700px) {
    .toggle-menu {
      display: none;
    }
  }
  @media only screen and (max-width: 699px) {
    .toggle-menu {
      position: relative;
      z-index: 1;
      height: 24px;
    }
    .toggle-menu span {
      width: 25px;
      height: 2px;
      background-color: #fff;
      display: block;
      margin: 6px 0;
      border-radius: 50%;
      transform: rotate(0);
      transition: transform 0.2s linear;
    }
    .menu-active .toggle-menu span:nth-child(2) {
      height: 0;
    }
    .menu-active .toggle-menu span:nth-child(1) {
      transform: rotate(45deg);
      position: absolute;
    }
    .menu-active .toggle-menu span:nth-child(3) {
      transform: rotate(-45deg);
      position: absolute;
    }
    nav {
      position: relative;
    }
    nav ul {
      position: absolute;
      right: -500px;
      background-color: hsl(225, 6%, 13%);
      flex-direction: column-reverse;
      top: -17px;
      width: 280px;
      height: calc(100vh + 4px);
      justify-content: flex-end;
      margin: 0;
      border: 1px solid var(--primary-colour);
      padding: 70px 35px 50px;
      box-shadow: 0 0 10px var(--primary-colour);
      border-radius: 25px 0 0 25px;
      transition: right 0.3s linear;
    }
    nav.menu-active ul {
      right: -21px;
    }
    nav li:last-child {
      margin-bottom: 30px;
    }
  }
</style>