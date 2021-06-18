<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import { CometChat } from "@cometchat-pro/chat";
import './App.css'

export default {
  created(){
   this.initializeComet()
  },
    methods: {
      initializeComet(){
        const APP_ID = '345319183127b22';
            const REGION = 'us';
            const appSetting = new CometChat.AppSettingsBuilder()
              .subscribePresenceForAllUsers()
              .setRegion(REGION)
              .build();

            CometChat.init(APP_ID, appSetting).then(
              () => {
                console.log('Initialization completed successfully');
                // You can now call login function.
              },
              (error) => {
                console.log('Initialization failed with error:', error);
                // Check the reason for error and take appropriate action.
              }
        );

      }
    }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
