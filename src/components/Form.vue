<script>
import { ref } from "vue";
export default {
  props: ["addText"],
  setup(props) {
    const text = ref("");
    const pushText = function (){
        props.addText(text.value);
        text.value = "";
    };
    return{
        text,
        pushText
    }
  },
};
</script>

<template>
  <section id="creater" class="mt-4 mb-1">
    <form class="text-center">
      <label for="todo-creater" class="block w-5/6 mx-auto space-y-2">
        <h2 class="text-2xl tracking-[.35rem]  md:text-[3vw] md:my-[0.8vw] xl:text-[2.5rem] xl:my-3">請填寫代辦事項：</h2>
        <input
          type="text"
          autocomplete="off"
          v-model="text"
          id="todo-creater"
          class="px-2 py-1 text-xl rounded-md w-full border-2 border-stone-800"
        />
        <input
          type="submit"
          value="提交"
          @click.prevent="pushText"
          v-bind:disabled="text == ''"
          class="
            w-full
            py-3
            text-center text-2xl
            bg-green-400
            rounded-md
            cursor-pointer
            md:w-1/2
            xl:hover:bg-green-600 xl:hover:text-white
            active:translate-y-1
            disabled:bg-gray-500 disabled:text-white disabled:cursor-not-allowed
          "
        />
      </label>
    </form>
  </section>
</template>
