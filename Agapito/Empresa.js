class Empleado{
    constructor(nombre = "", salario=0){
        this.nombre = nombre;
        this.salario = salario;
    }

    show(){
        console.log(`${this.nombre} ${this.salario}`);
    }
}

class Empresa{
    constructor(nombre="", emprelados=[]){
        this.nombre = nombre;
        this.empleados = emprelados;
    }

    addEmpreado(empleado){
        this.empleados.push(empleado);
    }

    salarioMedia(){
        let salario = 0;
        for(let item of this.empleados){
            salario+=item.salario;
        }
        return salario/this.empleados.length;
    }
}

let alex = new Empleado("Alex", 1200);
let golosa = new Empleado("Glosa", 2500); //;)
let mono = new Empleado("Owen", 1500);
let empresa = new Empresa("Banana System",[alex]);
empresa.addEmpreado(golosa);
empresa.addEmpreado(mono);
// console.log(empresa.salarioMedia());

let emprelados = [{
        nombre: "Alex",
        salario: 1200
    },{
        nombre: "Golosa",
        salario: 2500
    },{
        nombre: "Owen",
        salario: 1500
    }
];
//empresa = new Empresa("Banana System",emprelados);
//console.log(empresa.salarioMedia());
let json = JSON.stringify(empresa);
