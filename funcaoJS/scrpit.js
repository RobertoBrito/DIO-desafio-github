/*Atividade 1: Alunos Aprovados
Crie uma função que receba o array alunose um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilizar uma técnica de "desestruturação de objetos" para manipular as propriedades desejadas de cada aluno.*/
const alunos = [{
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sófia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'pedrinho',
        nota: 3,
        turma: '2C',
    },
];

function alunoAprovado(array, media) {
    let aprovados = [];
    for (let i = 0; i < array.length; i++) {
        const { nota, nome } = array[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunoAprovado(alunos, 5))