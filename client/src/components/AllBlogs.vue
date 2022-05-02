<template>
    <article class="flex flex-col justify-center self-center p-8">
        <ul class="flex flex-col justify-center self-center text-center max-w-[950px]">
            <li class="p-4 hover:text-neutral-800">
                <div :class="TCSSpostdiv">
                    <p :class="TCSSpostparagraph" class="text-left underline decoration-green-400 italic">2.5.2022</p>
                    <h3 :class="TCSSpostanchor">Blog post #1</h3>
                    <p :class="TCSSpostparagraph">How I made a single mistake. Another story of mine...</p>
                </div>
            </li>
        </ul>
    </article>
</template>

<script>
export default{
    data(){
        return{
            TCSSpostdiv: "hover:shadow-lg hover:bg-green-400 hover:text-neutral-800 border-4 border-green-400 hover:cursor-pointer p-5 bg-neutral-800 rounded-lg",
            TCSSpostanchor: "text-neutral-100 font-bold font-serif text-xl pb-4 pt-2",
            TCSSpostparagraph: "font-mono font-light text-sm text-neutral-200"
        }
    }
}
</script>