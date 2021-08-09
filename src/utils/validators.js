export const password = (password) => {
  if (!password) return true
  if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,32}$/)) {
    return false
  }
  return true
}
