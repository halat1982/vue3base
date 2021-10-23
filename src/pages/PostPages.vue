<template>
  <div >
    <h2>Push the button for create post</h2>
    <form-input
        v-model="searchQuery"
        placeholder="type search string..."
    />


    <div class="app__btns">
      <Button @click="showDialog" >
        Create Post
      </Button>
      <form-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <dialog-form v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </dialog-form>
    <post-list @remove="removePost" :posts="sortedAndSearchedPosts" v-if="!isPostLoading"/>
    <div v-if="isPostLoading">Waiting....</div>
    <!--    <div class="page__wrapper">
          <div
              v-bind:key="pageNumber"
              v-for="pageNumber in totalPages"
              class="bread_item"
              :class="{current_bread_item: page === pageNumber}"
              @click="changePage(pageNumber)"
          >{{pageNumber}}</div>
        </div>-->
    <div ref="observer" class="observer"></div>
  </div>

</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import DialogForm from "@/components/UI/DialogForm";
import Button from "@/components/UI/Button";
import axios from 'axios';
import FormInput from "@/components/UI/FormInput";

export default {
  components: {
    FormInput,
    Button,
    DialogForm,
    PostList, PostForm
  },
  data(){
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: "title", name: "Name"},
        {value: "body", name: "Description"}
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0
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
        const response =  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit', {
          params:{
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch(e) {
        alert("Something wrong with request or with response");
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;

        const response =  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit', {
          params:{
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch(e) {
        alert("Something wrong with request or with response");
      }
    },
    /*changePage(pageNumber){
      this.page = pageNumber;
    }*/
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries) => {
      //console.log(observer);
      if(entries[0].isIntersecting && this.page < this.totalPages){
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));

    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    /*selectedSort(newValue){
      this.posts.sort( (post1, post2) => {
            return post1[newValue]?.localeCompare(post2[newValue]);
          })
    }*/
    /*page(){
      this.fetchPosts();
    }*/
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
