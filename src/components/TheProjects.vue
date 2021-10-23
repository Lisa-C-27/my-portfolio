<template>
<section>
  <div class="container" id="buildtoday" v-observe-visibility="visibilityChanged">
    <span class="sub-heading">Case study</span>
    <h2>buildtoday</h2>
    <div class="flex">
      <div class="column-50">
        <h3>The project</h3>
        <div class="inner-container">
          <p>This website has been in development for about 2 years overall. It started out as a basic 5 page website when the company first launched. It has gone through a couple of rebrands during this time whilst the company was finding its feet. We would release new features for the website on a regular basis.</p>
          <p>Today the website features over 25 pages, 80+ blogs, 23 home designs (built with a custom post type). It did have a home and land packages section that I built by integrating Halper API into a custom post type along with a custom search function built with AJAX. This section of the website is currently hidden however due to changes within the company.</p>
          <base-button link url="https://buildtoday.com.au" target="_blank" rel="nofollow noopener noreferrer">View website<svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></base-button>
        </div>
      </div>
      <div class="column-50">
        <div class="scroll-image-container">
          <img src="../assets/buildtoday-screenshot.jpg" id="btImg" :style="btHeight">
        </div>
      </div>
    </div>
    <h3 class="">Frameworks, libraries and software</h3>
    <div class="margin-wrapper">
      <p>Below is a list of some tools that I worked with and/or integrated during the course of developing this website.</p>
      <div class="flex box-list">
        <base-card v-for="tool in buildtodayTools" :key="tool" mode="mini">
          <p>{{ tool }}</p>
        </base-card>
      </div>
    </div>
  </div>

  <div class="container" id="privium-homes" v-observe-visibility="visibilityChanged">
    <hr/>
    <span class="sub-heading">Case study</span>
    <h2>Privium Homes</h2>
    <div class="flex">
      <div class="column-50">
        <h3>The project</h3>
        <div class="inner-container">
          <p>Privium Homes is very similar to buildtoday's lifecycle. It was previously 2 separate brands (owned by the same company) merging into one and has been in development for around 2 years. It has also gone through a style rebrand.</p>
          <p>Features for this website have been released in stages. I have created 3 custom post types and post page templates, along with a custom jQuery filter function. Similar to the buildtoday website I had integrated Halper API for home and land packages but this feature is currently hidden from the website due to changes within the company.</p>
          <base-button link url="https://priviumhomes.com.au" target="_blank" rel="nofollow noopener noreferrer">View website<svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></base-button>
        </div>
      </div>
      <div class="column-50">
        <div class="scroll-image-container">
          <img src="../assets/priviumhomes-screenshot.jpg" id="phImg" :style="phHeight">
        </div>
      </div>
    </div>
    <h3 class="">Frameworks, libraries and software</h3>
    <div class="margin-wrapper">
      <p>Below is a list of some tools that I worked with and/or integrated during the course of developing this website.</p>
      <div class="flex box-list">
        <base-card v-for="tool in PHTools" :key="tool" mode="mini">
          <p>{{ tool }}</p>
        </base-card>
      </div>
    </div>
    
  </div>

    <div class="container" id="impact-homes" v-observe-visibility="visibilityChanged">
    <hr/>
    <span class="sub-heading">Case study</span>
    <h2>Impact Homes</h2>
    <div class="flex">
      <div class="column-50">
        <h3>The project</h3>
        <div class="inner-container">
          <p>I recently built a new website for Impact Homes as their previous website was outdated and lacking content. I worked alongside a marketing expert who has UX design knowledge and an external designer who provided a few photoshop designed sections. I was able to develop and style this website in 2 weeks.</p>
          <p>The original website had been around for quite some time and was getting a lot of spam form completions. So I implemented an anti-spam filter plugin, however noticed that the filter was almost too good and was blocking users who mistyped their emails. So I implemented an email autocomplete suggestion, as well as a fallback notification if it appears an email domain may be mistyped based on major email provider domains.</p>
          <base-button link url="https://www.impacthomes.com.au" target="_blank" rel="nofollow noopener noreferrer">View website<svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></base-button>
        </div>
      </div>
      <div class="column-50">
        <div class="scroll-image-container">
          <img src="../assets/impacthomes-screenshot.jpg" id="ihImg" :style="ihHeight">
        </div>
      </div>
    </div>
    <h3 class="">Frameworks, libraries and software</h3>
    <div class="margin-wrapper">
      <p>Below is a list of some tools that I worked with and/or integrated during the course of developing this website.</p>
      <div class="flex box-list">
        <base-card v-for="tool in IHTools" :key="tool" mode="mini">
          <p>{{ tool }}</p>
        </base-card>
      </div>
    </div>
  </div>
  <div class="container" id="joii" v-observe-visibility="visibilityChanged">
    <hr/>
    <span class="sub-heading">Case study</span>
    <h2>Joii</h2>
    <div class="flex">
      <div class="column-50">
        <h3>The project</h3>
        <div class="inner-container">
          <p>I recently completed this website with some assistance from a marketing expert with UX design knowledge. The issue with the previous website was the navigation was confusing for users as there was multiple menus for all the different Joii brands, and was easy to get lost.</p>
          <p>We redesigned the main navigation to include 4 over-arching 'categories' for the brands and this main navigation does not change throughout the site except for highlighting which category of the site you are currently in. When inside one of those categories the menu will change to the relevant menu items for that category.</p>
          <p>The rest of the website had a small facelift and each section was reviewed to ensure usability and accessibility.</p>
          <base-button link url="https://joii.org" target="_blank" rel="nofollow noopener noreferrer">View website<svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></base-button>
        </div>
      </div>
      <div class="column-50">
        <div class="scroll-image-container">
          <img src="../assets/joii-screenshot.jpg" id="joiiImg" :style="joiiHeight">
        </div>
      </div>
    </div>
    <h3 class="">Frameworks, libraries and software</h3>
    <div class="margin-wrapper">
      <p>Below is a list of some tools that I worked with and/or integrated during the course of developing this website.</p>
      <div class="flex box-list">
        <base-card v-for="tool in JoiiTools" :key="tool" mode="mini">
          <p>{{ tool }}</p>
        </base-card>
      </div>
    </div>
    
  </div>
  <div class="container" id="todo-app" v-observe-visibility="visibilityChanged">
    <hr/>
    <span class="sub-heading">Case study</span>
    <h2>Todo App</h2>
    <div class="flex">
      <div class="column-50">
        <h3>The project</h3>
        <div class="inner-container">
          <p>I recently have been learning the JavaScript framework Vue3. I wanted to put what I had been learning into practice and have recently been completing challenges on <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener nofollow">Frontend Mentor</a> (to further increase my skills in structuring HTML and CSS), so I decided to complete this particular challenge using Vue3.</p>
          <p>The challenge is to create a todo app that allows the user to create, complete and delete todo items. They should also be able to drag and drop the todo items to re-order the list. The page should also be able to be switched between light and dark mode. Frontend Mentor provide a design template to work from.</p>
          <p>I decided to add a little extra functionality and store the todo items in localStorage so that the items save between page reloads. I also added an undo notification when a user deletes an item, so they can undo the last delete if it was a mistake.</p>
          <base-button link url="https://lisa-c-27.github.io/frontend-mentor-challenges/todo-app-page/index.html" target="_blank" rel="nofollow noopener noreferrer">View app<svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></base-button>
        </div>
      </div>
      <div class="column-50">
        <div class="scroll-image-container">
          <img src="../assets/todo-app.jpg" id="todoImg">
        </div>
      </div>
    </div>
    <h3 class="">Frameworks, libraries and software</h3>
    <div class="margin-wrapper">
      <p>Below is a list of some tools that I worked with and/or integrated during the course of developing this app.</p>
      <div class="flex box-list">
        <base-card v-for="tool in todoTools" :key="tool" mode="mini">
          <p>{{ tool }}</p>
        </base-card>
      </div>
    </div>
    
  </div>
