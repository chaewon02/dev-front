<template>
  <nav class="nav-container">
    <div class="logo">todo-list</div>
    <div class="menu">
      <div class="logout-btn" style="cursor: pointer" @click="signout">
        로그아웃
      </div>
    </div>
  </nav>
</template>

<script setup>
import axiosInstance from "@/apis/config";
import { useRouter } from "vue-router";

const router = useRouter();

let token = sessionStorage.getItem("userNo");
if (token === null) {
  router.push("/");
}

const signout = async () => {
  try {
    const response = await axiosInstance.post("/sign-out");
    sessionStorage.removeItem("userNo");
    console.log("signout success ! ", response);

    await router.push("/");
  } catch (error) {
    console.log("Error signout:", error);
  }
};
</script>

<style scoped>
.nav-container {
  background-color: white;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 20px;
  font-weight: bolder;
  margin: 0 auto;
}

.menu {
  position: absolute;
  right: 5%;
  display: flex;
}

.menu p {
  font-size: 15px;
}
</style>
