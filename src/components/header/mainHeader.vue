<template>
  <nav class="nav-container">
    <div class="logo">todo-list</div>
    <div class="menu">
      <p>로그아웃</p>
    </div>
  </nav>
</template>

<script></script>

<style scope>
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
