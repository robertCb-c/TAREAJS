
function personaje1() {
    document.getElementById("desc1").innerHTML="Papa Noel reparte regalos por todo el mundo en Nochebuena y tamb es el espiritu navideños.";
}
function personaje2() {
    document.getElementById("desc2").innerHTML="El Grinch es un personaje verde que intenta robar la Navidad pero se vuelve bueno.";
}

function personaje3() {
    document.getElementById("desc3").innerHTML="Jack un honorable rey del castillo quien intenta llevar la navidad a halloween dado por su cansancio.";
}
function agregarRegalo() {
    var regalo=document.getElementById("regalo").value;
    if (regalo !="") {
        document.getElementById("listaRegalos").innerHTML+="<li>"+regalo+"</li>";
        document.getElementById("regalo").value="";
    }
}
function limpiarRegalos() {
    document.getElementById("listaRegalos").innerHTML="";
}
var total=0;
function agregarPlato(nombre, precio) {
    document.getElementById("carrito").innerHTML+="<li>"+nombre+"-"+precio+"Bs</li>";
    total =total +precio;
    document.getElementById("total").value=total;
}
function vaciarCarrito() {
    total=0;
    document.getElementById("carrito").innerHTML ="";
    document.getElementById("total").value =0;
}
function modoNavidad() {
    document.getElementById("cuadro1").style.backgroundColor="darkgreen";
    document.getElementById("cuadro1").style.color="white";
    document.getElementById("cuadro2").style.backgroundColor="darkred";
    document.getElementById("cuadro2").style.color="white";
}

function modoNormal() {
    document.getElementById("cuadro1").style.backgroundColor="white";
    document.getElementById("cuadro1").style.color="black";
    document.getElementById("cuadro2").style.backgroundColor="white";
    document.getElementById("cuadro2").style.color="black";
}
