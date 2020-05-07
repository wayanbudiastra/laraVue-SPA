<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5"> 
                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div class="card-body">
                                        <form v-on:submit.prevent="register">
                                            <div class="form-row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="name">Full Name</label>
                                                        <input id="name" v-model="user.name" class="form-control py-4"  type="text" placeholder="Enter full name" />
                                                         <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="small mb-1" for="email">Email</label>
                                                <input id="email" v-model="user.email" class="form-control py-4"  type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                                                 <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                            </div>
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="password">Password</label>
                                                        <input v-model="user.password" class="form-control py-4" id="password" type="password" placeholder="Enter password" />
                                                         <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="password_confirmation">Confirm Password</label>
                                                        <input class="form-control py-4" v-model="user.password_confirmation" id="password_confirmation" type="password" placeholder="Confirm password" />
                                                         <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group mt-4 mb-0">
                                                <button type="submit" class="btn btn-primary btn-block">create</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center">
                                        <router-link class="small" to="/login">Login</router-link>
                                    </div>
                                </div>
                            </div>
        </div>
    </div>   
                        
</template>

<script>
//
import * as auth from "../../services/auth_service";
export default {
   
    name:'Register',
    created(){
        document.querySelector('body').style.backgroundColor='#343a40';
    },
    data(){
        return{
            user:{
                name:'',
                email:'',
                password:'',
                password_confirmation:'',
            },
            errors:{}
        }

    },
    methods: {
        register:async  function(){
            try{
                await auth.register(this.user);
                this.error={};
                this.$router.push('/login');

            }
            catch(error){
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                    break;
                    case 500:
                         this.flashMessage.error({
                            message:error.response.data.message,
                            time: 5000
                        });
                    break;
                
                    default:
                        this.flashMessage.error({
                            message:'some error occurred, please try again',
                            time: 5000
                        });

                        break;
                }

            }
        }
    },
}
</script>