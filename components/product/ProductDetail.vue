<template>
  <div class="productDetail">
    <div class="content">
      <div class="img">
        <img :src="imgBefore" alt="Image default" />
      </div>
      <div class="text">
        <h3>{{ productsItem.title }}</h3>
        <div class="tags">
          <span v-for="(tag, i) in productsItem.tags" :key="i">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProductDetail',
  data() {
    return {
      imgBefore: null,
    }
  },

  computed: {
    ...mapState('product', ['productsItem']),
  },

  created() {
    this.imgBefore = this.$route.query.url
    this.getPrductById(this.$route.params.id)
  },

  methods: {
    ...mapActions('product', ['getPrductById']),
  },
}
</script>

<style lang="scss" scoped>
.productDetail {
  .content {
    display: flex;
    .img {
      width: 50%;
      img {
        width: 60%;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>