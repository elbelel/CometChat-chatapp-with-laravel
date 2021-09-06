<template>
    <div class="login-page">
        <div class="login">
            <div class="register-container auth-container">
                <div class="register-image-column">
                    
                </div>

                <div class="register-form-column">
                    <form v-on:submit.prevent="registerAppUser">
                        <h3>Create an Account</h3>
                        <div class="form-wrapper">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" v-model="username" placeholder="Enter your username" class="form-control" required>
                        </div>

                        <div class="form-wrapper">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" v-model="password" placeholder="Enter your password" class="form-control" required>
                        </div>

                        <div class="form-wrapper">
                            <label for="password_confirmation">Confirm Password</label>
                            <input type="password" name="password_confirmation" id="password_confirmation" v-model="password_confirmation" placeholder="Re-enter password" class="form-control" required>
                        </div>
                        <button type="submit" class="mt-3">SIGN UP &nbsp;&nbsp;<span v-if="showSpinner" class="fa fa-spin fa-spinner"></span> </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { CometChat } from "@cometchat-pro/chat";
import {AUTH_KEY} from "../constant/constant"


    export default {
        data() {
            return {
                username: "",
                password: '',
                password_confirmation: '',
                showSpinner: false,
            };
        },
        methods: {
            registerAppUser() {
                if (this.username && this.password && this.password_confirmation) {
                    this.showSpinner = true;
                    if (this.password && this.password_confirmation) {
                        let data = {
                            username: this.username,
                            password: this.password,
                            password_confirmation: this.password_confirmation
                        };

                        axios.post(`http://127.0.0.1:8000/register`, data)
                            .then(response => {
                                    console.log(response)
                                this.createUserOnCometChat(this.username);
                                
                                this.showSpinner = false;
                            }).catch(error => {
                            console.log(error.response.data.message);
                            this.showSpinner = false;
                        })
                    }
                }
            },
            redirect() {
                   window.location.href = '/login';
            },

            async createUserOnCometChat() {
                const UID = this.username
                
                var user = new CometChat.User(UID);
                user.setName(this.username)
                    CometChat.createUser(user, AUTH_KEY).then(
                        user => {
                            console.log("user created", user);
                            this.redirect()
                        })
            }
        }
        
    };
</script>