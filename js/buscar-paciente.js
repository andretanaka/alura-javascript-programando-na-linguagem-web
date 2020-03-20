let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    console.log("Buscando...");
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            let pacientes = JSON.parse(xhr.responseText);
            console.log(pacientes);
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.statusText);
            let erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }

        
    });

    xhr.send();

});

