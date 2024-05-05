<template>
  <div>
    <div class="preview-box">
      <h1>팀 이름</h1>
      <div
        v-for="item in [
          '해야할 일을 한 눈에!',
          '쉽고 간편한 사용 방법',
          '로그인 후 000을 사용해 보세요!',
        ]"
        :key="item"
        class="list-item"
      >
        <input checked type="checkbox" />
        <span>{{ item }}</span>
        <span class="delete-button">&times;</span>
      </div>
    </div>
    <div class="signup-box">
      <div class="input-group">
        <label for="name">이름</label>
        <input class="input-field" type="name" />
      </div>
      <div class="input-group">
        <label for="id">아이디</label>
        <input class="input-field" type="id" />
      </div>
      <div class="input-group">
        <label for="password">비밀번호</label>
        <input class="input-field" type="password" />
      </div>
      <router-link to="/" class="signup-button">회원가입</router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

let token = sessionStorage.getItem("userNo");
if (token) {
  router.push("/main");
}
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

input[type="id"],
input[type="password"] {
  background-color: #d9d9d9;
  border: none;
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

.signup-box {
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
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.input-group label {
  font-size: 20px;
}

.signup-box input {
  background-color: #d9d9d9;
  border: none;
  width: 200px;
  height: 50px;
  margin: 10px 0;
  padding: 10px;
  width: 80%;
}

.signup-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-top: 40px;
  display: block;
  margin: 0 auto;
  margin-top: 40px;
}
</style>
