<template>
  <HeaderVue />
  <AllBlogs />
  <CommentVue />
</template>

<script>
import AllBlogs from './components/AllBlogs.vue';
import HeaderVue from './components/HeaderVue.vue';
import CommentVue from './components/CommentVue.vue';
//import SingleBlog from './components/SingleBlog.vue';

export default {
  name: 'App',
  components: {
    AllBlogs, HeaderVue, CommentVue//SingleBlog
  },

}
</script>
