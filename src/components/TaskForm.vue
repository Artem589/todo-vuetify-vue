<template>
  <v-sheet max-width="400" class="mx-auto mt-6 mb-2">
    <v-form @submit.prevent="handlerSubmit" class="d-flex justify-start pa-4">
      <v-text-field
        class="ma-4 pa-2"
        v-model="newTask"
        label="Добавить задачу"
        hide-details
      ></v-text-field>
      <v-btn
        type="submit"
        elevation="1"
        outlined
        class="align-self-center ma-4 pa-4 text-capitalize"
        >Добавить</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script setup lang="ts">
import { useTaskStore } from "@/store/tasks/index";
import { ref } from "vue";
const taskStore = useTaskStore();
const newTask = ref<string>("");
const handlerSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      completed: false,
      id: Math.floor(Math.random() * 80),
      todo: newTask.value,
      userId: Math.floor(Math.random() * 40),
    });
    newTask.value = "";
  }
};
</script>
