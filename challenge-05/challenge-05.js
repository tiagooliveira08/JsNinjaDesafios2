/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var values = ["Olá", 5, true, "Javascript", false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function isReturned(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(isReturned(values)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnItens(array, indice = 0) {
  return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayItems = ["1", true, 3, { person: "Tiago" }, ["1", 2, 3.3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnItens(arrayItems, [0]));
console.log(returnItens(arrayItems, [1]));
console.log(returnItens(arrayItems, [2]));
console.log(returnItens(arrayItems, [3]));
console.log(returnItens(arrayItems, [4]));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  var bookDetails = {
    book1: { quantidadePaginas: 5, autor: "Tiago", editora: "Oliveira" },
    book2: { quantidadePaginas: 15, autor: "Bina", editora: "Saraiva" },
    book3: { quantidadePaginas: 30, autor: "Carlos", editora: "Sanar" }
  };
  return bookName ? bookDetails[bookName] : bookDetails;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var name = "book2";
console.log(`O livro ${name} tem ${book(name).quantidadePaginas} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${name} é ${book(name).autor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${name} foi publicado pela editor ${book(name).editora}`);
