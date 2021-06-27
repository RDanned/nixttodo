import todoApi from '@/api/todo'

const state = {
  items: [],
  currentCategory: 'all',
}

export const mutationTypes = {
  setItems: '[todo] Set todo list items',
  updateItem: '[todo] Update item',
  setEditItem: '[todo] Set edit item',
  setCategory: '[todo] Set category',
}

export const actionTypes = {
  setItems: '[todo] Set todo list items',
  loadItems: '[todo] Load todo list items',
  addItem: '[todo] Add item',
  toggleCompleted: '[todo] Toggle item complement',
  setEditItem: '[todo] Set edit item',
  updateItem: '[todo] Update item',
  setCategory: '[todo] Set category',
}

export const mutations = {
  [mutationTypes.setItems](state, payload) {
    state.items = payload.items
  },
  [mutationTypes.updateItem](state, payload) {
    state.items = state.items.map((item) => {
      if (item.id == payload.item.id) item = payload.item
      return item
    })
  },
  [mutationTypes.setEditItem](state, payload) {
    state.editItem = payload.item
  },
  [mutationTypes.setCategory](state, payload) {
    state.currentCategory = payload.category
  },
}

export const actions = {
  [actionTypes.setItems](context, {items}) {
    context.commit(mutationTypes.setItems, {items})
  },
  [actionTypes.loadItems](context) {
    todoApi
      .getItems()
      .then((items) => context.commit(mutationTypes.setItems, {items}))
  },
  [actionTypes.addItem](context, {item}) {
    let lastId = context.state.items[context.state.items.length - 1].id
    item.id = lastId + 1
    item.comleted = false

    todoApi
      .addItem(item)
      .then(() => {
        context.commit(mutationTypes.setItems, {
          items: [...context.state.items, item],
        })
      })
      .catch(() => console.log('smth went wrong'))
  },
  [actionTypes.toggleCompleted](context, {id}) {
    /*let item = context.state.items.filter((item) => {
      return item.id == id
    })*/

    let item = context.state.items.find((item) => item.id == id)

    console.log(item)
    //item = item[0]
    item.completed = !item.completed

    todoApi
      .updateItem(item)
      .then(() => context.commit(mutationTypes.updateItem, {item}))
  },
  [actionTypes.updateItem](context, {item}) {
    todoApi
      .updateItem(item)
      .then(() => context.commit(mutationTypes.updateItem, {item}))
  },
  [actionTypes.setCategory](context, {category}) {
    context.commit(mutationTypes.setCategory, {category})
  },
}

const getters = {
  getCurrentCategory: (state) => state.currentCategory,
  getItemsByCategory: (state) => {
    if (state.currentCategory === 'all') return state.items
    else if (state.currentCategory === 'completed')
      return state.items.filter((item) => {
        return item.completed
      })
    else if (state.currentCategory === 'incomplete')
      return state.items.filter((item) => {
        return !item.completed
      })
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
