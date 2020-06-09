# Projeto Teste para a Empresa Pro Bono

## Instalação

1. clone o repositório `https://github.com/Rafa516/Projeto-Teste-Probono.git`.
2. Instale o Node.js `https://nodejs.org/en/download/`.
3.  Com o Node.js instalado execute o comando `npm install -g @angular/cli`.
4. Entre no projeto e instale as dependências `npm install`.

## Ambiente Local

Execute `ng serve` para que o projeto suba localmente. Acesse a url `http://localhost:4200/`. 

## Simulando o Back-end

Execute `npm install -g json-server` para instalar globalmente o servidor json. Após a instalação entre na pasta do projeto e execute `json-server --watch db.json`, com isso um servidor será inicializado na url `http://localhost:3000/`, após a inicialização sera possível realizar requisições http.


## Build

Execute `ng build` para gerar o compilado do projeto. O projeto vai ser criado dentro do diretório `dist/`. Adicionar `--prod` junto comando de build para gerar minificado e pronto para o ambiente de produção.

