<template>
  <body>
    <header>
      <NavBar />
    </header>
    <main>
      <div class="timeline-container">
        <h2 class="timeline-title">
          Experiência Profissional
        </h2>

        <div class="timeline">
          <div class="timeline-line"></div>

          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="timeline-item"
          >
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="empresa">{{ exp.empresa }}</h3>
                <span class="periodo">{{
                  exp.periodo
                }}</span>
              </div>

              <h4 class="cargo">{{ exp.cargo }}</h4>

              <p class="descricao">{{ exp.descricao }}</p>

              <div class="competencias">
                <span class="competencias-label"
                  >Competências:</span
                >
                <div class="competencias-list">
                  <span
                    v-for="(comp, idx) in exp.competencias"
                    :key="idx"
                    class="competencia-tag"
                  >
                    {{ comp }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <CustomFooter />
  </body>
</template>

<script setup lang="ts">
import CustomFooter from '../components/Custom-Footer.vue'
import NavBar from '../components/NavBar.vue'
import { ref } from 'vue'

const experiences = ref([
  {
    empresa: 'NEO',
    periodo: 'Jan 2025 - Presente',
    cargo: 'Estagiário em Desenvolvimento C#',
    descricao: `Atuei como Estagiário em Desenvolvimento C#, utilizando principalmente C# (.NET Core), o toolkit proprietário da empresa e a API do Preactor (Siemens APS) para sistemas APS (Advanced Planning and Scheduling).
     Desenvolvia features específicas para adaptar os sistemas à lógica produtiva de diferentes clientes, colaborando em projetos de consultoria e implementação em equipes multidisciplinares.
     Contribuí para a evolução do toolkit interno, implementando novas funcionalidades e criando documentações técnicas com quizzes e desafios para facilitar o aprendizado dos colegas.
     Como resultado, aprofundei meus conhecimentos em Planejamento e Controle da Produção (PCP) e fortalecei minhas habilidades de comunicação e trabalho colaborativo em ambientes dinâmicos.`,
    competencias: [
      'C#',
      'Sistemas APS',
      'Toolkit Proprietário',
      'API do Preactor',
      'PCP',
      'Documentação Técnica',
    ],
  },

  {
    empresa: 'Tecmaran',
    periodo: 'Jan 2024 - Dez 2024',
    cargo: 'Estagiário em Desenvolvimento C#',
    descricao: `Atuei como Estagiário em Desenvolvimento C# (.NET Core), com uso intensivo de C#, Visual Basic e Transact-SQL no Microsoft SQL Server.
      Desenvolvendo funcionalidades específicas para adaptar os sistemas à lógica produtiva de diferentes clientes.
      Trabalhei na manutenção, migração de versões e integração de sistemas via APIs do Preactor (Siemens APS).
      No projeto de migração do sistema APS de um cliente, adaptei procedures e lógica de cálculo em SQL para novas versões,
      garantindo uma transição sem impacto na operação da fábrica. Com treinamentos internos, elevei meu domínio em SQL para um nível avançado e aprofundei meu entendimento sobre processos produtivos e Planejamento e Controle da Produção (PCP).`,
    competencias: [
      'C#',
      'Visual Basic',
      'Microsoft SQL Server',
      'Transact-SQL',
      'Procedures e Cursores',
      'Integração de Dados',
      'PCP',
      'SQL Avançado',
      'Processos Produtivos',
      'API do Preactor',
      'Sistemas APS',
    ],
  },

  {
    empresa: 'Laboratório de Engenharia de Software',
    periodo: 'Mar 2024 - Jun 2025',
    cargo: 'Desenvolvedor Full Stack (Voluntário)',
    descricao: `Atuei como bolsista desenvolvedor full stack no projeto Marvin, usando tecnologias Java, Jakarta EE (JSF, JPA, EJB) e PrimeFaces. Projetei e desenvolvi entidades, camada de controle, camada de serviço e camada de dados para o sistema.
      Fui fundamental na conclusão do MVP, identificando e corrigindo inconsistências entre documentação e implementação, além de implementar funcionalidades essenciais,
      como geração de relatórios em PDF. Essa contribuição foi decisiva para o lançamento do MVP. A experiência ampliou meu domínio em frameworks corporativos,
      arquitetura em camadas e trabalho colaborativo em equipes técnicas.`,
    competencias: [
      'Jakarta EE',
      'Java',
      'JSF (JavaServer Faces)',
      'JPA (Java Persistence API)',
      'EJB (Enterprise JavaBeans)',
      'PrimeFaces',
      'Desenvolvimento Full Stack',
    ],
  },

  {
    empresa: 'CT JUNIOR - Empresa Júnior',
    periodo: 'Jan 2023 - Dez 2023',
    cargo: 'Diretor de Projetos',
    descricao: `Como diretor de projetos, liderei o gerenciamento de projetos e a avaliação de viabilidade técnica e estratégica das propostas, sempre alinhando as decisões à visão administrativa da empresa. Estruturei estratégias para os times e promovi o desenvolvimento constante dos membros, fomentando a troca de conhecimento e a cultura de melhoria contínua.
Como resultado, houve um aumento do ticket médio dos serviços — ao reposicionar a área com projetos de maior complexidade técnica — e a padronização de processos, como code reviews automatizados e práticas de metodologia ágil no dia a dia dos times.
Aprimorei habilidades como liderança, resiliência e comunicação estratégica, essenciais para conduzir pessoas e projetos com foco em impacto e crescimento.`,
    competencias: [
      'Nodejs',
      'AWS (DynamoDB, Lambda Functions, CloudFront, S3)',
      'Gestão estratégica',
    ],
  },
  {
    empresa: 'CT JUNIOR - Empresa Júnior',
    periodo: 'Jan 2022 - Dez 2022',
    cargo: 'Consultor',
    descricao: `Atuei como Consultor de Projetos na CT Júnior, criando sites institucionais, e-commerces e landing pages em WordPress, negociando diretamente com clientes sobre escopo e entregas. Em um projeto pioneiro, utilizei uma stack inédita na empresa (Node.js e AWS), estabelecendo padrões técnicos que serviram de base para uma nova linha de serviços. Essa experiência fortaleceu minha capacidade de adaptação, comunicação e protagonismo em ambientes de inovação.`,
    competencias: [
      'HTML',
      'CSS',
      'AWS (DynamoDB, Lambda Functions, CloudFront, S3)',
      'JavaScript',
      'TypeScript',
      'Nodejs',
    ],
  },
])
</script>

<style scoped>
@import url('../assets/main.css');

.timeline-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.timeline-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #333;
  font-weight: 600;
}

