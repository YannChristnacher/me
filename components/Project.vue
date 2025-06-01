<script setup lang="ts">
import MyBlockContent from "~/components/MyBlockContent.vue";

interface IProps {
  imgPath: string
  title: string,
  url: string,
  content: string
  tags: Array<string>
  sectionGroup: string
}

const props = defineProps<IProps>()
</script>

<template>
  <MyBlockContent :title="props.title" :url="props.url" :section-group="props.sectionGroup">
    <template #left>
      <div class="z-10 img">
        <img :src="props.imgPath"/>
      </div>
    </template>

    <template #right>
      <div class="resume">
        <p>{{props.content}}</p>
      </div>
      <div class="tags flex gap-3 mt-3">
        <div class="tag text-xs rounded bg-teal-400/10 text-teal-300" v-for="tag in props.tags" :key="props.title + '-' + tag">
          {{ tag }}
        </div>
      </div>
    </template>
  </MyBlockContent>
</template>

<style scoped>

</style>