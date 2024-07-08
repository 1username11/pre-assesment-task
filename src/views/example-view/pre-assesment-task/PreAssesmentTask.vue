<template>
  <div class="p-6 divide-y-2">
    <template v-for="(row, index) in rows" :key="index">
      <DynamicSeparatorRow :row="row" />
      <DynamicSeparatorRow :row="row"> - </DynamicSeparatorRow>
    </template>
  </div>
</template>

<script setup lang="ts">
import { rows } from './mock-data'
</script>
