<template>
  <img class="logo" alt="Sign Up" src="../assets/sign-up.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp">Sign Up</button>
  </div>
  <p>
    <router-link to="/Login">Login</router-link>
  </p>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        alert("Sign-Up done successfully");
        // localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Login" });
      }
      // console.warn(
      //   "SignUp values are" + this.name + this.email + this.password
      // );
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
.logo {
  width: 90px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.register button {
  width: 100px;
  height: 30px;
  background-color: skyblue;
  color: white;
  border: 1px solid skyblue;
  cursor: pointer;
}
</style>
