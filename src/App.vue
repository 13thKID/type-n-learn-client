<template lang="">
  <div id="app" style="min-height: 100vh" class="uk-flex uk-flex-column">
    <div class="uk-section-xsmall uk-section-secondary">
      <div class="uk-container uk-container expand">
        <div class="uk-flex uk-flex-middle uk-flex-between">
          <div class="nav">
            <router-link :to="{name: 'Home'}">Home</router-link>
          </div>
          <div>
            <button class="uk-button uk-button-primary" @click="validateToken">VERIFY</button>
            <router-link :to="{name: 'Login'}" class="uk-button uk-button-default uk-margin-medium-left">Login
            </router-link>
          </div>
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
      'getPublicSets',
      'validateToken'
    ])
  },
  mounted () {
    this.getPublicSets()
    this.$router.push('/register')
  }
}

</script>
<style lang="">

</style>
