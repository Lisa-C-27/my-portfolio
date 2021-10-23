<template>
  <hero-banner></hero-banner>
  <my-skills></my-skills>
  <about-me></about-me>
</template>

<script>
 import HeroBanner from '../components/HeroBanner.vue';
 import MySkills from '../components/MySkills.vue';
 import AboutMe from '../components/AboutMe.vue';
 import { mapMutations } from 'vuex';

export default {
 components: {
   HeroBanner,
   MySkills,
   AboutMe
 },
 methods: {
   ...mapMutations(['updateMenuActive'])
 },
 mounted() {
   this.updateMenuActive(false);
 }
}
</script>