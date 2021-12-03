const formRevistas = $('#form-revistas')

const inputNombre = $('#input-nombre-revista');

const inputPaginas = $('#input-pagina-revista');

const inputAño = $('#input-año-revista');

const btn = $('#btn');  

let revistaStorage = [];

$(formRevistas).on('submit',(event) =>{

    event.preventDefault();

    const nombre = $(inputNombre).val();

    const paginas = $(inputPaginas).val();

    const año = $(inputAño).val();

    console.log(nombre)
    console.log(paginas)
    console.log(año)

    
    


    if(nombre == 'ole'){

        alert('Ya existe')
    
    }
    
    else if( nombre == 'el grafico'){
        alert('Ya existe')
    }
        
    else if(nombre == 'gente'){
        alert('Ya existe')
    }
    
    else if(nombre == 'billboard'){
        alert('Ya existe')
        }
    
    else if(nombre == 'forbes'){
        alert('Ya existe')
    }
    else {
        
        var divJS = $("<p></p>").text('la revista ' + nombre + ' ya esta siendo revisada')
        $('body').append(divJS)   

        revistaStorage.push({
            nombre, paginas, año


        })
        localStorage.setItem("revistaStorage", JSON.stringify(revistaStorage))
        console.log(localStorage)

        

    }
    
    




})




$('#btn').click(function(){
    console.log('Haz hecho click')
    
    }
    );



    $(document).ready(function () {
        $('#terminos').click(function (e) {
            e.preventDefault();
            $.get("terminos.txt", function (data, textStatus, jqXHR ) {
                
                $('#div-terminos').prepend(`
                
                <div> ${data}
                
                
                
                `
                )

            })
            
        })
    })