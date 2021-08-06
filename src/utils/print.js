class Log {
  show = true;
  showErrors = 'show';

  success (message) {
    if (this.show) console.log('%c%s', 'color: green', message)
  }

  error (message) {
    switch (this.showErrors) {
      case 'auto':
        if (window.showErrors) {
          console.log('%c%s', 'color: red', message)
        }
        break
      case 'show':
        console.log('%c%s', 'color: red', message)
        break
      case 'hide':
        break
      default:
    }
  }

  warning (message) {
    if (this.show) console.log('%c%s', 'color: orange', message)
  }

  info (message) {
    if (this.show) console.log('%c%s', 'color: blue', message)
  }

  normal (message) {
    if (this.show) console.log('%c%s', 'color: black', message)
  }
}

export default new Log()
