<template>
  <div class="min-h-screen flex w-full">
    <AppTrackedTop class="flex-shrink-0" />
    <div class="w-full">
      <AppHeader />

      <Nuxt keep-alive :keep-alive-props="{ max: 50 }" />
    </div class="w-full">
  </div>
</template>

<script>
export default {
}
</script>
