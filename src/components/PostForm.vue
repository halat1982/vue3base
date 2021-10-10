<template>
  <form @submit.prevent>
    <h4>Add post</h4>
    <form-input v-model="post.title"  type="text" placeholder="Title" />
    <form-input v-model="post.body" class="input" type="text" placeholder="Description" />
    <Button  @click="createPost" style="align-self: flex-end;">Create post</Button>
  </form>
</template>

<script>

export default {

  data(){
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods:{
    createPost(){

      this.post.id =  Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
}


</style>