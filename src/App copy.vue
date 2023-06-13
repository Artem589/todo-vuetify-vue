<!-- <template>
  <div id="app">
    <main> -->
      <!-- heading -->
      <!-- <header>
        <img src="./assets/pinia-logo.svg" alt="" />
        <h1>Pinia Tasks</h1>
      </header> -->
      <!-- new tak form -->
      <!-- <div class="new-task-form">
        <TaskForm></TaskForm>
      </div> -->
      <!-- filter -->
      <!-- <nav class="filter">
        <button @click="filter = FilterType.ALL">Все задачи</button>
        <button @click="filter = FilterType.DONE">Избранные</button>
      </nav> -->
      <!-- loading -->
      <!-- <div class="loading" v-if="isLoading">Загрузка задач</div> -->
      <!-- tasklist -->
      <!-- <div class="task-list" v-if="filter === FilterType.ALL">
        <p>Тебе нужно выполнить {{ totalCount }} задачи</p>
        <div v-for="task in tasks" :key="task.id">
          <TaskDetails :task="task"></TaskDetails>
        </div>
      </div>
      <div class="task-list" v-if="filter === FilterType.DONE">
        <p>Ты уже выполнил {{ doneCount }} задачи</p>
        <div v-for="task in done">
          <TaskDetails :task="task"></TaskDetails>
        </div>
      </div>

      <button @click="taskStore.$reset()">Очистить задачи</button>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "@/store/tasks/index";
import { storeToRefs } from "pinia";
import { useCount } from "@/composables/useCount";
import { FilterType } from "@/types/filterType"; -->

<!-- // import TaskDetails from "@/components/TaskDetails.vue";
// import TaskForm from "@/components/TaskForm.vue";
// // переделать пути на @

// const taskStore = useTaskStore();
// taskStore.getTasks();
// const filter = ref(FilterType.ALL);
// const { tasks, isLoading, done, totalCount, doneCount } =
//   storeToRefs(taskStore);
// // fetch task
// console.log(done.value);
// const { increment, decrement, count } = useCount();
// </script> -->

<!-- <style scoped>
// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap");
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin: 0 auto;
// }

// body {
//   background: #f2f2f2;
//   color: #444;
//   margin: 0;
// }
// body * {
//   font-family: "Poppins";
// } -->

/* header */
/* header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header img {
  max-width: 60px;
  transform: rotate(-10deg);
}
header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
  transform: rotate(2deg);
}

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
</style> */
