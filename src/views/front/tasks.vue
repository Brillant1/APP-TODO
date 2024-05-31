<template>
    <front-layout>
        <todoHead></todoHead>
        <addTodo></addTodo>
        <todoList></todoList>
    </front-layout>
</template>
    
<script setup>
    import frontLayout from '@/layouts/front/frontLayout.vue';
    import todoHead from '@/components/todoHead.vue';
    import addTodo from '@/components/addTodo.vue';
    import todoList from '@/components/todoList.vue'
    import todoListVue from '../../components/todoList.vue';
</script>

<style lang="scss" scoped>

</style>