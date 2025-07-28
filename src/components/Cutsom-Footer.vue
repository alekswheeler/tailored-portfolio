<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">
        Feito com
        <span class="heart" aria-label="amor">💜</span>
        e Vue
      </p>
      <p class="footer-author">Aleks Wheeler</p>
      <a href="#" class="source-link" target="_blank" rel="noopener noreferrer"> Source code </a>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background: transparent;
  padding: 2rem 1rem;
  margin-top: auto;
}

.footer-content {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-text {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.heart {
  animation: pulse 2s ease-in-out infinite;
  display: inline-block;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.footer-author {
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
}

.source-link {
  color: #666;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;
  display: inline-block;
  margin-top: 0.25rem;
}

.source-link:hover {
  color: #8b5cf6;
}

/* Responsivo */
@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .source-link {
    margin-top: 0;
  }
}

/* Tema escuro (opcional) */
@media (prefers-color-scheme: dark) {
  .footer {
    border-top-color: rgba(255, 255, 255, 0.1);
  }

  .footer-text {
    color: #aaa;
  }

  .footer-author {
    color: #fff;
  }

  .source-link {
    color: #aaa;
  }

  .source-link:hover {
    color: #8b5cf6;
  }
}
</style>
