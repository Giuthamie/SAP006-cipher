# ...Meu querido diário...

## Índice

* [1. Sobre o projeto](#1-sobre-o-projeto)
* [2. O site](#2-o-site)
* [3. Considerações gerais](#4-considerações-gerais)
* [4. Objetivos de aprendizagem do projeto](#5-objetivos-de-aprendizagem)

***

## 1. Sobre o projeto

Uma aplicação Web referente ao primeiro projeto do bootcamp da [Laboratoria] (https://www.laboratoria.la/br).

Esta aplicação possibilita ao usuário uma versão digital de seu diário criptografado para manter sua privacidade. Além disto, o site conta com a opção descriptografar, caso o usuário se esqueça do significado da mensagem.

A criptografia e descriptografia é realizada através da [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar). Este é um dos primeiros tipos de criptografias conhecidas na história. 

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.


## 2. O site

O site foi desenvolvido pensando numa solução para usuários que utilizam a escrita como forma de expressão de seus sentimentos e pensamentos, e temem a violação de sua privacidade através da leitura de seus diários por terceiros. 


## 3. Considerações gerais

* O projeto foi realizado individualmente.
* Usuário e objetivo do produto: qualquer pessoa que faz uso da escrita para externalizar seus pensamentos/sentimentos e deseja mantê-los secreto.

### Interface UI e UX

A interface permite ao usuário:

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem cifrada e decifrada.
* Aplicação pensanda para solucionar a dificuldade do usuário em manter seu diário seguro.

### Passos de tomada de decisão


Primeiramente foi pensado num layout simples para que o usuário pudesse criptografar e descriptografar uma mensagem.

Primeiro desenho:

INSERIR IMAGEM

Depois foi criado um layout com formato mais parecido com um diário para que o usuário possa sentir que esteja de fato escrevendo no mesmo, possibilitando uma interação mais agradável. A seguir, imagem da interface final:

INSERIR IMAGEM


As fontes e cores foram definidas a partir da imagem de background para maior harmonização e satisfação visual.

INSERIR IMAGEM


## 4. Objetivos de aprendizagem

Abaixo lista dos objetivos de aprendizagem alcançados neste projeto:

### HTML e CSS

* [ ] [Uso de HTML semântico.](https://developer.mozilla.org/pt-BR/docs/Glossario/Semantica#Sem%C3%A2ntica_em_HTML)
* [ ] Uso de seletores de CSS.

### DOM

* [ ] Uso de seletores do DOM.
* [ ] Manipular eventos do DOM.
* [ ] [Manipulação dinâmica do DOM.](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Manipulação de strings.
* [ ] Uso de condicionais (if-else | switch | operador ternário)
* [ ] Uso de laços _(loops)_ (for | for..in | for..of | while)
* [ ] Uso de funções (parâmetros | argumentos | valor de retorno)
* [ ] Declaração correta de variáveis (const & let)

### Testing

* [ ] [Teste unitário.](https://jestjs.io/docs/pt-BR/getting-started)

### Estrutura do código e guia de estilo

* [ ] Organizar e dividir o código em módulos (Modularização)
* [ ] Uso de identificadores descritivos (Nomenclatura | Semântica)
* [ ] Uso de linter (ESLINT)

### Git e GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Gerenciamento de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [ ] Desenhar a aplicação pensando e entendendo o usuário.
* [ ] Criar protótipos para obter feedback e iterar.
* [ ] Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)
