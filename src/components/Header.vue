<script>
export default {
    props: [
        'title',
        'headerClassName',
        'textClassName'
    ],
    setup(props) {
            let title = props.title;
            let headerClassName = props.headerClassName;
            let textClassName = props.textClassName;
        if(!headerClassName) {
            headerClassName = "p-10 bg-red-200 mb-1";
        }
        if(!textClassName) {
            textClassName = "text-center text-[3rem] text-gray-800";
        }
        if(!title) {
            title = "Todo List";
        }
        return {
            title,
            headerClassName,
            textClassName
        };
    },
}
</script>

<template>
    <header :class="headerClassName">
        <h1 :class="textClassName">{{title}}</h1>
        <font-awesome-icon icon="dove" class="flex text-blue-500 text-4xl"/>
    </header>
</template>