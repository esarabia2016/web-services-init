//Función que encuentra el Layer.
function MM_findObj(n, d) { //v4.01
    var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n); return x;
}
//Función que oculta o muestra Layer Informativo.
function MM_showHideLayers() { //v6.0
    var i, p, v, obj, args = MM_showHideLayers.arguments;
    for (i = 0; i < (args.length - 2); i += 3) if ((obj = MM_findObj(args[i])) != null) {
        v = args[i + 2];
        if (obj.style) { obj = obj.style; v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v; }
        obj.visibility = v;
    }
}
//Función que recuerda que tecla se ha pulsado en select de Provincias.
var cadena = ""
function keyscombo(sele, destino, provincia) {
    if (NavegadorExpl) {
        cadena = cadena + String.fromCharCode(window.event.keyCode)
        var i = 0
        var obj = document.getElementById(sele)
        for (i = 1; i < obj.length; i++) {
            //var aux=obj(i).value
            var aux = obj(i).text
            if (aux.toUpperCase().slice(0, cadena.length) == cadena.toUpperCase()) {
                obj(i).selected = true
                provincia = obj(i).value
                //cargaMunicipiosC('OVCCiudMuni',provincia)
                return
            }
        }
        cadena = String.fromCharCode(window.event.keyCode)
    }

    return
}

//Función que hace que la tecla Enter ejecute el Aceptar.
function Pulsacion(e, textbox) {
    var tecla
    if (NavegadorExpl)
        tecla = e.keyCode;
    else
        tecla = e.which;
    if (tecla == 13) {
        if (textbox == "BuscarMunicipios")
            BuscarMunicipios();
        else if (textbox == "BuscarVias")
            BuscarVias();
    }
}
function validarAceptar() {
    //Si está seleccionado la busqueda por RC.
    if (document.forms['form1'].rdb_Tipo[0].checked) {
        return blnValidarRC();
    }
    else{
        if (document.forms['form1'].rdb_Tipo[2].checked) {
            return blnValidarLocIdufir();
        }
        else{

            if (document.forms['form1'].rdb_UrbRus[0].checked) {
                return blnValidarLocUrb();
            } else {
                if (document.forms['form1'].rdb_UrbRus[1].checked) {
                    return blnValidarLocRust();
                }
            }
        }

    }

   
    
}