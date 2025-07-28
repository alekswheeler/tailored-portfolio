<!-- components/ProjectItem.vue -->

<template>
  <article class="project-item">
    <!-- Título e Status -->
    <div class="project-header">
      <h3 class="project-title">{{ props.title }}</h3>
      <span class="project-status" :class="getStatusColor(props.status)">
        {{ props.status }}
      </span>
    </div>

    <!-- Descrição -->
    <p class="project-description">
      {{ props.description }}
    </p>

    <!-- Tecnologias -->
    <div class="project-tech">
      <span class="tech-label">Stack:</span>
      <span class="tech-list">
        {{ props.technologies.join(' • ') }}
      </span>
    </div>

    <!-- Link do repositório -->
    <div class="project-link">
      <a :href="props.repositoryUrl" target="_blank" rel="noopener noreferrer" class="repo-link">
        Ver código →
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  technologies: string[]
  repositoryUrl: string
  status?: string
}

const props = withDefaults(defineProps<Props>(), {
  status: 'Concluído',
})

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Em desenvolvimento':
      return 'text-blue-600'
    case 'Concluído':
      return 'text-green-600'
    case 'Pausado':
      return 'text-gray-500'
    default:
      return 'text-gray-600'
  }
}
</script>

<style scoped>
.project-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border, #e5e7eb);
}

.project-item:last-child {
  border-bottom: none;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-heading, #1f2937);
  margin: 0;
}

.project-status {
  font-size: 0.875rem;
  font-weight: 500;
}

.project-description {
  color: var(--color-text, #6b7280);
  line-height: 1.6;
  margin: 0.5rem 0 1rem 0;
}

.project-tech {
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.tech-label {
  color: var(--color-heading, #1f2937);
  font-weight: 500;
  margin-right: 0.5rem;
}

.tech-list {
  color: var(--color-text, #6b7280);
}

.project-link {
  margin-top: 0.75rem;
}

.repo-link {
  color: var(--color-heading, #1f2937);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: opacity 0.2s ease;
}

.repo-link:hover {
  opacity: 0.9;
  color: #8b5cf6;
}

/* Responsivo */
@media (max-width: 640px) {
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .project-item {
    padding: 1rem 0;
  }
}
</style>
