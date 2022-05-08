<template>
    <div class="flex flex-col justify-center self-center pb-11">
        <article class="flex flex-col justify-center self-center max-w-[600px] border-2 border-neutral-800 mt-8 text-justify p-4">

            <h2 class="text-neutral-100 font-serif font-extrabold text-4xl">{{post.title}}</h2>
            <p class="text-neutral-200 font-sans font-md text-lg pl-4">-{{post.description}}</p>
            <hr>

            <pre class="text-neutral-200 font-sans font-normal pt-4 text-justify" style="word-wrap: break-word; white-space: pre-wrap; word-break: break-word;">{{post.text}}</pre>

        </article>

        <span class="flex flex-row justify-center self-center">
            <button :class="TCSSbutton" @click="$emit('changeToFalse')">Back to Homepage</button>
        </span>

    </div>
</template>

<script>

export default {
    props:['post'],
    data(){
        return{
            TCSSbutton: "block border-4 border-[#368f5d] hover:bg-[#368f5d] block p-2 hover:shadow-lg text-slate-100 bg-neutral-800 rounded-lg mt-2 ease-in-out duration-200"
        }
    }
}

</script>