
<template>
<div>
  <CometChatUserListWithMessages/>
    <button v-on:click="logout" class="btn btn-sm bt-primary">Logout</button>
</div>
</template>
<script>
import { CometChat } from "@cometchat-pro/chat";
import {CometChatUserListWithMessages} from './../CometChat-UI'


export default {
  components:{
CometChatUserListWithMessages
  },
  methods:{
     async logout(){
  
  try {
      
    await CometChat.logout();
    window.location.href = '/login';

  } catch (error) {
    console.error(error);
  }
}
  }
  }
</script>