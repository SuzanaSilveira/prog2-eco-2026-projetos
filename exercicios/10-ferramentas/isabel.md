# Análise de Ferramentas de Desenvolvimento
**Programação II – ECO 2026/1 **

---

## Identificação dos etsudantes

| | |
|---|---|
| **Integrante 1** | Isabel Schifler |
| **Integrante 2** | Suzana Silveira |
| **Integrante 3** | Yuri Melo  |
---

## Seção 1 – IDEs e editores de código
> Categoria obrigatória

**Ferramentas comparadas:**
- Ferramenta 1: `VS Code`
- Ferramenta 2: `Eclipse`
- Ferramenta 3: `StackBlitz`
- Ferramenta 4: `CodeSandbox`

**Introdução:**
Um ambiente de desenvolvimento integrado (IDE) é uma aplicação de software que ajuda os programadores a desenvolver código de maneira eficiente. No desenvolvimento web, essas ferramentas são importantes porque oferecem recursos que facilitam a escrita, organização e teste dos programas. Como um IDE conhece as regras das linguagens utilizadas, ele possui diversos recursos inteligentes que auxiliam na escrita e edição automática do código-fonte, tornando o desenvolvimento mais rápido e organizado.

**Tabela comparativa:**

| Característica | Ferramenta 1 | Ferramenta 2 | Ferramenta 3 | Ferramenta 4 |
|---|---|---|---|---|
| Facilidade de instalação |Alta |Média |Online |Online |
| Suporte a JavaScript e Node.js |Sim |Sim (com plugins) |Sim|Sim |
| Suporte a HTML e CSS |Sim |Sim | Sim|Sim |
| Debugger integrado | Sim|Sim|Limitado |Limitado |
| Terminal integrado |Sim |Sim (com plugins)| Sim(online)|  Sim(online)|
| Integração com Git |Sim |Sim |Parcial |Parcial |
| Extensões disponíveis |Diversas |Diversas (via Eclipse Marketplace) |Limitado |Limitado|
| Performance | Alta |Média (pesados em equipamentos antigos)|Depende da conexão |Depende da conexão |
| Custo / licença | Gratuito|Gratuito |Gratuito | Gratuito|
| **Nota geral (1 a 5)** |5 |4|4 |4 |

**Ferramenta escolhida:** `VS Code`

**Justificativa:**
O VS Code se destacou por equilibrar desempenho, flexibilidade e facilidade de uso. Ele é leve, gratuito, possui suporte nativo a JavaScript, HTML e CSS, além de terminal integrado, depurador e uma enorme loja de extensões. Diferente do Eclipse, que pode ser pesado, e das ferramentas online (StackBlitz e CodeSandbox), que dependem de internet, o VS Code funciona localmente com alta performance e pode ser customizado conforme a necessidade do projeto.

---

## Seção 2 – Clientes de banco de dados
> Categoria obrigatória

**Ferramentas comparadas:**
- Ferramenta 1: `MySQL`
- Ferramenta 2: `Database Client`
- Ferramenta 3: `SQLite`
- Ferramenta 4: `DBeaver`

**Introdução:**
Clientes de banco de dados são ferramentas essenciais para visualizar, consultar e gerenciar dados armazenados em sistemas de gerenciamento de banco de dados (SGBD). No contexto do desenvolvimento web, essas ferramentas permitem testar consultas SQL, visualizar estruturas de tabelas e acompanhar a persistência dos dados durante a criação de aplicações. Escolher uma ferramenta que se integre bem ao fluxo de trabalho pode aumentar significativamente a produtividade da equipe.

**Tabela comparativa:**

| Característica | Ferramenta 1 | Ferramenta 2 | Ferramenta 3 | Ferramenta 4 |
|---|---|---|---|---|
| Facilidade de instalação |Média |Alta |Alta| Média |
| Visualização de tabelas |Sim |Sim |Limitado |Sim |
| Editor de queries SQL |Sim |Sim |Sim |Sim|
| Integração com a IDE |Não |Sim (VS Code) |Não | Parcial (plugins)|
| Custo / licença |Gratuito |Gratuito |Gratuito |Gratuito |
| **Nota geral (1 a 5)** | 4| 5| 3,5| 4|

**Ferramenta escolhida:** `Database Client`

**Justificativa:**
A ferramenta Database Client se destaca porque é uma extensão diretamente integrada ao VS Code. Isso permite que você acesse e gerencie bancos de dados sem precisar alternar entre janelas ou programas externos. Com ela, é possível visualizar tabelas,e manter todo trabalho concentrado em um único ambiente. Enquanto outras ferramentas funcionam como softwares separados ou sistemas avulsos de banco de dados, essa extensão oferece mais praticidade e eficiência para quem desenvolve para web diretamente no VS Code.

---

## Seção 3 – Ferramentas de teste de API
> Categoria obrigatória

**Ferramentas comparadas:**
- Ferramenta 1: `Postman`
- Ferramenta 2: `Insomnia`
- Ferramenta 3: `Thunder Client`
- Ferramenta 4: `curl`

