<template>
    <footer class="flex justify-center justify-self-center pb-4 fixed flex-col border-t-4 w-[600px] left-1/2 ml-[-300px] bottom-0" style="border-color: rgb(65,184,131);">
        <div class="flex justify-center justify-self-center flex-col">

            <h3 class="text-xl font-serif text-center text-slate-100 pt-2">Comments</h3>
            <span class="flex justify-left">
                <button type="submit" :class="TCSSbutton" v-show="!showinput" @click="showinput=true">Post a comment!</button>
            </span>

            <form class="p-2 flex justify-center justify-self-center flex-col border-2 border-neutral-800" v-show="showinput">
                <label for="name" :class="TCSSlabel">Name: </label>
                <input type="text" name="name" :class="TCSStextinput" style="border-color: rgb(65,184,131);" required>
                <label for="text" :class="TCSSlabel">Message:</label>
                <textarea placeholder="type something..." class="border-2 bg-neutral-800 text-slate-100" style="border-color: rgb(65,184,131);" name="text" required></textarea>
                <span class="flex gap-4">  
                    <button type="submit" :class="TCSSbutton">Submit</button>
                    <button type="submit" :class="TCSSbutton" v-show="showinput" @click="showinput=false">Hide</button>
                </span>
            </form>

            <ul>
                <li :class="TCSScommentDiv">            
                    <h4 :class="TCSScommentAuthor">Daniel</h4>
                    <pre :class="TCSScommentText">Damn, nice post bro</pre>
                    <p :class="TCSScommentTime">2.5.2022 23:41</p>
                </li>
                <li :class="TCSScommentDiv">            
                    <h4 :class="TCSScommentAuthor">Anna</h4>
                    <pre :class="TCSScommentText">Zekky wukky I vuw u UwU</pre>
                    <p :class="TCSScommentTime">2.5.2022 23:52</p>
                </li>
            </ul>
            
        </div>
    </footer>
</template>

<script>
export default{
    data(){
        return{
            showinput: false,
            TCSStextinput: "border-2 h-[25px] w-[150px] bg-neutral-800 text-slate-100",
            TCSSlabel: "text-base text-slate-100",
            TCSSbutton: "block border-4 border-green-400 hover:bg-green-400 block p-2 hover:shadow-lg text-slate-100 bg-neutral-800 rounded-lg mt-2",
            TCSScommentTime: "font-mono text-slate-400 text-right text-sm p-2 underline decoration-slate-600",
            TCSScommentAuthor: "font-serif text-slate-100 text-xl ml-4",
            TCSScommentText: "font-mono text-slate-200 text-base text-center",
            TCSScommentDiv: "border-2 border-neutral-800 mt-6"
        }
    }
}
</script>

<style scoped>
textarea:focus, input:focus{
    outline: none;
}
</style>