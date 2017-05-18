var alex = { 
    "nombre": "alexander marquez de la casa de drones",
    "edad": 24,
    "sueldo": "no mucho",
    "drones":[
        {
            "modelo":"QAV250",
            "tipo":"carrera"
        },
        {
            "modelo":"Mavic Pro",
            "tipo":"Filmacion"
        },
        {
            "modelo":"Facilona",
            "tipo":"Juguete"
        }
    ]
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

//correFuncionCorre(condicionif,alex);
//correFuncionCorre(mostrar2,3);

pares100 = () => {
    for(let i=1; i<=100; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}

pares100();