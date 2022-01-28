<script>
export default {
  props: ["datas", "deleteItem"],
  setup(props) {
    const datas = props.datas;
    const deleteItem = props.deleteItem;
    return {
      datas,
      deleteItem,
    };
  },
};
</script>

<template>
  <section id="reader" class="mt-6 mb-12 space-y-4">
    <div
      v-for="(data, index) in datas"
      :key="index"
      class="w-3/4 px-3 mx-auto flex justify-between items-center border-2 border-gray-300 rounded-md overflow-x-auto relative"
    >
      <h2 class="break-words">{{ index + 1 }}. &nbsp; {{ data }}</h2>
      <font-awesome-icon
        @click="deleteItem(datas, index)"
        class="text-red-600 -scale-x-100 cursor-pointer xl:hover:text-red-400 absolute right-2"
        icon="times-circle"
      />
    </div>
  </section>
</template>
