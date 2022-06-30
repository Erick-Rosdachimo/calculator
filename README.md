# Sobre o projeto

## Introdução

Este projeto é uma calculadora que apliquei alguns novos conhecimentos em JS e fortaleci o HTML e CSS.

## Detalhes

Utilizei na estilização CSS grid e gradiente de background, no script utilizei funções chamadas por eventos de clique nos botões, sendo dos botões de número passado o número clicado como parâmetro.
Os de operações adicionei a operação pra mais tarde ser calculada.
Na hora do cálculo utilizei a função nativa eval, porém troquei os símbolos multiplicação e divisão, de forma que fique mais próxima do comum para o usuario através da função replace que recebe o valor digitado até o momento e troca todos os caracteres X por \* e armazenando o valor numa variável, após isto vai novamente à uma função replace que desta vez pega o valor obtido do replace anterior e troca o ÷ por /, assim permitindo o cálculo normalmente e a visualização desejada do símbolo para o usuário.
Na função Del, utilizei o substring, que inicia no primeiro caractere (index 0) e termina no penúltimo caractere (total de letras digitadas -1), retornando os caracteres selecionados.

## Notas da atualização

Neste update, corrigi um bug de conversão de informações, antes trocava apenas o primeiro ÷ por /, agora troca todos.

Além disso, também utilizei try/catch para aparecer uma mensagem de erro caso o usuário digite um número invalido como 25.0.4, causando erro de cálculo.

Link para o projeto: https://erick-rosdachimo.github.io/calculator/
