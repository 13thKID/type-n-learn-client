import { TypeNLearn } from './index'

export default {
  getPublicSets (options) {
    return TypeNLearn.get('sets', options)
  }
}
