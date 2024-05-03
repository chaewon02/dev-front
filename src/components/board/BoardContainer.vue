<script setup>
import { ref } from "vue";
import BoardInsert from "./BoardInsert.vue";
// import BoardTodoList from "./BoardTodoList.vue";
import Todo from "./TodoCard.vue";

const todos = ref([]);
const nextIdx = ref(1);

const addTodo = (content) => {
  const todo = {
    todo_no: nextIdx.value,
    content: content,
    complete_yn: false,
    delete_yn: false,
  };
  todos.value = todos.value.concat(todo);
  nextIdx.value += 1;
};
const toggleChange = (index) => {
  // axios
  todos.value[index].complete_yn = !todos.value[index].complete_yn;
};
const toggleDelete = (index) => {
  // axios
};
</script>

<template>
  <div class="todo-list-container">
    <BoardInsert @addTodo="addTodo" />
    <div class="todo-list">
      <div
        v-for="(todo, index) in todos"
        :key="todo.todo_no"
        style="width: 100%"
      >
        <Todo
          :todo="todo"
          @toggleChange="toggleChange(index)"
          @toggleDelete="toggleDelete(index)"
        />
      </div>
    </div>
  </div>
</template>

<style>
.todo-list-container {
  margin: 20px 100px;
}
.checked {
  text-decoration: line-through;
}
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
</style>
