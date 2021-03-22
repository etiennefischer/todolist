<template>
  <div class="m-10 bg-white rounded-sm shadow-sm">
    <div class="p-5">
      <h1 class="text-xl font-bold text-purple-700">Todolist</h1>
      <h2 class="-mt-1 text-gray-600">The best app ever</h2>
    </div>
    <ul class="pb-3">
      <li
        v-for="item in todoItems"
        :key="item.id">
        <TodoItem :item="item" @onItemChecked="onItemChecked" />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todoItems: [
        {
          id: '1',
          name: 'Faire un truc',
          createdAt: new Date(),
          checkedAt: new Date()
        },
        {
          id: '2',
          name: 'Faire un truc',
          createdAt: new Date(),
          checkedAt: null
        },
        {
          id: '3',
          name: 'Faire un truc',
          createdAt: new Date(),
          checkedAt: null
        }
      ]
    }
  },
  methods: {
    onItemChecked(item) {
      item.checkedAt = item.checkedAt ? null : new Date()
    }
  }
}
</script>

<style>
</style>
