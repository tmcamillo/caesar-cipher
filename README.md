
## Cipher
##### Projeto elaborado para Laboratória SP 01/19
***

Desenvolvi uma aplicação web para cifrar e decifrar mensagens a partir da "Cifra de César".


A interface inclui uma caixa de texto única para inclusão das mensagens; um drop list dos valores de deslocamento para o usuário selecionar qual desejar e, dois botões para as duas ações possíveis dentro da aplicação. Para isso foi necessário: desenhar o produto levando em conta os usuários, desenvolver a interface, escutar eventos básicos do DOM, construir a lógica usando apenas Javascript, realizar testes básicos que comprovem (e documentem) esta lógica, e finalmente manipular o DOM para que ele mostre e imprima os resultados.

![alt text](https://github.com/tmcamillo/caesar-cipher/blob/master/Cipher.png "Flowchart Cipher")

##### Checklist dos Requerimentos

* [X] Usar VanillaJS.
* [X] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [X] Mostrar o resultado da cifra corretamente.
* [X] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  descifrado.
* [X] Mostrar o resultado descifrado corretamente.
* [X] Permitir escolher o `offset` (_deslocamento_) a ser usado na
  cifragem/descifragem.
* [X] Implementa `cipher.encode`.
* [X] Implementa `cipher.decode`.
* [X] Criar testes unitários.
* [X] Permite usar um offset (deslocamento) negativo.
* [X] Cifra/descifra outros caracteres (espaços, pontuação, ã, á, ...)