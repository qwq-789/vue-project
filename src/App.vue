<script>
import {ref} from 'vue'
export default {
    setup() {
        const datas = ref([])
        const text = ref('');
        const pushText = function(){
            datas.value.push(text.value);
            text.value = '';
        }

        return{
            datas,
            text,
            pushText
        }
    },
}
</script>

<template>
<header class="p-10 bg-blue-200 mb-1">
    <h1 class="text-center text-[3rem] text-gray-800">Todo List</h1>
    <font-awesome-icon icon="dove" class="flex text-blue-500 text-4xl"/>
</header>
<section id="creater" class="mt-4 mb-1">
    <form class="text-center">
        <label for="todo-creater" class="block w-5/6 mx-auto space-y-2">
            <h2 class="text-2xl tracking-[.35rem]">請填寫代辦事項：</h2>
            <input type="text" autocomplete="off" v-model="text" id="todo-creater" class="px-2 py-1 text-xl rounded-md w-full border-2 border-stone-800"/>
            <input type="submit" value="提交" @click.prevent="pushText" v-bind:disabled="text == '' " class="w-full py-3 text-center text-2xl bg-green-400 rounded-md cursor-pointer hover:bg-green-600 hover:text-white active:translate-y-1 disabled:bg-gray-500 disabled:text-white">
        </label>
    </form>
</section>
<section id="reader" class="mt-6 mb-12 space-y-4">
    <div v-for="(data, index) in datas" :key="index" class="w-3/4 px-3 mx-auto flex justify-between items-center border-2 border-gray-300 rounded-md">
        <h2 class="">{{index+1}}. &nbsp; {{data}}</h2>
        <font-awesome-icon @click="datas.splice(index,1)" class="text-red-600 -scale-x-100 cursor-pointer hover:text-red-400" icon="times-circle"/>
    </div>
</section>
<footer class="uppercase bg-gray-100 text-center fixed bottom-0 inset-x-0">power by qwq_789</footer>
</template>
