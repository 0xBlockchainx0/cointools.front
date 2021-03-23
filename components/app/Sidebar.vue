<template>
  <div class="relative sticky flex-shrink-0 w-16 h-screen">
  <div class="fixed top-0 left-0 flex justify-center w-16 h-screen border-r bg-dark">
    <div class="w-full">
    <nuxt-link tag="div" to="/" class="w-6 h-6 mx-auto my-8 rounded-full cursor-pointer bg-primary"></nuxt-link>
      <nuxt-link tag="div" class="py-4 text-center border-t border-b cursor-pointer" to="/tracker"> <i class="my-0 fas fa-circle"></i> <span class="block text-xs tag">Tracker</span> </nuxt-link>
    </div>
  </div>
  </div>
</template>