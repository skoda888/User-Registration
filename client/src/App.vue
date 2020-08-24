
<template>
  <div id="app-wrapper">
    <div>
      <!-- FORMS -->
      <label for="full-name">Full Name</label>
      <input type="text" name="full-name" id="" v-model="fullName">
      <br><br>
      <label for="username">Username</label>
      <input type="text" name="username" id="" v-model="username">
      <br><br>
      <label for="email">Email</label>
      <input type="text" name="email" id="" v-model="email">
      <br><br>
      <label for="password">Password</label>
      <input type="password" name="password" id="" v-model="password">
      <br><br>
      <button>Sign up</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component({})
  export default class App extends Vue {
      fullName = "";
      username = "";
      email = "";
      password = "";
  }
</script>

<style lang="scss" scoped>
  #app-wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
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