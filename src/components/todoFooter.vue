<template>
    <div class="">

          <!-- Footer on web -->
        <div class="container d-none d-md-flex justify-content-between align-items-center pt-3">
            <div class="col-12 col-md-2">
                {{ nrbActiveTask }} item{{ nrbActiveTask>1?'s':'' }} left
            </div>
            <div class="d-flex justify-content-between col-12 col-md-4">
                <router-link to="/tasks" class="t-dark text-decoration-none rounded-pill px-4 py-1 " :class="{ 'active': isActiveRoute('/tasks') }">All</router-link>
                <router-link to="/tasks/active" class="t-dark text-decoration-none rounded-pill px-4 py-1 " :class="{ 'active': isActiveRoute('/tasks/active') }">Active</router-link>
                <router-link to="/tasks/completed"  class="t-dark text-decoration-none rounded-pill px-4 py-1 " :class="{ 'active': isActiveRoute('/tasks/completed') }">Completed</router-link>
            </div>
            <button class="t-dark text-decoration-none bg-transparent border-0" :disabled="nrbCompletedTask===0" @click.prevent="clearCompletedTask">Clear completed</button>
        </div>


        <!-- Footer on mobile -->
        <div class="container pt-5 d-md-none">
            <div class="">
                {{ nrbActiveTask }} item{{ nrbActiveTask>1?'s':'' }} left
            </div>
            <div class="my-2">
                <router-link to="/tasks" class="t-dark text-decoration-none rounded-pill px-4 py-1 " :class="{ 'active': isActiveRoute('/tasks') }">All</router-link>
                <router-link to="/tasks/active" class="t-dark text-decoration-none rounded-pill px-4 py-1 " :class="{ 'active': isActiveRoute('/tasks/active') }">Active</router-link>
                <router-link to="/tasks/completed"  class="t-dark text-decoration-none rounded-pill px-4 py-1 " :class="{ 'active': isActiveRoute('/tasks/completed') }">Completed</router-link>
            </div>
            <button class="t-dark text-decoration-none bg-transparent border-0" :disabled="nrbCompletedTask===0" @click.prevent="clearCompletedTask">Clear completed</button>
        </div>
    </div>
</template>

<script>
import {taskStore} from "@/store/task"
export default {
    name: 'todoFooter',
    methods: {
        clearCompletedTask(){
            if(confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches terminées ?')){
                taskStore().deleteAllCompletedTask()
            }
        },
        isActiveRoute(route) {
            return this.$route.path === route;
        }
    },
    computed: {
        nrbActiveTask(){
            let tasks = taskStore().getTasks
            return tasks?.filter(t=> t.status==="active").length
        },
        nrbCompletedTask(){
            let tasks = taskStore().getTasks
            return tasks?.filter(t=> t.status==="completed").length
        },
    },
}
</script>

<style lang="css" scoped>
    .active{
        background-color:#7451eb;
        color:white
    }
</style>