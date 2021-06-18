<template>
<div>
  <CometChatUserListWithMessages/>
    <button v-on:click="logout" class="btn btn-sm bt-primary">Logout</button>

</div>
</template>

<script>
import { CometChat } from "@cometchat-pro/chat";
import {CometChatUserListWithMessages} from '../cometchat-ui'
export default {
  components:{
CometChatUserListWithMessages
  },
  methods:{
     async logout(){
  
  try {
    await CometChat.logout();
    this.$router.push({
        name: "homepage"
      });
  } catch (error) {
    console.error(error);
  }
}
  }
  }
</script>