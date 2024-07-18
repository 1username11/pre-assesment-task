<template>
  <div class="p-6 divide-y-2">
    <DynamicSeparatorRow
      v-for="(row, index) in rows"
      :key="index"
      :row="row"
    />
  </div>
</template>

<script setup lang="ts">
import { rows } from './mock-data'
</script>
