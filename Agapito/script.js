var alex = { 
    "nombre": "alexander marquez de la casa de drones",
    "edad": 24
};

function mostrar(){
    console.log(`hola mi nombre es:
${alex.nombre} hola`);

    console.log("hola mi nombre es:\n" + alex.nombre+" hola");
}

var condicionif = function(golosa){
    if(golosa.edad > 27){
        console.log("Que nos paso!");
    }
    else{
        console.log("Gordito sensual xD");
    }
}

var mostrar2 = (valor) => {
    valor = valor + 1;
    console.log(valor);
}

var correFuncionCorre = function(funcion1,valor){
    funcion1(valor);
}

correFuncionCorre(condicionif,alex);
correFuncionCorre(mostrar2,3);