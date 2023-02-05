<template>
  <div class="ratio ratio-16x9">
    <iframe :src="url" title="Thirsty Roots"></iframe>
  </div>
</template>

<script>
export default {
  name: "GameCanvas",
  props: {
    playerName: {
      type: String,
      default: null
    }
  },
  computed: {
    url() {
      if (this.playerName) {
        return '/game?playerName=' + this.playerName
        console.log(window.location.href)
      }
    }
  }
}
</script>
