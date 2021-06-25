import todoApi from '@/api/todo'

const state = {
  /*  items: [
    {
      id: 0,
      title: 'test1',
      description: 'desc 1',
      completed: false,
    },
    {
      id: 1,
      title: 'test2',
      description: 'desc 2',
      completed: false,
    },
    {
      id: 2,
      title: 'test3',
      description: 'desc 3',
      completed: false,
    },
  ],*/
  items: [],
}

export const mutationTypes = {
  setItems: '[todo] Set todo list items',
}

export const actionTypes = {
  setItems: '[todo] Set todo list items',
  loadItems: '[todo] Load todo list items',
  addItem: '[todo] Add item',
}

export const mutations = {
  [mutationTypes.setItems](state, payload) {
    state.items = payload.items
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
    console.log(lastId)
    item.id = lastId + 1
    console.log(item.id)
    item.comleted = false
    //context.state.items.push(item)
    context.commit(mutationTypes.setItems, {
      items: [...context.state.items, item],
    })
  },
}

export default {
  state,
  actions,
  mutations,
}
