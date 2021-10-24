window.addEventListener('load', ()=>{
    // referanciamos los elementos de DOM 
    const formCrear = document.getElementById('form-crear')
    const listaTareas = document.getElementById('lista-tareas')
    const inputCrear = document.getElementById('crear')
    const inputBuscar = document.getElementById('buscar')

    // Procedimiento para el alta
    formCrear.addEventListener('submit',(e)=>{
        e.preventDefault() //Evitamos que se recargue la pagina
        capturarValor()
    })

    // trim, nos sirve para eliminar espacios en blanco
    const capturarValor=()=>{
        const tareaNombre = inputCrear.value.trim();
        // operador ternario
        (tareaNombre.length) ? mostrarTareaHtml( tareaNombre ) : alert("Ingrese tarea")
    }
    const mostrarTareaHtml = ( tarea )=>{
        const liHtml = `<li><strong>${tarea}</strong><i class="fas fa-minus-circle borrar"></i></li>`
        // operador de asignacion de suma
        listaTareas.innerHTML += liHtml
    }

    // Procedimiento para el ALTA 
    inputBuscar.addEventListener('keyup',()=>{
        //Desatar evento caracter por caracter
        const caracter = inputBuscar.value.trim();
        busqueda(caracter)
    })

    const busqueda = (cadena)=>{
        //children nos proporciona las lista en un array, por lo cual definimos una constante para trabajar con ella
        const arreglo = Array.from(listaTareas.children)
        
        arreglo
            .filter( texto => !texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada =>{
                cadenaFiltrada.classList.add('textoFiltrado')
            })
        // para regresar elementos cuando hagamos la busqueda   
        arreglo
        .filter( texto => texto.textContent.toLowerCase().includes(cadena))
        .forEach(cadenaFiltrada =>{
            cadenaFiltrada.classList.remove('textoFiltrado')
        })
    }

    // Procedimiento para borrar item
    listaTareas.addEventListener('click',(e)=>{
        // console.log(e.target.classList)
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.remove()
        }
        inputBuscar.value = ''
    })

    
})