<template>
  <div :class="$options.name" class="uk-border-rounded uk-box-shadow-large uk-card uk-card-primary uk-card-body">
    <p class="uk-h2 small uk-text-bold">Log IN:</p>
    <div class="uk-margin">
      <label for="email">Email:</label>
      <input class="uk-input" type="text" placeholder="Email" name="email" v-model="credentials.email">
    </div>
    <div class="uk-margin">
      <label for="email">Password:</label>
      <input class="uk-input" type="text" placeholder="Password" name="password" v-model="credentials.password">
    </div>
    <div class="uk-margin uk-flex uk-flex-center">
      <button class="uk-button uk-button-default" @click="logIn(credentials)">LogIN</button>
    </div>
  </div>
</template>
<script>
/** vuex */
import { mapActions } from 'vuex'

/** components */

/** mixins */

/** helpers */

export default {
  name: 'LoginForm',
  data () {
    return {
      credentials: {
        email: 'sample_1@mail.com',
        password: 'tomojehaslo1'
      }
    }
  },
  methods: {
    ...mapActions([
      'logIn'
    ])
  }
}
</script>
<style lang="">

</style>