.timeline {
  position: relative;
  padding: 0 2rem;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #8b5cf6, #a78bfa);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
}

.timeline-bullet {
  position: absolute;
  width: 16px;
  height: 16px;
  background: #8b5cf6;
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #8b5cf6;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-item.left .timeline-bullet {
  right: -10px;
}

.timeline-item.right .timeline-bullet {
  left: -10px;
}

.timeline-content {
  background: #fff;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  position: relative;
}

.timeline-content:hover {
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15);
  transform: translateY(-2px);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.empresa {
  font-size: 1.25rem;
  font-weight: 600;
  color: #8b5cf6;
  margin: 0;
}

.periodo {
  font-size: 0.9rem;
  color: #666;
  background: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 500;
}

.cargo {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin: 0 0 1rem 0;
}

.descricao {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
}

.competencias {
  margin-top: 1rem;
}

.competencias-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 0.5rem;
}

.competencias-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.competencia-tag {
  font-size: 0.8rem;
  background: #f0f0ff;
  color: #8b5cf6;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  border: 1px solid #e0e7ff;
  font-weight: 500;
}

/* Responsivo */
@media (max-width: 768px) {
  .timeline {
    padding: 0 1rem;
  }

  .timeline-item {
    padding: 0 1rem;
  }

  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .timeline-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .timeline-container {
    padding: 1rem 0.5rem;
  }

  .timeline-item {
    padding: 0 0.5rem;
  }

  .timeline-content {
    padding: 1.5rem 1rem;
    min-height: 180px;
  }

  .empresa {
    font-size: 1.1rem;
  }
}

/* Tema escuro (opcional) */
@media (prefers-color-scheme: dark) {
  .timeline-content {
    background: #1f2937;
    border-color: #374151;
  }

  .timeline-title {
    color: #fff;
  }

  .cargo {
    color: #e5e7eb;
  }

  .descricao {
    color: #d1d5db;
  }

  .competencias-label {
    color: #e5e7eb;
  }

  .periodo {
    background: #374151;
    color: #d1d5db;
  }
}
</style>
