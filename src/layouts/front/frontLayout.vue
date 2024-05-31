<template>
    <div>
        <div class="main-container vh-100 position-relative">
            <div class="">
                <div class="position-absolute d-flex justify-content-center align-items-center w-100 h-100 px-2">
                    <div class="vh-50 todo-container">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import header from './header.vue';
    import footer from './footer.vue';
</script>

<style lang="css" scoped>
   
    .main-container>div{
        height:50%;
    }
    .main-container>div:first-child{
        background-image: url('@/assets/images/bg-img-todo.jpg');
        background-size: 100%;
    }
</style>