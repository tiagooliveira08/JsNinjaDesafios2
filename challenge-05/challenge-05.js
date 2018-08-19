console.log("read");
/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayValue = ["Tiago", "Test", true, 1, {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array) {
	return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arrayValue)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunctionTwo(param1,param2) {
	return param1[param2];
};
console.log(myFunctionTwo(arrayValue,0));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
arrayTypes = [{none: "Tiago"}, true, function(){return "isFunction"}, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunctionTwo(arrayTypes,0));
console.log(myFunctionTwo(arrayTypes,1));
console.log(myFunctionTwo(arrayTypes,2));
console.log(myFunctionTwo(arrayTypes,3));
console.log(myFunctionTwo(arrayTypes,4));

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
function book(test) {
	console.log(test);
	let obj = {
		"percy" : {
			"quantidadePaginas" : 5,
			"autor": "Desconhecido",
			"editora" : "Saraiva"

		},
		"love" : {
			"quantidadePaginas" : undefined,
			"autor": "Deus",
			"editora" : "Anjos"

		},
		"pinkForRed" : {
			"quantidadePaginas" : 1,
			"autor": "EuZinho",
			"editora" : "My notebook"
		}
	}
	return obj[test] || obj;
};


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

var bookName = "percy";
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro ${bookName} tem ${book(bookName).quantidadePaginas} paginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${bookName} é  ${book(bookName).autor}`);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).editora}`);

