<template>
  <div class="navbar-container">
    <b-nav class="minimal-nav">
      <div class="nav-links">
        <b-nav-item href="#projects" class="nav-link-item">projetos</b-nav-item>
        <b-nav-item href="https://dev.to/alekswheeler" target="_blank" class="nav-link-item">
          blog
        </b-nav-item>
      </div>
      <a href="mailto:aleks.vix@outlook.com" class="contact-button"> Enviar mensagem </a>
    </b-nav>
  </div>
</template>

<script setup lang="ts">
import { BNavItem, BNav } from 'bootstrap-vue-next'
</script>

<style scoped>
.navbar-container {
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.minimal-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  list-style: none;
  margin: 0;
  padding: 0 2rem;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
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
  color: #666 !important;
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
  color: #333 !important;
  background: transparent !important;
  border: none !important;
}

/* Botão de contato destacado */
.contact-button {
  color: #8b5cf6 !important;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border: 1px solid #8b5cf6;
  border-radius: 6px;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
  background: transparent;
}

.contact-button:hover {
  background-color: #8b5cf6;
  color: white !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
}

.contact-button:active {
  transform: translateY(0);
}

/* Responsivo */
@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem 0;
  }

  .minimal-nav {
    padding: 0 1rem;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .nav-link-item :deep(a),
  .nav-link-item :deep(.nav-link) {
    font-size: 0.9rem;
  }

  .contact-button {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .nav-links {
    gap: 1rem;
  }

  .nav-link-item :deep(a),
  .nav-link-item :deep(.nav-link) {
    font-size: 0.85rem;
  }

  .contact-button {
    font-size: 0.8rem;
    padding: 0.45rem 0.8rem;
  }
}

/* Tema escuro (opcional) */
@media (prefers-color-scheme: dark) {
  .navbar-container {
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }

  .nav-link-item :deep(a),
  .nav-link-item :deep(.nav-link) {
    color: #aaa !important;
  }

  .nav-link-item :deep(a:hover),
  .nav-link-item :deep(.nav-link:hover) {
    color: #8b5cf6 !important;
  }

  .nav-link-item :deep(.nav-link.active) {
    color: #fff !important;
  }

  .contact-button {
    color: #8b5cf6 !important;
    border-color: #8b5cf6;
  }

  .contact-button:hover {
    background-color: #8b5cf6;
    color: white !important;
  }
}
</style>
