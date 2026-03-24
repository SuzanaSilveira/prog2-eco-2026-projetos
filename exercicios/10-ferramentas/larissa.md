# Análise de Ferramentas de Desenvolvimento

**Programação II – ECO 2026/1**

---

## Identificação dos estudantes

|                  |                                   |
| ---------------- | --------------------------------- |
| **Integrante 1** | Larissa Oliveira Ferraz Damasceno |
| **Integrante 2** | Nathan Espindola                  |

---

## Seção 1 – IDEs e editores de código

> Categoria obrigatória

**Ferramentas comparadas:**

- Ferramenta 1: `Visual Studio Code`
- Ferramenta 2: `WebStorm`
- Ferramenta 3: `IntelliJ IDEA`
- Ferramenta 4: `Sublime Text`

**Introdução:**

As IDEs e editores de código são ferramentas essenciais no desenvolvimento de software, pois auxiliam na escrita, organização e depuração do código. No desenvolvimento web, essas ferramentas oferecem suporte a linguagens como HTML, CSS e JavaScript, além de integração com sistemas de versionamento, terminal e extensões que aumentam a produtividade do desenvolvedor.

**Tabela comparativa:**

| Característica                 | Visual Studio Code | WebStorm  | IntelliJ IDEA | Sublime Text |
| ------------------------------ | ------------------ | --------- | ------------- | ------------ |
| Facilidade de instalação       | Muito fácil        | Fácil     | Médio         | Muito fácil  |
| Suporte a JavaScript e Node.js | Excelente          | Excelente | Muito bom     | Bom          |
| Suporte a HTML e CSS           | Excelente          | Excelente | Muito bom     | Bom          |
| Debugger integrado             | Sim                | Sim       | Sim           | Limitado     |
| Terminal integrado             | Sim                | Sim       | Sim           | Não          |
| Integração com Git             | Sim                | Sim       | Sim           | Limitada     |
| Extensões disponíveis          | Muito grande       | Médio     | Médio         | Grande       |
| Performance                    | Muito boa          | Boa       | Boa           | Excelente    |
| Custo / licença                | Gratuito           | Freemium  | Freemium      | Freemium     |
| **Nota geral (1 a 5)**         | **5**              | 4         | 4             | 3            |

**Ferramenta escolhida:** `Visual Studio Code`

**Justificativa:**

O Visual Studio Code foi escolhido por ser um editor gratuito, leve e amplamente utilizado no desenvolvimento web. Ele possui suporte nativo a diversas linguagens e uma grande biblioteca de extensões que permitem adicionar funcionalidades como linting, formatação de código, integração com banco de dados e controle de versão. Além disso, possui terminal integrado, depuração de código e excelente integração com Git e GitHub.

---

## Seção 2 – Clientes de banco de dados

> Categoria obrigatória

**Ferramentas comparadas:**

- Ferramenta 1: `PostgreSQL`
- Ferramenta 2: `MySQL`
- Ferramenta 3: `SQLite`
- Ferramenta 4: `DBeaver`

**Introdução:**

Bancos de dados são responsáveis por armazenar e organizar as informações utilizadas por uma aplicação. Em projetos de desenvolvimento web, eles permitem registrar dados de usuários, informações da aplicação e outras estruturas importantes. Além do banco de dados em si, ferramentas clientes são utilizadas para facilitar a visualização e manipulação dessas informações durante o desenvolvimento.

**Tabela comparativa:**

| Característica           | PostgreSQL | MySQL    | SQLite      | DBeaver  |
| ------------------------ | ---------- | -------- | ----------- | -------- |
| Facilidade de instalação | Boa        | Boa      | Muito fácil | Fácil    |
| Visualização de tabelas  | Sim        | Sim      | Sim         | Sim      |
| Editor de queries SQL    | Sim        | Sim      | Sim         | Sim      |
| Integração com a IDE     | Boa        | Boa      | Boa         | Boa      |
| Custo / licença          | Gratuito   | Gratuito | Gratuito    | Gratuito |
| **Nota geral (1 a 5)**   | **5**      | 4        | 4           | 4        |

**Ferramenta escolhida:** `PostgreSQL`

**Justificativa:**

O PostgreSQL foi escolhido por ser um banco de dados relacional robusto, gratuito e amplamente utilizado em aplicações web modernas. Ele oferece suporte avançado a consultas SQL, boa performance e alta confiabilidade no armazenamento de dados. Para facilitar a administração e visualização do banco durante o desenvolvimento, será utilizado um cliente de banco de dados como o **DBeaver** ou uma extensão de banco de dados no Visual Studio Code.

---

## Seção 3 – Ferramentas de teste de API

> Categoria obrigatória

**Ferramentas comparadas:**

