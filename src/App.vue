<script setup lang="ts">
import { BImg } from 'bootstrap-vue-next'
import NavBar from './views/NavBar.vue'
import ProjectItem from './views/ProjectItem.vue'
import SocialButtons from './components/SocialButtons.vue'
import MyTextArea from './components/MyTextArea.vue'
import CutsomFooter from './components/Cutsom-Footer.vue'

const projects = [
  {
    title: 'API de Gerenciamento de Tarefas',
    description:
      'Sistema backend para organização de projetos com autenticação JWT e validação de dados completa.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    repositoryUrl: 'https://github.com/usuario/task-api',
    status: 'Em desenvolvimento',
  },
  {
    title: 'Práticas em IA',
    description:
      'Academic and personal experiments in Machine Learning: AutoDiff, Neural Networks, Clustering, and Data Analysis. (Jupyter/Colab Notebooks)',
    technologies: ['Python', 'Google Colab', 'Machine Learn', 'AI'],
    repositoryUrl: 'https://github.com/alekswheeler/ai-practices',
    status: 'Em desenvolvimento',
  },
  {
    title: 'cash-me',
    description:
      'Projeto nodejs backend para transferência de valores entre os usuários. É possível fazer login, fornecendo username e password e visualizar o seu próprio saldo.',
    technologies: ['PostgreSQL', 'Typescript', 'typeORM', 'docker'],
    repositoryUrl: 'https://github.com/alekswheeler/cash-me',
    status: 'Em desenvolvimento',
  },
]
</script>

<template>
  <body>
    <header>
      <NavBar />
      <div class="hero">
        <MyTextArea>
          <h3>👋 Olá! Sou Alex,</h3>
          <p>desenvolvedor apaixonado por transformar ideias em código limpo e funcional.</p>
          <p>
            💻 Trabalho com back-end utilizando Node.js, C# e Java, sempre focando em boas práticas,
            APIs bem definidas e código sustentável.
          </p>
          <p>
            🧠 Tenho interesse crescente por inteligência artificial e machine learning, áreas que
            venho estudando e explorando em projetos pessoais.
          </p>
          <p>
            🔧 Experiência prática com Windows Forms, integração via REST, Git, testes automatizados
            e metodologias ágeis.
          </p>
          <p>
            🎓 Estudante de Ciência da Computação na UFES, estou em constante evolução e pronto para
            encarar novos desafios. Confira meus projetos e sinta-se à vontade para entrar em
            contato!
          </p>
        </MyTextArea>
        <!-- <b-img class="img-hero" src="https://picsum.photos/300/150/?image=41"></b-img> -->
      </div>
    </header>
    <main>
      <article>
        <div>
          <div>
            <SocialButtons> </SocialButtons>
          </div>
          <section class="projects-section">
            <h2>Projetos</h2>

            <div class="projects-list">
              <ProjectItem
                v-for="project in projects"
                :key="project.title"
                :title="project.title"
                :description="project.description"
                :technologies="project.technologies"
                :repository-url="project.repositoryUrl"
                :status="project.status"
              />
            </div>
          </section>
        </div>
      </article>
    </main>
    <CutsomFooter />
  </body>
</template>

<style scoped>
@import url('./assets/main.css');
.hero {
  display: flex;
  justify-content: space-between;
}

.img-hero {
  display: flex;
  height: 100px;
  width: 200px;
}

h1,
h2,
h3 {
  font-weight: 600;
}

.projects-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.projects-list {
  margin-top: 2rem;
}
</style>
