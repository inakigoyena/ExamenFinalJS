//1)


let paises = [
    {
    nombre: "Argentina",
    continente: "Sudamérica",
    poblacion: 40000000
    },
    {
    nombre: "Colombia",
    continente: "Sudamérica",
    poblacion: 50372000
    },
    {
    nombre: "Brasil",
    continente: "Sudamérica",
    poblacion: 300000000
    },
    {
    nombre: "Etiopía",
    continente: "África",
    poblacion: 15000000
    },
    {
    nombre: "Chile",
    continente: "Sudamérica",
    poblacion: 10000000
    }
];



function buscarPaises(array, nombreContinente, cantPoblacion){
    let arrayPaises = [];
    for (let i = 0; i < array.length; i++){
        if(array[i].continente === nombreContinente && array[i].poblacion >= cantPoblacion){
            arrayPaises.push(array[i])
        }
    }
    return arrayPaises
}

console.log(buscarPaises(paises, "Sudamérica",10000000))



//2)


let arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];

console.log(arrayDeNumeros)

function bubbleSort(array, orden){
    if(orden === "ASC"){
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if(array[j] > array[j +1]){
                    let temporal = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temporal;
                }
            }
        }
    }else if(orden === "DESC"){
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if(array[j] < array[j +1]){
                    let temporal = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temporal;
                }
            }
        }
    }
    return array
}

console.log(bubbleSort(arrayDeNumeros, "DESC"))


//3)


let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];

function sumarValores(matriz){
    let acumulador = 0;
    for (let i = 0; i < matriz[1].length; i++) {
        acumulador += matriz[1][i]
    }
    return acumulador
}

console.log(sumarValores(matriz))

function pares(matriz){
    let arrayPares = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(matriz[i][j] % 2 === 0){
                arrayPares.push(matriz[i][j])
            }
        }
    }
    return arrayPares
}

console.log(pares(matriz))