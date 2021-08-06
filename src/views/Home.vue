<template>
  <div :class="$options.name" class="uk-container uk-container-xlarge">
    <SetSlider/>
  </div>
</template>

<script>
/** vuex */

/** components */
import SetSlider from '@/components/global/SetSlider/SetSlider'

/** mixins */

/** helpers */

export default {
  name: 'Home',
  components: {
    SetSlider
  }
}
</script>
