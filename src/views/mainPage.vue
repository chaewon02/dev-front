<script setup>
import MainHeader from "@/components/header/mainHeader.vue";
import Board from "@/components/board/BoardContainer.vue";
</script>

<template>
  <div>
    <MainHeader />
    <Board />
  </div>
</template>

<style>
.board-container {
  display: flex;
  flex-direction: column;
}
</style>
