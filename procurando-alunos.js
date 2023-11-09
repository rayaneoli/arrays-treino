const alunos = ['Leticia', 'Rayane', 'Catia', 'Gleci'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota (aluno){
    if(listaDeAlunosEMedias [0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno)

        const mediaDoAluno = medias[indice]

        console.log(`A média do(a) Aluno(a) ${aluno} é ${mediaDoAluno}`)
        

    }else {
        console.log('Aluno nao cadastrado')
    }
}
exibeNomeENota('Catia')