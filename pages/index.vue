<template>
	<v-app id="inspire">
		<v-main class="bg-grey-lighten-2">
			<v-container class="d-flex justify-center">
				<v-row>
					<v-col>
						<v-card v-if="render">
							<TodosTopBar
								@addTodo="addTodo"
								@clearTodos="clearTodos"
							/>
							<NoTodos v-if="todos.length === 0" />
							<TodoItem
								v-for="(todo, i) in todos"
								:key="i"
								:todo="todo"
								:index="i"
								@update-todo="updateTodo"
								@remove-todo="removeTodo"
							/>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
import { initCustomFormatter, ref } from "vue";
import Todo from "../models/Todo";

const todos = ref<Todo[]>([]);
const render = ref(false);

if (typeof window !== "undefined") {
	let rawStoredTodos = localStorage.getItem("todos");
	if (rawStoredTodos) {
		todos.value = JSON.parse(rawStoredTodos);
	}
	render.value = true;
}

function addTodo() {
	todos.value.unshift(new Todo());
	localStorage.setItem("todos", JSON.stringify(todos.value));
}

function removeTodo(index: number) {
	todos.value.splice(index, 1);
	localStorage.setItem("todos", JSON.stringify(todos.value));
}

function updateTodo(index: number) {
	let newDate = new Date();
	todos.value[index].date = newDate;
	localStorage.setItem("todos", JSON.stringify(todos.value));
}

function clearTodos() {
	todos.value = [];
	localStorage.removeItem("todos");
}
</script>
