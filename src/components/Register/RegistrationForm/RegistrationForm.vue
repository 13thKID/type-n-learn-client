<template>
  <div :class="$options.name" class="uk-border-rounded uk-box-shadow-large uk-card uk-card-primary uk-card-body">
    <p class="uk-h2 small uk-text-bold">Register:</p>
    <div class="uk-margin">
      <label for="email">Email:</label>
      <input
        class="uk-input"
        :class="invalidInputClass($v.credentials.email)"
        type="text"
        placeholder="Email"
        name="email"
        @input="$v.credentials.email.$touch()"
        v-model="credentials.email">
      <Error :field="$v.credentials.email" />
    </div>
    <div class="uk-margin">
      <label for="email">Username:</label>
      <input
        class="uk-input"
        type="text"
        placeholder="Username"
        name="username"
        @input="$v.credentials.username.$touch()"
        v-model="credentials.username">
      <Error :field="$v.credentials.username" />
    </div>
    <div class="uk-margin">
      <label for="email">Password:</label>
      <input
        class="uk-input"
        type="text"
        placeholder="Password"
        name="password"
        @input="$v.credentials.password.$touch()"
        v-model="credentials.password">
      <Error :field="$v.credentials.password" />
    </div>
    <div class="uk-margin">
      <label for="email">Confirm Password:</label>
      <input
        class="uk-input"
        type="text"
        placeholder="Repeat Password"
        name="confirmPassword"
        @input="$v.confirmPassword.$touch()"
        v-model="confirmPassword">
      <Error :field="$v.confirmPassword" />
    </div>
    <div class="uk-margin uk-flex uk-flex-center">
      <button class="uk-button uk-button-default" :disabled="!canRegister" @click="register(credentials)">Register</button>
    </div>
  </div>
</template>

<script>
/** vuex */
import { mapActions } from 'vuex'

/** components */
import Error from '@/components/global/Error/Error'

/** mixins */

/** helpers */

/** vuelidate */
import {
  minLength,
  maxLength,
  email,
  alphaNum,
  required,
  sameAs
} from 'vuelidate/lib/validators'
import { password } from '@/utils/validators'

export default {
  name: 'RegistrationForm',
  components: {
    Error
  },
  data () {
    return {
      credentials: {
        email: 'sample10@mail.com',
        username: 'sample10',
        password: 'tomojehaslo1'
      },
      confirmPassword: 'tomojehaslo1'
    }
  },
  computed: {
    validation () {
      return this.$v
    },
    canRegister () {
      return !this.$v.credentials.$invalid
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    invalidInputClass (field) {
      const classes = ['my-invalid-input']
      const isInvalid = field.$invalid && field.$dirty
      return isInvalid && classes
    }
  },
  validations: {
    credentials: {
      email: {
        maxLength: maxLength(50),
        required,
        email
      },
      username: {
        minLength: minLength(5),
        maxLength: maxLength(15),
        required,
        alphaNum
      },
      password: {
        required,
        password
      }
    },
    confirmPassword: {
      required,
      matchPassword: sameAs(function () { return this.credentials.password })
    }
  }
}
</script>

<style lang="scss">
.my-invalid-input{
  border-color: #f0506e !important;
}
.uk-button[disabled]{
  background-color: transparent !important;
  color: #999 !important;
  border-color: #e5e5e5 !important;
}
</style>
