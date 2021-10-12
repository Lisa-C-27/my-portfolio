<template>
  <section>
    <div class="container flex">
      <div class="column-60">
        <div class="hero-text">
          <h1><span class="sub-heading">oh hey</span>I'm Lisa <span class="below-heading">a front-end web developer</span></h1>
          <p>WordPress | HTML | CSS | PHP | JavaScript | jQuery | Vue.js | AJAX | MySQL</p>
          <div class="flex banner-ctas">
            <base-button url="/#skills" mode="ghost">Explore my skills <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="16px" viewBox="0 0 24 24" width="16px"><rect fill="none" height="24" width="24"/><path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z"/></svg></base-button>
            <base-button url="/projects">View my portfolio <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="16px" viewBox="0 0 24 24" width="16px"><rect fill="none" height="24" width="24"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/></svg></base-button>
          </div>
        </div>
        <hr>
        <div class="flex">
          <div class="project-logo-container">
            <a href="https://buildtoday.com.au" target="_blank" rel="nofollow noreferrer noopener" class="flex">
              <img src="../assets/buildtoday-logo.svg">
              <p>View website<svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></p>
            </a>
          </div>
          <div class="project-logo-container">
            <a href="https://www.priviumhomes.com.au" target="_blank" rel="nofollow noreferrer noopener" class="flex">
              <img src="../assets/privium-homes-logo.svg">
              <p>View website<svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></p>
            </a>
          </div>
          <div class="project-logo-container">
            <a href="https://impacthomes.com.au" target="_blank" rel="nofollow noreferrer noopener" class="flex">
              <img src="../assets/impact-homes-logo.svg">
              <p>View website<svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></p>
            </a>
          </div>
        </div>
      </div>
      <div class="column-40 img-bubbles">
        <img src="../assets/avatar-maker.svg" alt="avatar" class="avatar-image">
      </div>
    </div>
  </section>
</template>

<style scoped>
  section {
    padding: 250px 0 180px;
  }
  span {
    color: #fff;
    display: block;
  }
  .sub-heading {
    font-size: 1rem;
    font-family: 'Karla', sans-serif;
  }
  
  .below-heading {
    font-size: 1.8rem;
    font-family: 'Karla', sans-serif;
  }
  hr {
    margin: 50px 0;
    max-width: 580px;
  }
  .hero-text a {
    margin-right: 10px;
    display: inline-block;
  }
  .hero-text p {
    margin: 0 0 40px;
  }
  /* .hero-text svg {
    fill: inherit;
    margin-left: 5px;
  } */
  .project-logo-container {
    background-color: #fff;
    width: 187px;
    height: 70px;
    justify-content: center;
    border-radius: 25px 3px;
    padding: 15px 5px 12px;
    border: 2px solid transparent;
    transition: all 0.2s linear;
  }
  .project-logo-container:not(:last-child) {
    margin-right: 10px;
  }
  .project-logo-container a {
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    flex-wrap: wrap;
  }
  .project-logo-container:hover {
    border: 2px solid var(--primary-colour);
  }
  .project-logo-container img {
    width: 85%;
  }
  .project-logo-container p {
      margin: 0;
      font-size: 0.8rem;
      line-height: 1;
      color: #000;
  }
  .avatar-image {
    max-width: 80%;
    background-color: hsl(225, 6%, 13%);
    border-radius: 50%;
    border: 1px solid #12969E;
    box-shadow: 0 0 15px #12969e;
    position: relative;
    z-index: 1;
    animation: color-pulse 5s linear infinite alternate;
  }
  .img-bubbles {
    position: relative;
  }
  .img-bubbles:before,
  .img-bubbles:after {
    content: '';
    background-color: hsl(225, 6%, 13%);
    position: absolute;
    border-radius: 50%;
  }
  .img-bubbles:before {
    width: 120px;
    height: 120px;
    top: 0px;
    right: 22%;
    box-shadow: 0 0 15px #a31266;
    animation: pulse 8s linear infinite alternate;
    border: 1px solid #a31266;
  }
  .img-bubbles:after {
    width: 80px;
    height: 80px;
    bottom: 10%;
    right: 18%;
    box-shadow: 0 0 15px #12969e;
    border: 1px solid #12969E;
    animation: pulse 5s infinite linear alternate-reverse;
  }

  @keyframes pulse {
    0% {
      border-color: #12969E;
      box-shadow: 0 0 15px #12969e;
      transform: translate(-5px, -5px) scale(1);
    }
    50% {
      border-color: #a31266;
      box-shadow: 0 0 15px #a31266;
      transform: translate(0, 0) scale(1.1);
    }
    100% {
      border-color: #146ebc;
      box-shadow: 0 0 15px #146ebc;
      transform: translate(5px, 5px) scale(1.2);
    }
  }

    @keyframes color-pulse {
    0% {
      border-color: #12969E;
      box-shadow: 0 0 15px #12969e;
    }
    50% {
      border-color: #a31266;
      box-shadow: 0 0 15px #a31266;
    }
    100% {
      border-color: #146ebc;
      box-shadow: 0 0 15px #146ebc;
    }
  }
  @media only screen and (max-width: 1024px) {
    section {
      padding: 250px 0 80px;
    }
    .img-bubbles:after {
      bottom: 20%;
    }
  }

  @media only screen and (max-height: 800px) {
    section {
      padding: 200px 0 100px;
    }
  }

  @media only screen and (max-width: 800px) {
    section {
      padding: 100px 0 0;
    }
    .container {
      flex-wrap: wrap;
      justify-content: center;
    }
    .column-60 {
      width: 100%;
    }
    .img-bubbles {
      width: 50%;
      padding-top: 120px;
    }
    .img-bubbles:before {
      top: 80px;
    }
    .img-bubbles:after {
      bottom: 0;
    }
  }
  @media only screen and (max-width: 500px) {
    .flex {
      flex-wrap: wrap;
    }
    .hero-text a:first-child {
      order: 2;
      margin-top: 10px;
    }
    .project-logo-container {
      width: 100%;
      margin: 5px 10px 5px 0;
    }
    .project-logo-container a {
      max-width: 200px;
      margin: 0 auto;
    }
    .avatar-image {
      max-width: 100%;
    }
    .img-bubbles {
      width: 90%;
    }
    .img-bubbles:before {
      right: 0;
    }
    .img-bubbles:after {
      bottom: 15px;
      right: unset;
      left: -25px;
    }
  }
</style>