import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      todoItems: [
        {
          id: '1',
          name: 'Faire un coucou',
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
  getters: {
    getTodoItems(state) {
      return state.todoItems
    }
  },
  actions: {
    setItemChecked(context, item) {
      context.commit('setItemChecked', item)
    },
    addItem(context, name) {
      context.commit('addItem', {
        name,
        id: '_' + Math.random().toString(36).substr(2, 9),
        createdAt: new Date(),
        checkedAt: null
      })
    },
    deleteItem(context, item) {
      context.commit('deleteItem', item)
    }
  },
  mutations: {
    setItemChecked(state, item) {
      const stateItem = state.todoItems.find(todoItem => todoItem.id === item.id)
      stateItem.checkedAt = stateItem.checkedAt ? null : new Date()
    },
    addItem(state, item) {
      state.todoItems.push(item)
    },
    deleteItem(state, item) {
      state.todoItems = state.todoItems.filter(i => item.id !== i.id)
    }
  }
})
