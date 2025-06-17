
export default class Calculadora {
    constructor(expressao, resultado) {
        this._expressao = expressao;
        this._resultado = resultado;
    }

    get valor() {
        return this._expressao.value;
    }

    get resultado() {
        return this._resultado.value;
    }

    adicionar(caractere) {
        this._expressao.value += caractere;
    }

    apagar() {
        this._expressao.value = this._expressao.value.slice(0, -1);
    }

    limpar() {
        this._expressao.value = '';
        this._resultado.value = '';
    }

    calcular() {
        try {
            const resultado = eval(this._expressao.value
                .replace('√', '**0.5')
                .replace('sin', 'Math.sin')
                .replace('cos', 'Math.cos')
                .replace('ln', 'Math.log')
                .replace('e', 'Math.E')
                .replace('π', 'Math.PI')
                .replace('r', '**(1/')
            );
            if (resultado === Infinity) {
                this._resultado.value = 'Infinito';
            } else if (isNaN(resultado)) {
                this._resultado.value = 'Erro';
            } else {
                this._resultado.value = resultado;
            }
        } catch {
            this._resultado.value = 'Erro';
        }
    }
}
