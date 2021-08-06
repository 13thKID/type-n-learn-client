<template>
  <div>
    <div class="uk-flex uk-flex-middle">
      <h3
        class="uk-text-bold uk-margin-remove-top uk-margin-remove-bottom uk-margin-right uk-text-success"
      >
        NASTĘPNY:
      </h3>
      <h2
        v-if="this.nextExpression"
        ref="ghost-parchment"
        class="uk-margin-remove my-font-monospace my-ghost"
      >
        {{ this.nextExpression.heads }} - {{ this.nextExpression.tails }}
      </h2>
    </div>
    <h2
      ref="parchment"
      class="uk-margin-top uk-margin-bottom my-font-monospace"
      v-html="this.htmlText"
    ></h2>
    <div class="">
      <h3
        class="uk-text-bold uk-margin-remove-top uk-margin-remove-bottom uk-margin-right uk-text-warning"
      >
        POPRZEDNIE:
      </h3>
      <h4
        v-for="(expression, index) in finishedExpressions" :key="index"
        ref="ghost-parchment"
        class="uk-margin-remove my-font-monospace my-ghost"
        v-html="expression"
      >
      </h4>
    </div>
  </div>
</template>

<script>
/** vuex */
import { mapState, mapGetters, mapMutations } from 'vuex'

/** components */

/** mixins */

/** helpers */

export default {
  name: 'TextDisplay',
  components: {
  },
  data () {
    return {
      htmlText: '',
      mode: 'noMistakes' // noMistakes | mistakesAllowed
    }
  },
  computed: {
    ...mapState({
      carriagePosition: state => state.Tracker.carriagePosition,
      finishedExpressions: state => state.TextProvider.finishedExpressions
    }),
    ...mapGetters(['activeExpression', 'nextExpression']),
    convertedText () {
      let convertedText = ''
      for (var i = 0; i < this.text.length; i++) {
        if (i === 0) {
          convertedText += `<span class="carriage" >${this.text.charAt(
            i
          )}</span>`
        } else {
          convertedText += `<span>${this.text.charAt(i)}</span>`
        }
      }

      return convertedText
    }
  },
  methods: {
    ...mapMutations([
      'MOVE_CARRIAGE_RIGHT',
      'INCREMENT_CORRECT_HIT',
      'INCREMENT_FALSE_HIT',
      'PUSH_FINISHED_EXPRESSION',
      'GET_NEXT_EXPRESSION',
      'RESET_CARRIAGE_POSITION'
    ]),
    textToHtml (text) {
      let convertedText = ''

      /** marking carriage on the first element */
      convertedText += `<span class="carriage" >${text.charAt(0)}</span>`

      for (var i = 1; i < text.length; i++) {
        convertedText += `<span>${text.charAt(i)}</span>`
      }

      return convertedText
    },
    setHtmlText (newText) {
      this.htmlText = this.textToHtml(newText)
    },
    // marking functions
    markCorrect (position) {
      this.$refs.parchment.childNodes[position].classList = ['correct']
    },
    markFalse (position) {
      this.$refs.parchment.childNodes[position].classList = ['false']
    },
    markCarriage (position) {
      this.$refs.parchment.childNodes[position].classList = ['carriage']
    },
    moveCarriage () {
      this.markCorrect(this.carriagePosition)
      if (this.carriagePosition < this.activeExpression.heads.length - 1) {
        this.MOVE_CARRIAGE_RIGHT()
        this.markCarriage(this.carriagePosition)
      } else {
        this.expressionHasFinished()
      }
    },
    expressionHasFinished () {
      this.PUSH_FINISHED_EXPRESSION(this.parchmentContent())
      this.GET_NEXT_EXPRESSION()
      this.setHtmlText(this.activeExpression.heads)
      this.RESET_CARRIAGE_POSITION()
    },
    // hit-check functions
    correctHit () {
      this.moveCarriage()
      this.INCREMENT_CORRECT_HIT()
    },
    incorrectHit () {
      this.markFalse(this.carriagePosition)
      this.INCREMENT_FALSE_HIT()
    },
    checkHit (eventKey) {
      if (eventKey === this.activeExpression.heads[this.carriagePosition]) {
        this.correctHit()
      } else {
        this.incorrectHit()
      }
    },
    // extracting functions
    parchmentContent () {
      return this.$refs.parchment.innerHTML
    }
  },
  mounted () {
    this.setHtmlText(this.activeExpression.heads)
  }
}
</script>

<style lang="scss">
.my-font-monospace {
  font-family: "Anonymous Pro", monospace;
}

.my-ghost {
  opacity: 0.5;
}

.carriage {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}
.false {
  background-color: hsl(0, 78%, 73%);
}
</style>
