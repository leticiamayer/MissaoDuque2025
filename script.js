const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "Quem foi o campeão olímpico de skate street masculino de 2024? " ,
        alternativa: [
            {
            texto: "Yuto Horigome",
            afirmação: "resposta correta",
            pontos: 1
            },
            {
                texto: "Jagger Eaton",
                afirmação: "Resposta errada",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "O skate tem alguma relação com o surf " ,
        alternativa: [
            {
            texto: "Sim",
            afirmação: "resposta correta",
            pontos: 1
            },
            {
                texto: "Não",
                afirmação: "Resposta errada",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "O que é um flip? " ,
        alternativa: [
            {
            texto: "O flip é uma manobra onde o skate gira horizontalmente, sem que o skatista salte",
            afirmação: "resposta correta",
            pontos: 1
            },
            {
                texto: "É uma manobra simples onde o skatista salta com a prancha",
                afirmação: "Resposta errada",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Em que ano o skate foi criado? " ,
        alternativa: [
            {
            texto: "Por volta de 1950",
            afirmação: "resposta correta",
            pontos: 1
            },
            {
                texto: "Por volta de 1990",
                afirmação: "Resposta errada",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "O skate pode trazer algum perigo? " ,
        alternativa: [
            {
            texto: "Sim, pode trazer lesões principalmente em iniciantes, o esporte pode trazer fraturas e etc.",
            afirmação: "resposta correta",
            pontos: 1
            },
            {
                texto: "Não, o esporte por ser fácil evita perigos.",
                afirmação: "Resposta errada",
                pontos: 0
            }
        ]
    },
]