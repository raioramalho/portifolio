'use client';
// Componentes dinâmicos
import Image from "next/image";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import CertificationCard from "./components/cert-card";
import { Linkedin, Github, Mail } from 'lucide-react';

// Dados dinâmicos (dentro de um arquivo, você pode importar ou manter em uma variável)
const dados = {
  nome: "Alan Ramalho",
  descricao: "Transformando desafios técnicos em soluções escaláveis, eficientes e inovadoras",
  sobreMim: {
    objetivo: "Busco evoluir como de Arquiteto de Soluções, aplicando meu conhecimento técnico na definição de estratégias de infraestrutura e arquitetura de software. Estou comprometido em otimizar custos e promover inovação nos projetos, sempre alinhado a requisitos de desempenho e segurança. Meu foco em automação e em melhores práticas de desenvolvimento contribui diretamente para resultados consistentes e de alta qualidade em projetos de grande porte.",
    experiencia: "Sou o Alan — desenvolvedor e profissional de DevOps apaixonado por criar soluções escaláveis, eficientes e modernas. Tenho experiência sólida com Linux, Git, CI/CD, NestJS e Kubernetes, sempre buscando aplicar automação e boas práticas para entregar resultados robustos. Meu objetivo é atuar como Arquiteto de Soluções, unindo visão técnica com foco em inovação e economia. Fora da tecnologia, gosto de correr para clarear a mente e criar música como forma de expressão. Acredito no equilíbrio entre lógica e criatividade, tanto no código quanto na vida.",
  },
  competencias: {
    linguagens: ['NestJS', 'Next.js', 'Java', 'TypeScript', 'JavaScript', 'Python', 'Shell Script'],
    devOps: ['GitHub Actions', 'Terraform', 'GitLab CI', 'Kubernetes & Docker', 'Grafana', 'Prometheus', 'Linux', 'Nginx'],
    cloud: ['AWS', 'Oracle Cloud', 'Azure', 'GCP', 'Cloudflare', 'VMware'],
    dados: ['PostgreSQL', 'Mysql', 'OracleDB', 'Redis', 'MongoDB', 'ElasticSearch', 'Kafka', 'Redis Pub/Sub']
  },
  certificacoes: [
    { nome: "AWS Solutions Architect - Associate (em breve)", descricao: "Projetar soluções distribuídas e resilientes na AWS", imagem: "https://bucket.raiosystems.tech/aws-ssa.png" },
    { nome: "AZ-900 (em breve)", descricao: "Conceitos básicos de cloud e serviços da Microsoft Azure", imagem: "https://bucket.raiosystems.tech/az-900.png" },
    { nome: "TOGAF® 9 Foundation (em breve)", descricao: "Certificação que valida o conhecimento dos fundamentos do TOGAF 9, focando em arquitetura corporativa, seus princípios, estrutura e métodos.", imagem: "https://bucket.raiosystems.tech/togaf-9-f.png" },
    { nome: "AWS Cloud Quest: Cloud Practitioner", descricao: "Fundamentos de serviços AWS com foco prático e gamificado", imagem: "https://bucket.raiosystems.tech/cloudquest.png" },
    { nome: "OCI Foundations 2025 Certified", descricao: "Fundamentos da Oracle Cloud, com foco em infraestrutura e serviços principais", imagem: "https://bucket.raiosystems.tech/oci.png" },
    { nome: "AWS Architecting & Serverless (Knowledge)", descricao: "Conhecimentos essenciais para arquiteturas escaláveis na AWS", imagem: "https://bucket.raiosystems.tech/know-arch.png" },
    { nome: "Introduction to Kubernetes (LFS158)", descricao: "Conceitos fundamentais e operação básica de clusters Kubernetes", imagem: "https://bucket.raiosystems.tech/lfs158.png" },
    { nome: "GitOps Fundamentals (LFS169)", descricao: "Aplicação de práticas GitOps em ambientes Kubernetes", imagem: "https://bucket.raiosystems.tech/lfs169.png" },
    { nome: "Cloud Infrastructure (LFS151)", descricao: "Introdução à infraestrutura de nuvem e serviços nativos", imagem: "https://bucket.raiosystems.tech/lfs151.png" },
    // { nome: "Linux Fundamentals (LFS101)", descricao: "Comandos, permissões e estrutura de diretórios Linux",  imagem: "https://bucket.raiosystems.tech/lfs101.png" },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/alan-silva-ramalho/",
    github: "https://github.com/raioramalho",
    email: "mailto:ramalho.sit@hotmail.com"
  }
};

