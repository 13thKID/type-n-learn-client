<template lang="">
  <p
    v-if="showError"
    class="uk-text-small uk-text-danger uk-margin-remove"
    v-html="messages"
  ></p>
</template>
<script>
export default {
  props: {
    field: Object
  },
  data () {
    return {
      messageCollection: {
        required: 'This field is required',
        alpha: 'The field can only contain text',
        alphaNum: 'The field can only contain text and numbers',
        email: 'The value entered is not an email',
        password: 'Password must contain...',
        matchPassword: 'Passwords are not identical'
      }
    }
  },
  computed: {
    constraints () {
      return Object.keys(this.field).filter(key => key[0] !== '$')
    },
    showError () {
      return this.field.$invalid && this.field.$dirty
    },
    messages () {
      const messages = []
      this.constraints.forEach(constraint => {
        if (!this.field[constraint]) {
          if (this.messageCollection[constraint]) {
            messages.push(this.messageCollection[constraint])
          } else {
            messages.push(this[constraint]())
          }
        }
      })
      return messages.join('<br/>')
    }
  },
  methods: {
    minLength () { return `This field must contain at least ${this.field.$params.minLength.min} characters` },
    maxLength () { return `This field must contain max ${this.field.$params.maxLength.max} characters` }
  }
}
</script>
<style lang="scss">
</style>
