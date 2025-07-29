<script setup lang="ts">
import { BImg } from 'bootstrap-vue-next'
import NavBar from './views/NavBar.vue'
import ProjectItem from './views/ProjectItem.vue'
import SocialButtons from './components/SocialButtons.vue'
import MyTextArea from './components/MyTextArea.vue'
import CutsomFooter from './components/Cutsom-Footer.vue'

const projects = [
  {
    title: 'Práticas em IA',
    description:
      'Academic and personal experiments in Machine Learning: AutoDiff, Neural Networks, Clustering, and Data Analysis. (Jupyter/Colab Notebooks)',
    technologies: ['Python', 'Google Colab', 'Machine Learn', 'AI'],
    repositoryUrl: 'https://github.com/alekswheeler/ai-practices',
  },
  {
    title: 'Simulador de Shell com Gerenciamento de Sinais, Processos e Zombies em C',
    description:
      'Simulador de terminal interativo (shell) desenvolvido em C, o Vaccine Shel (vsh) introduz o conceito de processos imunes a sinais (SIGUSR1, SIGUSR2) e gerencia execução em foreground e background, com tratamento de zombies, grupos de processos e comandos especiais. O shell implementa comportamento avançado de sinais, imitando características reais de sistemas operacionais.',
    technologies: ['C', 'Sistemas Operacionais', 'sinais POSIX', 'fork/exec', 'processos UNIX'],
    repositoryUrl: 'https://github.com/alekswheeler/Trabalho-de-Sistemas-Operacionais',
  },
  {
    title: 'Detectando Conflitos em Transações SQL com DFS',
    description:
      'Projeto acadêmico focado na verificação de serializabilidade de transações no banco de dados, utilizando PostgreSQL e algoritmos de grafos. O sistema constrói dinamicamente um grafo de precedência entre transações e detecta ciclos com busca em profundidade (DFS), determinando se o escalonamento é seguro. A execução é automatizada com scripts e testes em container Docker.',
    technologies: ['PL/pgSQL', 'SQL Avançado', 'Docker', 'Makefile'],
    repositoryUrl: 'https://github.com/alekswheeler/transactions-sql',
  },
  {
    title: 'Doar computadores',
    description:
      'Criar uma API para doação de computadores e aparelhos eletrônicos utilizando NodeJS. A APi fornece os serviços de registrar a doação e guardar esses dados',
    technologies: ['Node.js', 'Express', 'Typescript'],
    repositoryUrl: 'https://github.com/alekswheeler/doar-computadores',
  },
  {
    title: 'cash-me',
    description:
      'Projeto nodejs backend para transferência de valores entre os usuários. É possível fazer login, fornecendo username e password e visualizar o seu próprio saldo.',
    technologies: ['PostgreSQL', 'Typescript', 'typeORM', 'docker'],
    repositoryUrl: 'https://github.com/alekswheeler/cash-me',
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

            <div id="projects" class="projects-list">
              <ProjectItem
                v-for="project in projects"
                :key="project.title"
                :title="project.title"
                :description="project.description"
                :technologies="project.technologies"
                :repository-url="project.repositoryUrl"
              />
            </div>
          </section>
        </div>
      </article>
      <MyTextArea>
        <h4>🚀 Gostou de algum projeto ou quer saber mais?</h4>

        <p>Estou aberto a conversas, oportunidades e feedbacks. É só entrar em contato :)</p>
        <a href="mailto:aleks.vix@outlook.com" class="simple-button"> Entre em contato </a>
      </MyTextArea>
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
  font-weight: 500;
}

.projects-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.projects-list {
  margin-top: 2rem;
}

.simple-button {
  display: inline-block;
  color: #666;
  text-decoration: none !important;
  font-size: 0.9rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  transition: all 0.3s ease;
  background: transparent !important;
}

.simple-button:hover {
  color: #8b5cf6 !important;
  border-color: #8b5cf6 !important;
}
</style>
