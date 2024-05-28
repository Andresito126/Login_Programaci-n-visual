function iniciar(){

    listaUsuarios= JSON.parse(localStorage.getItem("lista")); //obtiene la lista
    let valorUsuario= document.getElementById("RUser").value;
    let valorPassword= document.getElementById("RPass").value;
    let mensaje= "";
    



    for(let i=0; i<listaUsuarios.length; i++){

//                          trim limpia espacios en blanco antes y al final

// apunto a la lista posteriormente al atributo     
                                //comparo el valor de la variable con la lista                         
        if(listaUsuarios[i].usuario == valorUsuario.trim() && listaUsuarios[i].pass == valorPassword.trim()){
        mensaje="HA iniciado sesión";
        i= listaUsuarios.length+1;

    }
    else{
        mensaje= "Usuario o password incorrecto";
    }

}
alert(mensaje);
   
}