**Introdução:**
Ferramentas de teste de API são indispensáveis para o desenvolvimento de aplicações que seguem a arquitetura REST. Elas permitem enviar requisições HTTP (GET, POST, PUT, DELETE) para os endpoints da aplicação e inspecionar as respostas retornadas pelo servidor. No contexto do projeto, essas ferramentas serão essenciais para testar e depurar a API que será construída, garantindo que ela funcione conforme o esperado antes da integração com o frontend.

**Tabela comparativa:**

| Característica | Ferramenta 1 | Ferramenta 2 | Ferramenta 3 | Ferramenta 4 |
|---|---|---|---|---|
| Facilidade de uso |Alta |Alta |Muito Alta |Baixa |
| Suporte a métodos HTTP (GET, POST, PUT, DELETE) |Sim |Sim |Sim |Sim |
| Visualização da resposta |Sim |Sim |Sim |Sim |
| Organização de requisições | Sim|Sim |Sim |Não |
| Integração com a IDE |Não |Não |Sim (VS Code) |Sim (terminal integrado) |
| Custo / licença |Freemium | Freemium|Gratuito |Gratuito |
| **Nota geral (1 a 5)** | 5|4,5 |5 | 3,5|

**Ferramenta escolhida:** `Thunder Client`

**Justificativa:**
O Thunder Client se destacou por ser uma extensão nativa do VS Code, o que permite testar a API diretamente no ambiente de desenvolvimento, sem precisar alternar para outra janela ou aplicativo. Apesar de o Postman ser a ferramenta mais conhecida e completa do mercado, o Thunder Client oferece uma experiência mais integrada e fluida para quem já utiliza o VS Code como editor principal. Além disso, é totalmente gratuito, ao contrário do Postman e Insomnia, que possuem limitações nos planos gratuitos. O curl, embora poderoso para automação, exige maior conhecimento técnico e não oferece uma interface visual amigável.


---

## Seção 4 – Categoria complementar

**Categoria escolhida:** ` Deploy e ambiente de execução`

**Ferramentas comparadas:**
- Ferramenta 1: `Node.js`
- Ferramenta 2: `Render`
- Ferramenta 3: `Vercel`
- Ferramenta 4: `Docker`

**Introdução:**
As ferramentas de deploy e ambiente de execução são essenciais para colocar uma aplicação no ar e garantir que ela funcione corretamente em diferentes ambientes. O Node.js é a base para executar JavaScript no backend, enquanto as plataformas de hospedagem (Render, Vercel) permitem publicar a aplicação de forma simples e acessível. Já o Docker oferece uma camada adicional de padronização, garantindo que o ambiente de desenvolvimento seja idêntico ao de produção. Essas ferramentas são relevantes para o projeto porque viabilizam a entrega final da aplicação funcional e acessível online.

**Tabela comparativa:**

| Característica | Ferramenta 1 | Ferramenta 2 | Ferramenta 3 | Ferramenta 4 |
|---|---|---|---|---|
| Facilidade de uso | Alta|Alta| Muito Alta| Média|
| Integração com a IDE | Sim| Parcial| Sim| Sim|
| Documentação e comunidade |	Excelente | Boa|	Excelente |	Excelente |
| Custo / licença |Gratuito |Gratuito | Gratuito| Gratuito|
| **Nota geral (1 a 5)** | 5|4 |5 |4 |

**Ferramenta escolhida:** `Node.js + Vercel`

**Justificativa:**
O Node.js é indispensável por ser o ambiente de execução que permitirá construir o backend do projeto em JavaScript. Já o Vercel se destacou entre as opções de hospedagem por sua integração nativa com GitHub, oferecendo deploy automático a cada push no repositório, além de ser gratuito e muito utilizado para aplicações frontend e APIs serverless. O Render também é uma ótima opção, mas o Vercel oferece uma experiência mais simplificada para quem já utiliza o ecossistema GitHub. O Docker, embora poderoso, adiciona complexidade que pode não ser necessária para o escopo da disciplina.

---

## Conclusão geral

**Conjunto de ferramentas escolhido pela equipe:**

| Categoria | Ferramenta escolhida |
|---|---|
| IDE / Editor de código |VS Code |
| Cliente de banco de dados | Database Client|
| Teste de API | Thunder Client|
| Categoria complementar |Node.js + Vercel |

**Considerações finais:**
A equipe pretende utilizar esse conjunto de ferramentas de forma integrada ao longo do semestre, aproveitando ao máximo o ecossistema do VS Code. Com o VS Code como editor principal, as extensões Database Client e Thunder Client permitirão gerenciar o banco de dados e testar a API sem sair do ambiente de desenvolvimento. Por fim, o Node.js será utilizado para o backend e o Vercel para realizar o deploy automático da aplicação. Durante a pesquisa, a principal dificuldade foi selecionar, entre tantas opções disponíveis, aquelas que melhor se integram ao fluxo de trabalho da equipe e atendem às necessidades específicas do projeto.

---

## Referências consultadas
Visual Studio Code - Documentação oficial https://code.visualstudio.com/docs

Node.js - Documentação oficial https://nodejs.org/pt-br

Vercel - Documentação oficial http://vercel.com/docs

---

_Programação II – ECO 2026/1 | [Página da disciplina](https://wilcilene.github.io/estudos/disciplinas/programacaoii-eco/)_
