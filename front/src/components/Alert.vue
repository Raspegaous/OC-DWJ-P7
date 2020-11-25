<template>
  <b-alert
      :variant="variant"
      dismissible
      :show="dismissCountDown"
      @dismiss-count-down="countDownChanged"
      @dismissed="dismissCountDown = 0"
  >
    <p>{{ content }}</p>
    <b-progress
        :variant="variant"
        :max="dismissSecs"
        :value="dismissCountDown"
    ></b-progress>
  </b-alert>
</template>
<script>
export default {
  name: 'Alert',
  props: ['variant', 'content'],
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 10,
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
}
</script>
