<template>
  <HeaderVue />
  <AllBlogs />
</template>

<script>
import AllBlogs from './components/AllBlogs.vue';
import HeaderVue from './components/HeaderVue.vue';
//import SingleBlog from './components/SingleBlog.vue';

export default {
  name: 'App',
  components: {
    AllBlogs, HeaderVue, //SingleBlog
  },

}
</script>
