<template>
  <div class="main">
    <div>
      <div class="listProduct">
        <div
          v-for="{ id, images, title, variants } in productList"
          :key="id"
          class="item"
          @click="handleShowDetail(id, images.url)"
        >
          <img :src="images.url" :alt="title" class="img" />
          <p class="price">{{ variants[0].price }}</p>
          <h3 class="title">{{ title }}</h3>
          <button>Xem chi tiết</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      list: [],
      type: '',
    }
  },

  async fetch({ store }) {
    await store.dispatch('product/getProductList')
    // await store.dispatch('product/getProductType')
  },

  computed: {
    ...mapState('product', ['productList', 'productType']),
  },
  watch: {
    type() {
      this.getProductList({ type: this.type })
    },
  },
  methods: {
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
.main {
  margin-top: 50px;
  .title {
    text-align: center;
  }
  .listProduct {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 28px;
  }
  .item {
    border: 1px solid #c89979;
    width: 23%;
    border-radius: 2px;
    .title {
      color: #3a3a3a;
    }
    .img {
      width: 100%;
    }
  }
}
</style>
