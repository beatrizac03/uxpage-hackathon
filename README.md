# UX Page - SouJunior

Landing page desenvolvida para o Hackathon da SouJunior, com o objetivo de atrair novos membros e apoiadores para a comunidade, direcionando o tráfego para a página de financiamento coletivo no Apoia.se.

---

## Sobre o Projeto

A iniciativa da SouJunior é focada em impulsionar profissionais iniciantes em tecnologia através de mentoria ativa, projetos práticos reais e uma rede de colaboração mútua. Este repositório contém o código-fonte da interface web desenvolvida para apresentar a causa, os planos de apoio e as frentes de atuação da comunidade.

---

## Stack Tecnológica

* **Framework:** Astro
* **Biblioteca UI / Interatividade:** React (utilizado em componentes dinâmicos)
* **Estilização:** Tailwind CSS v4 e CSS nativo
* **Hospedagem e Deploy:** Netlify

---

## Participantes

* **Beatriz Aguiar Campos** — Desenvolvedora (DEV) e Co-criadora do Design no Figma
* **Bruna Santos** — Analista de Qualidade (QA) e Co-criadora do Design no Figma

---

## Instruções de Execução

Siga os passos abaixo para configurar e executar o projeto localmente no seu ambiente de desenvolvimento.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina (recomenda-se a versão LTS mais recente).

### Passo a passo

1. Clone o repositório para o seu computador:
   ```bash
        git clone <url-do-repositorio>
    ```
2. Navegue até o diretório do projeto:
    ```bash
        cd uxpage-soujunior
    ```
3. Instale as dependências do projeto utilizando o gerenciador de pacotes de sua preferência:
    ```bash
        npm install
    ```
4. Inicie o servidor de desenvolvimento local:
    ```bash
        npm run dev
    ```
5. Abra o navegador e acesse o endereço fornecido no terminal (geralmente http://localhost:4321) para visualizar a aplicação rodando.

### Build e Produção

Para gerar os arquivos estáticos otimizados para produção, execute o seguinte comando:
```bash
    npm run build
```

Para pré-visualizar a versão de produção compilada localmente antes de realizar o deploy, utilize:

```bash
npm run preview
```