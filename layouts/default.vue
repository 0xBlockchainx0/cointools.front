<template>
  <div class="min-h-screen">
    <div class="w-full">
      <AppHeader/>
      <!-- <AppTrackedTop/> -->
      <Nuxt :keep-alive-props="{ max: 20 }" keep-alive/>
    </div>
  </div>
</template>

<script>
export default {}
</script>
