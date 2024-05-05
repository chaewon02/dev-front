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

<script setup>
import { onMounted, ref } from "vue";

import Todo from "./TodoCard.vue";
import BoardInsert from "./BoardInsert.vue";

import axiosInstance from "@/apis/config";

const todos = ref([]);

let userNo;

const getTodoList = async () => {
  try {
    const response = await axiosInstance.get(`/todo/list/${userNo}`);
    console.log("get todos success ! ", response);
    todos.value = response.data.data;
  } catch (error) {
    console.log("Error get todos:", error);
  }
};

onMounted(() => {
  userNo = sessionStorage.getItem("userNo");
  getTodoList();
});

const addTodo = async (content) => {
  try {
    console.log("content : ", content);
    const response = await axiosInstance.post("/todo/create", {
      todoContent: content,
      todoCompleteYn: false,
      todoDeleteYn: false,
      userNo: userNo,
    });
    console.log("save todo success ! ", response.data.data);
    await getTodoList();
  } catch (error) {
    console.log("Error save todo:", error);
  }
};

const toggleChange = async (todoNo) => {
  try {
    const response = await axiosInstance.post(`/todo/complete/${todoNo}`);
    console.log("completed todo success ! ", response.data.data);
    await getTodoList();
  } catch (error) {
    console.log("Error completed todo:", error);
  }
};
const toggleDelete = async (todoNo) => {
  try {
    const response = await axiosInstance.post(`/todo/delete/${todoNo}`);
    console.log("delete todo success ! ", response.data.data);
    await getTodoList();
  } catch (error) {
    console.log("Error delete todo:", error);
  }
};
</script>

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
