<template>
  <Header></Header>
  <h1>hello {{ name }},Welcome to Home page</h1>
  <div>
    {{ RestaurantList }}
  </div>
  <!-- <div class="LogOut">
    <button v-on:click="LogOut">LogOut</button>
  </div> -->
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      RestaurantList: {},
    };
  },
  methods: {
    // LogOut() {
    //   // console.log(localStorage.getItem("user-info"));
    //   localStorage.clear();
    //   // console.log(localStorage.getItem("user-info"));
    //   if (localStorage.getItem("user-info") == null) {
    //     this.$router.push({ name: "Login" });
    //   }
    // },
    async getResto() {
      debugger;
      let restoList = await axios.get(`http://localhost:3000/restaurant`);
      if (restoList) {
        console.log(restoList.data);
        this.RestaurantList = restoList.data;
      }
    },
  },
  mounted() {
    debugger;
    let user = localStorage.getItem("user-info");

    if (!user) this.$router.push({ name: "SingUp" });
    else this.name = JSON.parse(user).name;
    this.getResto();
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
