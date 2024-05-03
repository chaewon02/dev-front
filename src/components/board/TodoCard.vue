<template>
  <div class="todo-container">
    <input
      type="checkbox"
      class="form-check-input"
      :checked="props.todo.complete_yn"
      @click.stop
      @change="toggleChange"
    />

    <div class="form-check-label" :class="{ checked: props.todo.complete_yn }">
      {{ props.todo.content }}
    </div>

    <img
      class="delete-btn"
      @click="toggleDelete"
      src="@/assets/circle-substract.png"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  todo: {
    type: Object,
  },
});

const emit = defineEmits(["toggleChange", "toggleDelete"]);

const toggleChange = (index) => {
  emit("toggleChange", index);
};

const toggleDelete = (index) => {
  emit("toggleDelete", index);
};
</script>

<style>
.todo-container {
  display: flex;
  align-items: center;
  background-color: white;
  margin-bottom: 40px;
  width: 100%;
  height: 90px;
  border-radius: 15px;
  position: relative;
}
.form-check-input {
  margin: 0 20px;
  margin-right: 40px;
}
.delete-btn {
  position: absolute;
  right: 27px;
}
</style>
