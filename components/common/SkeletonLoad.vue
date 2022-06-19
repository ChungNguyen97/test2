<template>
  <div class="skeleton">
    <div
      class="load"
      :style="{
        borderWidth: bw + 'px',
        borderStyle: 'solid',
        borderColor: c,
        width: w + 'px',
        height: h + 'px',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonLoad',
  props: {
    c: {
      type: String,
      default: 'blue',
    },
    w: {
      type: [String, Number],
      default: 50,
    },
    h: {
      type: [String, Number],
      default: 50,
    },

    bw: {
      type: Number,
      default: 5,
    },
  },
}
</script>

<style lang="scss" scoped>
.skeleton {
  .load {
    border-radius: 100rem;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    animation: loadtime 1s linear infinite;
    margin: 0 auto;
    @keyframes loadtime {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>