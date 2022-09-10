<template>
  <h1>Welcome to Home page</h1>
  <div class="LogOut">
    <button v-on:click="LogOut">LogOut</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {},
  methods: {
    LogOut() {
      console.log(localStorage.getItem("user-info"));
      localStorage.clear();
      console.log(localStorage.getItem("user-info"));
      if (localStorage.getItem("user-info") == null) {
        this.$router.push({ name: "Login" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SingUp" });
    }
  },
};
</script>

<style scoped>
.LogOut button {
  width: 100px;
  height: 30px;
  background-color: skyblue;
  color: white;
  border: 1px solid skyblue;
  cursor: pointer;
}
</style>
