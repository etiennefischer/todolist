import { createStore } from 'vuex'

export default createStore({
  state() {
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
  getters: {
    getTodoItems(state) {
      return state.todoItems
    }
  },
  actions: {
    setItemChecked(context, item) {
      context.commit('setItemChecked', item)
    }
  },
  mutations: {
    setItemChecked(state, item) {
      const stateItem = state.todoItems.find(todoItem => todoItem.id === item.id)
      stateItem.checkedAt = stateItem.checkedAt ? null : new Date()
    }
  }
})
