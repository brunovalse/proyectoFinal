$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

const formUsuarios = $('#form-usuario')


const usuario = $('#usuario')
const password = $('#password')
const email = $('#email')
const telefono = $('#telefono')

const listaUsuarios = [ 
 ];

$(formUsuarios).on('submit',(event) =>{


    const nombreUsuario = $(usuario).val();

    const passwordUsuario = $(password).val();

    const emailUsuario = $(email).val();

    const telefonoUsuario = $(telefono).val();

    console.log(nombreUsuario)
    console.log(passwordUsuario)
    console.log(emailUsuario)
    console.log(telefonoUsuario)

    




    if(localStorage.hasOwnProperty("nombreUsuario") ) {

        alert('nombre')
    }
    else if(localStorage.hasOwnProperty("passwordUsuario" )) {
        alert('password')
    }
    else if(localStorage.hasOwnProperty("emailUsuario" )) {
        alert('email')
    }
    else if(localStorage.hasOwnProperty("telefonoUsuario" )) {
        alert('telefono')
    }


    else (localStorage.getItem('telefonoLocal') === null, localStorage.getItem('emailUsuario') === null,localStorage.getItem('passwordUsuario') === null, localStorage.getItem('nombreUsuario') === null )   
        
       
        listaUsuarios.push({
            nombreUsuario, passwordUsuario, emailUsuario, telefonoUsuario


        })
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
        console.log(localStorage)

        

    }




 )










