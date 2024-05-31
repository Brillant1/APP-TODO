<template>
    <div class="input-group mb-3 border-0 shadow px-3 bg-white">
        <span class="input-group-text bg-white border-0">
            <input type="radio" class="radio-input" disabled>
        </span>
        <input type="text" class="form-control border-0 py-4" placeholder="Add a new to do" v-model="libelle">
        <span class="input-group-text bg-white border-0" @click.prevent="addTodo">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="silver" class="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
        </span>
    </div>
</template>

<script>
import { useToast } from 'vue-toastification';
import {taskStore} from "@/store/task"
export default {
    name: 'addTodo',
    data(){
        return {
            libelle: ''
        }
    },
    methods: {
        addTodo(){
            if(this.libelle == ''){
                useToast().error('Veuillez définir une tâche')
            }

            taskStore().storeTask(this.libelle)
        }
    }
}
</script>

<style lang="css" scoped>

</style>