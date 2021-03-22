import axios from 'axios'

export default axios.create({
  baseURL: 'https://todolist-6bc89-default-rtdb.europe-west1.firebasedatabase.app'
})
