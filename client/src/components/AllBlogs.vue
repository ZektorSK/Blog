<template>
    <article class="flex flex-col justify-center self-center p-8">
        <ul class="flex flex-col justify-center self-center text-center max-w-[950px]">
            <li class="p-4 hover:text-neutral-800" v-for="post of Posts" :key="post._id" @click="$emit('sendPost', post)">
                <div :class="TCSSpostdiv">
                    <p :class="TCSSpostparagraph" class="text-left underline decoration-green-400 italic">{{post.date}}</p>
                    <h3 :class="TCSSpostanchor">{{post.title}}</h3>
                    <p :class="TCSSpostparagraph">{{post.description}}</p>
                </div>
            </li>
        </ul>
    </article>
</template>

<script>
import axios from "axios";

export default{
    data(){
        return{
            Posts: [],
            TCSSpostdiv: "hover:shadow-lg hover:bg-[#368f5d] hover:text-neutral-800 border-4 border-[#368f5d] hover:cursor-pointer p-5 bg-neutral-800 rounded-lg ease-in-out duration-200 hover:p-8",
            TCSSpostanchor: "text-neutral-100 font-bold font-serif text-xl pb-4 pt-2",
            TCSSpostparagraph: "font-sans font-light text-sm text-neutral-200"
        }
    },
    async created(){
        const res = await axios.get('http://localhost:3000/api/blog');
        this.Posts = res.data;
        this.Posts.sort((a, b) => a-b);
    },
}
</script>