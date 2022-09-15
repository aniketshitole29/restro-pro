<template>
  <div>
    <p>Hello {{ name }}, Welcome to Add page</p>
  </div>
</template>

<script>
export default {
  name: "AppPage",
  data() {
    return {
      name: "",
    };
  },
  methods: {},
  mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
  },
};
</script>

<style scoped></style>
