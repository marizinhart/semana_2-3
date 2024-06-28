const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

 const perguntas = [
  {
     enunciado: "Apos você sair da escola, tu se depara com uma tecnologia nova, isto é:",
                
       alternativas: [
                
      "Surpriendente!",
                
      "horrível"
                
  ]
 },
{
      enunciado: "O que é uma ingteligencia artificial?",
     alternativas: [
       "É a capacidade que uma máquina tem para produzir competências semelhantes ás humanas como raciocínio!",
                         
        "É uma capacidade que não trás benefício nenhum"
 ]
  },
  {
      enunciado: "Onde é usada essa tecnologia?",
      alternativas: [
       "Em sistemas de reconhecimento de imagem, como placas e etc!",
                            
        "Não é usada em nada!"
 ]
 },
 {
      enunciado: "O que ela pode fazer?",
      alternativas: [
         "Avaliar dados, analisar imagens, ajudar em trabalhos!",
                
          "Expressar emoções, empatia e ter sentimentos!"
 ]
  },
 {
       enunciado: "Como ela pode mudar a maneira como trabalhamos?",
     alternativas: [
      "Nos ajudando a fazer um trabalho, orgânizando nossos horarios!",
                                   
       "Ela não interfere em nada!"
  ]
  },
   ];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
