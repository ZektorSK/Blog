<template>
  <HeaderVue />
  <AllBlogs />
  <FooterVue />
</template>

<script>
import AllBlogs from './components/AllBlogs.vue';
import HeaderVue from './components/HeaderVue.vue';
import FooterVue from './components/FooterVue.vue';
//import SingleBlog from './components/SingleBlog.vue';

export default {
  name: 'App',
  components: {
    AllBlogs, HeaderVue, FooterVue//SingleBlog
  },

}
</script>
