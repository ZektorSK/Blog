<template>
  <HeaderVue />
  <SingleBlog :post="post" v-show="showsingle" @changeToFalse="changeToFalse" />
  <AllBlogs v-show="!showsingle" @sendPost="sendPost"/>
  <CommentVue v-show="!showsingle"/>
</template>

<script>
import AllBlogs from './components/AllBlogs.vue';
import HeaderVue from './components/HeaderVue.vue';
import CommentVue from './components/CommentVue.vue';
import SingleBlog from './components/SingleBlog.vue';

export default {
  name: 'App',

  components: {
    AllBlogs,HeaderVue,CommentVue,SingleBlog
  },

  data(){
    return{
      showsingle: false,
      post: {}
    }
  },

  methods:{
    sendPost(thePost){
      this.post = thePost;
      this.showsingle = true;
      console.log('sent post!');
    },
    changeToFalse(){
      this.showsingle = false;
      console.log('changed to false!');
    }
  }
}
</script>
