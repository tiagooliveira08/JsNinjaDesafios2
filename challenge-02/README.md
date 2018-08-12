# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(valor1, valor2) {
	return valor1 + valor2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = soma(10,10) + 5;

// Qual o valor atualizado dessa variável?
//5

// Declare uma nova variável, sem valor.
var variable;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function newValue(value) {
	variable = value;
	return "o valor da variável agora é: ".variable;
}

// Invoque a função criada acima.
newValue("test");

// Qual o retorno da função? (Use comentários de bloco).
//o valor da variável agora é: test

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calc(valor1, valor2, valor3) {
	if(valor1 == "undefined" || valor2 == "undefined" || valor3 == "undefined") {
		return "Preencha todos os valores corretamente!";
	}

	return (valor1 * valor2 * valor3) + 2; 
}

// Invoque a função criada acima, passando só dois números como argumento.
function calc(2,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
function calc(2,2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calc(valor1, valor2, valor3) {
    var valueArguments = Array.from(arguments).length;
	if(valueArguments === 1) {
		return Array.from(arguments)[0];
    }
    else if(valueArguments === 2) {
    	return Array.from(arguments)[0] + Array.from(arguments)[1];
    }
    else if(valueArguments === 3) {
    	let resultFirstCalc = Array.from(arguments)[0] + Array.from(arguments)[1];

    	return resultFirstCalc / Array.from(arguments)[2];
    }
    else if(valueArguments === 0 ) {
    	return false; 
    }

    else {
    	return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
calc(1); //1
calc(2,2); //4
calc(10,10,2); // 10
calc(10,10,10,10,10);
calc(1,1,1,1,1,1) // null
