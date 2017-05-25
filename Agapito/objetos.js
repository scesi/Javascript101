//parseo de datos String
var str = '{"name":"alex", "edad":25}';
var alex = JSON.parse(str);
console.log(alex.name);

class Persona{
    
}

var alex = { 
    nombre: "alexander marquez de la casa de drones",
    edad: 24,
    sueldo: "no mucho",
    drones:[
        {
            modelo:"QAV250",
            tipo:"carrera"
        },
        {
            modelo:"Mavic Pro",
            tipo:"Filmacion"
        },
        {
            modelo:"Facilona",
            tipo:"Juguete"
        }
    ]
};

mostrarDronesES6 = (alex) =>{
    for(let dron of alex.drones){
        console.log(`el modelo es: ${dron.modelo} y es: ${dron.tipo}`);
    }
}

mostrarDronesES5 = (alex) => {
    alex.drones.forEach(function (dron){
            console.log(`el modelo es: ${dron.modelo} y es: ${dron.tipo}`);
        }
    )
}

mostrarDronesES6(alex);
mostrarDronesES5(alex);