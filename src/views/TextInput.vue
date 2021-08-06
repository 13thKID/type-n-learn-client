<template>
  <div :class="$options.name" class="uk-container uk-container-xlarge">
    <div class="uk-margin-large-top uk-margin-large-bottom">
      <TextDisplay ref="TextDisplay"/>
    </div>
    <div class="uk-flex uk-flex-center">
      <Keyboard/>
    </div>
  </div>
</template>

<script>
/** vuex */

/** components */
import Keyboard from '@/components/TextInput/Keyboard/Keyboard'
import TextDisplay from '@/components/TextInput/TextDisplay/TextDisplay'

/** mixins */

/** helpers */

export default {
  name: 'TextInput',
  components: {
    Keyboard,
    TextDisplay
  },
  mounted () {
    document.addEventListener('keypress', event => {
      event.preventDefault()
      this.$refs.TextDisplay.checkHit(event.key)
    })
  }
}
</script>
