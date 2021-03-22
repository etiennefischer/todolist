<template>
  <div class="max-w-lg m-10 mx-auto bg-white rounded-sm shadow-sm">
    <div class="p-5">
      <h1 class="text-xl font-bold text-purple-700">Todolist</h1>
      <h2 class="-mt-1 text-gray-600">The best app ever</h2>
    </div>
    <ul v-if="todoItems.length > 0">
      <li
        v-for="item in todoItems"
        :key="item.id">
        <TodoItem :item="item" />
      </li>
    </ul>
    <p
      v-else
      class="p-2 text-sm italic text-center bg-purple-200">
      <span class="not-italic">😕 </span> Pas de tâche. Saisissez en une <span class="not-italic font-bold">↓</span>
    </p>
    <Form class="p-5" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoItem from '@/components/TodoItem.vue'
import Form from '@/components/Form.vue'

export default {
  components: {
    TodoItem,
    Form
  },
  computed: {
    ...mapGetters({
      todoItems: 'getTodoItems'
    })
  },
  mounted() {
    this.$store.dispatch('getItems')
  }
}
</script>

<style>
</style>
