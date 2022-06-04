# Curso FullCycle - Desafio Docker II

Desafio proposto ao final do módulo Docker do curso FullCycle 3.0 (https://fullcycle.com.br/)

## Desafio
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. 
  1. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. 
  2. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
  3. O retorno da aplicação node.js para o nginx deverá ser:

    <b>Full Cycle Rocks!</b></br>
    - Lista de nomes cadastrada no banco de dados

  4. Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080

## Instruções
  A partir no seu ambiente local (necessário instalação prévia do 'git' e do 'docker')
  1. Clone o repositório: git clone https://github.com/nathanreys/fullcycle-docker-desafionginx.git
  2. Acesse o repositório clonado "fullcycle-docker-desafionginx"
  3. Execute o comando: docker-compose up -d
  4. Acesse o endereço: http://localhost:8080
