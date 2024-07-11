# Meu Portfólio

## Descrição
Este projeto é um portfólio online desenvolvido em React, projetado para apresentar meus trabalhos e habilidades como desenvolvedor. O portfólio inclui informações sobre mim, meus projetos recentes e detalhes de contato. Ele faz uso de práticas modernas de desenvolvimento web, como componentização, gerenciamento de estado com hooks e simulação de requisições a um servidor através de arquivos JSON locais.

## Instalação

### Pré-requisitos
Antes de iniciar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar a versão mais recente do Node.js [aqui](https://nodejs.org/).

### Passos para Configuração do Ambiente Local
1. **Clone o Repositório**
   ```
   git clone https://github.com/SeuUsuario/portfolio-react.git
   cd portfolio-react
   ```
2. **Instale as Dependências**
    
Use o npm ou yarn para instalar todas as dependências do projeto:
```
 npm install
     ou
 yarn install
```
3. **Inicie o Servidor de Desenvolvimento**
Após a instalação das dependências, inicie o servidor de desenvolvimento:
```
npm start
   ou
yarn start
```

O aplicativo deve ser aberto automaticamente no seu navegador padrão. Caso contrário, acesse http://localhost:3000 para ver o portfólio em execução.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:
```
 portfolio-react/
 ├── public/
 │   ├── index.html
 │   └── ...
 ├── src/
 │   ├── components/
 │   │   ├── Navbar.js
 │   │   ├── Button.js
 │   │   ├── Card.js
 │   │   └── Modal.js
 │   ├── data/
 │   │   └── projects.json
 │   ├── pages/
 │   │   ├── Home.js
 │   │   ├── About.js
 │   │   └── Projects.js
 │   ├── styles/
 │   │   ├── About.css
 │   │   ├── App.css
 |   |   ├── Button.css
 |   |   ├── Card.css
 |   |   ├── Home.css
 |   |   ├── index.css
 |   |   ├── Modal.css
 |   |   ├── Navbar.css
 │   │   └── Projects.css
 │   ├── App.js
 │   ├── index.js
 │   ├── index.css
 │   └── ...
 └── package.json
```
## Simulação de Requisições

Os dados dos projetos são simulados através do arquivo projects.json, localizado na pasta src/data. Este arquivo contém informações sobre os projetos e é utilizado para preencher a página de projetos sem a necessidade de um backend ativo.

## Reutilização de Componentes

A aplicação utiliza vários componentes reutilizáveis para garantir uma estrutura modular e eficiente. Exemplos incluem:

* **Button:** Utilizado em várias páginas com diferentes estilos e funções.
* **Card:** Reutilizado nas páginas Home e Projects para apresentar informações de maneira consistente.
* **Navbar:** Componente de navegação presente em todas as páginas.
* **Modal:** Componente que mostra as informações de um projeto aberto por ``INDEX``.

****
## Links
**Link para o vídeo:** https://youtu.be/2LQaZdvV_q0

**Link para o figma:** https://www.figma.com/design/sq8GNCsnAjxZ404MrRFdkt/Sprint_2?node-id=0-1&t=WlfLf9e9FbjzdS2y-1

**Link para o repositório do front-end:** link
