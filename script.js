const questions = [
  {
    question: "Qual é a finalidade da declaração 'let' em JavaScript?",
    answers: [
      'Definir uma constante',
      'Criar uma variável com escopo global',
      'Criar uma variável com escopo de bloco',
    ],
    correct: 2,
  },
  {
    question: 'O que é uma função em JavaScript?',
    answers: [
      'Um tipo de dado',
      'Um operador matemático',
      'Um bloco de código reutilizável',
    ],
    correct: 2,
  },
  {
    question: "Como se compara '==' com '===' em JavaScript?",
    answers: [
      'São equivalentes',
      'Comparação estrita de valor e tipo',
      'Comparação de valor apenas',
    ],
    correct: 1,
  },
  {
    question: 'O que é o DOM em JavaScript?',
    answers: [
      'Uma linguagem de programação',
      'Um modelo de objeto para documentos HTML',
      'Um método de criptografia',
    ],
    correct: 1,
  },
  {
    question: 'Como você adiciona um comentário de uma linha em JavaScript?',
    answers: [
      '// Este é um comentário',
      '<!-- Este é um comentário -->',
      '/* Este é um comentário */',
    ],
    correct: 0,
  },
  {
    question: "O que é 'NaN' em JavaScript?",
    answers: [
      'Um número infinito',
      'Um valor indefinido',
      "Um valor que representa 'Not a Number'",
    ],
    correct: 2,
  },
  {
    question: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    answers: [
      'São iguais',
      "'null' representa ausência de valor, 'undefined' representa um valor indefinido",
      "'undefined' representa ausência de valor, 'null' representa um valor indefinido",
    ],
    correct: 1,
  },
  {
    question: 'O que é o operador ternário em JavaScript?',
    answers: [
      'Um operador lógico',
      'Um operador de comparação',
      'Um operador condicional',
    ],
    correct: 2,
  },
  {
    question: 'Como se declara um array em JavaScript?',
    answers: ['array = []', 'let array = {}', 'let array = []'],
    correct: 2,
  },
  {
    question: "Qual é a função do método 'map()' em JavaScript?",
    answers: [
      'Mapear uma localização geográfica',
      'Iterar sobre os elementos de um array e modificar cada elemento',
      'Conectar-se a um banco de dados',
    ],
    correct: 1,
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corrects = new Set();
const totalQuestions = questions.length;
const showTotal = document.querySelector('#correct-answers span');
showTotal.textContent = corrects.size + ' de ' + totalQuestions;

for (const item of questions) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.question;

  for (let answer of item.answers) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = answer;
    dt.querySelector('input').setAttribute(
      'name',
      'question-' + questions.indexOf(item)
    );
    dt.querySelector('input').value = item.answers.indexOf(answer);
    dt.querySelector('input').onchange = (e) => {
      const isCorrect = e.target.value == item.correct;

      corrects.delete(item);
      if (isCorrect) {
        corrects.add(item);
      }

      showTotal.textContent = corrects.size + ' de ' + totalQuestions;
    };

    quizItem.querySelector('dl').appendChild(dt);
  }
  quizItem.querySelector('dl dt').remove();

  quiz.appendChild(quizItem);
}
