<script setup lang="ts">
import {useScrollMenuSpy, useSelectMenu} from "#imports";

useScrollMenuSpy();
onMounted(() => {
  useSelectMenu("about")
})
</script>

<template>
  <nav class="nav hidden lg:block">
    <ul class="mt-16 w-max">
      <li>
        <a class=" menuitem group flex items-center py-3" href="#about" data-to="about">
          <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
          <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">A propos</span></a>
      </li>


      <li>
        <a class="menuitem group flex items-center py-3" href="#works" data-to="works">
          <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
          <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Expériences</span></a>
      </li>

      <!--
      <li>
        <a class="menuitem group flex items-center py-3" href="#projects" data-to="projects">
          <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
          <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projets personelles</span></a>
      </li>
      -->
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.active{
  .nav-indicator{
    width: 4rem;
    --tw-bg-opacity: 1;
    background-color: rgb(226 232 240 / var(--tw-bg-opacity));
  }
  .nav-text{
    --tw-text-opacity: 1;
    color: rgb(226 232 240 / var(--tw-text-opacity));
  }
}
</style>