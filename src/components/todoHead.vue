<template>
    <div class="d-flex justify-content-between align-items-center">
        <p class="text-white fw-bold todo-text">TODO</p>
        <button class="border-0 bg-transparent mt-0 pt-0" title="Déconnexion"  @click.prevent="logout">
            <span class="text-white fs-18 fw-bold">Esaie TCHAGNONSI</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-box-arrow-right ms-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
        </button>
    </div>
</template>

<script>
import {authStore} from "@/store"
export default {
    name: 'todoHead',
    methods: {
        logout(){
            if(confirm('Vous êtes sur le point de vous déconnecter')){
                authStore().logout()
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .todo-text{
        letter-spacing: 0.5em;
    }
</style>