<script setup lang="ts">
import { computed } from 'vue'
import { dateOffset } from './dateOffset'

const props = defineProps<{
  /** Base date in YYYY-MM-DD format */
  d: string
  /** Format string: Y=year, M=month, D=day, W=曜日, m=M/D short */
  f?: string
}>()

const DAYS = ['日', '月', '火', '水', '木', '金', '土']

const shifted = computed(() => {
  const base = new Date(props.d + 'T00:00:00')
  base.setDate(base.getDate() + dateOffset.value)
  return base
})

const text = computed(() => {
  const dt = shifted.value
  const y = dt.getFullYear()
  const m = dt.getMonth() + 1
  const d = dt.getDate()
  const w = DAYS[dt.getDay()]

  const fmt = props.f ?? 'M月D日（W）'
  return fmt
    .replace('Y', String(y))
    .replace('M', String(m))
    .replace('D', String(d))
    .replace('W', w)
})
</script>

<template>{{ text }}</template>
