<script setup>
import { ref } from "vue";
import BoardInsert from "./BoardInsert.vue";
import Todo from "./TodoCard.vue";
import axiosInstance from "@/apis/config";

const todos = ref([]);

const getTodoList = async () => {
  try {
    const response = await axiosInstance.get(
      `/todo/list/${localStorage.getItem("userNo")}`
    );
    console.log("get todos success ! ", response);
    todos.value = response.data.data;
  } catch (error) {
    console.log("Error get todos:", error);
  }
};
getTodoList();

const addTodo = async (content) => {
  const todo = {
    todoContent: content,
    todoCompleteYn: false,
    todoDeleteYn: false,
    userNo: localStorage.getItem("userNo"),
  };
  try {
    const response = await axiosInstance.post("/todo/create", todo);
    console.log("save todo success ! ", response);
    getTodoList();
  } catch (error) {
    console.log("Error save todo:", error);
  }
};
const toggleChange = async (todoNo) => {
  try {
    const response = await axiosInstance.post(`/todo/complete/${todoNo}`);
    console.log("completed todo success ! ", response);
    getTodoList();
  } catch (error) {
    console.log("Error completed todo:", error);
  }
};
const toggleDelete = async (todoNo) => {
  try {
    const response = await axiosInstance.post(`/todo/delete/${todoNo}`);
    console.log("delete todo success ! ", response);
    getTodoList();
  } catch (error) {
    console.log("Error delete todo:", error);
  }
};
</script>

<template>
  <div class="todo-list-container">
    <BoardInsert @addTodo="addTodo" />
    <div class="todo-list">
      <div v-for="todo in todos" :key="todo.todoNo" style="width: 100%">
        <Todo
          :todo="todo"
          @toggleChange="toggleChange(todo.todoNo)"
          @toggleDelete="toggleDelete(todo.todoNo)"
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
  text-decoration-thickness: 2px;
}
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
</style>
