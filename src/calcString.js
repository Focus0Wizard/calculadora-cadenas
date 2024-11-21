const DEFAULT_DELIMITERS = /[,|-]/;

function calcular(cadena) {
    if (cadena.trim() === "") return "0";

    const delimitadores = extraerDelimitadores(cadena);
    const secuenciaNumerica = prepararNumeros(cadena, delimitadores);
    const suma = sumarNumeros(secuenciaNumerica);

    return suma.toString();
}

function extraerDelimitadores(cadena) {
    if (cadena.startsWith("//[")) {
        const match = cadena.match(/\/\/(\[.+\])/);
        if (match) {
            const delimitadoresPersonalizados = match[1]
                .slice(1, -1)
                .split("][")
                .map(escaparDelimitador);
            const regexDelimitadores = delimitadoresPersonalizados.join("|");
            return new RegExp(`${regexDelimitadores}|${DEFAULT_DELIMITERS.source}`);
        }
    }
    return DEFAULT_DELIMITERS;
}

function prepararNumeros(cadena, delimitadores) {
    const secuencia = cadena.replace(/\/\/(\[.+\])/, "").split(delimitadores);
    return secuencia.map(Number).filter(esNumeroValido);
}

function sumarNumeros(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

function escaparDelimitador(delimitador) {
    return delimitador.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function esNumeroValido(numero) {
    return numero <= 1000;
}

export default calcular;
