<template>
  <img class="logo" alt="Sign Up" src="../assets/Login.png" />
  <h1>Login</h1>
  <div class="register">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="Login">Login</button>
    <p>
      <router-link to="/SignUp">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async Login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      } else {
        alert("Wrong username or password");
      }
      console.log(result.status, result.data.length);
      console.log(result);
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

<style scoped>
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
