
import Calculadora from './Calculadora.js';

const $calculadora = document.getElementById('calculadora');
const $expressao = $calculadora.querySelector('#expressao');
const $resultado = $calculadora.querySelector('#resultado');
const listaHistorico = document.getElementById('lista-historico');

const calc = new Calculadora($expressao, $resultado);

const teclas = {
    '0': () => calc.adicionar('0'),
    '1': () => calc.adicionar('1'),
    '2': () => calc.adicionar('2'),
    '3': () => calc.adicionar('3'),
    '4': () => calc.adicionar('4'),
    '5': () => calc.adicionar('5'),
    '6': () => calc.adicionar('6'),
    '7': () => calc.adicionar('7'),
    '8': () => calc.adicionar('8'),
    '9': () => calc.adicionar('9'),
    '.': () => calc.adicionar('.'),
    '+': () => calc.adicionar('+'),
    '-': () => calc.adicionar('-'),
    '*': () => calc.adicionar('*'),
    '/': () => calc.adicionar('/'),
    '(': () => calc.adicionar('('),
    ')': () => calc.adicionar(')'),
    '^': () => calc.adicionar('**'),
    '2√': () => calc.adicionar('√'),
    'r': () => calc.adicionar('r'),
    's': () => calc.adicionar('sin('),
    'c': () => calc.adicionar('cos('),
    'l': () => calc.adicionar('ln('),
    'f': () => calc.adicionar('!'),
    'e': () => calc.adicionar('e'),
    'DEL': () => calc.apagar(),
    'AC': () => calc.limpar(),
    '=': () => {
        const expressao = calc.valor;
        calc.calcular();
        const resultado = calc.resultado;
        adicionarAoHistorico(expressao, resultado);
    }
};

$calculadora.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const acao = teclas[btn.dataset.key];
        if (acao) acao();
    });
});

function adicionarAoHistorico(expressao, resultado) {
    if (!expressao) return;
    const item = document.createElement('li');
    item.textContent = `${expressao} = ${resultado}`;
    listaHistorico.prepend(item);
}

// Trocar tema
const botaoTema = document.getElementById('trocar-tema');
botaoTema.addEventListener('click', () => {
    const temaAtual = document.documentElement.getAttribute('data-tema');
    if (temaAtual === 'claro') {
        document.documentElement.removeAttribute('data-tema');
    } else {
        document.documentElement.setAttribute('data-tema', 'claro');
    }
});
