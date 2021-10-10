<template>
  <div>
    <h1>Posts list</h1>
    <post-item v-bind:key="post.id" :post="post" v-for="post in posts" />
  </div>
</template>

<script>
import PostItem from "./PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>