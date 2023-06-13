<template>
	<div class="todo">
		<v-text-field
			v-model="newTaskTitle"
			class="pa-3"
			outlined
			label="Добавить задачу"
			@click:append="addTask"
			@keyup.enter="addTask"
			append-icon="mdi-calendar-plus"
			color="black"
			hide-details
			clearable
		></v-text-field>
		<v-list class="pt-0" flat>
			<div v-for="(task, index) in tasks" :key="task.id">
				<v-list-item @click="doneTask(task.id)" :class="{ 'teal lighten-4': task.done }">
					<template v-slot:default>
						<v-list-item-action>
							<v-checkbox :input-value="task.done" color="primary"></v-checkbox>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title :class="{ 'text-decoration-line-through': task.done }">
								{{ task.title }}
							</v-list-item-title>
						</v-list-item-content>
						<v-list-item-action>
							<v-btn @click.stop="editTask(task)" icon>
								<v-icon color="primary">mdi-pencil</v-icon>
							</v-btn>
						</v-list-item-action>
						<v-list-item-action>
							<v-btn @click.stop="deleteTask(task.id)" icon>
								<v-icon color="grey darken-4">mdi-delete-forever</v-icon>
							</v-btn>
						</v-list-item-action>
					</template>
				</v-list-item>
				<v-divider></v-divider>
			</div>
			<Edit v-if="isModalVisible" @close="closeModal" @save="saveTask" :task="currentTask"> </Edit>
		</v-list>
	</div>
</template>

<script>
import Task from "@/types/task";
import Edit from "@/views/Edit.vue";

export default {
	components: {
		Edit,
	},

	data() {
		return {
			tasks: [],
			newTaskTitle: "",
			isModalVisible: false,
			currentTask: null,
		};
	},
	beforeUpdate() {
		console.log(this.tasks);
	},
	methods: {
		doneTask(id) {
			let task = this.tasks.filter((task) => task.id === id)[0];
			task.done = !task.done;
		},
		deleteTask(id) {
			this.tasks = this.tasks.filter((task) => task.id !== id);
		},
		addTask() {
			if (!this.newTaskTitle) {
				return;
			} else {
				const newTask = new Task(Date.now(), this.newTaskTitle, false);
				console.log(newTask);
				this.tasks.push(newTask);
			}
		},
		editTask(task) {
			this.isModalVisible = true;
			this.currentTask = task;
		},
		closeModal() {
			this.isModalVisible = false;
			this.currentTask = null;
		},
		saveTask({ id, title }) {
			console.log(id, title);
			this.isModalVisible = false;
			this.currentTask = null;
			const index = this.tasks.findIndex((task) => task.id === id);
			this.tasks[index].title = title;
		},
	},
};
</script>

<style scoped></style>
