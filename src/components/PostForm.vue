<template>
  <form @submit.prevent>
    <h4>Add post</h4>
    <input v-model="post.title" class="input" type="text" placeholder="Title">
    <input v-model="post.body" class="input" type="text" placeholder="Description">
    <Button  @click="createPost" style="align-self: flex-end;">Create post</Button>
  </form>
</template>

<script>
import Button from "./UI/Button";
export default {
  components: {
    Button
  },
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
.input {
  width:100%;
  margin-top:15px;
  padding:10px 15px;
  border: 1px solid teal;
}

form {
  display: flex;
  flex-direction: column;
}


</style>