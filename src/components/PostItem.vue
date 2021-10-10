<template>
  <div class="post">
    <div>
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="post_btns">
      <Button>Delete</Button>
    </div>
  </div>
</template>

<script>
import Button from "./UI/Button";
export default {
  components: {Button},
  props: {
  post: {
    type: Object,
    required: true,
  }
}
}
</script>

<style scoped>
.post {
  border: 2px solid teal;
  padding: 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>