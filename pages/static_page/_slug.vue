<template>
  <div v-html="html">
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const html = await $axios.get('/rcms-api/5/static_page/static1').then((res) => {
      return res.data.details.html;
    })
    console.log(html);
    return {
      html
    }
  },
}
</script>
