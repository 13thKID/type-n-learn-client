<template>
  <div uk-slider>

    <div class="uk-position-relative">

      <div class="uk-slider-container">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">

          <li class="uk-padding-small" v-for="set in publicSets" :key="set.slug">
            <a @click.prevent="chooseSet(set)" class="uk-link-reset uk-card uk-card-small uk-card-default uk-card-body">
              <p class="uk-h3">{{ set.name }}</p>

              <p v-if="set.description">{{ truncate(set.description) }}</p>

              <div class="uk-flex uk-flex-between">
                <p class="uk-margin-remove uk-text-small"><span class="uk-text-bold">Author:</span> {{ set.authorName }}</p>
                <p class="uk-margin-remove uk-text-small">{{ dateFromTimestring(set.createdAt, '.') }}</p>
              </div>
            </a>
          </li>

        </ul>
      </div>

      <div class="uk-hidden@s uk-light">
        <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous
          uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
      </div>

      <div class="uk-visible@s">
        <a class="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous
          uk-slider-item="previous"></a>
        <a class="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
      </div>

    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

  </div>
</template>

<script>
/** vuex */
import {
  mapState,
  mapMutations
} from 'vuex'

/** components */

/** mixins */
import typography from '@/mixins/typography'
import format from '@/mixins/format'

/** helpers */

export default {
  name: 'SetSlider',
  mixins: [typography, format],
  computed: {
    ...mapState({
      publicSets: state => state.Set.publicSets
    })
  },
  methods: {
    ...mapMutations([
      'SET_NEW_SET'
    ]),
    chooseSet (set) {
      this.SET_NEW_SET(set)
      this.$router.push('/text-input')
    }
  }
}

</script>

<style lang="scss">

</style>
