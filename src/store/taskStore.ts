import TasksController from "@/api/controllers/tasks";
import { defineStore } from "pinia";
import Task from "@/types/task";
import axios from "axios";

// import Props from '../components/TaskDetails.vue'

// создать интерфейс для state
const tasksController = new TasksController();

export const useTaskStore = defineStore("TaskStores", {
  state: () => ({
    tasks: [] as Task | any,
    isLoading: false,
  }),
  getters: {
    done(): any {
      return this.tasks.filter((t: any) => t.done);
    },
    doneCount(): any {
      return this.tasks.reduce((p: any, c: any) => {
        return c.done ? p + 1 : p;
      }, 0);
    },
    totalCount(state): number {
      return state.tasks.length;
    },
  },
  actions: {
    async getTasks(): Promise<any> {
      this.isLoading = true;
      try {
        const res = await tasksController.getTasks();
        this.tasks = res.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async addTask(task: any): Promise<any> {
      this.tasks.push(task);
      try {
        const res = await tasksController.addTask(task);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTask(id: any) {
      this.tasks = this.tasks.filter((t: any) => t.id !== id);
      try {
        const res = await tasksController.deleteTask(id);
      } catch (error) {
        console.error(error);
      }
    },
    async toggleDone(id: any): Promise<any> {
      const task = this.tasks.find((t: any) => t.id === id);
      task.done = !task.done;
      try {
        const res = await tasksController.toggleDone(id, task);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

// interface UserInfo {
//     id: number
//     title: string
//     done: boolean
//   }

//   tasks: [] as UserInfo[]
