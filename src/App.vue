	<template>
	<div class="app">
    <h2>Push the button for create post</h2>
    <Button @click="showDialog" style="margin:15px 0;">
      Create Post
    </Button>
    <dialog-form v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </dialog-form>
  <post-list @remove="removePost" v-bind:posts="posts" v-if="!isPostLoading"/>
    <div v-if="isPostLoading">Waiting....</div>
  </div>

	</template>

	<script>
  import PostForm from "./components/PostForm";
  import PostList from "./components/PostList";
  import DialogForm from "./components/UI/DialogForm";
  import Button from "./components/UI/Button";
  import axios from 'axios';
	export default {
    components: {
      Button,
      DialogForm,
      PostList, PostForm
    },
    data(){
      return {
        posts: [],
        dialogVisible: false,
        isPostLoading: false
      }
    },
    methods: {
      createPost(post){
        this.posts.push(post);
        this.dialogVisible = false;
      },
      removePost(post){
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
      showDialog(){
        this.dialogVisible = true;
      },
      async fetchPosts() {
        try {
          this.isPostLoading = true;
          const response =  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
        } catch(e) {
          alert("Something wrong with request or with response");
        } finally {
          this.isPostLoading = false;
        }
      }
    },
    mounted() {
      this.fetchPosts();
    }
  }
	</script>

	<style>
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
  }


  </style>
