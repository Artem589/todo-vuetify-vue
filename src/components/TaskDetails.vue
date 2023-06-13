<template>
  <v-sheet width="60%" class="task d-flex justify-space-between my-4 mx-auto">
    <p class="font-weight-medium">
      {{ props.task.todo }}
    </p>
    <div class="btns">
      <v-btn
        icon
        class="text-capitalize ma-1"
        size="x-small"
        @click="taskStore.deleteTask(props.task.id)"
        ><v-icon color="primary">mdi-delete</v-icon></v-btn
      >
      <v-btn icon @click="taskStore.toggleDone(props.task.id)">
        <v-icon v-if="props.task.completed" color="#F44336">mdi-heart</v-icon>
        <v-icon v-else color="primary">mdi-heart-outline</v-icon>
      </v-btn>
    </div>
  </v-sheet>
  <!-- :class="{ active: props.task.completed }" -->
  <!-- <div width="50%" class="task d-flex justify-space-between my-4">

  </div> -->
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useTaskStore } from "@/store/tasks/index";
import Task from "@/store/tasks/types/task";

const props = defineProps<{
  task: Task;
}>();
const taskStore = useTaskStore();
</script>

<style scoped>
.task {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.btns {
  display: flex;
  gap: 10px;
}

/* .task button.active {
  color: red;
  background: #fff;
} */
</style>
