<template>
	<v-card class="ma-4" variant="outlined">
		<v-form>
			<v-text-field
				v-model="todo.title"
				label="Title"
				color="primary"
				hide-details="auto"
				@input="$emit('update-todo', index)"
			/>
			<v-textarea
				v-model="todo.description"
				label="Description"
				color="primary"
				auto-grow
				rows="1"
				hide-details="auto"
				@input="$emit('update-todo', index)"
			></v-textarea>
		</v-form>
		<v-card class="d-flex justify-space-between align-center">
			<v-card-text>
				<div>
					{{ new Date(todo.date).toLocaleString() }}
				</div>
			</v-card-text>
			<v-btn
				prepend-icon="mdi-delete"
				rounded="pill"
				color="secondary"
				class="mr-2"
				@click="$emit('remove-todo', index)"
			>
				Delete
			</v-btn>
		</v-card>
	</v-card>
</template>

<script setup lang="ts">

const props = defineProps({
	todo: {
		type: Object,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
})
const emits = defineEmits(['update-todo', 'remove-todo']);

</script>