(function() {
/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
elemento será um objeto no formato:
{ number: [NUMBER] }
Os números devem ser de 1 a 10.
Mostre esse array no console.
*/
console.log( 'Number Objects Array:' );
numberObjects = [ {
	number : 1
},{
	number : 2
},{
	number : 3
},{
	number : 4
},{
	number : 5
},{
	number : 6
},{
	number : 7
},{
	number : 8
},{
	number : 9
},{
	number : 10
}]
console.log(numberObjects);

/*
Crie um array chamado `justNumbers`, que terá como elementos somente os
números do array criado acima. Mostre esse novo array no console.
*/
console.log( '\nJust Numbers:' );
var justNumbers = [1,2,3,4,5,6,7,8,9,10];
console.log(justNumbers);
/*
Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
no console.
*/
console.log( '\nJust module of division by 2 or 3:' );
var justMod2Or3 = justNumbers.filter(function(item, indice, array) {
	return item % 2 === 0 || item % 3 === 0
});

console.log(justMod2Or3);
/*
Declare uma variável chamada operation que receba, do array criado acima,
um valor reduzido pela seguinte operação:
- Somar 1 ao último valor retornado;
- Multiplicar o resultado pelo valor atual.
O cálculo deve começar com zero.
Mostre o resultado no console.
*/
console.log( '\nOperation:' );
var operation = justNumbers.reduce(function(acumulado, atual, indice, array) {
	let total;
	let result;

		acumulado += 1;
		result = acumulado * atual;
		return result;

		
},0)
console.log(operation);

/*
Faça o mesmo cálculo passado acima, mas começando do último item para o
primeiro. O nome da variável deve ser operation2. Mostre o resultado no
console.
*/
console.log( '\nOperation 2:' );
var operation2 = justNumbers.reduceRight(function(acumulado, atual, indice, array) {
	let total;
	let result;

		acumulado += 1;
		result = acumulado * atual;
		return result;

		
},0)
console.log(operation2);

/*
Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
a "língua do P".
PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
falada, como se você estivesse falando em código xD
*/
console.log( '\nSeu nome na língua do "P":' );
var name = ["Tiago", "Alves", 'de', "Oliveira"];

var newName = name.reduce(function(acumulado,atual,indice,array){
	
}, 0);
/*
Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
e atribuirá o seu nome invertido (usando o array criado acima).
*/
console.log( '\nInversed Name:' );
var inversedName = name.reduceRight(function(acumulado, atual, indice, array) {
	return acumulado + atual
});
console.log(inversedName);
/*
Mostre no console o array `numberObjects`.
*/
console.log( '\nNumber objects' );
console.log(numberObjects);

/*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects :("
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)
*/
console.log( '\nExiste um { number: 2 } em numberObjects?' );
var search = 2;
var resultNumberObject = numberObjects.some(function(item,indice,array) {
	return numberObjects[indice].number === search;
});

console.log(resultNumberObject ? `Existe um objeto { number : ${search} }` : `Não existe um objeto { number : ${search} } em numberObjects`);

console.log(resultNumberObject);
/*
Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
*/
console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
// ?

/*
Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
formato de String.
*/
console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
// ?

})()