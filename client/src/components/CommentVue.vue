<template>
    <footer class="flex justify-center justify-self-center pb-4 flex-col border-t-4 max-w-[600px]" style="border-color: rgb(65,184,131);">
        <div class="flex justify-center justify-self-center flex-col">

            <h3 class="text-xl font-serif text-center text-slate-100 pt-2">Comments</h3>
            <span class="flex justify-left">
                <button type="submit" :class="TCSSbutton" v-show="!showinput" @click="showinput=true">Post a comment!</button>
            </span>

            <form class="p-2 flex justify-center justify-self-center flex-col border-2 border-neutral-800" v-show="showinput">
                <label for="name" :class="TCSSlabel">Name: </label>
                <input type="text" name="name" :class="TCSStextinput" style="border-color: rgb(65,184,131);" required v-model="author">
                <label for="text" :class="TCSSlabel">Message:</label>
                <textarea placeholder="type something..." class="border-2 bg-neutral-800 text-slate-100" style="border-color: rgb(65,184,131);" name="text" required v-model="message"></textarea>
                <span class="flex gap-4">  
                    <button type="button" :class="TCSSbutton" @click="createPost()">Submit</button>
                    <button :class="TCSSbutton" v-show="showinput" @click="showinput=false">Hide</button>
                </span>
            </form>

            <ul>
                <li :class="TCSScommentDiv" v-for="comment of Comments" :key="comment._id">            
                    <h4 :class="TCSScommentAuthor">{{comment.author}}</h4>
                    <pre :class="TCSScommentText">{{comment.text}}</pre>
                    <p :class="TCSScommentTime">{{comment.date}}</p>
                </li>
            </ul>
            
        </div>
    </footer>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            Comments: [],
            showinput: false,
            TCSStextinput: "border-2 h-[25px] w-[150px] bg-neutral-800 text-slate-100",
            TCSSlabel: "text-base text-slate-100",
            TCSSbutton: "block border-4 border-green-400 hover:bg-green-400 block p-2 hover:shadow-lg text-slate-100 bg-neutral-800 rounded-lg mt-2",
            TCSScommentTime: "font-mono text-slate-400 text-right text-sm p-2 underline decoration-slate-600",
            TCSScommentAuthor: "font-serif text-slate-100 text-xl ml-4",
            TCSScommentText: "font-mono text-slate-200 text-base text-center",
            TCSScommentDiv: "border-2 border-neutral-800 mt-6",

            author:"",
            message:""
        }
    },
    async created(){
        try{
            const res = await axios.get('http://localhost:3000/api/comment');
            this.Comments = res.data;
            this.Comments.sort((a, b) => a-b);

        }catch(err){
            console.log(`Error: ${err}`);
        }
    },
    methods:{
        async createPost(){
            try{
                const res = await axios.post('http://localhost:3000/api/comment', {
                    author: this.author,
                    text: this.message
                });
                this.Comments = [...this.Comments, res.data];
                this.Comments.sort((a, b) => a-b);

                this.author = "";
                this.message = "";
                this.showinput = false;
            }
            catch(err){
                console.log(`Error: ${err}`);
            }
        }
    }
}
</script>

<style scoped>
textarea:focus, input:focus{
    outline: none;
}
</style>