<template>
    <div class="d-flex justify-content-center align-items-center" style="min-height:100vh">
        <div class="form-container">
            <h4 class="text-center font-bold t-secondary text-uppercase m-0 fs-30">ENREGISTREMENT</h4>
            <form class="auth-form mt-3 w-100" @submit.prevent="register">
                <div class="col-sm-auto">
                    <label for="name" class="mb-2">Nom et prénom(s)</label>
                    <div class="input-group">
                        <input type="text" v-model="form_data.name" class="form-control border-0 text-dark" id="email">
                        <div class="input-group-text border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </div>
                    </div>
                </div>


                <div class="col-sm-auto mt-4">
                    <label for="email" class="mb-2">Adresse email</label>
                    <div class="input-group">
                        <input type="email" v-model="form_data.email" class="form-control border-0 text-dark" id="email"  required>
                        <div class="input-group-text border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="col-sm-auto mt-4">
                    <label for="pasword" class="mb-2">Mot de passe</label>
                    <div class="input-group">
                        <input type="password" id="password" v-model="form_data.password" class="form-control border-0 text-dark" ref="password"  required>
                        <div class="input-group-text input-group-password-show border-0"  @click="showPassword">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-eye-slash-fill" viewBox="0 0 16 16" v-if="!display_eye_close_password">
                                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z"/>
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-eye-fill" viewBox="0 0 16 16" v-else>
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                        </div>
                    </div>
                </div> 
                
                <div class="col-sm-auto mt-4">
                    <label for="pasword" class="mb-2">Confirmer le mot de passe</label>
                    <div class="input-group">
                        <input type="password" id="password_confirmation" v-model="form_data.password_confirmation" class="form-control border-0 text-dark" ref="password_confirmation" required>
                        <div class="input-group-text input-group-password-show border-0"  @click="showPasswordConfirm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-eye-slash-fill" viewBox="0 0 16 16" v-if="!display_eye_close_password_confirmation">
                                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z"/>
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-eye-fill" viewBox="0 0 16 16" v-else>
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                        </div>
                    </div>
                </div> 

                <div class="d-flex justify-content-end mt-4">
                    <button class="btn-add text-white rounded p-2 border-0 w-100" type="submit">Créer un compte</button>
                </div>
                <div class="mt-4 d-flex justify-content-between">
                    <p>Vous avez déja un compte ?</p>
                    <router-link to="/login" class=" text-decoration-none t-primary">Connectez-vous</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
    name: 'register',
    data(){
        return {
            form_data: {
                name:'',
                email: '',
                password: '',
                password_confirmation: ''
            },
            display_eye_close_password : false,
            display_eye_close_password_confirmation: false
        }
    },
    methods: {
        register(){
            const toast = useToast()

            // if(this.form_data.password != this.form_data.password_confirmation){
            //     toast.error("Les deux mots de passe doivent être identiques")
            // }
            this.$url.post('register', this.form_data).then(response=>{
                toast.success('Compte créer avec succès')
                this.$router.push('/login')
            }).catch(error=>{
                toast.error(error.response.data.error)
            })
        },
        showPassword(){
            const password = this.$refs.password;
            if(password.type==="password"){
                password.type="text"
                this.display_eye_close_password= !this.display_eye_close_password
            }else{
                password.type="password"
                this.display_eye_close_password= !this.display_eye_close_password
            }
        },
        showPasswordConfirm(){
            const password_confirmation = this.$refs.password_confirmation;
            if(password_confirmation.type==="password"){
                password_confirmation.type="text"
                this.display_eye_close_password_confirmation= !this.display_eye_close_password_confirmation
            }else{
                password_confirmation.type="password"
                this.display_eye_close_password_confirmation= !this.display_eye_close_password_confirmation
            }
        }
    }
}
</script>

<style lang="css" >

</style>