<script setup lang="ts">
import {usePointerStyle} from "~/composables/UsePointerStyle";

usePointerStyle()
</script>

<template>
<div id="layout" class="bg-slate-900 relative  flex justify-center">
  <div id="pointer" class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute !outline-none "></div>
  <div class="lg:flex lg:justify-between lg:gap-4 lg:w-6xl lg:py-0 lg:px-0 py-12 px-6 sm:block">
    <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:py-24 pb-20">
      <layout-landing-block/>
      <layout-nav/>
      <layout-socials/>
    </header>
    <main class="lg:w-[62%] lg:py-24">
      <slot />
    </main>
  </div>

</div>
</template>

<style lang="scss">

</style>