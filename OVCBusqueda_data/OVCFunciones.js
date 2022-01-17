// Elimina los espacios en blanco anteriores y posteriores de una cadena
function trim(str) {
    var i = 0, p = str.length - 1;
    while (str.charAt(i) == ' ') i++;
    while (str.charAt(p) == ' ') p--;
    if (i > p) return '';
    return str.substring(i, p + 1);
}
function ValidarExpresion(valor, expresion) {
    if (trim(valor).length == 0)
        return true;
    var rx = new RegExp(expresion);
    var matches = rx.exec(valor);
    return (matches != null && valor == matches[0]);
}
// Substituye las mayusculas acentuadas por mayusculas y las Ñ por ~
function normcaracteres(cad) {
    while (cad.indexOf('Á') > 0) cad = cad.replace('Á', 'A');
    while (cad.indexOf('É') > 0) cad = cad.replace('É', 'E');
    while (cad.indexOf('Í') > 0) cad = cad.replace('Í', 'I');
    while (cad.indexOf('Ó') > 0) cad = cad.replace('Ó', 'O');
    while (cad.indexOf('Ú') > 0) cad = cad.replace('Ú', 'U');
    while (cad.indexOf('Ñ') > 0) cad = cad.replace('Ñ', '~');
    return cad;
}

//Devuelve si un campo es numerico (True o False)
function esnumerico(cCadena) {
    var una
    una = false;
    for (var i = 0; i < cCadena.length; i++) {
        var ch = cCadena.substring(i, i + 1)
        if (((ch < "0" || "9" < ch) & ch != ",")) {
            return false;
        }
        if (ch == ",") {
            if (una) {
                return false;
            }
            else {
                una = true;
            }
        }

    }
    return true;
}
function esentero(cCadena) {
    for (var i = 0; i < cCadena.length; i++) {
        var ch = cCadena.substring(i, i + 1)
        if (ch < "0" || "9" < ch) {
            return false;
        }

    }
    return true;
}
//Devuelve si un campo es alfanumerico (True o False)
function esalfanumerico(cCadena) {
    var r, re;

    re = /[,;'"`´]/g;
    r = cCadena.replace(re, "");

    var match = r.match(/[^a-zA-Z0-9]*[a-zA-Z0-9]+[^a-zA-Z0-9]*/);
    if (match == null) {
        return false;
    }
    else {
        return true;
    }
}


//Aqui empieza la función de los select 
var cadena = ""

function keyscomboProv(sele, destino, provincia, esNacional) {
    cadena = cadena + String.fromCharCode(window.event.keyCode)
    var i = 0
    var obj = document.getElementById(sele)
    for (i = 1; i < obj.length; i++) {
        //var aux=obj(i).value
        var aux = obj(i).text
        if (aux.toUpperCase().slice(0, cadena.length) == cadena.toUpperCase()) {
            obj(i).selected = true
            provincia = obj(i).value
            cargaMunicipios(destino, provincia, esNacional)
            return
        }
    }
    cadena = String.fromCharCode(window.event.keyCode)

    return
}
function keyscomboProvNacional(sele, provincia, esNacional) {
    cadena = cadena + String.fromCharCode(window.event.keyCode)
    var i = 0
    var obj = document.getElementById(sele)
    for (i = 1; i < obj.length; i++) {
        //var aux=obj(i).value
        var aux = obj(i).text
        if (aux.toUpperCase().slice(0, cadena.length) == cadena.toUpperCase()) {
            obj(i).selected = true
            provincia = obj(i).value
            return
        }
    }
    cadena = String.fromCharCode(window.event.keyCode)

    return
}
cadena = ""
function keyscomboMuni(sele) {
    cadena = cadena + String.fromCharCode(window.event.keyCode)
    var i = 0
    var obj = document.getElementById(sele)
    for (i = 1; i < obj.length; i++) {
        //var aux=obj(i).value
        var aux = obj(i).text
        if (aux.toUpperCase().slice(0, cadena.length) == cadena.toUpperCase()) {
            obj(i).selected = true
            return
        }
    }
    cadena = String.fromCharCode(window.event.keyCode)

    return
}	