const SectionTitle = ({ title }: any) => (
  <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
);

const CompetenciesCard = ({ title, list }: any) => (
  <div className="p-6 border border-gray-200 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <h3 className="text-xl font-semibold text-teal-600 mb-3">{title}</h3>
    <ul className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {list.map((item: string, index: Key) => (
        <li key={index}>- {item}</li>
      ))}
    </ul>
  </div>
);


const SoftSkillsCard = ({ title, skills }: any) => (
  <div className="p-6 border border-gray-200 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
    <h3 className="text-xl font-semibold text-teal-600 mb-3">{title}</h3>
    <ul className="text-gray-700">
      {skills.map((skill: string, index: Key) => (
        <li key={index}>- {skill}</li>
      ))}
    </ul>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{dados.nome}</h1>
        <p className="text-lg md:text-xl">{dados.descricao}</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 grid gap-10">
        {/* Objetivos */}
        <section className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
          <SectionTitle title="Objetivos Profissionais" />
          <p className="text-gray-700 text-lg leading-relaxed">
            {dados.sobreMim.objetivo}
          </p>
        </section>

        {/* Sobre Mim */}
        <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl transition">
          <div className="flex-shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-teal-500 relative">
              <Image
                src="https://avatars.githubusercontent.com/u/13089323?v=4"
                alt="Foto de perfil do Alan"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quem Sou</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {dados.sobreMim.experiencia}
            </p>
          </div>
        </div>

        {/* Certificações */}
        <section className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
          <SectionTitle title="Certificações" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {dados.certificacoes.map((cert, index) => (
              <CertificationCard title={cert.nome} imagem={cert.imagem} description={cert.descricao} key={index} />
            ))}
          </div>
        </section>

        {/* Competências Técnicas */}
        <section className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
          <SectionTitle title="Competências Técnicas" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CompetenciesCard
              title="Linguagens & Frameworks"
              list={dados.competencias.linguagens}
            />
            <CompetenciesCard
              title="DevOps & Infraestrutura"
              list={dados.competencias.devOps}
            />
            <CompetenciesCard
              title="Cloud & Redes"
              list={dados.competencias.cloud}
            />
            <CompetenciesCard
              title="Dados & Mensageria"
              list={dados.competencias.dados}
            />
          </div>
        </section>

        {/* Competencias  sociais */}
        <section className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
          <SectionTitle title="Competências Sociais" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <SoftSkillsCard
              title="Competências Interpessoais"
              skills={["Trabalho em equipe", "Empatia", "Resolução de conflitos", "Negociação"]}
            />
            <SoftSkillsCard
              title="Gestão de Tempo"
              skills={["Organização"]}
            />
            <SoftSkillsCard
              title="Liderança"
              skills={["Gestão de equipes", "Mentoria", "Visão estratégica"]}
            />
          </div>
        </section>

        {/* Contato */}
        <section className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition" id="contato">
          <SectionTitle title="Contato" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href={dados.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-blue-100"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-lg font-medium">LinkedIn</span>
            </a>
            <a
              href={dados.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Github className="w-5 h-5" />
              <span className="text-lg font-medium">GitHub</span>
            </a>
            <a
              href={`mailto:${dados.links.email}`}
              className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-gray-600 hover:text-red-600 hover:bg-red-100"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg font-medium">Email</span>
            </a>
          </div>

        </section>
      </main>
    </div>
  );
}
