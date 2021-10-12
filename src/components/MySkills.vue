<template>
  <section id="skills" class="section-anchor">
    <div class="container">
      <div class="my-skills">
        <h2>My skills</h2>
        <div>
          <p>I started my journey to a web development career at TAFE learning HTML, CSS, PHP, JavaScript, MySQL and AJAX. During this time I also created a small website in Drupal and built a website in WordPress for my first client. When TAFE ended I landed my first job in the industry as a WordPress Developer where I built and maintained a number of WordPress websites for my company and partnering companies.</p>
          <p> During this time I have learnt how to build custom post types and integrated custom fields and page templates. I also integrated an API feed that populated fields on a product page and created my own AJAX search function to filter through these products. I am currently learning Vue.js so that I can build a customer portal as a web app for one of the partnering companies.</p>
        </div>
      </div>
      <div class="core-skills">
        <h3>Core skills</h3>
        <div class="flex icon-blocks">
          <div class="icon-block" v-for="skill in coreSkills" :key="skill.title">
            <img :src="skill.src">
            <h4>{{ skill.title }}</h4>
          </div>
          <!-- <div class="column-50">
            <div v-for="skill in coreSkills" :key="skill.title" class="tab" @click="showTab(skill.title)" :class="{ 'active' : skill.title == tabData }">
              <h4>{{ skill.title }}</h4>
              <p>{{ skill.text }}</p>
            </div>
          </div>
          <div class="column-50 tab-contents">
               <img :src="tabContents"> -->
              <!-- {{ tabContents }} -->
          <!-- </div> --> 
        </div>
      </div>
      <div class="related-skills">
        <h3>Related skills</h3>
        <div class="flex">
          <base-card v-for="skill in relatedSkills" :key="skill" mode="mini">
            <p>{{ skill }}</p>
          </base-card>
        </div>
      </div>
      <div class="professional-skills">
        <h3>Professional Skills</h3>
        <ul class="star-list">
          <li v-for="skill in professionalSkills" :key="skill"><img src="../assets/star.svg" width="18" height="18"><span>{{ skill }}</span></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import cssIcon from  '../assets/icons8-css3-50.png';
import htmlIcon from '../assets/icons8-html-5-50.png';
import WordPressIcon from '../assets/icons8-wordpress-50.png';
import phpIcon from '../assets/icons8-php-logo-50.png';
import JavaScriptIcon from '../assets/icons8-javascript-logo-50.png';
import apiIcon from '../assets/icons8-rest-api-50.png';

export default {
  data() {
    return {
      tabData: 'Wordpress',
      // Add tab contents here
      coreSkills: [
        {
          src: WordPressIcon,
          title: 'WordPress'
        },
        {
          src: cssIcon,
          title: 'CSS'
        },
        {
          src: htmlIcon,
          title: 'HTML'
        },
        {
          src: JavaScriptIcon,
          title: 'JavaScript/jQuery'
        },
        {
          src: phpIcon,
          title: 'PHP'
        },
        {
          src: apiIcon,
          title: 'API Integrations'
        },
      ],
      // coreSkills: [
      //   {
      //     title: 'Wordpress',
      //     text: 'A typical WordPress installation for me includes the Genesis Framework, Elementor and ACF, which helps me to quickly make custom themes for my clients. Elementor is very user-friendly which makes it easy for the client to update their content as required.'
      //   },
      //   {
      //     title: 'HTML & CSS',
      //     text: 'While I am confident across the full stack, I have a growing interest and talent for frontend design.'
      //   },
      //   {
      //     title: 'JavaScript & jQuery',
      //     text: 'Whilst I may not be 100% fluent in JavaScript and jQuery, I know enough to be able to research and find a solution to any problem I face.'
      //   },
      //   {
      //     title: 'APIs & Integrations',
      //     text: 'During my career I have integrated a few APIs into a WordPress website such as Google Maps, Google Sheets, mapBox and Halper (iBuildNew home and land feed).'
      //   }
      // ],
      relatedSkills: [
        'Vue.js',
        'Nuxt.js',
        'Advanced Custom Fields',
        'Genesis Framework',
        'MySQL',
        'Google Analytics',
        'Google Tag Manager',
        'Google Search Console',
        'Zapier',
        'CRM Software',
        'Adobe Products',
        'Heatmap Software',

      ],
      professionalSkills: [
        'Confident working with stakeholders',
        'Excellent written communication',
        'Highly organised & effective time management',
        'Outstanding attention to detail',
        'Familiar with agile development and iterative releases',
        'Definite team player, but confident in working autonomously'
      ] 
    }
  },
  methods: {
    showTab(tab) {
      console.log(tab);
      this.tabData = tab;
      // show tab data
    }
  },
  computed: {
    tabContents() {
      // const tab =  this.tabData;
      // if(tab == 'Wordpress') {
      //   return wordpressImage;
      // } else {
        return this.tabData;
      // }
    }
  }
}
</script>

<style scoped>
  section {
    background-image: url('../assets/blob-grey.svg');
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: -20% 100%;
  }

  .tab {
    background-color: hsl(183, 79%, 13%);
    border-radius: 25px 3px;
    padding: 10px 30px; 
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid var(--primary-colour);
  }

  .tab:hover, .tab.active {
    background-color: hsl(183, 79%, 20%);
  }

  .tab:not(:last-child) {
    margin-bottom: 10px;
  }

  .tab p {
    font-size: 0.9rem;
    margin-top: 0;
  }

  .tab h4 {
    margin-bottom: 0.3em;
  }

  .core-skills .column-50 {
    margin: 20px;
  }

  .tab-contents {
    padding: 30px;
    border: 1px solid var(--primary-colour);
    border-radius: 3px;
    box-shadow: 0 0 10px var(--primary-colour);
  }

  .related-skills, .core-skills, .professional-skills {
    padding-top: 60px;
  }

  .related-skills .flex {
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px;
  }

  .my-skills div {
    padding: 0 20px;
  }

  .icon-block {
    width: 16.66%;
    justify-content: center;
    text-align: center;
}

@media only screen and (max-width: 1100px) {
  .icon-blocks {
    flex-wrap: wrap;
  }
  .icon-block {
    width: 33.33%;
  }
  .icon-block:first-child, .icon-block:nth-child(2), .icon-block:nth-child(3) {
    padding-bottom: 40px;
  }
}
@media only screen and (max-width: 900px) {
  .related-skills, .core-skills, .professional-skills {
    padding-top: 40px;
  }
}
@media only screen and (max-width: 500px) {
  .icon-blocks {
    margin-left: -20px;
  }
  .icon-block {
    width: 50%;
  }
  .my-skills div {
    padding: 0;
  }
  .related-skills .flex {
    margin: 20px 0 0;
  }
  section {
    background-size: 150%;
    background-position: 100% 50%;
  }
}

</style>