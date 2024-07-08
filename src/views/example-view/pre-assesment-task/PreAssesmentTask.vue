<template>
  <div class="p-6 space-y-4">
    <template v-for="(row, index) in rows" :key="index">
      <DynamicSeparatorRow :row="row" />

      <div class="w-full h-1 bg-gray-200" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { rows } from './mock-data'
</script>