- Ferramenta 1: `Postman`
- Ferramenta 2: `Insomnia`
- Ferramenta 3: `Thunder Client`
- Ferramenta 4: `curl`

**Introdução:**

Ferramentas de teste de API permitem enviar requisições HTTP para servidores e verificar as respostas retornadas. Elas são utilizadas para testar endpoints durante o desenvolvimento de aplicações web, permitindo validar o funcionamento de rotas, parâmetros e respostas da API.

**Tabela comparativa:**

| Característica                                  | Postman     | Insomnia  | Thunder Client      | curl             |
| ----------------------------------------------- | ----------- | --------- | ------------------- | ---------------- |
| Facilidade de uso                               | Muito fácil | Fácil     | Muito fácil         | Média            |
| Suporte a métodos HTTP (GET, POST, PUT, DELETE) | Sim         | Sim       | Sim                 | Sim              |
| Visualização da resposta                        | Excelente   | Excelente | Boa                 | Terminal (texto) |
| Organização de requisições                      | Excelente   | Muito boa | Boa                 | Limitada         |
| Integração com a IDE                            | Limitada    | Limitada  | Excelente (VS Code) | Não              |
| Custo / licença                                 | Freemium    | Freemium  | Gratuito            | Gratuito         |
| **Nota geral (1 a 5)**                          | **5**       | 4         | 4                   | 3                |

**Ferramenta escolhida:** `Postman`

**Justificativa:**

O Postman foi escolhido por ser uma das ferramentas mais populares para teste de APIs. Ele permite criar coleções de requisições, testar diferentes endpoints e visualizar respostas do servidor de forma clara. Sua interface intuitiva e ampla documentação tornam a ferramenta adequada para desenvolvimento e depuração de APIs.

---

## Seção 4 – Categoria complementar

**Categoria escolhida:** `Qualidade e padronização de código`

**Ferramentas comparadas:**

- Ferramenta 1: `ESLint`
- Ferramenta 2: `Prettier`
- Ferramenta 3: `EditorConfig`
- Ferramenta 4: `ESLint + Prettier`

**Introdução:**

Ferramentas de qualidade e padronização de código ajudam a manter o código organizado, legível e consistente entre diferentes desenvolvedores. Elas identificam possíveis erros, aplicam boas práticas de programação e garantem que o código siga um padrão de formatação.

**Tabela comparativa:**

| Característica            | ESLint       | Prettier     | EditorConfig | ESLint + Prettier |
| ------------------------- | ------------ | ------------ | ------------ | ----------------- |
| Facilidade de uso         | Média        | Muito fácil  | Fácil        | Média             |
| Integração com a IDE      | Excelente    | Excelente    | Boa          | Excelente         |
| Documentação e comunidade | Muito grande | Muito grande | Grande       | Muito grande      |
| Custo / licença           | Gratuito     | Gratuito     | Gratuito     | Gratuito          |
| **Nota geral (1 a 5)**    | **5**        | 4            | 4            | 5                 |

**Ferramenta escolhida:** `ESLint`

**Justificativa:**

O ESLint foi escolhido por ser uma das ferramentas mais utilizadas para análise estática de código em projetos JavaScript. Ele ajuda a identificar erros, aplicar boas práticas de programação e manter um padrão consistente de código. Além disso, possui excelente integração com o Visual Studio Code e grande suporte da comunidade.

---

## Conclusão geral

**Conjunto de ferramentas escolhido pela equipe:**

| Categoria                 | Ferramenta escolhida |
| ------------------------- | -------------------- |
| IDE / Editor de código    | Visual Studio Code   |
| Cliente de banco de dados | PostgreSQL           |
| Teste de API              | Postman              |
| Categoria complementar    | ESLint               |

**Considerações finais:**

A dupla pretende utilizar o Visual Studio Code como ambiente principal de desenvolvimento, aproveitando suas extensões e integração com ferramentas modernas de desenvolvimento web. O banco de dados PostgreSQL será utilizado para armazenar e organizar as informações da aplicação, com apoio de um cliente de banco de dados para facilitar sua administração. O Postman será utilizado para testar os endpoints da API durante o desenvolvimento do backend. Já o ESLint ajudará a manter a qualidade e padronização do código ao longo do projeto.

---

## Referências consultadas

- https://dev.to/iamthiago/mysql-postgresql-e-sqlite-quando-usar-cada-um-sem-dogma-5441
- https://www.dio.me/articles/10-das-principais-ides-utilizadas-na-programacao-moderna
- https://dev.to/jhonywalkeer/editorconfig-eslint-e-prettier-a-triade-dos-projetos-4p9

---

_Programação II – ECO 2026/1 | [Página da disciplina](https://wilcilene.github.io/estudos/disciplinas/programacaoii-eco/)_
