<template>
  <hero-banner></hero-banner>
  <my-skills></my-skills>
  <about-me></about-me>
</template>

<script>
 import HeroBanner from '../components/HeroBanner.vue';
 import MySkills from '../components/MySkills.vue';
 import AboutMe from '../components/AboutMe.vue';

export default {
 components: {
   HeroBanner,
   MySkills,
   AboutMe
 },
}
</script>