<script>
export default {
  methods: {
    click() {
      this.$toast('Render a Toast!')
    }
  }
}
</script>

<template>
  <button @click="click">Render a Toast!</button>
</template>
