import { createStore } from 'vuex'
import api from './api'

export default createStore({
  state() {
    return {
      serverItems: {}
    }
  },
  getters: {
    getTodoItems(state) {
      const itemIds = Object.keys(state.serverItems).map(id => id)

      return itemIds.map(id => {
        const item = state.serverItems[id]
        return { ...item, id }
      })
    }
  },
  actions: {
    async getItems(context) {
      try {
        const { data } = await api.get('todos.json')
        context.commit('setItems', data)
      }
      catch (error) {
        console.error(error)
      }
    },
    async setItemChecked(context, item) {
      try {
        await api.patch(`/todos/${item.id}.json`, { checked: !item.checked })
        context.commit('setItemChecked', item.id)
      }
      catch (errro) {
        console.error(error)
      }
    },
    async addItem(context, name) {
      const item = {
        name,
        createdAt: new Date().toString(),
        checked: false
      }

      try {
        const { data } = await api.post('todos.json', item)
        return context.commit('addItem', { id: data.name, item })
      }
      catch (error) {
        console.error(error)
      }
    },
    async deleteItem(context, id) {
      try {
        await api.delete(`todos/${id}.json`)
        context.commit('deleteItem', id)
      }
      catch (error) {
        console.error(error)
      }
    }
  },
  mutations: {
    setItems(state, items) {
      state.serverItems = items || {}
    },
    setItemChecked(state, id) {
      const item = state.serverItems[id]
      item.checked = !item.checked
    },
    addItem(state, { id, item }) {
      state.serverItems[id] = item
    },
    deleteItem(state, id) {
      delete state.serverItems[id]
    }
  }
})
