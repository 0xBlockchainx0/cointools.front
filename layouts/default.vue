<template>
  <div class="min-h-screen">
    <AppHeader />
    <AppTrackedTop />

    <Nuxt keep-alive :keep-alive-props="{ max: 50 }" />
  </div>
</template>

<script>
export default {
}
</script>
