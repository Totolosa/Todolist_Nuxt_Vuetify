<template>
	<v-toolbar density="comfortable" color="primary" dark>
		<v-toolbar-title>My Todo List</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn prepend-icon="mdi-plus" rounded="pill" @click="$emit('addTodo')">
			<!--<div class="d-none d-sm-flex">Add</div>-->
			Add
		</v-btn>
		<v-btn
			prepend-icon="mdi-delete"
			rounded="pill"
			@click="$emit('clearTodos')"
		>
			<!--<div class="d-none d-sm-flex">Clear</div>-->
			Clear
		</v-btn>
	</v-toolbar>
</template>
