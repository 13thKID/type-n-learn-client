import { TypeNLearn } from './index'

export default {
  authenticateUser (credentials) {
    return TypeNLearn.post('login', credentials)
  },
  registerUser (credentials) {
    return TypeNLearn.post('register', credentials)
  },
  validateToken () {
    return TypeNLearn.post('auth')
  }
}
