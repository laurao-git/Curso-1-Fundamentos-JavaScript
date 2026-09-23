console.log(salarios);

// Análisis Personal de Juanita.

function encontrarPersona(busquedaPersona){
    return salarios.find(persona => persona.name == busquedaPersona)

//     const persona = salarios.find((persona) => {
//     return persona.name == busquedaPersona;

// });

// return persona;

}

function medianaPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento){
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    
    // console.log(salarios);
    return medianaSalarios;

}

function proyeccionPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++){

        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        // Para entrar a un arreglo, hay que entrar a la propiedad de cada objeto, se hace con punto y la propiedad a la que se vaya a usar, por ejemplo (salario).
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    // console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;

}

// empresa igual a objeto, que se llenará con la información de todas las empresas.
const empresas = {};

// el método .forEach() solo ejecuta una función por cada elemento del Array.
// el método .map devuelve un Array en lo que se retorne de cada ejecución.

for (persona of salarios){
    for (trabajo of persona.trabajos){
        if (!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);

    }
}

console.log({empresas});


function medianaEmpresaYear(nombre, year){
    if (!empresas[nombre]){
        console.warn("La Empresa no Existe.");
        return;

    }else if(!empresas[nombre][year]) {
        console.warn("La Empresa no dió salarios ese año.");
    } else {

       return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

const proyeccionEmpresa = [];

function proyeccionPorEmpresa(nombre){
    if(!empresas[nombre]){
        console.warn("La Empresa No Existe.");
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) =>{
            return medianaEmpresaYear(nombre, year);
        });

        let porcentajesCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++){

        const salarioActual = listaMedianaYears[i].salario;
        const salarioPasado = listaMedianaYears[i - 1];
        // Para entrar a un arreglo, hay que entrar a la propiedad de cada objeto, se hace con punto y la propiedad a la que se vaya a usar, por ejemplo (salario).
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;

    return nuevaMediana;
    }
}

function medianaGeneral (){
    const listaMedianas = salarios.map(persona => medianaPersona(persona.name));

    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}



function medianaTop10() {
    const listaMedianas = salarios.map(persona => medianaPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

    //console.log({top10, medianasOrdenadas});

    // slice.
    // splice.

    // console.log({medianasOrdenadas});

    const medianaTop10 = PlatziMath.calcularMediana(top10);

    return medianaTop10;
}

