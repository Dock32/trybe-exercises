/*exercicio 1*/

let a = 7;
let b = 10;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

/*exercicio 2,3*/

let opcaoA = 10;
let opcaoB = 1;
let opcaoC = 1;

if (opcaoA >= opcaoB && opcaoA >= opcaoC) {
    console.log('Resultado: ' + opcaoA);
}

else if (opcaoB >= opcaoA && opcaoB >= opcaoC) {
    console.log('Resultado: ' + opcaoB);
}

else {
    console.log("Resultado: " + opcaoC);
}

/*exercicio 4*/

let numero = -9;

if (numero > 0) {
    console.log("Positive")
}

else if (numero < 0) {
    console.log('Negative')
}

else{
    console.log('Zero')
}

/*exercicio 5*/

let resultadoA = 5;
let resultadoB = 4;
let resultadoC = 9;

if (resultadoA < resultadoB + resultadoC && resultadoB < resultadoA + resultadoC && resultadoC < resultadoB + resultadoA) {
    console.log('true');
}

else {
    console.log(false);
}

/*exercicio 6*/

let pecaXadrex = 'Dama'.toLowerCase();

switch (pecaXadrex) {
    case 'cavalo':
        console.log('Salto em L.');
        break;

        case 'bispo':
            console.log('Diagonais.');
            break;
        
        case 'torre':
            console.log('Cruz.');
            break;

        case 'dama':
            console.log('Retas pelas fileiras, colunas e diagonais.');
            break;

        case 'rei':
            console.log('Uma casa em volta de si.');
            break;

        case 'peão':
            console.log('Move-se para frente.');
            break;

        default :
            console.log('Essa peça não existe.');
            break;
}

/*exercicio 7*/ 

let nota = 100;

if (nota < 0 || nota > 100) {
    console.log('Erro');
}
    else 
        if (nota >= 90) {
    console.log('A');
    }
        else 
            if (nota >= 80) {
            console.log('B');
        }
            else 
                if (nota >= 70) {
                console.log('C');
            }
                else 
                    if (nota >= 60) {
                    console.log('D');
                }
                    else 
                        if (nota >= 50) {
                        console.log('E');
                    }
                        else { 
                            console.log('F');
    
}

/*exercicio 8*/ 

let namber = 3;
let namber2 = 3;
let namber3 = 3;

if(namber && namber2 && namber3 %2 === 0) {
    console.log('True');
}
    else{
        console.log('False');
    }

/*exercicio 9*/ 

let namberA = 5;
let namberB = 5;
let namberC = 3;

if(namberA && namberB && namberC %2 !== 0) {
    console.log('True');
}
    else{
        console.log('False');
    }

/*exercicio 10*/ 

