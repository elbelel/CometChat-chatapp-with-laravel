<template>
    <div class="login-page">
        <div class="login">
            <div class="login-container auth-container">
                <div class="login-form-column">
                    <form v-on:submit.prevent="authLoginAppUser">
                        <h3>Hello!</h3>
                        <div class="form-wrapper">
                            <label>Username</label>
                            <input type="text" name="username" id="username" v-model="username" placeholder="Enter your username" class="form-control" required>
                        </div>

                        <div class="form-wrapper">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" v-model="password" placeholder="******" class="form-control" required>
                        </div>
                        <button type="submit" class="mt-3">LOG IN &nbsp;&nbsp;<span v-if="showSpinner" class="fa fa-spin fa-spinner"></span> </button>
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
                showSpinner: false,
                token: '',
            };
        },
        methods: {
            authLoginAppUser() {
                let userData = {
                    username: this.username,
                    password: this.password
                };
                this.showSpinner = true;

                if (this.username && this.password) {
                    axios.post(`http://127.0.0.1:8000/login`, userData).then(response => {
                        this.logUserInToCometChat();
                        this.showSpinner = false;
                    }).catch(error => {
                        console.log(error.response.data.message);
                        this.showSpinner = false;
                    })
                } else {
                    console.log('Please check your credentials');
                }
            },
            logUserInToCometChat() {
                    CometChat.login(this.username,AUTH_KEY).then(
                                data => {
                                    console.log(data)
                            window.location.href = '/home';
                                },
                                error => {
                                    this.showSpinner = false;
                                    alert("Whops. Something went wrong. This commonly happens when you enter a username that doesn't exist. Check the console for more information");
                                    console.log("Login failed with error:", error.code);
                                }
                                );
                        }
                    
        }
    };
</script>