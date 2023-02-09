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

if (students[0].math >= 7) {
    console.log(`Aluna ${students[0].name} aprovada com nota ${students[0].math}!`)
} else {
    (`Aluna ${students[0].name} reprovada com nota ${students[0].math}!`)
}

if (students[0].math >= 7) {
    console.log(`Aluno ${students[1].name} aprovado com nota ${students[1].math}!`)
} else {
    (`Aluno ${students[1].name} reprovado com nota ${students[1].math}!`)
}

if (students[0].math >= 7) {
    console.log(`Aluno ${students[2].name} aprovado com nota ${students[2].math}!`)
} else {
    (`Aluno ${students[2].name} reprovado com nota ${students[2].math}!`)
}

if (students[0].math >= 7) {
    console.log(`Aluna ${students[3].name} aprovada com nota ${students[3].math}!`)
} else {
    (`Aluna ${students[3].name} reprovada com nota ${students[3].math}!`)
}

if (students[0].math >= 7) {
    console.log(`Aluna ${students[4].name} aprovada com nota ${students[4].math}!`)
} else {
    (`Aluna ${students[4].name} reprovada com nota ${students[4].math}!`)
}
