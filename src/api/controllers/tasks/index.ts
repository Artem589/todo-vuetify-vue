import { urls } from "@/api/config/urls";
import Task from "@/types/task";
import axios from "axios";

export default class TasksController {
  constructor() {}
  async getTasks() {
    const res = await axios(urls.tasks.getTasks);
    return res;
  }
  async addTask(task: Task) {
    const res = await axios.post(`${urls.tasks.getTasks}/add`, task, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async deleteTask(id: number) {
    const res = await axios.delete(`${urls.tasks.getTasks}/${id}`);
  }

  async toggleDone(id: number, task: Task) {
    console.log(task);
    const res = await axios.patch(
      `${urls.tasks.getTasks}/${id}`,

      { completed: task.done },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
