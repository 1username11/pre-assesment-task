<template>
  <div class="flex flex-wrap gap-2 items-center">
    <div v-for="(item, index) in items" :key="index" class="flex items-center">
      <span>{{ item }}</span>
      <template v-if="index < items.length - 1">
        <span class="mx-1">•</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  row: IRow
}>()

const items = computed(() =>
  Object.entries(props.row)
    .reduce((acc, [key, value]) => {
      if (value) {
        acc.push(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      }
      return acc
    }, [] as string[])
)
</script>
