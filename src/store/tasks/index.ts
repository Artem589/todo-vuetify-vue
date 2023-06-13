import { defineStore } from "pinia";
import { ref, computed } from "vue";
import Task from "@/store/tasks/types/task";
import TasksController from "@/api/controllers/tasks";

const tasksController = new TasksController();

export const useTaskStore = defineStore("TaskStores", () => {
  // state
  const tasks = ref<Task[]>([]);
  const isLoading = ref<boolean>(false);

  // computed
  const done = computed((): Task | any => {
    return tasks.value.filter((t: Task) => t.completed);
  });
  const doneCount = computed((): Task | any => {
    return tasks.value.reduce((p: number, c: Task) => {
      return c.completed ? p + 1 : p;
    }, 0);
  });
  const totalCount = computed((): number | any => {
    return tasks.value.length;
  });

  // actions
  const getTasks = async (): Promise<any> => {
    isLoading.value = true;
    try {
      const res = await tasksController.getTasks();
      tasks.value = res.data.todos;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  const addTask = async (task: Task | any): Promise<any> => {
    tasks.value.push(task);
    try {
      const res = await tasksController.addTask(task);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTask = async (id: number) => {
    tasks.value = tasks.value.filter((t: Task) => t.id !== id);
    try {
      const res = await tasksController.deleteTask(id);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDone = async (id: any): Promise<any> => {
    const task: any = tasks.value.find((t: any) => t.id === id);
    task.completed = !task.completed;
    try {
      const res = await tasksController.toggleDone(id, task);
    } catch (error) {
      console.error(error);
    }
  };

  const $reset = () => {
    tasks.value.splice(0, tasks.value.length);
  };

  return {
    tasks,
    isLoading,
    done,
    doneCount,
    totalCount,
    getTasks,
    addTask,
    deleteTask,
    toggleDone,
    $reset,
  };
});
