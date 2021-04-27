/*exercicio 4*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0;index < numbers.length; index +=1){
    soma += numbers[index];

    let total = soma / numbers.length;

if (total > 20){
    console.log('Valor maior que 20');
}
else{
    console.log('Valor menos ou igual a 20');
};

};

/*exercicio 5*/

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var maxNumber = numbers1.reduce(function(a, b) {
    return Math.max(a, b);
});
    console.log(maxNumber);

/*exercicio 6*/

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let nPar = 0;
let nImpar = 0;

for (let index = 0; index <= numbers2.length; index +=1){
    if(numbers2[index]%2===0){
        nPar+=1;
        
    };
    
    nImpar = index - nPar;
    
};
    console.log('Par: ' + nPar);
    console.log('Impar: ' + nImpar);

/*exercicio 7*/

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers3[0];

    for (let index = 0; index < numbers3.length; index +=1){
        if(menor > numbers3[index]){
            menor = numbers3[index];
        };
    };
    console.log('Menor valor: ' + menor);

/*exercicio 8*/

let list = []; 

for(let index = 0; index < 25; index +=1){
    list.push(index);
}
console.log(list)

/*exercicio 9*/

let lista = [0,  1,  2,  3,  4,  5,  6,  7,
    8,  9, 10, 11, 12, 13, 14, 15,
   16, 17, 18, 19, 20, 21, 22, 23,
   24];

for (let index =0; index < lista.length; index +=1){
    console.log(lista[index] /2)
}
