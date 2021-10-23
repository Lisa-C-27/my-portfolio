<template>
  <section>
    <div class="container flex" id="overview" v-observe-visibility="visibilityChanged">
      <div class="column-60">
        <div class="hero-text">
          <h1>My projects</h1>
          <p>Throughout my career I have collaborated across a number of projects working with designers, marketers and senior management executives to deliver beautiful and functional website experiences that meet user expectations.</p>
        </div>
      </div>
      <div class="column-40">
      </div>
    </div>
    <div class="nav-bar">
      <div class="to-stick">
        <div class="container flex">
          <span>View: </span>
          <ul class="flex">
            <li><router-link class="underline-effect" :class="{active: whichNavVisibile == 'overview'}" to="/projects#overview">overview</router-link></li>
            <li><router-link class="underline-effect" :class="{active: whichNavVisibile == 'buildtoday'}" to="/projects#buildtoday">buildtoday</router-link></li>
            <li><router-link class="underline-effect" :class="{active: whichNavVisibile == 'privium-homes'}" to="/projects#privium-homes">privium homes</router-link></li>
            <li><router-link class="underline-effect" :class="{active: whichNavVisibile == 'impact-homes'}" to="/projects#impact-homes">impact homes</router-link></li>
            <li><router-link class="underline-effect" :class="{active: whichNavVisibile == 'joii'}" to="/projects#joii">joii</router-link></li>
            <li><router-link class="underline-effect" :class="{active: whichNavVisibile == 'todo-app'}" to="/projects#todo-app">todo app</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['isBtVisible', 'isPhVisible', 'isIhVisible', 'isJoiiVisible', 'isTodoVisible'],
  data() {
    return {
      overviewVisible: true,
    };
  },
  computed: {
    ...mapGetters({
      whichNavVisibile: 'navActive'
    })
  },
  methods: {
    handleSticky() {
      let bar = document.querySelector('.nav-bar');
      let barContents = document.querySelector('.to-stick');
      let screenPos = bar.getBoundingClientRect();
      if(screenPos.top <= 78 ) {
        barContents.classList.add('sticky');
      } else {
        barContents.classList.remove('sticky');
      }
    },
    visibilityChanged(isVisible) {
      if(isVisible != this.overviewVisible ) {
        this.overviewVisible = isVisible;
        this.$store.dispatch('updateOverviewVisible', isVisible);
      }
    }
  },
  watch: {

  },
  created () {
    window.addEventListener('scroll', this.handleSticky);

  },
  unmounted () {
    window.removeEventListener('scroll', this.handleSticky);
  } 
}
</script>

<style scoped>
section {
    padding: 100px 0 100px;
    overflow: visible;
    height: 100%;
}
#overview {
  padding-top: 150px;
}
.hero-text p {
    margin: 20px 0 80px;
}
ul {
  margin: 0;
  padding: 0 10px;
}
li {
  padding: 5px 15px 0;
  display: inline-block;
}
.nav-bar {
  height: 62px;
}
.nav-bar .container {
  max-width: 1280px;
  background-color: #07393C;
  color: #fff;
  padding: 15px 40px;
  border-radius: 3px;
  align-items: center;
  border: 1px solid var(--primary-colour);
  box-shadow: 0 0 8px var(--primary-colour);
}
.nav-bar a {
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}
.to-stick.sticky {
  position: fixed;
  top: 78px;
  width: 100%;
  left: 0;
  z-index: 1;
}
.to-stick.sticky .container {
  border-radius: 0 0 3px 3px;
}
.nav-bar a.active:after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background: var(--primary-colour);
}
.underline-effect::after {
    margin-top: 5px;
}
@media only screen and (max-width: 1024px) {
  section {
    padding-bottom: 0;
  }
  .nav-bar {
    margin-top: 80px;
  }
  #overview {
    padding: 80px 20px;
  }
}
@media only screen and (max-width: 800px) {
  #overview {
    padding: 40px 20px;
  }
  .nav-bar ul {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 10px;
    margin-bottom: -10px;
  }
  .column-60 {
    width: 100%;
  }
  .column-40 {
    display: none;
  }
  .hero-text p {
    margin: 20px 0;
  }
}
@media only screen and (max-width: 699px) {
  .to-stick.sticky {
    top: 60px;
  }
  .nav-bar .container {
    padding: 15px 2px 15px 15px;
  }
}
</style>