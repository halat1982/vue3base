<template>
  <div >
    <h1>{{$store.state.post.limit}}</h1>
<!--    <h2>Push the button for create post</h2>
    <form-input
        :model-value="searchQuery"
        @update:model-value="searchQuery"
        placeholder="type search string..."
        v-focus
    />


    <div class="app__btns">
      <Button @click="showDialog" >
        Create Post
      </Button>
      <form-select
          model-value="selectedSort"
          @update:model-value="selectedSort"
          :options="sortOptions"
      />
    </div>
    <dialog-form v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </dialog-form>
    <post-list @remove="removePost" :posts="sortedAndSearchedPosts" v-if="!isPostLoading"/>
    <div v-if="isPostLoading">Waiting....</div>

    <div v-intersection="loadMorePosts" class="observer"></div>-->
  </div>

</template>

<script>
/*import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import DialogForm from "@/components/UI/DialogForm";
import Button from "@/components/UI/Button";*/
//import axios from 'axios';
//import FormInput from "@/components/UI/FormInput";
import {/*mapState, mapGetters, mapActions, mapMutations*/} from "axios";
export default {
  components: {
    /*FormInput,
    Button,
    DialogForm,
    PostList, PostForm,*/
  },
  data(){
    return {
      dialogVisible: false,
    }
  },
  methods: {
    /*...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),*/
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
  },
  mounted() {
    //this.fetchPosts();
  },
  computed: {
    /*...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })*/
  },
  watch: {

  }
}
</script>

<style>

.app__btns {
  margin:15px 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

}

.bread_item {
  border: 1px solid #000;
  padding: 10px;
  margin: 0 3px;
  cursor: pointer;
}
.current_bread_item {
  border: 2px solid teal;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}
</style>
