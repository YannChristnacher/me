<script setup lang="ts">
interface IProps {
  title: string,
  url?: string,
  sectionGroup: string
}

const props = defineProps<IProps>()
const group = {
  about: "lg:group-hover/about:opacity-50",
  works: "lg:group-hover/works:opacity-50",
  projects: "lg:group-hover/projects:opacity-50",
}
</script>

<template>
  <a v-if="url" :class="group[props.sectionGroup]" class=" group block relative transition-all lg:hover:!opacity-100" :href="props.url">

    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
    <div class=" z-10 grid sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div class="z-10 lg:col-span-2 lg:mb-0 mb-2">
        <slot name="left"></slot>
      </div>
      <div class="z-10 sm:col-span-6">
        <div class="title flex items-center mb-3">
          <h3 class=" text-slate-200 group-hover:text-teal-300! ">{{props.title}}</h3>
          <Icon class="text-slate-200 group-hover:text-teal-300 ml-auto rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1" name="line-md:arrow-up" size="15" />
        </div>
        <slot name="right"></slot>

      </div>
    </div>
  </a>

  <div v-else :class="group[props.sectionGroup]" class=" group block relative transition-all lg:hover:!opacity-100" :href="props.url">

    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
    <div class=" z-10 grid sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div class="z-10 lg:col-span-2 lg:mb-0 mb-2">
        <slot name="left"></slot>
      </div>
      <div class="z-10 sm:col-span-6">
        <div class="title flex items-center mb-3">
          <h3 class=" text-slate-200 group-hover:text-teal-300! ">{{props.title}}</h3>
        </div>
        <slot name="right"></slot>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>