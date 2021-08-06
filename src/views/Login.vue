<template :class="$options.name">
  <div class="uk-flex uk-flex-center uk-flex-middle uk-margin-xlarge-top">
    <LoginForm/>
  </div>
</template>
<script>
/** vuex */
// import { mapActions } from 'vuex'

/** components */
import LoginForm from '@/components/Login/LoginForm/LoginForm'

/** mixins */

/** helpers */

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
  }
}
</script>
<style lang="">

</style>
