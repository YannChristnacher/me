<script setup lang="ts">
import MyBlockContent from "~/components/MyBlockContent.vue";

interface IProps {
  begin: string,
  end: string,
  title: string,
  url?: string,
  content?: string
  tags: Array<string>
  sectionGroup: string
}

const props = defineProps<IProps>()
</script>

<template>
  <MyBlockContent :title="props.title" :url="props.url" :section-group="props.sectionGroup">
    <template #left>
      <div class="z-10 period">{{props.begin}} - {{props.end}}</div>
    </template>

    <template #right>
      <div class="resume">
        <slot>
          <p>{{props.content}}</p>
        </slot>

      </div>
      <div class="tags flex flex-wrap gap-3 mt-6">
        <div class="tag text-xs rounded bg-teal-400/10 text-teal-300" v-for="tag in props.tags" :key="props.title + '-' + tag">
          {{ tag }}
        </div>
      </div>
    </template>
  </MyBlockContent>

</template>

<style lang="scss">
  .period{
    width: 100%;
    color: var(--color-slate-500)
  }

  .tag{
    padding: 5px;
  }
</style>