<template>
  <div class="productList"></div>
</template>

<script>
export default {
  name: 'ProductList',

  computed: {},

  created() {},
}
</script>

<style lang="scss" scoped>
.productList {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px 0;
  .item {
    width: 23%;
    border: 1px solid #95a5a6;
    .img {
      width: 100%;
    }
    .title {
      text-align: center;
    }
  }
}
</style>