<template>
  <div :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
  }
}
</script>

<style scoped>
div {
  box-shadow: 0 0 10px var(--primary-colour);
  background-color: hsl(225, 6%, 13%);
  border: 1px solid var(--primary-colour);
  border-radius: 3px;
}
.mini {
  margin: 10px 2.5px;
  width: calc(25% - 20px);
  text-align: center;
}
@media only screen and (max-width: 1100px) {
  .mini {
    width: calc(33.33% - 20px);
  }
}
@media only screen and (max-width: 850px) {
  .mini {
    width: calc(50% - 20px);
  }
}
@media only screen and (max-width: 560px) {
  .mini {
    width: 100%;
  }
}
</style>