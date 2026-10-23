
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A sua escola começou a utilizar ferramentas de Inteligência Artificial para ajudar os alunos nas atividades. Qual é a sua opinião sobre essa novidade?",
        alternativas: [
            {
                texto: "A IA pode facilitar os estudos e ajudar a compreender conteúdos difíceis.",
                afirmacao: "Você percebeu que a Inteligência Artificial pode ser uma grande aliada na aprendizagem, ajudando os alunos a esclarecer dúvidas e aprender de novas maneiras."
            },
            {
                texto: "Tenho receio de que os alunos fiquem dependentes da tecnologia.",
                afirmacao: "Você compreendeu que, apesar dos benefícios da IA, é importante desenvolver o raciocínio próprio e não depender totalmente da tecnologia."
            }
        ]
    },
    {
        enunciado: "Sua professora passou uma atividade de matemática e você está com dificuldade para resolver algumas questões. Como você utilizaria a IA nessa situação?",
        alternativas: [
            {
                texto: "Pediria à IA que explicasse o conteúdo passo a passo para que eu pudesse aprender a resolver as questões.",
                afirmacao: "Você aprendeu a utilizar a IA como uma ferramenta de apoio, buscando explicações que ajudam a desenvolver seu próprio conhecimento."
            },
            {
                texto: "Pediria à IA as respostas prontas e copiaria tudo no caderno.",
                afirmacao: "Você percebeu que copiar respostas pode parecer mais fácil, mas compreender o conteúdo é essencial para aprender e se desenvolver academicamente."
            }
        ]
    },
    {
        enunciado: "Durante uma aula, sua turma começa a discutir se a Inteligência Artificial pode substituir os professores no futuro. Qual é a sua opinião?",
        alternativas: [
            {
                texto: "A IA pode ajudar os professores a preparar aulas e atividades, mas não substitui o contato humano.",
                afirmacao: "Você reconheceu que a IA pode apoiar o trabalho dos professores, enquanto a orientação, a empatia e a convivência continuam sendo fundamentais na educação."
            },
            {
                texto: "A IA poderia substituir os professores, pois consegue responder perguntas rapidamente.",
                afirmacao: "Você refletiu sobre as capacidades da IA e percebeu que responder perguntas não é suficiente para substituir o acompanhamento humano, a compreensão emocional e a orientação de um professor."
            }
        ]
    },
    {
        enunciado: "Você precisa preparar uma apresentação escolar e decide utilizar uma ferramenta de IA para criar imagens e organizar as informações. O que faria para garantir a qualidade do trabalho?",
        alternativas: [
            {
                texto: "Conferiria as informações, revisaria as imagens e adaptaria o conteúdo com minhas próprias ideias.",
                afirmacao: "Você entendeu que a IA pode facilitar a criação de trabalhos, mas verificar informações e utilizar a criatividade própria são atitudes essenciais para um resultado confiável."
            },
            {
                texto: "Utilizaria tudo o que a IA produzisse sem conferir as informações.",
                afirmacao: "Você descobriu que a IA pode cometer erros e apresentar informações falsas, por isso aprendeu a importância de verificar o conteúdo antes de utilizá-lo em atividades escolares."
            }
        ]
    },
    {
        enunciado: "Um colega utilizou a IA para escrever um trabalho inteiro e entregou o texto como se fosse de sua autoria. O que você acha dessa atitude?",
        alternativas: [
            {
                texto: "Não vejo problema, pois utilizar a IA torna a tarefa mais rápida e prática.",
                afirmacao: "Você percebeu que a praticidade da IA não elimina a responsabilidade acadêmica e que entregar um texto sem reconhecer a ajuda recebida pode comprometer a honestidade do trabalho."
            },
            {
                texto: "A IA deve ser usada como apoio, com revisão, ideias próprias e respeito às regras da escola.",
                afirmacao: "Você compreendeu que o uso responsável da IA exige honestidade, pensamento crítico e participação do aluno. Assim, a tecnologia se torna uma aliada da educação, e não uma substituta do aprendizado."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O futuro da IA nas escolas!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
