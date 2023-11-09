const notas = [10, 6, 8];

// agora vamos supor que fosse acrescentar mais uma nota que ficou faltando. 
// é importante ressaltar que para funcionar o notas.push() tem que ser declarado logo apos o array
notas.push(7)

const media = (notas[0] + notas[1] + notas[2])/notas.length

console.log(media)


