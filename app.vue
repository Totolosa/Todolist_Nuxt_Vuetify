<template>
	<v-app id="inspire">
		<v-app-bar>
			<v-app-bar-title> TODOS</v-app-bar-title>
		</v-app-bar>
		<v-main class="bg-grey-lighten-2">
			<v-container fluid>
				<v-row>
					<v-col cols="12" md="10">
						<v-card>
							<v-toolbar dark>
								<v-toolbar-title>My Todo List</v-toolbar-title>
								<v-spacer></v-spacer>
                <v-btn
                  prepend-icon="mdi-plus"
                  rounded="pill"
                  color="primary"
                >
                  Add
                </v-btn>
                <v-btn
                  prepend-icon="mdi-delete"
                  rounded="pill"
                  color="primary"
                >
                  Clear
                </v-btn>
							</v-toolbar>
							<v-alert
								type="info"
								color="primary"
								density="comfortable"
								class="ma-4"
							>
								No todo items yet
							</v-alert>

							<v-card class="ma-4" variant="outlined">
								<v-form>
									<v-text-field
										label="Title"
										color="primary"
										hide-details="auto"
									/>
									<v-textarea
										label="Description"
										color="primary"
										auto-grow
										rows="1"
										hide-details="auto"
									></v-textarea>
								</v-form>
								<v-card
									class="d-flex justify-space-between align-center"
								>
									<v-card-text>
										<div>
											Created the 2020-07-01 12:00:00
										</div>
										<!--<v-spacer></v-spacer>-->
									</v-card-text>
									<v-btn
										prepend-icon="mdi-delete"
										rounded="pill"
										color="primary"
										class="mr-2"
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

<script>
export default {
	data: () => ({ drawer: null }),
};
</script>

<!--<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title>My Todo List</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(todo, index) in 4" :key="index">
                <v-list-item-title>{{ todo.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ todo.description }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ todo.date }}</v-list-item-subtitle>
                <v-list-item-action>
                  <v-btn color="error" >Remove</v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <v-form @submit.prevent="addTodo">
          <v-text-field v-model="newTodo.title" label="Title" />
          <v-textarea v-model="newTodo.description" label="Description"></v-textarea>
          <v-btn type="submit">Add Todo</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { VueClass } from 'vue-class-component'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

@Component
export default class TodoList extends Vue {
  @Prop({ default: [] }) todos!: Todo[]
  newTodo = {
    title: '',
    description: '',
    date: ''
  }

  @Watch('todos')
  updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  @Method
  addTodo() {
    this.todos.push({
      title: this.newTodo.title,
      description: this.newTodo.description,
      date: new Date().toLocaleString()
    })
    this.newTodo.title = ''
    this.newTodo.description = ''
  }

  @Method
  removeTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
</script>
-->