</section>
</template>

<script>
import BaseButton from '../layout/BaseButton.vue';

export default {
  components: { BaseButton },
  emits: ['btVisible', 'phVisible', 'ihVisible', 'joiiVisible', 'todoVisible'],
  data() {
    return {
      buildtodayTools: [
        'WordPress',
        'Genesis',
        'Elementor',
        'Advanced Custom Fields',
        'HTML5/CSS3/PHP7',
        'jQuery/AJAX',
        'Halper API',
        'ActiveCampaign',
        'Zapier',
        'Pipedrive',
        'Gravity Forms',
        'Calendly'
      ],
      PHTools: [
        'WordPress',
        'Genesis',
        'Elementor',
        'Advanced Custom Fields',
        'HTML5/CSS3/PHP7',
        'jQuery/AJAX',
        'Halper API',
        'ActiveCampaign',
        'Zapier',
        'Pipedrive',
        'Gravity Forms',
        'Calendly'
      ],
      IHTools: [
        'WordPress',
        'Genesis',
        'Elementor',
        'Advanced Custom Fields',
        'HTML5/CSS3/PHP7',
        'jQuery',
        'Gravity Forms',
        'Mailcheck.js'
      ],
      JoiiTools: [
        'WordPress',
        'Genesis',
        'Elementor',
        'Advanced Custom Fields',
        'HTML5/CSS3/PHP7',
        'jQuery',
        'Gravity Forms',
        'ActiveCampaign'
      ],
      todoTools: [
        'Vue3.js',
        'Vuex',
        'Vue CLI',
        'Vue Draggable',
        'Babel',
        'ESLint',
        'HTML5',
        'CSS3'
      ],
      btHeight: '',
      phHeight: '',
      ihHeight: '',
      joiiHeight: '',
    }
  },
  methods: {
    setHeight() {
      var v = this;
      setTimeout(function() {
        var btHeights = document.getElementById('btImg').offsetHeight;
        var calcHeight = btHeights - 460;
        const height = 'bottom: -' + calcHeight + 'px';
        v.btHeight = height;
      }, 1000);
      setTimeout(function() {
        var phHeights = document.getElementById('phImg').offsetHeight;
        const calcHeight = phHeights - 460;
        const phheight = 'bottom: -' + calcHeight + 'px';
        v.phHeight = phheight;
      }, 2000);
      setTimeout(function() {
        var ihHeights = document.getElementById('ihImg').offsetHeight;
        const ihCalcHeight = ihHeights - 460;
        const ihheight = 'bottom: -' + ihCalcHeight + 'px';
        v.ihHeight = ihheight;
      }, 2000);
      setTimeout(function() {
        var joiiHeights = document.getElementById('joiiImg').offsetHeight;
        const joiiCalcHeight = joiiHeights - 460;
        const joiiheight = 'bottom: -' + joiiCalcHeight + 'px';
        v.joiiHeight = joiiheight;
      }, 2000);
    },
    visibilityChanged (isVisible, entry) {
      const id = entry.target.id;
      if(id === 'buildtoday') {
        this.$store.dispatch('updateBtVisible', isVisible)
      } else if(id === 'privium-homes') {
        this.$store.dispatch('updatePhVisible', isVisible)
      } else if(id === 'impact-homes') {
        this.$store.dispatch('updateIhVisible', isVisible)
      } else if(id === 'joii') {
        this.$store.dispatch('updateJoiiVisible', isVisible)
      } else if(id === 'todo-app') {
        this.$store.dispatch('updateTodoVisible', isVisible)
      }
    }
  },
  watch: {
    '$screen.width': {
      handler: 'setHeight',
      deep: true
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.setHeight();
    });
  }
}
</script>

