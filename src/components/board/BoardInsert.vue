<template>
  <div class="insert-container">
    <form class="board-menue-container" @submit.prevent="addTodo">
      <input
        class="todo-input"
        type="text"
        v-model="todoInsert"
        placeholder="해야 할 일을 입력하세요."
      />
      <button class="add-btn" style="cursor: pointer">등록하기</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const todoInsert = ref("");

const emit = defineEmits(["addTodo"]);

const addTodo = () => {
  emit("addTodo", todoInsert.value);
  todoInsert.value = "";
};
</script>

<style scope>
.insert-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.board-menue-container {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  width: 40%;
}

@media (max-width: 1080px) {
  .board-menue-container {
    width: 100%;
  }
}
select {
  font-size: 1.125rem;
  padding: 0.5rem;
  color: #707070;
  border: 3px solid #707070;
}
.todo-input {
  flex: 1;
  color: #707070;
  outline: none;
  border: 3px solid #707070;
  border-radius: 15px;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  margin: 0 10px;
  width: 50%;
  &::placeholder {
    color: #707070;
  }
}

.add-btn {
  background: white;
  color: #707070;
  outline: none;
  border: 3px solid #707070;
  font-size: 1.125rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 15px;

  &:hover {
    background-color: #707070;
    color: white;
  }
}
</style>
