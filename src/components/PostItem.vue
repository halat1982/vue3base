<template>
  <div class="post">
    <div>
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="post_btns">
      <Button @click="$emit('remove', post)">Delete</Button>
    </div>
  </div>
</template>

<script>

export default {
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