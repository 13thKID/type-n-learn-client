<template lang="">
  <div id="app" style="min-height: 100vh" class="uk-flex uk-flex-column">
    <div class="uk-section-xsmall uk-section-secondary">
      <div class="uk-container uk-container expand">
        <div class="uk-flex uk-flex-middle uk-flex-between">
          <div class="nav">
            <router-link :to="{name: 'Home'}">Home</router-link>
          </div>
          <router-link :to="{name: 'Login'}" class="uk-button uk-button-default uk-margin-medium-left">Login
          </router-link>
        </div>
      </div>
    </div>
    <div style="flex: 1">
      <router-view/>
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
  methods: {
    ...mapActions([
      'getPublicSets'
    ])
  },
  mounted () {
    this.getPublicSets()
    // this.$router.push('/text-input')
  }
}

</script>
<style lang="">

</style>
