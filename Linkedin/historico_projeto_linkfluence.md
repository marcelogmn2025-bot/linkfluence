# Plataforma "Linkfluence" - Construção da Reunião Inicial

**Data da reunião/chat:** 25 e 26 de Fevereiro de 2026.
**Objetivo:** Replicar as funcionalidades de criação de conteúdo por IA (Content DNA) e de Employee Advocacy inspiradas na ferramenta global "Supergrow.ai" para o mercado brasileiro de SaaS.

## 1. Descoberta e Inspiração
O usuário solicitou uma análise do site "Supergrow.ai" com o intuito de replicar o sucesso deles no mercado do Brasil.

O Supergrow.ai trabalha com os seguintes pilares:
- **Criação de Conteúdo por IA (Content DNA):** Captura a voz do autor (por escrito, transcrições ou posts antigos) e usa modelos LLM para gerar posts de LinkedIn orgânicos e formatados sem a aparência de "robô".
- **Engajamento Facilitado:** Sistema para criar listas de interações e usar a IA para criar respostas inteligentes diretamente no LinkedIn.
- **Agendamento (Scheduling):** Sistema clássico de fila e horários.
- **Employee Advocacy (Times Corporativos):** O foco enterprise onde uma empresa adiciona 10 executivos, e o time de marketing cria conteúdo centralizado para os 10, aguardando que eles aprovarem do celular as publicações nos perfis individuais.

A pesquisa do modelo no Brasil constatou que:
- O Brasil utiliza poucas soluções parecidas e nativas focadas puramente na junção de IA Autêntica de voz + Time. 
- Ferramentas como Comunitive dominam o mercado de Employee Advocacy tradicional (sem foco no gerador de posts com IA avançada, apenas recompensas por compartilhar posts).
- O mercado B2B brasileiro está extremamente preparado para pagar por este "Aumento de Influência" de diretores e C-levels.

## 2. Visão do MVP (Linkfluence)
O projeto ganhou o codinome de **"Linkfluence"** e nós começamos o desenvolvimento de um escopo Minimum Viable Product:
- Construção base feita em `Next.js App Router (TypeScript)`.
- Uso de `Supabase` para Autenticação SSR (Server-Side Rendering) e Banco de Dados em Nuvem Seguro (PostgreSQL).
- Criação de uma UI base com Glassmorphism Moderno (Escuro, responsivo, com gradientes complexos sem Tailwind).
- Dashboard inicial com: Barra lateral funcional, formulário de Input de "Content DNA" para prompt engineering e quadro de Aprovações Rápidas de posts para simular o caso de uso colaborativo entre Gerente de Marketing e Chefia.

## 3. Marcos do Desenvolvimento Concluídos na Sessão
- **01:** Inicialização Automática do Boilerplate via CLI (`npx create-next-app`).
- **02:** Implementação Total de Sistema de UI Estilizado (`app/globals.css`, `app/layout.tsx`. Layout de tela premium concluído em `page.tsx`).
- **03:** Integração Supabase Client (Pacote `@supabase/ssr` e `@supabase/supabase-js`).
- **04:** Refatoração de Middleware de Proteção de Rotas em Next.js (Sistema agora exige autenticação para acessar a tela inicial).
- **05:** Construção de Tela de Cadastro e Login interativa comunicando diretamente via SSR Client com a API do Supabase Auth.

## 4. Próximos Passos Estipulados
1.  **Configuração do Backend:** O Usuário precisa inserir as Chaves Anônimas e a URL da API do projeto no arquivo `.env.local` na pasta `linkfluence-saas`. Recomenda-se desativar confirmação dupla de e-mail no painel Auth do Supabase provisoriamente para acelerar testes diários.
2.  **Integração IA (Prompting "Caminho B"):** Ligar o Frontend de "Gerar Post" às chamadas de API do modelo de "Voz de Usuário" (Google Gemini Models, provavelmente via SDK ou API remota para gerar o texto do LinkedIn no backend de forma serverless e exibir para o usuário no frontend).
3.  **Banco de Dados (Tabelas):** Modelar colunas no Supabase DB para guardar a "Voz/Configurações" do usuário e a fila de agendamentos.
