import axios from 'axios'

export default axios.create({
  baseURL: 'https://vue-todolist-etienne-default-rtdb.europe-west1.firebasedatabase.app'
})
