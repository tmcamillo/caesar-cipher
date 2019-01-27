
## Cipher
##### Projeto elaborado para Laboratória SP 01/19
***

Desenvolvi uma aplicação web para cifrar e decifrar mensagens a partir da "Cifra de César".
O desenvolvimento inclui um campo de texto único para o texto, um drop list com valores de deslocamento pre-determinados para o usuário escolher e botões para as duas ações da aplicação. Além disso, foi necessário: desenhar o produto levando em conta os usuários, construir a interface, escutar eventos básicos do DOM, usando para a lógica apenas Javascript, realizar testes básicos que comprovem (e documentem) esta lógica, e finalmente manipular o DOM para que ele mostre e imprima os resultados.

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