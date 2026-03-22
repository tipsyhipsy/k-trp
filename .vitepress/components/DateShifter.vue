<script setup lang="ts">
import { dateOffset } from './dateOffset'
</script>

<template>
  <div class="date-shifter">
    <button @click="dateOffset--">◀ 1日前へ</button>
    <span class="offset-label">
      {{ dateOffset === 0 ? 'デフォルト日程' : `${dateOffset > 0 ? '+' : ''}${dateOffset}日` }}
    </span>
    <button @click="dateOffset++">1日後へ ▶</button>
    <button v-if="dateOffset !== 0" class="reset" @click="dateOffset = 0">リセット</button>
  </div>
</template>

<style scoped>
.date-shifter {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 12px 16px;
  margin: 16px 0;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.date-shifter button {
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
}
.date-shifter button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.date-shifter .reset {
  border-color: var(--vp-c-danger-1);
  color: var(--vp-c-danger-1);
}
.date-shifter .reset:hover {
  background: var(--vp-c-danger-soft);
}
.offset-label {
  font-weight: 600;
  min-width: 100px;
  text-align: center;
}
</style>
