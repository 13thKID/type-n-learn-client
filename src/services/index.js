import axios from 'axios'

axios.defaults.withCredentials = true

const TypeNLearn = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:8081'
})

export {
  TypeNLearn
}
