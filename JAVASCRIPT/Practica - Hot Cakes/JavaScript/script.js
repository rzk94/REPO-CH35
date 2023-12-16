let cantidadPersonas = "1";
let titulo = "Hot cakes para "+ cantidadPersonas+ " persona(s)\n";
let textoTazasHarina = "Tazas de harina para hotcake";
let textoTazaLeche = "Taza de leche";
let textoCucharaMantequilla = "Cucharada(s) de mantequilla derretida";
let textoHuevo = "Huevo(s)";
let textoCucharaVainilla = "Cucharada de vainilla";
let saltoLinea="<br>";1

let tazasHarina = .5;
let tazaLeche = .3;
let cucharaMantequilla = 1;
let huevo = 1;
let cucharaVainilla = .2;



document.write(titulo+saltoLinea+saltoLinea);
document.write("Ingredientes"+saltoLinea+
tazasHarina+" "+textoTazasHarina+saltoLinea+
tazaLeche+" "+textoTazaLeche+saltoLinea+
cucharaMantequilla+" "+textoCucharaMantequilla+saltoLinea+
cucharaVainilla+" "+textoCucharaVainilla+saltoLinea+
huevo+" "+textoHuevo+saltoLinea
);

document.write("<br><hr><br>");

cantidadPersonas =  Number(prompt("Dame para cuantas personas quieres los hotcakes"));
titulo = "Hot cakes para "+ cantidadPersonas+ " persona(s)\n";
document.write(saltoLinea+titulo+saltoLinea+saltoLinea);
document.write("Ingredientes"+saltoLinea+
(tazasHarina*cantidadPersonas).toFixed(2)+" "+textoTazasHarina+saltoLinea+
(tazaLeche*cantidadPersonas).toFixed(2)+" "+textoTazaLeche+saltoLinea+
(cucharaMantequilla*cantidadPersonas)+" "+textoCucharaMantequilla+saltoLinea+
(cucharaVainilla*cantidadPersonas).toFixed(2)+" "+textoCucharaVainilla+saltoLinea+
(huevo*cantidadPersonas)+" "+textoHuevo+saltoLinea
);

cantidadHarina =  Number(prompt("Cuantas tazas de harina tienes?"));
cantidadLeche =  Number(prompt("Cuantas tazas de leche tienes?"));
cantidadMantequilla =  Number(prompt("Cuantas cucharadas de mantequilla tienes?"));
cantidadHuevo =  Number(prompt("Cuantos huevos tienes?"));
cantidadVainilla=  Number(prompt("Cuantas cucharadas de vainilla tienes?"));

document.write("<br><hr><br>");


if (cantidadHarina >= (tazasHarina*cantidadPersonas)){
} else {
    let faltaHarina =  (tazasHarina*cantidadPersonas) - cantidadHarina;
    document.write(`Necesitas ${faltaHarina} tazas mas de harina.<br>`);
}

if (cantidadLeche >= (tazaLeche*cantidadPersonas)){
} else {
    let faltaLeche =  (tazaLeche*cantidadPersonas) - cantidadLeche;
    document.write(`Necesitas ${faltaLeche} tazas mas de leche.<br>`);
}

if (cantidadMantequilla >= (cucharaMantequilla*cantidadPersonas)){
} else {
    let faltaMantequilla =  (cucharaMantequilla*cantidadPersonas) - cantidadMantequilla;
    document.write(`Necesitas ${faltaMantequilla} cucharadas mas de mantequilla.<br>`);
}

if (cantidadHuevo >= (huevo*cantidadPersonas)){
} else {
    let faltaHuevo =  (huevo*cantidadPersonas) - cantidadHuevo;
    document.write(`Necesitas ${faltaHuevo} mas blanquillos.<br>`);
}

if (cantidadVainilla >= (cucharaVainilla*cantidadPersonas)){
} else {
    let faltaVainilla =  (cucharaVainilla*cantidadPersonas) - cantidadVainilla;
    document.write(`Necesitas ${faltaVainilla} cucharadas mas de vainilla.<br>`);
}