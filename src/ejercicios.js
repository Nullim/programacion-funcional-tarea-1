export function multiplicarPor10(array) {
    const nuevoArrayMultiplicado = array.map(numero => numero * 10);
    return nuevoArrayMultiplicado;
}

export function soloPares(array) {
    const arrayConSoloPares = array.filter(numero => numero % 2 === 0);
    return arrayConSoloPares;
}

export function moverALaDerecha(array) {
    const ultimo = array[array.length - 1];
    const arrayModificado = [...array.slice(0, array.length - 1)];
    arrayModificado.unshift(ultimo);
    return arrayModificado;
}

export function soloUnaPalabra(array) {
    const arraySinEspacios = array.filter(palabra => !palabra.includes(' '));
    return arraySinEspacios;
}

export function soloArraysPositivos(array) {
    return array.filter(arrayConNumeros => {
        return arrayConNumeros.every(numero => numero > 0);
    });
}

export function soloVocales(array) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const arraySinConsonantes = array.map(palabra => {
        const palabraSeparada = palabra.split('');
        const palabraSinConsonantes = palabraSeparada.filter(letra => vocales.includes(letra)).join('');
        return palabraSinConsonantes;
    });
    return arraySinConsonantes;
}

export function todasVocalesIguales(array) {
    return array.filter(palabra => {
        const vocalesIguales = palabra.toLowerCase().match(/[aeiou]/g);
        if (vocalesIguales.every(letra => letra === vocalesIguales[0])) {
            return true;
        }
        return false;
    });
}

export function duplicarMatriz(array) {
    return array.map(arrayParaMultiplicar => {
        return arrayParaMultiplicar.map(numero => numero * 2);
    });
}

export function mayoresDeEdadValidados(array) {
    return array.map(persona => {
        return {
            edad: persona.edad,
            mayor: persona.edad > 18 ? true : false,
            nombre: persona.nombre
        };
    });
}

export function transformarObjetoEnArray(objeto) {
    return Object.entries(objeto).map(([key, value]) => {
        return { id: key, ...value};
    });
}
