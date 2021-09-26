	<template>
	<div class="app">
  <post-form @create="createPost"/>
  <post-list v-bind:posts="posts"/>
  </div>

	</template>

	<script>
  import PostForm from "./components/PostForm";
  import PostList from "./components/PostList";
	export default {
    components: {
      PostList, PostForm
    },
    data(){
      return {
        posts: [
          {id:1, title:"Post 1", body:"Post 1 description"},
          {id:2, title:"Post 2", body:"Post 2 description"},
          {id:3, title:"Post 4", body:"Post 3 description"},
          {id:4, title:"Post 4", body:"Post 4 description"},
        ],
      }
    },
    methods: {
      createPost(post){
        this.posts.push(post);
      }
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
