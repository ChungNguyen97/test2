<template>
  <div class="tag-page">
    <h1>TAG PAGE</h1>
    <div class="list-tag">{{ data }}</div>
  </div>
</template>

<script>
export default {
  name: 'TagPage',

  // async asyncData(context) {
  //   const res = await context.$axios.get(
  //     'https://shopify-dialga.herokuapp.com/api/graph'
  //   )
  //   const data = await res.data

  //   console.log(res)
  //   return { data }
  // },
}
</script>

<style>
</style>