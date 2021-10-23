<template>
  <div v-if="posts.length > 0">
    <h1>Posts list</h1>
    <transition-group name="post-list">
    <post-item @remove="$emit('remove', post)" v-bind:key="post.id" :post="post" v-for="post in posts" />
    </transition-group>
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
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 1s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.post-list-move {
  transition: transform 0.8s ease;
}
</style>