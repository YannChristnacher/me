<script setup lang="ts">
interface IProps {
  group_tailwind: string
  id:string,
  title: string
}
const props = defineProps<IProps>()
const group = {
  about: "group/about",
  works: "group/works",
  projects: "group/projects"
}
const getClass = () => {}
</script>

<template>
  <section :id="props.id" :class="group[props.group_tailwind]">
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{{props.title}}</h2>
    </div>
    <slot/>
  </section>
</template>

<style scoped>

</style>