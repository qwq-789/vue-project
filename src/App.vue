<script>
import {ref} from 'vue';
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import List from './components/List.vue';
export default {
    components: {Header, Form, List},
    setup() {
        const datas = ref([])
        
        const pushText = function(text){
            if(text == ""){
                return;
            }
            datas.value.push(text);
            text = '';
        };

        const deleteItem = function(datas, index){
            datas.splice(index, 1);
        }

        return{
            datas,
            pushText,
            deleteItem
        };
    },
};
</script>

<template>
<Header title="你媽超胖"/>
<Form :addText="pushText"/>
<List :datas="datas" :deleteItem="deleteItem"/>
<footer class="uppercase bg-gray-100 text-center fixed bottom-0 inset-x-0">power by qwq_789</footer>
</template>
