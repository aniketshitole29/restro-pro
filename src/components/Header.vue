<template>
  <div class="nev">
    <router-link to="/">Home</router-link>>
    <router-link to="Add">Add Restaurant</router-link>
    <router-link to="Update">Update Restaurant</router-link>
    <a v-on:click="Logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {};
  },
  methods: {
    Logout() {
      // console.log(localStorage.getItem("user-info"));
      localStorage.clear();
      // console.log(localStorage.getItem("user-info"));
      if (localStorage.getItem("user-info") == null) {
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>

<style scoped>
.nev {
  background: #333;
  overflow: hidden;
}
.nev a {
  margin-right: 10px;
  font-size: 17px;
  text-decoration: none;
  color: #f2f2f2;
  padding: 14px 16px;
  float: left;
  text-align: center;
}
.nev a:hover {
  background: #ddd;
  color: #333;
}
</style>
