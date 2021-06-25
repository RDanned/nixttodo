import axios from '@/api/axios'

const getItems = () => axios.get('/items').then((response) => response.data)

export default {
  getItems,
}
