<template>
  <a :href="url" v-if="link" :class="mode"><slot></slot></a>
  <router-link v-else :to="url" :class="mode"><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    url: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
  a {
    padding: 8px 25px;
    border: 1px solid var(--primary-colour);
    cursor: pointer;
    border-radius: 25px 3px;
    text-decoration: none;
    background-color: #07393C;
    color: #fff;
    transition: all 0.3s ease-in-out;
    fill: #fff;
  }
  .ghost {
    background-color: transparent;
    color: #fff;
    border-color: #fff;
    fill: #fff;
  }
   a:hover {
    background-color: var(--primary-colour);
    border-color: var(--primary-colour);
    color: #000;
    fill: #000;
  }

</style>