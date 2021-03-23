<template>
  <div class="flex w-full min-h-screen bg-bg" :data-theme="dataTheme">
  <AppSidebar />
    <AppSideTracker />
    <div class="w-full">
      <AppHeader/>
      <Nuxt :keep-alive-props="{ max: 20 }" keep-alive/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    },
    dataTheme() {
      if(this.darkMode) return 'dark'
      else return 'light'
    }
  }
}
</script>
