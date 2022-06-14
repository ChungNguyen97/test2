<template>
  <div class="productList">
    <div
      v-for="{ id, images, title } in listProduct"
      :key="id"
      class="item"
      @click="handleShowDetail(id, images.url)"
    >
      <img :src="images.url" :alt="title" class="img" />
      <h3 class="title">{{ title }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProductList',

  computed: {
    ...mapState('product', ['listProduct']),
  },

  created() {
    this.getListProduct()
  },

  methods: {
    ...mapActions('product', ['getListProduct']),
    handleShowDetail(id, url) {
      this.$router.push({
        name: 'product-id',
        params: { id },
        query: { url },
      })
    },
  },
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