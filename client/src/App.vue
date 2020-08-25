
<template>
  <div id="app-wrapper">
    <div>
      <form action="">
        <label for="full-name">Full Name</label>
        <input type="text" name="name" id="" v-model="userData.fullName" required>
        <br><br>
        <label for="username">Username</label>
        <input type="text" name="username" id="" v-model="userData.username" required>
        <br><br>
        <label for="email">Email</label>
        <input type="text" name="email" id="" v-model="userData.email" required>
        <br><br>
        <label for="password">Password</label>
        <input type="password" name="password" id="" v-model="userData.password" required>
        <br><br>
        <button type="submit" v-on:click="signUp">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import AuthenticationService from "./authentication-service";
  import IUserData from "./types/user-data"

  @Component({})
  export default class App extends Vue {
      userData: IUserData = {
        fullName: "",
        username: "",
        email: "",
        password: ""
      };
      
      async signUp(){
        const data = AuthenticationService.insertUserData(this.userData);
      }
  }
</script>

<style lang="scss" scoped>
  #app-wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    div form{
      > label {
        display: block;
      }
      > input {
        width: 18vw;
        height: 5vh;  
      }
      > button {
        width: 18.5vw;
        height: 7vh;
        background-color: aquamarine;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }
  }

</style>