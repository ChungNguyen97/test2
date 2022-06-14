<template>
  <div class="tagPage">
    <h1>This is tag page</h1>
    <SkeletonLoad c="green" :bw="7" :h="60" :w="60" />
    <div class="listTag">
      <p v-for="(tag, i) in listTag" :key="i" class="tag">{{ tag.title }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'TagPage',

  computed: {
    ...mapState('tag', ['listTag']),
  },
  created() {
    this.getListTag()
  },
  methods: {
    ...mapActions('tag', ['getListTag']),
  },
}
</script>

<style lang="scss" scoped>
.tagPage {
  .listTag {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    .tag {
      color: blue;
      border: 1px solid;
      width: 20%;
      padding: 30px 20px;
      text-align: center;
      border-radius: 7px;
    }
  }
}
</style>