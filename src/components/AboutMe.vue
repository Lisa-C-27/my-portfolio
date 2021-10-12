<template>
  <section id="about" class="section-anchor">
    <div class="container">
      <h2>Get to know me</h2>
      <div class="flex">
        <div class="column-60">
          <span class="subheading">Hey there! I'm Lisa.</span>
          <h3 class="border-left margin-left-adj">I'm a front-end web developer</h3>
          <p>A few years ago I was looking for a career change. I took a chance on a Web Development course through TAFE and now, HERE I AM!</p>
          <p>To say I love web development is an absolute understatement. More accurately, I am in raptures. For me, web development is the perfect mix of problem solving, creativity and practical implementation.</p>
          <p>Over the past few years I have worked across a number of web projects and have needed to collaborate with varied stakeholders. This has been challenging, exciting and brought with it many learning experiences which have helped me grow both professionally and personally.</p>
          <p>Most notably, my recent accomplishments have included implementing cookie based web personalisation and using an API feed to generate product pages with a custom search function to filter through these products.</p>
        </div>
        <div class="column-40 flex">
          <div class="profile-card flex">
            <img src="../assets/lisa-85x85.jpg" width="85" height="85" alt="Image of Lisa">
            <div class="profile-card-text flex">
              <h4>Lisa Clark</h4>
              <p>@kandi_galaxy</p>
            </div>
          </div>
          <div v-for="card in profileCard" :key="card.title" class="profile-card flex green-border">
            <img :src="card.src" width="85" height="85" :alt="card.alt">
            <div class="profile-card-text flex">
              <h4>{{ card.title }}</h4>
              <p>{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="more-about-me">
        <h3>You'll love me because...</h3>
        <ul class="star-list">
          <li v-for="me in loveMe" :key="me">
            <img src="../assets/star.svg" width="18" height="18">
            <span>{{ me }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import isaacImage from '../assets/issac-85x85.jpg';
import tombraiderImage from '../assets/tombraider-85x85.jpg';
import cheesecakeImage from '../assets/cheesecake-85x85.jpg';
import gidgetImage from '../assets/gidget-85x85.jpg';

export default {
  
  data() {
    return {
      profileCard: [
        {
          title: 'Most Played Game',
          text: 'Binding of Isaac - 660+ hours',
          src: isaacImage,
          alt: 'Binding of Isaac'  
        },
        {
          title: 'Favourite Game Series',
          text: 'Tombraider',
          src: tombraiderImage,
          alt: 'Tombraider'  
        },
        {
          title: 'Favourite cake',
          text: 'Cheesecake',
          src: cheesecakeImage,
          alt: 'Cheesecake'  
        },
        {
          title: 'Pet parent to',
          text: 'Gidget, the bearded dragon',
          src: gidgetImage,
          alt: 'bearded dragon'  
        },
      ],
      loveMe: [
        'I\'m an epic problem solver',
        'I\'m a super fast, lightning quick learner',
        'I\'m reliable, honest & trustworthy',
        'I\'m obsessed with user experience',
        'I\'m good at explaining things to non-technical people',
        'I will always give you 100%'
      ]
    }
  }
}
</script>

<style scoped>
  section {
    padding-bottom: 80px;
    background-image: url('../assets/blob.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: calc(100vw - 90%) center;
  }
  .profile-card img {
    margin-right: 20px;
    border-radius: 3px;
  }
  .profile-card-text {
    flex-direction: column;
    justify-content: center;
  }
  .profile-card-text > * {
    margin: 0;
  }
  .column-60 {
    padding: 20px 70px 20px 20px;
  }
  .column-40 {
    padding: 20px 40px;
    flex-direction: column;
    justify-content: space-between;
  }
  .green-border {
    border-radius: 3px;
    border: 1px solid var(--primary-colour);
    box-shadow: 0 0 6px var(--primary-colour);
    background-color: hsl(225, 6%, 13%);
  }
  .profile-card:first-child img {
    border-radius: 50px;
  }
  .margin-left-adj {
    margin-left: -20px;
  }
  .more-about-me {
    padding-top: 50px;
  }
  @media only screen and (max-width: 1300px) {
    section {
      background-position: calc(80vw - 90%) center;
    }
  }
  @media only screen and (max-width: 1150px) {
    .column-40 {
      padding: 20px;
      justify-content: flex-start;
    }
    .profile-card-text {
      padding-right: 20px;
    }
    .profile-card-text p {
      line-height: 1.2;
    }
    .profile-card {
      margin-bottom: 20px;
    }
    .profile-card-text > h4 {
      margin-bottom: 3px;
    }
  }
  @media only screen and (max-width: 1000px) {
    .column-60 {
      padding-right: 40px;
    }
  }
  @media only screen and (max-width: 900px) {
    .column-60, .column-40 {
      width: 50%;
    }
    .column-60 p:last-child {
      width: calc(100vw - 80px);
    }
    .more-about-me {
      padding-top: 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    .column-60 {
      width: 100%;
      order: 2;
    }
    .column-40 {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .profile-card:first-of-type {
      width: 100%;
    }
    .profile-card.green-border {
      width: calc(50% - 10px);
    }
    .container > .flex {
      flex-wrap: wrap;
    }
  }
  @media only screen and (max-width: 700px) {
    .profile-card.green-border {
      width: 365px;
    }
  }
  @media only screen and (max-width: 560px) {
    .profile-card.green-border {
      width: 100%;
    }
  }
  @media only screen and (max-width: 500px) {
    .column-40 {
      padding: 0 0 20px;
    }
    .column-60 {
      padding: 0;
    }
    .margin-left-adj {
      margin-left: 0;
    }
    section {
      padding-bottom: 50px;
      background-size: 200%;
      background-position: calc(10vw - 5%) bottom;
    }
  }
  
</style>