<template :class="$options.name">
  <div class="uk-flex uk-flex-center uk-flex-middle uk-margin-xlarge-top">
    <RegistrationForm/>
  </div>
</template>
<script>
/** vuex */
// import { mapActions } from 'vuex'

/** components */
import RegistrationForm from '@/components/Register/RegistrationForm/RegistrationForm'

/** mixins */

/** helpers */

export default {
  name: 'Register',
  components: {
    RegistrationForm
  },
  methods: {
  }
}
</script>
<style lang="">

</style>
