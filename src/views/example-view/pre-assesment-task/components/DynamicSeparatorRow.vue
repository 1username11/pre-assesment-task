<template>
  <div class="flex flex-wrap py-2">
    <span
      v-for="([key, value], index) in Object.entries(row)" :key="index"
    >
      <span class="capitalize">{{ key }} : {{ value }}</span>

      <slot v-if="Object.values(row)[index + 1]">
        <span class="mx-1">•</span>
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  row: TRow
}>()
</script>
