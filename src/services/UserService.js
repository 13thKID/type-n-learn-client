import { TypeNLearn } from './index'

export default {
  authenticateUser (credentials) {
    console.log(credentials)
    return TypeNLearn.post('login', credentials)
  }
}
