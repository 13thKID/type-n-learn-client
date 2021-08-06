const dateFromTimestring = (timestring, delimiter = '-', reverse = false) => {
  /**
   * Function extracts the date part from the datestring
   * ---------------------------------------------------
   * @param {string} timestring - assumed format: "2021-08-05T12:43:53.000Z"
   * @return {string} - date string
   */
  let date = timestring.split('T')[0]
  date = date.split('-')
  if (!reverse) { // as a default, date is reversed
    date.reverse()
  }
  return date.join(delimiter)
}

export {
  dateFromTimestring
}
