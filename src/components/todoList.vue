<template>
    <div class="p-3 py-4 shadow bg-white rounded-3">
        <div class="main-content-list-todo">
            
            <!-- Map on todos list -->
            <div v-if="todos.length>0" v-for="todo in todos" :key="todo.id" class="d-flex justify-content-between border-bottom py-2" >
                <div class="d-flex mt-3">
                    <input type="checkbox"  :checked="todo.status === 'completed'" @change.prevent="markAsDone(todo.id, todo.status)"  class="checkbox-input rounded-circle mx-3" style="border-radius: 50%;">
                    <p class="todo-labal">{{ todo.libelle }} | {{ formatDate(todo.created_at) }}</p>
                </div>
                <button class="border-0 bg-transparent me-3" @click.prevent="deleteTodo(todo.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="silver" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
            <div v-else>
                <h4 class="text-center">Aucune tâche dans cette catégorie</h4>
            </div>


        </div>
        <!-- Footer -->
        <todoFooter></todoFooter>
    </div>
</template>

<script>
    import {taskStore} from "@/store/task"
    import todoFooter from "./todoFooter.vue"
    export default {
        name: 'allTodo',
        components: {todoFooter},
        data(){
            return {
                todos:[],
                current_path:''
            }
        },
        mounted(){
            this.current_path = this.$route.name
            this.getTodo()
        },
        methods: {
            getTodo(){
                taskStore().setTasks()
                let tasks = taskStore().getTasks
                this.current_path=="all"?this.todos=tasks:this.todos = tasks.filter(t => t.status === this.current_path)
                
                this.$watch(() => taskStore().tasks, (newVal) => {
                    tasks = newVal
                    this.current_path=="all"?this.todos=tasks:this.todos = tasks.filter(t => t.status === this.current_path)
                });
            },
            markAsDone(id, status){
                taskStore().markTodoAsDone(id, status)
            },
            deleteTodo(id){
                taskStore().deleteTask(id)
            },
            clearCompletedTask(){
                if(confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches terminées ?')){
                    taskStore().deleteAllCompletedTask()
                }
            },

            formatDate(k) {
                const d = new Date(k);
                return (
                    ("0" + d.getDate()).slice(-2) +
                    "-" +
                    ("0" + (d.getMonth() + 1)).slice(-2) +
                    "-" +
                    d.getFullYear() +
                    " à " +
                    ("0" + d.getHours()).slice(-2) +
                    ":" +
                    ("0" + d.getMinutes()).slice(-2)
                );
            },
        },
        
        watch: {
            '$route'(to, from) {
                this.current_path = to.name;
                this.getTodo()
            }
        },
    }
</script>

<style lang="css" scoped>
    
</style>