<template>
    <projects-banner :isBtVisible="isBtVisible" :isPhVisible="isPhVisible" :isIhVisible="isIhVisible" :isJoiiVisible="isJoiiVisible" :isTodoVisible="isTodoVisible"></projects-banner>
    <the-projects @btVisible="btVisible" @phVisible="phVisible" @ihVisible="ihVisible" @joiiVisible="joiiVisible" @todoVisible="todoVisible"></the-projects>
</template>

<script>
import ProjectsBanner from '../components/ProjectsBanner.vue';
import TheProjects from '../components/TheProjects.vue';
import { mapMutations } from 'vuex';

export default {
    components: {
        ProjectsBanner,
        TheProjects
    },
    data() {
        return {
            isBtVisible: false,
            isPhVisible: false,
            isIhVisible: false,
            isJoiiVisible: false,
            isTodoVisible: false
        }
    },
    methods: {
        phVisible(value) {
            this.isPhVisible = value
        },
        btVisible(value) {
            this.isBtVisible = value;
        },
        ihVisible(value) {
            this.isIhVisible = value;
        },
        joiiVisible(value) {
            this.isJoiiVisible = value;
        },
        todoVisible(value) {
            this.isTodoVisible = value;
        },
        ...mapMutations(['updateMenuActive'])
      },
      mounted() {
        this.updateMenuActive(false);
      }
}
</script>