<style scoped>
  .container {
    padding-top: 100px;
  }
  .container:first-child {
    padding-top: 170px;
    margin-top: -70px;
  }
  section .container:last-child {
    padding-bottom: 80px;
  }
  h2 {
    margin-top: 0;
  }
  .container > h3 {
    margin-top: 70px;
  }
  .sub-heading {
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: lowercase;
  }
  .box-list {
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .margin-wrapper {
    margin: 20px;
  }
  .inner-container {
    padding: 0 40px 0 20px;
  }
  .inner-container > a {
    display: inline-block;
    margin-top: 10px;
  }
  .scroll-image-container {
    position: relative;
    border-radius: 3px;
    height: 460px;
    overflow: hidden;
  }
  .scroll-image-container img {
    position: absolute;
    transition: all 4s linear;
    z-index: 0;
    max-width: 100%;
    width: 100%;
    border-radius: 3px;
  }
  .scroll-image-container #todoImg {
    position: initial;
  }
  .column-50:last-child {
    padding: 20px;
  }
  hr {
    margin-bottom: 100px;
    width: 1278px;
    max-width: 1278px;
    margin-left: -40px;
  }
  @media only screen and (min-width: 1025px) {
    .scroll-image-container img:hover {
      bottom: 0 !important;
      transition: all 10s linear;
    }
    .scroll-image-container #ihImg:hover {
      transition: all 6s linear;
    }
    .scroll-image-container #joiiImg:hover {
      transition: all 4s linear;
    }
  }
  @media only screen and (max-width: 1280px) {
    hr {
      max-width: 100%;
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 800px) {
    .flex {
      flex-wrap: wrap;
    }
    .column-50 {
      width: 100%;
    }
    .container:first-child {
      margin-top: -100px;
    }
    .container > h3 {
      margin-top: 50px;
    }
    hr {
      margin-bottom: 70px;
    }
    .container {
      margin-top: -50px;
    }
    .inner-container {
      padding: 0 20px;
    }
    .inner-container a {
      margin-bottom: 10px;
    }
    #todo-app .scroll-image-container {
      height: auto;
    }
    
  }
  @media only screen and (max-width: 500px) {
    .inner-container {
      padding: 0;
    }
    .margin-wrapper {
      margin: 20px 0;
    }
    .column-50:last-child {
      padding: 20px 0;
    }
  }
</style>