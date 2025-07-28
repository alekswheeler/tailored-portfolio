<template>
  <div class="navbar-container">
    <b-nav class="minimal-nav">
      <b-nav-item class="nav-link-item">projetos</b-nav-item>
      <b-nav-item class="nav-link-item">blog</b-nav-item>
      <b-nav-item class="nav-link-item">contato</b-nav-item>
    </b-nav>
  </div>
</template>

<script setup lang="ts">
import { BNavItem, BNav } from 'bootstrap-vue-next'
</script>

<style scoped>
.navbar-container {
  justify-content: center;
  padding: 0.5rem 0;
  display: flex;
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.minimal-nav {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-link-item {
  position: relative;
  padding: 0.5rem 0;
  margin: 0;
  background: none !important;
  border: none !important;
}

.nav-link-item :deep(a),
.nav-link-item :deep(.nav-link) {
  text-decoration: none !important;
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding: 0.5rem 0 !important;
  border: none !important;
  background: transparent !important;
  transition: all 0.3s ease;
  position: relative;
  text-transform: lowercase;
}

.nav-link-item :deep(a:hover),
.nav-link-item :deep(.nav-link:hover) {
  color: #8b5cf6 !important;
  background: transparent !important;
}

/* Linha animada no hover */
.nav-link-item :deep(a::after),
.nav-link-item :deep(.nav-link::after) {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #8b5cf6;
  transition: width 0.3s ease;
}

.nav-link-item :deep(a:hover::after),
.nav-link-item :deep(.nav-link:hover::after) {
  width: 100%;
}

/* Remover estilos do Bootstrap */
.nav-link-item :deep(.nav-link.active) {
  background: transparent !important;
  border: none !important;
}

/* Responsivo */
@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem 0;
  }

  .minimal-nav {
    gap: 1.5rem;
  }

  .nav-link-item :deep(a),
  .nav-link-item :deep(.nav-link) {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .minimal-nav {
    gap: 1rem;
  }

  .nav-link-item :deep(a),
  .nav-link-item :deep(.nav-link) {
    font-size: 0.85rem;
  }
}

/* Tema escuro (opcional) */
@media (prefers-color-scheme: dark) {
  .navbar-container {
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }

  .nav-link-item :deep(a),
  .nav-link-item :deep(.nav-link) {
    color: rgba(53, 53, 53, 0.863) !important;
  }

  .nav-link-item :deep(a:hover),
  .nav-link-item :deep(.nav-link:hover) {
    color: #8b5cf6 !important;
  }

  .nav-link-item :deep(.nav-link.active) {
    color: #fff !important;
  }
}
</style>
