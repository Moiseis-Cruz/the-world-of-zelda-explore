# The World of Zelda Explore

Seja muito bem-vindo ao mundo de <strong>Zelda</strong>!

Este projeto permite conhecer os principais jogos da franquia <strong>Zelda</strong> e fornece informações detalhadas, como desenvolvedor, editora, data de lançamento e uma descrição abrangente, além do título do jogo.

<img src="./src/imgs/zelda.gif" alt="The World of Zelda Explore" />

## Visão Geral do Projeto

Este projeto é uma demonstração das minhas habilidades em usar <strong>React.js</strong> com <strong>Vite</strong>. Embora a API consumida por este projeto tenha conteúdo limitado, ele serve como um bom exercício para aprimorar minhas habilidades de programação.

## Funcionalidades

* Informações dos Jogos: Visualize informações detalhadas sobre cada jogo da franquia Zelda.
* Paginação: Navegue pelos jogos utilizando um sistema de paginação personalizado.
* React.js com Vite: Construído usando React.js para o frontend e Vite como ferramenta de build para um processo de desenvolvimento rápido e eficiente.

## Desafios e Soluções

Implementação da Paginação
Um dos principais desafios que enfrentei foi implementar a paginação para exibir um número específico de cards por página. Além disso, foi necessário criar um evento para alternar entre as páginas.

### Solução
Para resolver isso, criei uma nova variável chamada pageIndex e uma função para gerenciar o estado usando o hook useState do React, inicializando-a em zero. Essa variável é responsável por controlar a paginação.

Também criei eventos de <strong>click</strong> para os botões: um para ir para a página anterior e outro para avançar para a próxima página.

## Como Começar

### Pré-requisitos

Node.js e npm instalados na sua máquina.


#### Clone o repositório

```sh
git clone https://github.com/seu-usuario/zelda-explore.git

cd zelda-explore
```

#### Instale as dependências
```sh
npm install
```

#### Execute o projeto
```sh
npm run dev
```

Abra o seu navegador e navegue para http://localhost:3000 para ver o projeto em ação.


## Melhorias Futuras

* Melhorar a interface do usuário com mais elementos interativos.
* Adicionar dados mais detalhados dos jogos integrando com uma API mais abrangente.
* Implementar funcionalidade de busca para encontrar jogos específicos rapidamente.

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.