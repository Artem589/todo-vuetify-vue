<template>
  <div id="app">
    <v-app>
      <main>
        <!-- heading -->
        <v-app-bar
          :elevation="2"
          rounded
          class="pa-16 d-flex justify-center align-center"
        >
          <img
            class="justify-self-start"
            src="./assets/pinia-logo.svg"
            alt=""
          />
          <h2 class="">Pinia Tasks</h2>
        </v-app-bar>

        <!-- new tak form -->
        <div class="new-task-form">
          <TaskForm></TaskForm>
        </div>
        <!-- filter -->
        <nav class="filter">
          <v-btn
            elevation="2"
            class="text-capitalize"
            @click="filter = FilterType.ALL"
            >Все задачи</v-btn
          >
          <v-btn
            elevation="4"
            class="text-capitalize"
            @click="filter = FilterType.DONE"
            >Избранные</v-btn
          >
        </nav>
        <!-- loading -->
        <v-sheet class="loading" v-if="isLoading">Загрузка задач</v-sheet>
        <!-- tasklist -->
        <v-sheet class="task-list" v-if="filter === FilterType.ALL">
          <p class="my-6">Тебе нужно выполнить {{ totalCount }} задачи</p>
          <v-divider
            :thickness="2"
            width="60%"
            class="border-opacity-50 mx-auto mt-8"
          ></v-divider>
          <div v-for="task in tasks" :key="task.id">
            <TaskDetails :task="task"></TaskDetails>
          </div>
        </v-sheet>
        <v-sheet class="task-list my-6" v-if="filter === FilterType.DONE">
          <p>Ты уже выполнил {{ doneCount }} задачи</p>
          <v-divider
            :thickness="2"
            width="60%"
            class="border-opacity-50 mx-auto mt-8"
          ></v-divider>
          <div v-for="task in done">
            <TaskDetails :task="task"></TaskDetails>
          </div>
        </v-sheet>

        <v-btn
          width="400"
          elevation="4"
          class="text-capitalize ma-4"
          @click="taskStore.$reset()"
          >Очистить задачи</v-btn
        >
      </main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "@/store/tasks/index";
import { useCount } from "@/composables/useCount";
import { FilterType } from "@/types/filterType";
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";

const taskStore = useTaskStore();
taskStore.getTasks();
const filter = ref(FilterType.ALL);
const { tasks, isLoading, done, totalCount, doneCount } =
  storeToRefs(taskStore);
// fetch task

const { increment, decrement, count } = useCount();
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}

body {
  background: #f2f2f2;
  color: #444;
  margin: 0;
}
body * {
  font-family: "Poppins";
}

/* header */
/* header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
} */
header img {
  max-width: 60px;
  transform: rotate(-10deg);
}
/* header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
  transform: rotate(2deg);
} */

.filter {
  width: 640px;
  margin: 10px auto;
}

.filter button {
  display: inline-block;
  margin-left: 10px;
  background: #e7e7e7;
  border: 2px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.8em;
}

.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
</style>
