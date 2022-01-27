<script>
import {ref} from 'vue';
export default {
    props:['text'],
    setup() {
        const text =ref('');
    },
}
</script>

<template>
    <section id="creater" class="mt-4 mb-1">
        <form class="text-center">
            <label for="todo-creater" class="block w-5/6 mx-auto space-y-2">
                <h2 class="text-2xl tracking-[.35rem]">請填寫代辦事項：</h2>
                <input type="text" autocomplete="off" v-model="text" id="todo-creater" class="px-2 py-1 text-xl rounded-md w-full border-2 border-stone-800"/>
                <input type="submit" value="提交" @click.prevent="pushText" v-bind:disabled="text == '' " class="w-full py-3 text-center text-2xl bg-green-400 rounded-md cursor-pointer hover:bg-green-600 hover:text-white active:translate-y-1 disabled:bg-gray-500 disabled:text-white disabled:cursor-not-allowed">
            </label>
        </form>
    </section>
</template>