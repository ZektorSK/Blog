<template>
    <div class="flex flex-col justify-center self-center pb-11">
        <article class="flex flex-col justify-center self-center max-w-[600px] border-2 border-neutral-800 mt-8 text-justify p-4">

            <h2 class="text-neutral-100 font-serif font-extrabold text-4xl">The Title of this</h2>
            <p class="text-neutral-200 font-sans font-md text-lg pl-4">-The very short description I wanted to add to make this seems like an actual blogpost lmao</p>
            <hr>

            <pre class="text-neutral-200 font-sans font-normal pt-4 text-justify" style="word-wrap: break-word; white-space: pre-wrap; word-break: break-word;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium. At tellus at urna condimentum mattis pellentesque id. Eget velit aliquet sagittis id consectetur purus ut faucibus. Eget velit aliquet sagittis id consectetur purus. Orci phasellus egestas tellus rutrum tellus pellentesque. Erat velit scelerisque in dictum non consectetur a erat nam. Nisl purus in mollis nunc sed id semper. Enim blandit volutpat maecenas volutpat blandit. Ipsum dolor sit amet consectetur adipiscing. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Turpis egestas pretium aenean pharetra magna. Libero volutpat sed cras ornare. Euismod in pellentesque massa placerat duis ultricies. Urna molestie at elementum eu facilisis. Eget gravida cum sociis natoque penatibus et magnis dis. Risus in hendrerit gravida rutrum quisque non tellus orci. Ultrices mi tempus imperdiet nulla malesuada pellentesque.

    Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Et magnis dis parturient montes nascetur ridiculus mus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Diam in arcu cursus euismod quis viverra nibh cras. Enim praesent elementum facilisis leo. Felis eget velit aliquet sagittis id consectetur. Tellus mauris a diam maecenas sed enim ut sem viverra. Habitasse platea dictumst quisque sagittis purus. Posuere lorem ipsum dolor sit amet. Mauris sit amet massa vitae.

    Aliquet porttitor lacus luctus accumsan tortor posuere ac. Massa sapien faucibus et molestie ac feugiat. Arcu odio ut sem nulla pharetra diam sit. Est ullamcorper eget nulla facilisi etiam dignissim. Quis auctor elit sed vulputate mi sit amet mauris. Enim blandit volutpat maecenas volutpat. Vel fringilla est ullamcorper eget nulla facilisi etiam. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Nisi vitae suscipit tellus mauris a diam. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Habitasse platea dictumst vestibulum rhoncus est. Non quam lacus suspendisse faucibus. Et malesuada fames ac turpis egestas integer eget aliquet. Mauris in aliquam sem fringilla ut.

    Integer quis auctor elit sed vulputate mi. Turpis massa tincidunt dui ut ornare lectus sit amet est. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Purus sit amet luctus venenatis lectus magna fringilla urna. Sed arcu non odio euismod. Euismod lacinia at quis risus sed vulputate odio ut enim. Dolor sit amet consectetur adipiscing. Sit amet est placerat in egestas erat imperdiet. Tortor id aliquet lectus proin nibh nisl condimentum id. Urna duis convallis convallis tellus id interdum velit laoreet id. Molestie ac feugiat sed lectus vestibulum mattis. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Nulla malesuada pellentesque elit eget gravida cum. Non sodales neque sodales ut etiam sit amet nisl purus. Gravida rutrum quisque non tellus orci ac auctor. Massa sapien faucibus et molestie ac feugiat sed. Mi quis hendrerit dolor magna eget est. Ultrices in iaculis nunc sed augue lacus. Ut eu sem integer vitae justo eget.

    Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa id neque aliquam vestibulum morbi blandit cursus risus. Nibh sit amet commodo nulla. In aliquam sem fringilla ut. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Quam pellentesque nec nam aliquam. Nunc mattis enim ut tellus. Ut morbi tincidunt augue interdum velit euismod in. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Tristique senectus et netus et. Etiam erat velit scelerisque in dictum. Faucibus pulvinar elementum integer enim neque volutpat. Morbi tincidunt augue interdum velit euismod in. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Ultrices sagittis orci a scelerisque purus semper eget duis.
            </pre>

        </article>

        <span class="flex flex-row justify-center self-center">
            <button :class="TCSSbutton">Back to Homepage</button>
        </span>

    </div>
</template>

<script>

export default {
    props:[post],
    data(){
        return{
            TCSSbutton: "block border-4 border-[#368f5d] hover:bg-[#368f5d] block p-2 hover:shadow-lg text-slate-100 bg-neutral-800 rounded-lg mt-2 ease-in-out duration-200",
            title:"",
            desc:"",
            text:""
        }
    },
    mounted(){

    }
}

</script>