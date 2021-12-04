<template>
  <div class="navbar">
    <div @click="$router.push('/')" >Vue 3</div>
    <div class="navbar__btns">
      <Button @click="$router.push('/posts')">Posts</Button>
      <Button @click="$router.push('/about')">About</Button>
      <Button @click="$router.push('/store')">Store</Button>
    </div>
  </div>
</template>

<script>
//import Button from "./UI/Button";
export default {
  //components: {Button}
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>