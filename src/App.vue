	<template>
	<div>
    <button v-on:click="addLike">Like</button>
    <button v-on:click="addDislike">DisLike</button>
		<div>
			Count of likes {{likes}}
		</div>
    <div>
      Count of dislikes {{dislikes}}
    </div>
	</div>

	</template>

	<script>
	export default {
    data(){
      return {
        likes: 0,
        dislikes: 0
      }
    },
    methods: {
      addLike(){
        this.likes++;
      },
      addDislike() {
        this.dislikes++;
      }
    }
  }
	</script>

	<style></style> 
