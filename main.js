function comenzar(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    reconocimiento = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4OY-YGKVl/model.json", modeloListo);
}
function modeloListo(){
    reconocimiento.classify(mostrarResultado);
}
function mostrarResultado(error, resultados){
    if(!error){
        sonido = resultados[0].label;
        probabilidad = Math.round(resultados[0].confidence * 100);
        document.getElementById("sonido").innerHTML = "Escucho " + sonido;
        document.getElementById("probabilidad").innerHTML = "probabilidad " + probabilidad + "%";
        imagen1 = document.getElementById("imagen1");
        imagen2 = document.getElementById("imagen2");
        imagen3 = document.getElementById("imagen3");
        imagen4 = document.getElementById("imagen4");
        imagen5 = document.getElementById("imagen5");
        imagen1.src = "baldi.png";
        imagen2.src = "calamardo.png";
        imagen3.src = "dog.png";
        imagen4.src = "clubpengin.png";
        imagen5.src = "";
        if(sonido == "aplausos"){
            imagen1.src = "bldi.gif";
        }else if(sonido == "chasquidos"){
            imagen2.src = "calamardoDance.gif";
        }else if(sonido == "silbido"){
            imagen3.src = "perro.gif"
        }else if(sonido == "engrapadora"){
            imagen4.src = "pinguino.gif"
        }else if(sonido == "Background Noise"){
            imagen5.src = "babchark.gif"
        }
    }
}