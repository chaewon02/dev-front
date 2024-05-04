<template>
  <div>
    <div class="preview-box">
      <h1>팀 이름</h1>
      <div
        class="list-item"
        v-for="item in [
          '해야할 일을 한 눈에!',
          '쉽고 간편한 사용 방법',
          '로그인 후 000을 사용해 보세요!',
        ]"
        :key="item"
      >
        <input type="checkbox" checked />
        <span>{{ item }}</span>
        <span class="delete-button">&times;</span>
      </div>
    </div>
    <form class="signin-box" @submit.prevent="signin">
      <input
        type="text"
        v-model="loginId"
        placeholder="아이디를 입력해 주세요."
      />
      <input
        type="password"
        v-model="loginPassword"
        placeholder="비밀번호를 입력해 주세요."
      />
      <button class="signin-button">로그인</button>
      <router-link to="/signup" class="signup-button">회원가입</router-link>
    </form>
  </div>
</template>

<script setup>
import axiosInstance from "@/apis/config";
import { ref } from "vue";
import { useRouter } from "vue-router";

const loginId = ref("");
const loginPassword = ref("");

const router = useRouter();

let token = localStorage.getItem("userNo");
if (token) {
  router.push("/main");
}

const signin = async () => {
  try {
    if (localStorage.getItem("userNo")) {
      localStorage.removeItem("userNo");
    }
    console.log(loginId.value, "   ", loginPassword.value);
    const response = await axiosInstance.post("/sign-in", {
      userId: loginId.value,
      userPassword: loginPassword.value,
    });
    localStorage.setItem("userNo", response.data.data.userNo);
    // localStorage.setItem("user", JSON.stringify(response.data.data));
    console.log("signin success ! ", response);
    router.push("/main");
  } catch (error) {
    console.log("Error signin:", error);
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  position: relative;
  top: -70px;
}

.preview-box {
  margin: auto;
  background-color: white;
  position: fixed;
  left: 180px;
  top: 100px;
  padding: 20px;
  width: 650px;
  height: 800px;
  border: black 2px solid;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.list-item {
  background-color: white;
  border-radius: 15px;
  padding: 20px 10px;
  border: 3px solid #000aff;
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
}

.list-item input[type="checkbox"] {
  width: 25px;
  height: 25px;
  pointer-events: none;
}

.delete-button {
  cursor: pointer;
  width: 25px;
  height: 25px;
  pointer-events: none;
  object-fit: contain;
}

.list-item span {
  font-size: 20px;
  text-align: left;
}

.signin-box {
  margin: auto;
  background-color: white;
  position: fixed;
  right: 300px;
  top: 250px;
  padding: 20px;
  width: 430px;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.signin-box input {
  background-color: #d9d9d9;
  border: none;
  width: 320px;
  height: 50px;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

.signin-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
}

.signup-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
}
</style>
