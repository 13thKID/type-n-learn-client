const truncate = (text, chars = 25) => {
  if (typeof text === 'string') {
    let newText = text.substr(0, chars)
    if (text.length > chars) {
      newText += '...'
    }
    return newText
  }
}

export {
  truncate
}
