<template>
    <article class="flex flex-col justify-center self-center">
        <ul class="flex flex-col justify-center self-center text-center max-w-[950px]">
            <li class="p-4">
                <div :class="TCSSpostdiv">
                    <a :class="TCSSpostanchor">Blog post #1</a>
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
            TCSSpostdiv: "hover:shadow-lg hover:bg-green-300 border-4 border-green-300 hover:cursor-pointer p-5",
            TCSSpostanchor: "color-neutral-900 font-bold font-serif text-lg",
            TCSSpostparagraph: "font-mono font-light text-sm italic"
        }
    }
}
</script>