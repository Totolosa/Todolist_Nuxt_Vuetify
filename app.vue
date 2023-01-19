<template>
	<v-app id="inspire">
		<v-app-bar>
			<v-app-bar-title> TODOS</v-app-bar-title>
		</v-app-bar>
		<v-main class="bg-grey-lighten-2">
			<v-container class="d-flex justify-center">
				<v-row>
					<v-col >
						<v-card>
							<v-toolbar density="comfortable" color="primary" dark>
								<v-toolbar-title>My Todo List</v-toolbar-title>
								<v-spacer></v-spacer>
                <v-btn
                  prepend-icon="mdi-plus"
                  rounded="pill"
                  @click="addToto()"
                >
                  Add
                </v-btn>
                <v-btn
                  prepend-icon="mdi-delete"
                  rounded="pill"
                  @click="clearTodos()"
                >
                  Clear
                </v-btn>
							</v-toolbar>
							<v-alert v-if="todos.length === 0"
								type="info"
								density="comfortable"
                variant="outlined"
                color="primary"
								class="ma-4"
							>
								No todo items yet
							</v-alert>
              
							<v-card v-for="(todo, i) in todos" class="ma-4" variant="outlined">
								<v-form>
									<v-text-field
                    v-model="todo.title"
										label="Title"
										color="primary"
										hide-details="auto"
                    @input="updateTodo(i)"
									/>
									<v-textarea
                    v-model="todo.description"
										label="Description"
										color="primary"
										auto-grow
										rows="1"
										hide-details="auto"
                    @input="updateTodo(i)"
									></v-textarea>
								</v-form>
								<v-card
									class="d-flex justify-space-between align-center"
								>
									<v-card-text>
										<div>
											{{todo.date.toLocaleString()}}
										</div>
									</v-card-text>
									<v-btn
										prepend-icon="mdi-delete"
										rounded="pill"
										color="primary"
										class="mr-2"
                    @click="removeTodo(i)"
									>
										Delete
									</v-btn>
								</v-card>
							</v-card>
              
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>
-

<script setup lang="ts">
import { ref } from 'vue'

class Todo {
  title: string;
  description: string;
  date: Date;
  constructor(title?: string, description?: string, date?: Date) {
    this.title = title ? title : "";
    this.description = description ? description : "";
    this.date = date ? new Date(date) : new Date();
  }
}

const todos = ref<Todo[]>([]);

if (typeof window !== 'undefined') {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) as Todo[] | null;
  if (storedTodos) {
    todos.value = storedTodos
  }
}

function addToto() {
  todos.value.unshift(new Todo());
  // save to localstorage
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

function removeTodo (index: number) {
  todos.value.splice(index, 1);
  // save to localstorage
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

function updateTodo(index: number) {
  let newDate = new Date();
  todos.value[index].date = newDate;
  // save to localstorage
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

function clearTodos() {
  todos.value = [];
  // save to localstorage
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

</script>