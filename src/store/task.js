import { defineStore } from 'pinia'
import axios from '@/axios'
import { useToast } from 'vue-toastification'
export const taskStore = defineStore('task', {
  state: () => {
    return { 
      task: '',
      tasks: []
    }
  }, 

  getters: {
    getTask: (state) => state.task,
    getTasks: (state) => state.tasks,
  },

  actions: {

    setTask(id) {
        axios.get('tasks/'+id).then(response=>{
            this.task = response.data.data
        }).catch(error=>{
            useToast().error("Une erreur s'est produite")
        })
    },
    setTasks(){
        axios.get('tasks').then(response => {
            this.tasks = response.data.data
        }).catch(error=>{
            useToast().error("Une erreur s'est produite")
        })
    },

    storeTask(libelle){
      this.$url.post('tasks', {libelle: libelle}).then(response =>{
               
          taskStore().setTasks()
          response.data.status?useToast().success(response.data.message):useToast().error(response.data.message)
      }).catch(error => {
          useToast().error(error.data.message)
         
      })
    },
    markTodoAsDone(id, status){
      
        axios.post('mark_todo_as_done', {
            id:id,
            status: status
        }).then(response=>{
            this.setTasks()
            useToast().success(response.data.message);
        }).catch(error =>{
           
        })
    },
    deleteTask(id){
        axios.delete('tasks/'+id).then(response => {
            
          const index = this.tasks.findIndex(element => element.id === id);
         
          if (index !== -1) {
            this.tasks.splice(index, 1);
            this.setTasks()
            useToast().success(response.data.message)
          }
        }).catch(error => {
          
        })
    },
    deleteAllCompletedTask(){
        axios.post('deleteAllCompletedTask').then(response => {
            this.setTasks()
            useToast().success("Tâches supprimées avec succès")
        }).catch(error => {
            useToast().error("Une erreur s'est produite")
        })
    }
    },
  persist: true,
})
