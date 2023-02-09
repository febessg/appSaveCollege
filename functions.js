const students = [
    {
        name: "Fernanda",
        height: 1.65,
        age: 25,
        sex: "feminino",
        room: "FS Trindade",
        math: 10
    },
    {
        name: "Eduardo",
        height: 1.79,
        age: 26,
        sex: "masculino",
        room: "FS Trindade",
        math: 8
    },
    {
        name: "Guilherme",
        height: 1.83,
        age: 28,
        sex: "masculino",
        room: "FS Trindade",
        math: 5
    },
    {
        name: "Elena",
        height: 1.58,
        age: 27,
        sex: "feminino",
        room: "FS Trindade",
        math: 4.75
    },
    {
        name: "Teresa",
        height: 1.68,
        age: 24,
        sex: "feminino",
        room: "FS Trindade",
        math: 7.5
    }
]

console.log(students)

var media = (students[0].math + students[1].math + students[2].math + students[3].math + students[4].math) / 5

console.log( `A média da turma é ${media}`)

for (let i = 0; i < students.length; i++) {
    if (students[i].math >= 7) {
    console.log(`Aluno(a) ${students[i].name} aprovado(a) com nota ${students[i].math}!`)
} else {
    console.log(`Aluno(a) ${students[i].name} reprovado(a) com nota ${students[i].math}!`)
}
}