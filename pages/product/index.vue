<template>
  <div class="product">
    <h1>This is product page</h1>
    <ProductList />
    <SkeletonLoad />
  </div>
</template>

<script>
export default {
  name: 'ProductPage',

  asyncData() {},

  data() {
    return {
      itemId: null,
    }
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
</style>