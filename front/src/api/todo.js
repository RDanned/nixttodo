import axios from '@/api/axios'

const getItems = () => axios.get('/items').then((response) => response.data)

const addItem = (data) =>
  axios.post('/items', data).then((response) => response.data)

const updateItem = (item) =>
  axios.put(`/items/${item.id}`, item).then((response) => response.data)

export default {
  getItems,
  addItem,
  updateItem,
}
