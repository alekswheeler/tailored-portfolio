<!-- components/MyTextArea.vue -->

<template>
  <div class="text-area">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// Sem props - usa apenas slots
</script>

<style scoped>
.text-area {
  padding: 1.5rem;
  line-height: 1.7;
  color: var(--color-text, #374151);
  background: var(--color-background-soft, #f9fafb);
  border-radius: 0.5rem;
  border: 1px solid var(--color-border, #e5e7eb);
  max-width: 100%;
  margin: 1rem 0;
}

/* Estilos para elementos dentro do bloco */
.text-area :deep(p) {
  margin: 0 0 1rem 0;
}

.text-area :deep(p:last-child) {
  margin-bottom: 0;
}

.text-area :deep(strong) {
  font-weight: 600;
  color: var(--color-heading, #1f2937);
}

.text-area :deep(em) {
  font-style: italic;
}

.text-area :deep(a) {
  color: var(--color-heading, #1f2937);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
}

.text-area :deep(a:hover) {
  opacity: 0.7;
}

.text-area :deep(ul) {
  margin: 0 0 1rem 0;
  padding-left: 1.25rem;
}

.text-area :deep(li) {
  margin-bottom: 0.25rem;
}

/* Responsivo */
@media (max-width: 640px) {
  .text-area {
    padding: 1rem;
    margin: 0.75rem 0;
  }
}
</style>
