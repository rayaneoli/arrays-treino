// Calculo de media 

// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

// const media = (nota1 + nota2 + nota3 + nota4)/4

// console.log(media)

// Caso se tenha uma quantidade muito grande de dados iria se tornar mais trabalhoso fazer o calculo igual a cima.
// a outra opcao seria usar um array

const notas = [10, 6.5, 8, 7.5]

// caso eu tenha muitos valores dentro do meu array se torna dificil ter que contar item por item, e tem grandes chances de erros,
// nesse caso eu vou usar a propiedade .length que vai pegar a quantidade total dentro do meu array pra fazer a media.

const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

if (media >= 5){
    console.log('Aluno aprovado');
}else{
    console.log('Aluno reprovado')
}
// Para realizar a soma eu tenho que declarar a posicao de cada nota dentro do meu Array, lembro que sempre começa do 0.
console.log(Math.round(media))