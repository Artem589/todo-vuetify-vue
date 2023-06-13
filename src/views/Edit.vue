<template>
	<v-dialog :value="true" persistent max-width="290">
		<v-card>
			<v-card-title class="text-h5"> Изменить задачу? </v-card-title>
			<v-card-text>Я бы предпочел удалить их, но да ладно</v-card-text>
			<v-text-field v-model="taskTitle" @keyup.enter="saveTask" class="ma-6" />
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn @click="$emit('close')" text> Отменить </v-btn>
				<v-btn @click="saveTask" :disabled="!taskTitle.length || taskTitle === task.title" text> Сохранить </v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: "Edit",
	props: {
		task: {
			type: Object,
			required: true,
			default: {},
		},
	},
	data() {
		return {
			taskTitle: "hello",
		};
	},
	mounted() {
		this.taskTitle = this.task.title;
	},
	methods: {
		saveTask(task) {
			const changeTask = {
				id: this.task.id,
				title: this.taskTitle,
			};
			this.$emit("save", changeTask);
		},
	},
};
</script>
