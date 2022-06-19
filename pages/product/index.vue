<template>
  <div class="product">
    <h1>productType</h1>
    <div>{{ productType }}</div>
    <hr />
    <h1>This is product page</h1>
    <div>
      {{ productList }}
    </div>
    <ProductList />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductPage',

  data: () => {
    return {}
  },

  async fetch({ store }) {
    await store.dispatch('product/getProductList')
    await store.dispatch('product/getProductType')
  },

  computed: {
    ...mapState('product', ['productList', 'productType']),
  },
}
</script>

<style lang="scss" scoped>
</style>