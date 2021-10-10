<template>
  <div v-if="posts.length > 0">
    <h1>Posts list</h1>
    <post-item @remove="$emit('remove', post)" v-bind:key="post.id" :post="post" v-for="post in posts" />
  </div>
  <h2 v-else style="color:red;">
    The list of posts is empty
  </h2>
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