<template>
    <footer class="flex justify-center self-center fixed bottom-0 pb-9 flex-col border-t-4 border-green-600 ">
        <div class="flex justify-center self-center flex-col">
            <h3 class="text-xl font-serif text-center">Comments</h3>
            <button type="submit" :class="TCSSbutton" v-show="!showinput" @click="showinput=true">Post</button>
            <button type="submit" :class="TCSSbutton" v-show="showinput" @click="showinput=false">Hide</button>
            <form class="pt-2" v-show="showinput">
                <label for="name" :class="TCSSlabel">Name: </label>
                <input type="text" name="name" :class="TCSStextinput" required>
                <label for="text" :class="TCSSlabel">Text:</label>
                <textarea placeholder="type something..." class="border-2" name="text" required></textarea>
                <button type="submit" :class="TCSSbutton">Submit</button>
            </form>


            
        </div>
    </footer>
</template>

<script>
export default{
    data(){
        return{
            showinput: true,
            TCSStextinput: "border-2 h-[25px] w-[300px]",
            TCSSlabel: "text-base",
            TCSSbutton: "border-4 border-green-300 hover:bg-green-300 block p-1 hover:shadow-lg"
        }
    }
}
</script>