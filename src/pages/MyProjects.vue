<template>
    <projects-banner :isBtVisible="isBtVisible" :isPhVisible="isPhVisible" :isIhVisible="isIhVisible" :isJoiiVisible="isJoiiVisible"></projects-banner>
    <the-projects @btVisible="btVisible" @phVisible="phVisible" @ihVisible="ihVisible" @joiiVisible="joiiVisible"></the-projects>
</template>

<script>
import ProjectsBanner from '../components/ProjectsBanner.vue';
import TheProjects from '../components/TheProjects.vue';

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
            isJoiiVisible: false
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
        }
    }
}
</script>