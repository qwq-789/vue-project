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
            headerClassName = "p-10 bg-blue-200 mb-1";
        }
        if(!textClassName) {
            textClassName = "text-center text-[3rem] text-gray-800 md:text-[6.5vw] xl:text-[5rem]";
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
    </header>
</template>