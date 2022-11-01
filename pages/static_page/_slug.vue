<template>
<div v-html="html">
</template>

<script>
export default {
  asyncData({ $axios, payload }) {
    return {
      subject: payload.subject,
      html: payload.html,
      scripts: payload.scripts,
    }
  },
  head() {
    return {
      title: this.subject,
      script: this.scripts.map(src => ({ src }))
    }
  }
}
</script>
