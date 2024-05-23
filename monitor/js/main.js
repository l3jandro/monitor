
let respuesta = document.getElementById("respuesta");

function callApiRequest(){

// Make a request for a user with a given ID
    axios.get('http://18.223.23.74/iot-car-control/back-end/apis/getRegistro.php')
    .then(function (response) {
        // handle success
        console.log(response);

        let respuestaServidor =
        response.data=='w'?"Adelante": response.data=='a'?"Izquierda":
        response.data=='s'?"Atras":response.data=='d'?"Derecha": "Detener";
        
        respuesta.innerHTML="Respuesta: <strong>" + respuestaServidor +"</strong>";


    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

setInterval(callApiRequest, 2000);
