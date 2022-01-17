document.onmouseover = hidestatus
document.onmouseout = hidestatus
function hidestatus() {
    window.status = 'Sede Electrónica del Catastro.'
    return true
}
function Volver() { history.back(-1) }
function tieneCaracterRaro(cCadena) {
    for (var i = 0; i < cCadena.length; i++) {
        var ch = cCadena.substring(i, i + 1)
        if ((ch == "<" || ">" == ch)) {
            return true;
        }
    }
    return false;
}
function ConsultarDatos() {
    document.forms['form1'].tipoBusqueda.value = 'Alfa';
    if (validarAceptar()) {
        var LayerTapadera;
        LayerTapadera = document.getElementById('Tapadera');
        LayerTapadera.style.visibility = 'visible';
        document.forms['form1'].submit();
    } else {
        document.forms['form1'].tipoBusqueda.value = '';
    }
}
function ConsultarCarto() {
    document.forms['form1'].tipoBusqueda.value = 'Carto';
    if (validarAceptar()) {
        var LayerTapadera;
        LayerTapadera = document.getElementById('Tapadera');
        LayerTapadera.style.visibility = 'visible';
        document.forms['form1'].submit();
    } else {
        document.forms['form1'].tipoBusqueda.value = '';
    }
}
function ConsultarAmbito() {
    var url = 'https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaAmbitos.aspx';
    var hWnd = window.open(url, "ListaAmbitos", "top=0,width=475,height=445,resizable=yes,status=yes,scrollbars=yes");
    if ((document.window != null) && (!hWnd.opener))
        hWnd.opener = self;
    hWnd.focus();
}
function Habilitar2() {
   
    if ((!document.forms['form1'].rdb_Tipo[1].checked) && (!document.forms['form1'].rdb_Tipo[0].checked)) {
        document.forms['form1'].rdb_Tipo[0].checked = true
      
    }
   
    if (document.forms['form1'].rdb_Tipo[0].checked) {
        InicializarLocalizacion();
        HabilitarRC(true)
    }
    else {
         document.forms['form1'].rdb_Tipo[1].checked = true
         InicializarRC()
         HabilitarProvMuni(true)
         HabilitarRBLocalizacion(true)
         document.forms['form1'].slcProvincias.focus()
            if (!(document.forms['form1'].slcProvincias.selectedIndex == 0)) {
                document.forms['form1'].slcMunicipios.focus();
            }
            if ((!document.forms['form1'].rdb_UrbRus[0].checked) && (!document.forms['form1'].rdb_UrbRus[1].checked) ) {
                document.forms['form1'].rdb_UrbRus[0].checked = true
            }
          
            if (document.forms['form1'].rdb_UrbRus[0].checked) {
                LimpiarLocRusticos()
                HabilitarLocUrbanos(true)
                HabilitarLocRusticos(false)
            }
            else {
                if (document.forms['form1'].rdb_UrbRus[1].checked) {
                    LimpiarLocUrbanos()
                    HabilitarLocUrbanos(false)
                    HabilitarLocRusticos(true)
                }
                /*else {
                    if (document.forms['form1'].rdb_UrbRus[2].checked) {
                        LimpiarLocUrbanos()
                        LimpiarLocRusticos()
                        HabilitarLocUrbanos(false)
                        HabilitarLocRusticos(false)
                    }
                    
                }*/
                /*
                else{
                LimpiarLocUrbanos()
                LimpiarLocRusticos()
                HabilitarLocUrbanos(false)
                HabilitarLocRusticos(false)
                HabilitarLocBices(true)
                }
                */
        }
    }
}
function InicializarLocalizacion() {
    LimpiarProvMuni()
    LimpiarLocUrbanos()
    LimpiarLocRusticos()
    HabilitarRBLocalizacion(false)
    HabilitarProvMuni(false)
    HabilitarLocUrbanos(false)
    HabilitarLocRusticos(false)
    document.forms['form1'].txtMuniAgr.value = ""
    document.forms['form1'].txtZCon.value = ""
    document.forms['form1'].txtBic.value = ""
    document.forms['form1'].txtMuniAgr.style.backgroundColor = "rgb(210,210,210)"
    document.forms['form1'].txtZCon.style.backgroundColor = "rgb(210,210,210)"
    document.forms['form1'].txtMuniAgr.disabled = true
    document.forms['form1'].txtZCon.disabled = true
}
function InicializarRC() {
    HabilitarRC(false)
    document.forms['form1'].txtRC.value = ""
}
function HabilitarRC(habilitar) {
    var colorF
    colorF = ColorFondo(habilitar)
    document.forms['form1'].txtRC.style.backgroundColor = colorF
    document.forms['form1'].txtRC.disabled = !(habilitar)
}
function HabilitarRCUrbanos(habilitar) {
    var colorF
    colorF = ColorFondo(habilitar)
    document.forms['form1'].txtRC1U.style.backgroundColor = colorF
    document.forms['form1'].txtRC1U.disabled = !(habilitar)
    document.forms['form1'].txtRC2U.style.backgroundColor = colorF
    document.forms['form1'].txtRC2U.disabled = !(habilitar)
    document.forms['form1'].txtRC3U.style.backgroundColor = colorF
    document.forms['form1'].txtRC3U.disabled = !(habilitar)
    document.forms['form1'].txtRC4U.style.backgroundColor = colorF
    document.forms['form1'].txtRC4U.disabled = !(habilitar)
}
function HabilitarRCRusticos(habilitar) {
    var colorF
    colorF = ColorFondo(habilitar)
    document.forms['form1'].txtRC1R.style.backgroundColor = colorF
    document.forms['form1'].txtRC1R.disabled = !(habilitar)
    document.forms['form1'].txtRC2R.style.backgroundColor = colorF
    document.forms['form1'].txtRC2R.disabled = !(habilitar)
    document.forms['form1'].txtRC3R.style.backgroundColor = colorF
    document.forms['form1'].txtRC3R.disabled = !(habilitar)
}
function HabilitarRCBices(habilitar) {
    var colorF
    colorF = ColorFondo(habilitar)
    document.forms['form1'].txtRC1B.style.backgroundColor = colorF
    document.forms['form1'].txtRC1B.disabled = !(habilitar)
    document.forms['form1'].txtRC2B.style.backgroundColor = colorF
    document.forms['form1'].txtRC2B.disabled = !(habilitar)
    document.forms['form1'].txtRC3B.style.backgroundColor = colorF
    document.forms['form1'].txtRC3B.disabled = !(habilitar)
    document.forms['form1'].txtRC4B.style.backgroundColor = colorF
    document.forms['form1'].txtRC4B.disabled = !(habilitar)
}
function HabilitarRBRC(habilitar) {
    if (!(habilitar)) {
        document.forms['form1'].rdb_RCUrbRus[2].checked = habilitar
        document.forms['form1'].rdb_RCUrbRus[1].checked = habilitar
        document.forms['form1'].rdb_RCUrbRus[0].checked = habilitar
    }
    document.forms['form1'].rdb_RCUrbRus[0].disabled = !(habilitar)
    document.forms['form1'].rdb_RCUrbRus[1].disabled = !(habilitar)
    document.forms['form1'].rdb_RCUrbRus[2].disabled = !(habilitar)
}
function HabilitarRBLocalizacion(habilitar) {
    if (!(habilitar)) {
        //document.forms['form1'].rdb_UrbRus[2].checked=habilitar
        document.forms['form1'].rdb_UrbRus[1].checked = habilitar
        document.forms['form1'].rdb_UrbRus[0].checked = habilitar
       // document.forms['form1'].rdb_UrbRus[2].checked = habilitar
    }
    //document.forms['form1'].rbLEspeciales.disabled=!(habilitar)
    document.forms['form1'].rbLRusticos.disabled = !(habilitar)
    document.forms['form1'].rbLUrbanos.disabled = !(habilitar)
   // document.forms['form1'].rbLIdufir.disabled = !(habilitar)
    
}
function HabilitarProvMuni(habilitar) {
    var colorF;
    colorF = ColorFondo(habilitar);
    document.forms['form1'].slcProvincias.style.backgroundColor = colorF;
    document.forms['form1'].slcMunicipios.style.backgroundColor = colorF;
    document.forms['form1'].slcProvincias.disabled = !(habilitar);
    document.forms['form1'].slcMunicipios.disabled = !(habilitar);
    if (habilitar) {
        if (document.forms['form1'].slcProvincias.selectedIndex == 0) {
            if (!(document.forms['form1'].hdProvincia.value == "")) {
                document.forms['form1'].slcProvincias.selectedIndex = document.forms['form1'].hdProvincia.value;
                if (!(document.forms['form1'].hdMunicipio.value == "")) {
                    document.forms['form1'].slcMunicipios.value = document.forms['form1'].hdMunicipio.value;
                }
            }
        }
    }
}
function HabilitarLocRusticos(habilitar) {
    var colorF
    colorF = ColorFondo(habilitar)
    document.forms['form1'].txtPol.style.backgroundColor = colorF
    document.forms['form1'].txtPar.style.backgroundColor = colorF
    document.forms['form1'].txtPol.disabled = !(habilitar)
    document.forms['form1'].txtPar.disabled = !(habilitar)
}
function HabilitarLocUrbanos(habilitar) {
    var colorF
    colorF = ColorFondo(habilitar)
    document.forms['form1'].slcSigla.style.backgroundColor = colorF
    document.forms['form1'].txtVia.style.backgroundColor = colorF
    document.forms['form1'].txtNum.style.backgroundColor = colorF
//    document.forms['form1'].txtKm.style.backgroundColor = colorF
//    document.forms['form1'].txtBlq.style.backgroundColor = colorF
//    document.forms['form1'].txtEsc.style.backgroundColor = colorF
//    document.forms['form1'].txtPlt.style.backgroundColor = colorF
//    document.forms['form1'].txtPta.style.backgroundColor = colorF
    document.forms['form1'].slcSigla.disabled = !(habilitar)
    document.forms['form1'].txtVia.disabled = !(habilitar)
    document.forms['form1'].txtNum.disabled = !(habilitar)
//    document.forms['form1'].txtKm.disabled = !(habilitar)
//    document.forms['form1'].txtBlq.disabled = !(habilitar)
//    document.forms['form1'].txtEsc.disabled = !(habilitar)
//    document.forms['form1'].txtPlt.disabled = !(habilitar)
//    document.forms['form1'].txtPta.disabled = !(habilitar)
}
//function HabilitarLocIdufir(habilitar) {
//    var colorF
//    colorF = ColorFondo(habilitar)
//    document.forms['form1'].txtIdufir.style.backgroundColor = colorF
//    document.forms['form1'].txtIdufir.disabled = !(habilitar)
//}
/*
function HabilitarLocBices(habilitar){
var colorF
colorF = ColorFondo(habilitar)
document.forms['form1'].slcBices.style.backgroundColor = colorF
document.forms['form1'].slcBices.disabled=!(habilitar)
}
*/
function LimpiarRCUrbanos() {
    document.forms['form1'].txtRC1U.value = ""
    document.forms['form1'].txtRC2U.value = ""
    document.forms['form1'].txtRC3U.value = ""
    document.forms['form1'].txtRC4U.value = ""
}
function LimpiarRCRusticos() {
    document.forms['form1'].txtRC1R.value = ""
    document.forms['form1'].txtRC2R.value = ""
    document.forms['form1'].txtRC3R.value = ""
}
function LimpiarRCBices() {
    document.forms['form1'].txtRC1B.value = ""
    document.forms['form1'].txtRC2B.value = ""
    document.forms['form1'].txtRC3B.value = ""
    document.forms['form1'].txtRC4B.value = ""
}
function LimpiarProvMuni() {
    document.forms['form1'].slcProvincias.selectedIndex = 0
    document.forms['form1'].slcMunicipios.value = ""
}
function LimpiarLocUrbanos() {
    document.forms['form1'].slcSigla.selectedIndex = 0
    document.forms['form1'].txtVia.value = ""
    document.forms['form1'].txtNum.value = ""
    document.forms['form1'].txtKm.value = ""
    document.forms['form1'].txtBlq.value = ""
    document.forms['form1'].txtEsc.value = ""
    document.forms['form1'].txtPlt.value = ""
    document.forms['form1'].txtPta.value = ""
}
function LimpiarLocRusticos() {
    document.forms['form1'].txtPol.value = ""
    document.forms['form1'].txtPar.value = ""
}
//function LimpiarLocIdufir() {
//    document.forms['form1'].txtIdufir.value = ""
//   
//}
/*
function LimpiarLocBices(){
document.forms['form1'].slcBices.selectedIndex=0
}
*/
function ColorFondo(valor) {
    var colorF
    if (valor) {
        colorF = "rgb(255,255,255)"
    }
    else {
        colorF = "rgb(210,210,210)"
    }
    return colorF
}
function HabilitarUrbRus() {
    if (document.forms['form1'].rdb_UrbRus[0].checked) {
        LimpiarLocRusticos()
        //LimpiarLocIdufir()
        //LimpiarLocBices()
        HabilitarLocUrbanos(true)
        HabilitarLocRusticos(false)
        //HabilitarLocBices(false)
       //HabilitarLocIdufir(false)
        document.forms['form1'].txtVia.focus()
        document.forms['form1'].txtMuniAgr.value = ""
        document.forms['form1'].txtZCon.value = ""
        document.forms['form1'].txtMuniAgr.disabled = true
        document.forms['form1'].txtZCon.disabled = true
        document.forms['form1'].txtMuniAgr.style.backgroundColor = "rgb(210,210,210)"
        document.forms['form1'].txtZCon.style.backgroundColor = "rgb(210,210,210)"
    }
    else {
        if (document.forms['form1'].rdb_UrbRus[1].checked) {
            LimpiarLocUrbanos()
            //LimpiarLocIdufir()
            //LimpiarLocBices()
            HabilitarLocUrbanos(false)
            HabilitarLocRusticos(true)
            //HabilitarLocBices(false)
           // HabilitarLocIdufir(false)
            document.forms['form1'].txtPol.focus()
            document.forms['form1'].txtMuniAgr.disabled = false
            document.forms['form1'].txtZCon.disabled = false
            document.forms['form1'].txtMuniAgr.style.backgroundColor = "rgb(255,255,255)"
            document.forms['form1'].txtZCon.style.backgroundColor = "rgb(255,255,255)"
        }
       /* else {
            if (document.forms['form1'].rdb_UrbRus[2].checked) {
                LimpiarLocUrbanos()
                LimpiarLocRusticos()
                
                HabilitarLocUrbanos(false)
                HabilitarLocRusticos(false)
                
                HabilitarLocIdufir(true)
                document.forms['form1'].txtIdufir.focus()
                document.forms['form1'].txtMuniAgr.disabled = false
                document.forms['form1'].txtZCon.disabled = false
                document.forms['form1'].txtMuniAgr.style.backgroundColor = "rgb(255,255,255)"
                document.forms['form1'].txtZCon.style.backgroundColor = "rgb(255,255,255)"
            }
        }
        */
        /*
        else{
        LimpiarLocUrbanos()
        LimpiarLocRusticos()
        HabilitarLocUrbanos(false)
        HabilitarLocRusticos(false)
        HabilitarLocBices(true)
        }
        */
    }
}
function abreVentanaVias() {
    var m_via = document.forms['form1'].txtVia.value
    for (i = 1; i < m_via.length; i++) {
        m_via = m_via.replace(" ", "@")
    }
    var m_Muni = document.forms['form1'].slcMunicipios.value
    for (i = 1; i < m_Muni.length; i++) {
        m_Muni = m_Muni.replace(" ", "@")
    }
    var url = 'https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaVias.aspx?codVia=' + document.forms['form1'].hdCodVia.value + '&via=' + encodeURIComponent(m_via) + '&tipoVia=' + document.forms['form1'].slcSigla[document.forms['form1'].slcSigla.selectedIndex].value + '&prov=' + document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].value + '&muni=' + document.forms['form1'].idMunicipio.value + '&DescMuni=' + encodeURIComponent(m_Muni) + '&Fec=A';
    var hWnd = window.open(url, "opciones", "top=0,width=475,height=445,resizable=yes,status=yes,scrollbars=yes");
    if ((document.window != null) && (!hWnd.opener))
        hWnd.opener = self;
    hWnd.focus();
    return false;
}
function abreVentanaNumeros() {
    var m_via = document.forms['form1'].txtVia.value
    for (i = 1; i < m_via.length; i++) {
        m_via = m_via.replace(" ", "@")
    }
    var m_Muni = document.forms['form1'].slcMunicipios.value
    for (i = 1; i < m_Muni.length; i++) {
        m_Muni = m_Muni.replace(" ", "@")
    }
    var m_Prov = document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].text
    for (i = 1; i < m_Prov.length; i++) {
        m_Prov = m_Prov.replace(" ", "@")
    }
    var url = 'https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaNumeros.aspx?tipo=elegir&codVia=' + document.forms['form1'].hdCodVia.value + '&via=' + encodeURIComponent(m_via) + '&tipoVia=' + document.forms['form1'].slcSigla[document.forms['form1'].slcSigla.selectedIndex].value + '&prov=' + document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].value + '&muni=' + document.forms['form1'].idMunicipio.value + '&DescMuni=' + encodeURIComponent(m_Muni) + '&DescProv=' + encodeURIComponent(m_Prov) + '&pStrKm=' + document.forms['form1'].txtKm.value + '&pStrBloque=' + document.forms['form1'].txtBlq.value + '&pStrEscalera=' + document.forms['form1'].txtEsc.value + '&pStrPlanta=' + document.forms['form1'].txtPlt.value + '&pStrPuerta=' + document.forms['form1'].txtPta.value;
    var hWnd = window.open(url, "opciones", "top=0,width=475,height=445,resizable=yes,status=yes,scrollbars=yes");
    if ((document.window != null) && (!hWnd.opener))
        hWnd.opener = self;
    hWnd.focus();
    return false;
}
function abreVentanaKilometros() {
    var m_via = document.forms['form1'].txtVia.value
    for (i = 1; i < m_via.length; i++) {
        m_via = m_via.replace(" ", "@")
    }
    var m_Muni = document.forms['form1'].slcMunicipios.value
    for (i = 1; i < m_Muni.length; i++) {
        m_Muni = m_Muni.replace(" ", "@")
    }
    var m_Prov = document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].text
    for (i = 1; i < m_Prov.length; i++) {
        m_Prov = m_Prov.replace(" ", "@")
    }
    var url = 'https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaKilometros.aspx?tipo=elegir&codVia=' + document.forms['form1'].hdCodVia.value + '&via=' + encodeURIComponent(m_via) + '&tipoVia=' + document.forms['form1'].slcSigla[document.forms['form1'].slcSigla.selectedIndex].value + '&prov=' + document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].value + '&muni=' + document.forms['form1'].idMunicipio.value + '&DescMuni=' + encodeURIComponent(m_Muni) + '&DescProv=' + encodeURIComponent(m_Prov) + '&pStrNum=' + document.forms['form1'].txtNum.value + '&pStrBloque=' + document.forms['form1'].txtBlq.value + '&pStrEscalera=' + document.forms['form1'].txtEsc.value + '&pStrPlanta=' + document.forms['form1'].txtPlt.value + '&pStrPuerta=' + document.forms['form1'].txtPta.value;
    var hWnd = window.open(url, "opciones", "top=0,width=475,height=445,resizable=yes,status=yes,scrollbars=yes");
    if ((document.window != null) && (!hWnd.opener))
        hWnd.opener = self;
    hWnd.focus();
    return false;
}
function abreVentanaMunicipios() {
    var m_municipio
    if (!(document.forms['form1'].idMunicipio.value == "")) {
        m_municipio = ""
    } else {
        m_municipio = document.forms['form1'].slcMunicipios.value
    }
    for (i = 1; i < m_municipio.length; i++) {
        m_municipio = m_municipio.replace(" ", "@")
    }
    var url = 'https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaMunicipios.aspx?muni=' + encodeURIComponent(m_municipio) + '&prov=' + document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].value;
    var hWnd = window.open(url, "opciones", "top=0,width=475,height=475,resizable=yes,status=yes,scrollbars=yes");
    if ((document.window != null) && (!hWnd.opener))
        hWnd.opener = self;
    hWnd.focus();
    return false;
}
function blnValidarBuscarVia() {
    var blnOK
    blnOK = true
    if (document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].value == '') {
        blnOK = false
        alert('Debe seleccionar una provincia1.')
        document.forms['form1'].slcProvincias.focus()
    }
    else
        if (document.forms['form1'].slcMunicipios.value.length < 2) {
        blnOK = false
        alert('El nombre del municipio debe tener al menos dos caracteres.')
        document.forms['form1'].slcMunicipios.focus()
    }
    return blnOK
}
function blnValidarBuscarNumero() {
    var blnOK
    blnOK = true
    if (document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].value == '') {
        blnOK = false
        alert('Debe seleccionar una provincia2.')
        document.forms['form1'].slcProvincias.focus()
    }
    else
        if (document.forms['form1'].slcMunicipios.value.length < 2) {
        blnOK = false
        alert('El nombre del municipio debe tener al menos dos caracteres.')
        document.forms['form1'].slcMunicipios.focus()
    }
    else
        if (document.forms['form1'].slcSigla[document.forms['form1'].slcSigla.selectedIndex].value == '') {
        blnOK = false
        alert('Debe seleccionar un tipo de vía.')
        document.forms['form1'].slcSigla.focus()
    }
    else
        if (trim(document.forms['form1'].txtVia.value).length == 0) {
        blnOK = false
        alert('Debe introducir el nombre de la vía.')
        document.forms['form1'].txtVia.focus()
    }
    else
        if (document.forms['form1'].txtKm.value != '' && !esnumerico(document.forms['form1'].txtKm.value)) {
        blnOK = false
        alert('El Kilómetro debe ser un número. Puede tener hasta 3 dígitos en la parte entera y como máximo 2 decimales. El separador decimal debe ser la coma.')
        document.forms['form1'].txtKm.focus()
    } else {
        if (!(ValidarExpresion(document.forms['form1'].txtKm.value, "^(\[0-9]{0,3})(,\[0-9]{0,2})?"))) {
            blnOK = false;
            alert("El Kilómetro debe ser un número. Puede tener hasta 3 dígitos en la parte entera y como máximo 2 decimales. El separador decimal debe ser la coma.");
            document.forms['form1'].txtKm.focus();
        }
    }
    return blnOK
}
function blnValidarBuscarKilometro() {
    var blnOK
    blnOK = true
    if (document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].value == '') {
        blnOK = false
        alert('Debe seleccionar una provincia3.')
        document.forms['form1'].slcProvincias.focus()
    }
    else
        if (document.forms['form1'].slcMunicipios.value.length < 2) {
        blnOK = false
        alert('El nombre del municipio debe tener al menos dos caracteres.')
        document.forms['form1'].slcMunicipios.focus()
    }
    else
        if (document.forms['form1'].slcSigla[document.forms['form1'].slcSigla.selectedIndex].value == '') {
        blnOK = false
        alert('Debe seleccionar un tipo de vía.')
        document.forms['form1'].slcSigla.focus()
    }
    else
        if (trim(document.forms['form1'].txtVia.value).length == 0) {
        blnOK = false
        alert('Debe introducir el nombre de la vía.')
        document.forms['form1'].txtVia.focus()
    }
    else
        if (document.forms['form1'].txtNum.value != '' && !esentero(document.forms['form1'].txtNum.value)) {
        blnOK = false
        alert('El número debe ser entero de hasta 4 dígitos.')
        document.forms['form1'].txtNum.focus()
    }
    return blnOK
}
function blnValidarBuscarMunicipios() {
    var blnOK
    blnOK = true
    if (document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].value == '') {
        blnOK = false
        alert('Debe seleccionar una provincia4.')
        document.forms['form1'].slcProvincias.focus()
    }
    return blnOK
}
function blnValidarLocUrb() {
    var blnOK = true;
    //if (document.forms['form1'].tipoBusqueda.value == 'Alfa') {
        blnOK = blnValidarFinalidad();
    //}
    if (blnOK) {
        if (document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].value == document.forms['form1'].slcProvincias[0].value) {
            blnOK = false;
            alert('Debe seleccionar una provincia5.');
            document.forms['form1'].slcProvincias.focus();
        } else {
            if (document.forms['form1'].slcMunicipios.value.length < 2) {
                blnOK = false;
                alert('El nombre del municipio debe tener al menos dos caracteres.');
                document.forms['form1'].slcMunicipios.focus();
            } else {
                if (document.forms['form1'].tipoBusqueda.value == 'Alfa') {
                    if (document.forms['form1'].slcSigla[document.forms['form1'].slcSigla.selectedIndex].value == document.forms['form1'].slcSigla[0].value) {
                        blnOK = false;
                        alert('Debe seleccionar un tipo de vía.');
                        document.forms['form1'].slcSigla.focus();
                    } else {
                        if (trim(document.forms['form1'].txtVia.value).length == 0) {
                            blnOK = false
                            alert('Debe introducir el nombre de la vía.')
                            document.forms['form1'].txtVia.focus()
                        } else {
                            if (((document.forms['form1'].txtNum.value).length == 0) && ((document.forms['form1'].txtKm.value).length == 0)) {
                                blnOK = false;
                                alert('El número o kilómetro es obligatorio.');
                                document.forms['form1'].txtNum.focus();
                            }
                        }
                    }
                } else {
                    if ((trim(document.forms['form1'].txtVia.value) != "") && (document.forms['form1'].slcSigla[document.forms['form1'].slcSigla.selectedIndex].value == document.forms['form1'].slcSigla[0].value)) {
                        blnOK = false;
                        alert('Debe seleccionar un tipo de vía.');
                        document.forms['form1'].slcSigla.focus();
                    }
                }
                if (!((document.forms['form1'].txtNum.value).length == 0) && (blnOK)) {
                    if (!(ValidarExpresion(document.forms['form1'].txtNum.value, "^\[0-9]{0,4}$"))) {
                        blnOK = false;
                        alert("El Número debe ser un número entero de hasta 4 dígitos.");
                        document.forms['form1'].txtNum.focus();
                    }
                }
                if (!((document.forms['form1'].txtKm.value).length == 0) && (blnOK)) {
                    if (!(ValidarExpresion(document.forms['form1'].txtKm.value, "^(\[0-9]{0,3})(,\[0-9]{0,2})?"))) {
                        blnOK = false;
                        alert("El Kilómetro debe ser un número. Puede tener hasta 3 dígitos en la parte entera y como máximo 2 decimales. El separador decimal debe ser la coma.");
                        document.forms['form1'].txtKm.focus();
                    }
                }
                if (!((document.forms['form1'].txtBlq.value).length == 0) && (blnOK)) {
                    if (!(ValidarExpresion(document.forms['form1'].txtBlq.value, "[A-Za-z0-9áéíóúÁÉÍÓÚñÑ\\s;,.:]{1,4}"))) {
                        blnOK = false;
                        alert("El Bloque debe ser una secuencia de hasta 4 caracteres.");
                        document.forms['form1'].txtBlq.focus();
                    }
                }
                if (!((document.forms['form1'].txtEsc.value).length == 0) && (blnOK)) {
                    if (!(ValidarExpresion(document.forms['form1'].txtEsc.value, "[A-Za-z0-9áéíóúÁÉÍÓÚñÑ\\s;,.:]{1,2}"))) {
                        blnOK = false;
                        alert("La Escalera debe ser una secuencia de hasta 2 caracteres.");
                        document.forms['form1'].txtEsc.focus();
                    }
                }
                if (!((document.forms['form1'].txtPlt.value).length == 0) && (blnOK)) {
                    if (!(ValidarExpresion(document.forms['form1'].txtPlt.value, "[A-Za-z0-9áéíóúÁÉÍÓÚñÑ\\s;,.:\\\\+-]{1,3}"))) {
                        blnOK = false;
                        alert("La Planta debe ser una secuencia de hasta 3 caracteres.");
                        document.forms['form1'].txtPlt.focus();
                    }
                }
                if (!((document.forms['form1'].txtPta.value).length == 0) && (blnOK)) {
                    if (!(ValidarExpresion(document.forms['form1'].txtPta.value, "[A-Za-z0-9áéíóúÁÉÍÓÚñÑ\\s;,.:]{1,3}"))) {
                        blnOK = false;
                        alert("La Puerta debe ser una secuencia de hasta 3 caracteres.");
                        document.forms['form1'].txtPta.focus();
                    }
                }
            }
        }
    }
    return blnOK;
}

function blnValidarLocIdufir() {


    var blnOK = true;
    //if (document.forms['form1'].tipoBusqueda.value == 'Alfa') {
    blnOK = blnValidarFinalidad();
    //}
    if (blnOK) {
        
                if ((document.forms['form1'].tipoBusqueda.value == 'Alfa') ) {
                    if (document.forms['form1'].txtIdufir.value == '') {
                        blnOK = false;
                        alert('El idufir es obligatorio.');
                        document.forms['form1'].txtIdufir.focus();
                    } 
                }
              
               
            }
        
   
    return blnOK;
}
function blnValidarLocRust() {
    var blnOK = true;
    //if (document.forms['form1'].tipoBusqueda.value == 'Alfa') {
        blnOK = blnValidarFinalidad();
    //}
    if (blnOK) {
        if (document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].value == document.forms['form1'].slcProvincias[0].value) {
            blnOK = false;
            alert('Debe seleccionar una provincia6.');
            document.forms['form1'].slcProvincias.focus();
        } else {
            if (document.forms['form1'].slcMunicipios.value.length < 2) {
                blnOK = false;
                alert('El nombre del municipio debe tener al menos dos caracteres.');
                document.forms['form1'].slcMunicipios.focus();
            } else {
                if ((document.forms['form1'].tipoBusqueda.value == 'Alfa') || (document.forms['form1'].txtPar.value != '')) {
                    if (document.forms['form1'].txtPol.value == '') {
                        blnOK = false;
                        alert('El polígono es obligatorio.');
                        document.forms['form1'].txtPol.focus();
                    } else {
                        if (document.forms['form1'].txtPar.value == '') {
                            blnOK = false;
                            alert('La Parcela es obligatoria.');
                            document.forms['form1'].txtPar.focus();
                        }
                    }
                }
                if (!((document.forms['form1'].txtPol.value).length == 0) && (blnOK)) {
                    if (!(ValidarExpresion(document.forms['form1'].txtPol.value, "^\[0-9]{0,3}"))) {
                        blnOK = false;
                        alert("El Polígono debe ser una secuencia de hasta 3 dígitos.");
                        document.forms['form1'].txtPol.focus();
                    }
                }
                if (!((document.forms['form1'].txtPar.value).length == 0) && (blnOK)) {
                    if (!(ValidarExpresion(document.forms['form1'].txtPar.value, "^\[0-9]{0,5}"))) {
                        blnOK = false;
                        alert("La Parcela debe ser una secuencia de hasta 5 dígitos.");
                        document.forms['form1'].txtPar.focus();
                    }
                }
            }
        }
    }
    return blnOK;
}
function blnValidarRC() {
    var blnOK = true;
    var rc;
    var rcLimpio = "";
    //if (document.forms['form1'].tipoBusqueda.value == 'Alfa') {
        blnOK = blnValidarFinalidad();
    //}
    if (blnOK) {
        rc = document.forms['form1'].txtRC.value;
        var rx = new RegExp("[a-zñA-ZÑ0-9-]");
        for (var i = 0; i < rc.length; i++) {
            var intermedio = rc.substring(i, i + 1);
            var matches = rx.exec(intermedio);
            if (matches != null && intermedio == matches[0]) {
                rcLimpio = rcLimpio + intermedio;
            }
        }
        rc = rcLimpio;
        if (document.forms['form1'].tipoBusqueda.value == 'Alfa') {
            if ((rc == "") || (rc.length < 7)) {
                blnOK = false;
                alert('La referencia catastral es un código de 20 números y/o letras. Deberá introducir al menos 7 de ellas.');
                document.forms['form1'].txtRC.focus();
            } else {
                if ((rc.length > 7) && (rc.length < 14)) {
                    blnOK = false;
                    alert('La referencia catastral es un código de 20 números y/o letras. Deberá introducir al menos 7 o 14 de ellas.');
                    document.forms['form1'].txtRC.focus();
                } else {
                    if ((rc.length > 14) && (rc.length < 18)) {
                        blnOK = false;
                        alert('La referencia catastral es un código de 20 números y/o letras. Deberá introducir al menos 7, 14 o 18 de ellas.');
                        document.forms['form1'].txtRC.focus();
                    } else {
                        if ((rc.length > 18) && (rc.length < 20)) {
                            blnOK = false;
                            alert('La referencia catastral es un código de 20 números y/o letras. Deberá introducir al menos 7, 14, 18 o 20 de ellas');
                            document.forms['form1'].txtRC.focus();
                        } else {
                            if (rc.length > 20) {
                                blnOK = false;
                                alert('El código de Referencia Catastral debe ser una secuencia como máximo de 20 números y/o letras.');
                                document.forms['form1'].txtRC.focus();
                            } else {
                                

                                if (rc.length == 7) {
                                    blnOK = false;
                                    if (confirm('Recomendamos que busque por los 14 dígitos de la Referencia Catastral.\nLa búsqueda por los 7 primeros dígitos puede ser muy lenta e incluso fallar\n Pulse Aceptar para continuar con esta busqueda')) {
                                        blnOK = true;
                                    }
                                    else {
                                        blnOK = false;
                                        document.forms['form1'].txtRC.focus();
                                    }

                                }
                                //}
                            }
                        }
                    }
                }
            }
        } else {
            if ((rc == "") || (rc.length < 14)) {
                blnOK = false;
                alert('La referencia catastral es un código de 20 números y/o letras. Deberá introducir al menos 14 de ellas.');
                document.forms['form1'].txtRC.focus();
            } else {
                if (rc.length > 20) {
                    blnOK = false;
                    alert('El código de Referencia Catastral debe ser una secuencia como máximo de 20 números y/o letras.');
                    document.forms['form1'].txtRC.focus();
                }
            }
        }
    }
    return blnOK;
}
function blnValidarFinalidad() {
    var blnOK;
    blnOK = true;
    if (document.forms['form1'].finalidad) {

        if (tieneCaracterRaro(document.forms['form1'].finalidad.value)) {
            alert('- No se admiten los siguientes caracteres < >');
            document.forms['form1'].finalidad.focus();
            blnOK = false;
        }
        else {
            if ((trim(document.forms['form1'].finalidad.value)) == "") {
                blnOK = false;
                alert('Debe introducir una finalidad.');
                document.forms['form1'].finalidad.focus();
            } else {
                if ((trim(document.forms['form1'].finalidad.value).length > 100)) {
                    blnOK = false;
                    alert('La finalidad puede tener como máximo 100 caracteres.');
                    document.forms['form1'].finalidad.focus();
                }
            }
        }
    }
    return blnOK;
}
function EsUrbana(RefCat) {
    var esUrb;
    esUrb = false;
    if (!(isNaN(RefCat.substring(5, 6)))) {
        esUrb = true;
    } else {
        for (var x = 6; x < RefCat.length - 1; x++) {
            if (!(esUrb))
                if (!(isNaN(RefCat.substring(x, x + 1))))
                esUrb = true;
        }
    }
    return esUrb;
}
function BuscarVias() {
    if (document.forms['form1'].rdb_UrbRus[0].checked)
        if (blnValidarBuscarVia())
        abreVentanaVias()
}
function BuscarNumero() {
    if (document.forms['form1'].rdb_UrbRus[0].checked)
        if (blnValidarBuscarNumero())
        abreVentanaNumeros()
}
function BuscarKilometro() {
    if (document.forms['form1'].rdb_UrbRus[0].checked)
        if (blnValidarBuscarKilometro())
        abreVentanaKilometros()
}
function BuscarMunicipios() {
    if (document.forms['form1'].rdb_Tipo[1].checked) {
        if (blnValidarBuscarMunicipios())
            abreVentanaMunicipios()
    }
}
function AcotarMunicipio(msg) {
    alert(msg);
}

function VolverPIC() {
    window.location = "../CYCBienInmueble/OVCPuntoInfCat.aspx?PICNuevo=S"
}

function VolverPICTitular(strNif, strNombre) {
    window.location = "../EnsConUsuReg/EnsConAmbTR.asp?ccaa=-1&prov=-1&esnac=1&cs=24&nif=" & strNif & "&nomccaa=--+SELECCIONE+UNA+C.AUTONOMA+--&nomprov=--+SELECCIONE+UNA+PROVINCIA+--&muni=-1&nommuni=--+Seleccione+un+municipio+--&dele=-1&tipo=0&intnumpag=0&cadnom=" & strNombre & "&cmb_muni=-1&rdbTipoBien=on"
}

// Actualización input municipios

function ActualizaListaMunicipios(Provincia) {

	document.getElementById("infoapp").innerHTML = "Actualizando Municipios. Por favor, espere";
	
	document.getElementById("slcMunicipios").value = "";
	document.getElementById("slcSigla").selectedIndex = 0;

    datalistMunicipios = document.getElementById("datalistMunicipios");
	
	// Se vacia la lista de una selección anterior
    
    while(datalistMunicipios.options.length != 0){    
		datalistMunicipios.removeChild(datalistMunicipios.lastChild);
    	}
    
	// Petición de la lista de municipios a la web del catastro
	xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
	
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(xmlHttp.responseText,"text/xml");
			
			$numMunicipios = parseInt(xmlDoc.getElementsByTagName("cumun")[0].childNodes[0].nodeValue);

			for ($i = 0 ; $i < $numMunicipios ; $i++) {
				Municipio = document.createElement('OPTION');
				Municipio.setAttribute("value", xmlDoc.getElementsByTagName("nm")[$i].childNodes[0].nodeValue);
				document.getElementById("datalistMunicipios").appendChild(Municipio);
			}
			document.getElementById("infoapp").innerHTML = "";
		}
    }
	myUrl = 'http://' + 'localhost:8000' + '/ListaMunicipios.php?Provincia=' + Provincia + '&Municipio=';
    
	xmlHttp.open("GET", myUrl, true); // true for asynchronous 
 	xmlHttp.send(null);
}

// Actualización input vias y calles

function ActualizaListaVias(Provincia,Municipio,tipoVia) {
	
	document.getElementById("infoapp").innerHTML = "Actualizando Vias. Por favor, espere";
	
	document.getElementById("txtVia").value = "";
	
    datalistVias = document.getElementById("datalistVias");
	
	// Se vacia la lista de una selección anterior
    
    while(datalistVias.options.length != 0){    
		datalistVias.removeChild(datalistVias.lastChild);
    	}
    
	// Petición de la lista de municipios a la web del catastro
	xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
	
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(xmlHttp.responseText,"text/xml");
			
			if (xmlDoc.getElementsByTagName("cuerr").length > 0) {
				document.getElementById("infoapp").innerHTML = xmlDoc.getElementsByTagName("des")[0].childNodes[0].nodeValue;
			}
			else {
				$numVias = parseInt(xmlDoc.getElementsByTagName("cuca")[0].childNodes[0].nodeValue);

				for ($i = 0 ; $i < $numVias ; $i++) {
					Via = document.createElement('OPTION');
					Via.setAttribute("value", xmlDoc.getElementsByTagName("nv")[$i].childNodes[0].nodeValue);
					document.getElementById("datalistVias").appendChild(Via);
				}

				document.getElementById("infoapp").innerHTML = "";
			}
		}
    }
	myUrl = 'http://' + 'inmobiliaria.sarcorem.com' + '/ListaVias.php?Provincia=' + Provincia + '&Municipio=' + Municipio + '&TipoVia=' +tipoVia;
    
	xmlHttp.open("GET", myUrl, true); // true for asynchronous 
 	xmlHttp.send(null);
}

// Actualización numeros

function ActualizaListaNumeros(Provincia,Municipio,tipoVia,Via,Numero) {
	
	document.getElementById("infoapp").innerHTML = "Actualizando Números. Por favor, espere";
	 
	// Preparar tabla propiedades
	
	$ListaHojas = '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
	$ListaHojas = $ListaHojas + '<th>Número</th><th>Hoja del catastro</th>';
	
	// Petición de la lista de numeros a la web del catastro
	xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
	
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(xmlHttp.responseText,"text/xml");
			
			if (xmlDoc.getElementsByTagName("cuerr").length >0){
				$ListaHojas = $ListaHojas + '<tr><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("des")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td><td></td></tr>';
			}
			
			if (xmlDoc.getElementsByTagName("cunum").length>0){
				$numNumeros = parseInt(xmlDoc.getElementsByTagName("cunum")[0].childNodes[0].nodeValue);
			
				for ($i = 0 ; $i < $numNumeros ; $i++) {
					$RefCatastral = xmlDoc.getElementsByTagName("pc1")[$i].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("pc2")[$i].childNodes[0].nodeValue;
			
					$ListaHojas = $ListaHojas + '<tr><td>';
					$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pnp")[$i].childNodes[0].nodeValue + '</td>';
					$ListaHojas = $ListaHojas + '<td>';
					$ListaHojas = $ListaHojas + '<a class="textorojo" ';
					$ListaHojas = $ListaHojas +	"href=javascript:ListaReferenciasCatastrales('";
					$ListaHojas = $ListaHojas + $RefCatastral;
					$ListaHojas = $ListaHojas + "','";
					$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pnp")[$i].childNodes[0].nodeValue;
					$ListaHojas = $ListaHojas + "');>";
					$ListaHojas = $ListaHojas + $RefCatastral;
					$ListaHojas = $ListaHojas + '</a>';
					$ListaHojas = $ListaHojas + '</td></tr>';
				}
			}

		$ListaHojas = $ListaHojas + '</tbody></table>';
		document.getElementById("infoapp").innerHTML = $ListaHojas;
		
		document.getElementById("txtNum").value = Numero;
		}
    }
	myUrl = 'http://' + 'inmobiliaria.sarcorem.com' + '/ListaNumeros.php?Provincia=' + Provincia + '&Municipio=' + Municipio + '&TipoVia=' +tipoVia + '&NombreVia=' + Via + '&Numero=' + Numero;
    
	xmlHttp.open("GET", myUrl, true); // true for asynchronous 
 	xmlHttp.send(null);
}

// Lista de Referencias Catastrales

function ListaReferenciasCatastrales(RC,numEnVia) {
	// Mensaje de espera
	document.getElementById("txtNum").value = numEnVia;
	document.getElementById("infoapp").innerHTML = 'Buscando referencias catastrales';
	
	// Preparar tabla propiedades
	
	$ListaHojas = '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
	$ListaHojas = $ListaHojas + '<th>Vía</th><th>Número</th><th>Escalera</th><th>Planta</th><th>Puerta</th><th>Referencia Catastral</th>';
	
	// Petición de la lista de numeros a la web del catastro
	xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
	
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(xmlHttp.responseText,"text/xml");
			
			$numRC = parseInt(xmlDoc.getElementsByTagName("cudnp")[0].childNodes[0].nodeValue);
			
			for ($i = 0 ; $i < $numRC ; $i++) {
				if ((numEnVia == 0) || (numEnVia == xmlDoc.getElementsByTagName("pnp")[$i].childNodes[0].nodeValue)){
					$RefCatastral = xmlDoc.getElementsByTagName("pc1")[$i].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("pc2")[$i].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("car")[$i].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("cc1")[$i].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("cc2")[$i].childNodes[0].nodeValue;

					$ListaHojas = $ListaHojas + '<tr><td>';
					$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("nv")[$i].childNodes[0].nodeValue;
					$ListaHojas = $ListaHojas + '</td><td>';
					if (xmlDoc.getElementsByTagName("pnp").length > 0) {
						$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pnp")[$i].childNodes[0].nodeValue;
					}
					$ListaHojas = $ListaHojas + '</td><td>';
					if(xmlDoc.getElementsByTagName("es").length > 0){
						$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("es")[$i].childNodes[0].nodeValue;
						}
					$ListaHojas = $ListaHojas + '</td><td>';
					$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pt")[$i].childNodes[0].nodeValue;
					$ListaHojas = $ListaHojas + '</td><td>';
					if(xmlDoc.getElementsByTagName("pu").length > 0) {
						$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pu")[$i].childNodes[0].nodeValue;
					}
					$ListaHojas = $ListaHojas + '</td><td>';
					$ListaHojas = $ListaHojas + '<a class="textorojo" ';
					$ListaHojas = $ListaHojas +	"href=javascript:DatosReferenciaCatastral('";
					$ListaHojas = $ListaHojas + $RefCatastral;
					$ListaHojas = $ListaHojas + "');>";
					$ListaHojas = $ListaHojas + $RefCatastral;
					$ListaHojas = $ListaHojas + '</a>';
					$ListaHojas = $ListaHojas + '</td></tr>';
				}
			}

		$ListaHojas = $ListaHojas + '</tbody></table>';
		document.getElementById("infoapp").innerHTML = $ListaHojas;
		
		document.getElementById("txtNum").value = numEnVia;
		}
    }
	
	$Provincia = document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].text;
	$Municipio = document.forms['form1'].slcMunicipios.value;
	
	myUrl = 'http://' + 'inmobiliaria.sarcorem.com' + '/ListaRC.php?Provincia=' + $Provincia + '&Municipio=' + $Municipio + '&RC=' + RC;
    
	xmlHttp.open("GET", myUrl, true); // true for asynchronous 
 	xmlHttp.send(null);
}

// Datos de Referencias Catastrales

function DatosReferenciaCatastral(RC) {
	// Mensaje de espera
	document.getElementById("infoapp").innerHTML = 'Buscando Datos Catastrales';
		
	// Petición de datos catastrales
	xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(xmlHttp.responseText,"text/xml");
			
			$numRC = parseInt(xmlDoc.getElementsByTagName("cudnp")[0].childNodes[0].nodeValue);
			
			if ($numRC != 1){
				$ListaHojas = "Referencia Catastral Incorrecta";
				}
			else {
				$ListaHojas = '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
				$ListaHojas = $ListaHojas + '<tr><th colspan="2">Datos Descriptivos del Inmueble</th></tr>';
				$ListaHojas = $ListaHojas + '<tr><td>Referencia Catastral</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pc1")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pc2")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("car")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cc1")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cc2")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td></tr><tr><td>Localización</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("ldt")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td></tr><tr><td>Clase</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cn")[0].childNodes[0].nodeValue;
				if (xmlDoc.getElementsByTagName("luso").length > 0) {
					$ListaHojas = $ListaHojas + '</td></tr><tr><td>Uso</td><td>';
					$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("luso")[0].childNodes[0].nodeValue;
				}
				$ListaHojas = $ListaHojas + '</td></tr><tr><td>Superficie construida</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("sfc")[0].childNodes[0].nodeValue;
				if (xmlDoc.getElementsByTagName("ant").length > 0) {
					$ListaHojas = $ListaHojas + '</td></tr><tr><td>Año construcción</td><td>';
					$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("ant")[0].childNodes[0].nodeValue;
				}
				$ListaHojas = $ListaHojas + '</td></tr>';
				$ListaHojas = $ListaHojas + '</tbody></table>';

				$ListaHojas = $ListaHojas + '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
				$ListaHojas = $ListaHojas + '<tr><th colspan="2">Construcción</th></tr>';
				$ListaHojas = $ListaHojas + '<tr><th>Uso Principal</th><th>Superficie</th></tr>';
				
				$numElementos = xmlDoc.getElementsByTagName("cucons")[0].childNodes[0].nodeValue;
				for ($i = 0 ; $i < $numElementos ; $i++) {
					$ListaHojas = $ListaHojas + '<tr><td>' + xmlDoc.getElementsByTagName("lcd")[$i].childNodes[0].nodeValue + '</td>';
					$ListaHojas = $ListaHojas + '<td>' + xmlDoc.getElementsByTagName("stl")[$i].childNodes[0].nodeValue + '</td></tr>';
					}
				$ListaHojas = $ListaHojas + '</tbody></table>';
				}
			document.getElementById("infoapp").innerHTML = $ListaHojas;
			}
		}
	
	$Provincia = document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].text;
	$Municipio = document.forms['form1'].slcMunicipios.value;
	
	myUrl = 'http://' + 'inmobiliaria.sarcorem.com' + '/ListaRC.php?Provincia=' + $Provincia + '&Municipio=' + $Municipio + '&RC=' + RC;
    
	xmlHttp.open("GET", myUrl, true); // true for asynchronous 
 	xmlHttp.send(null);
}

// Datos de Referencias Catastrales

function DatosRefCatastralDir(RC) {
	// Mensaje de espera
	document.getElementById("infoapp").innerHTML = 'Buscando Datos Catastrales';
		
	// Petición de datos catastrales
	xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(xmlHttp.responseText,"text/xml");
			
			$numRC = parseInt(xmlDoc.getElementsByTagName("cudnp")[0].childNodes[0].nodeValue);
			
			if ($numRC != 1){
				$ListaHojas = "Referencia Catastral Incorrecta";
			}
			else {
				$ListaHojas = '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
				$ListaHojas = $ListaHojas + '<tr><th colspan="2">Datos Descriptivos del Inmueble</th></tr>';
				$ListaHojas = $ListaHojas + '<tr><td>Referencia Catastral</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pc1")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pc2")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("car")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cc1")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cc2")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td></tr><tr><td>Localización</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("ldt")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td></tr><tr><td>Clase</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cn")[0].childNodes[0].nodeValue;
				if (xmlDoc.getElementsByTagName("luso").length > 0) {
					$ListaHojas = $ListaHojas + '</td></tr><tr><td>Uso</td><td>';
					$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("luso")[0].childNodes[0].nodeValue;
				}
				if (xmlDoc.getElementsByTagName("sfc").length > 0) {
					$ListaHojas = $ListaHojas + '</td></tr><tr><td>Superficie construida</td><td>';
					$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("sfc")[0].childNodes[0].nodeValue;
				}
				if (xmlDoc.getElementsByTagName("ant").length > 0) {
					$ListaHojas = $ListaHojas + '</td></tr><tr><td>Año construcción</td><td>';
					$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("ant")[0].childNodes[0].nodeValue;
				}
				$ListaHojas = $ListaHojas + '</td></tr>';
				$ListaHojas = $ListaHojas + '</tbody></table>';

				if (xmlDoc.getElementsByTagName("cucons").length > 0) {
					$ListaHojas = $ListaHojas + '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
					$ListaHojas = $ListaHojas + '<tr><th colspan="2">Construcción</th></tr>';
					$ListaHojas = $ListaHojas + '<tr><th>Uso Principal</th><th>Superficie</th></tr>';
				
					$numElementos = xmlDoc.getElementsByTagName("cucons")[0].childNodes[0].nodeValue;
					for ($i = 0 ; $i < $numElementos ; $i++) {
						$ListaHojas = $ListaHojas + '<tr><td>' + xmlDoc.getElementsByTagName("lcd")[$i].childNodes[0].nodeValue + '</td>';
						$ListaHojas = $ListaHojas + '<td>' + xmlDoc.getElementsByTagName("stl")[$i].childNodes[0].nodeValue + '</td></tr>';
					}
					$ListaHojas = $ListaHojas + '</tbody></table>';
				}
				
				if (xmlDoc.getElementsByTagName("cucul").length > 0) {
					$ListaHojas = $ListaHojas + '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
					$ListaHojas = $ListaHojas + '<tr><th colspan="2">Cultivo</th></tr>';
					$ListaHojas = $ListaHojas + '<tr><th>Uso Principal</th><th>Superficie</th></tr>';
				
					$numElementos = xmlDoc.getElementsByTagName("cucul")[0].childNodes[0].nodeValue;
					for ($i = 0 ; $i < $numElementos ; $i++) {
						$ListaHojas = $ListaHojas + '<tr><td>' + xmlDoc.getElementsByTagName("dcc")[$i].childNodes[0].nodeValue + '</td>';
						$ListaHojas = $ListaHojas + '<td>' + xmlDoc.getElementsByTagName("ssp")[$i].childNodes[0].nodeValue + '</td></tr>';
					}
					$ListaHojas = $ListaHojas + '</tbody></table>';
				}
			}
			document.getElementById("infoapp").innerHTML = $ListaHojas;
		}
	}
	
	myUrl = 'http://' + 'inmobiliaria.sarcorem.com' + '/ListaRC.php?Provincia=&Municipio=&RC=' + RC;
    
	xmlHttp.open("GET", myUrl, true); // true for asynchronous 
 	xmlHttp.send(null);
}

function ListaRCRusticas(Poligono,Parcela) {
	// Mensaje de espera
	document.getElementById("infoapp").innerHTML = 'Buscando referencias catastrales';
	
	// Preparar tabla propiedades
	
	$ListaHojas = '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
	$ListaHojas = $ListaHojas + '<th>Poligono</th><th>Parcela</th><th>Nombre</th><th>Referencia Catastral</th>';
	
	// Petición de la lista de numeros a la web del catastro
	xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
	
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(xmlHttp.responseText,"text/xml");
			
			$numRC = parseInt(xmlDoc.getElementsByTagName("cudnp")[0].childNodes[0].nodeValue);
			
			for ($i = 0 ; $i < $numRC ; $i++) {
				$RefCatastral = xmlDoc.getElementsByTagName("pc1")[$i].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("pc2")[$i].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("car")[$i].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("cc1")[$i].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("cc2")[$i].childNodes[0].nodeValue;

				$ListaHojas = $ListaHojas + '<tr><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cpo")[$i].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cpa")[$i].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("npa")[$i].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td><td>';
				$ListaHojas = $ListaHojas + '<a class="textorojo" ';
				$ListaHojas = $ListaHojas +	"href=javascript:DatosRCRustica('";
				$ListaHojas = $ListaHojas + $RefCatastral;
				$ListaHojas = $ListaHojas + "');>";
				$ListaHojas = $ListaHojas + $RefCatastral;
				$ListaHojas = $ListaHojas + '</a>';
				$ListaHojas = $ListaHojas + '</td></tr>';
			}

		$ListaHojas = $ListaHojas + '</tbody></table>';
		document.getElementById("infoapp").innerHTML = $ListaHojas;
		}
    }
	
	$Provincia = document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].text;
	$Municipio = document.forms['form1'].slcMunicipios.value;
	
	myUrl = 'http://' + 'inmobiliaria.sarcorem.com' + '/ListaRCRus.php?Provincia=' + $Provincia + '&Municipio=' + $Municipio + '&Parcela=' + Parcela + '&Poligono=' + Poligono;
    
	xmlHttp.open("GET", myUrl, true); // true for asynchronous 
 	xmlHttp.send(null);
}

function DatosRCRustica(RC) {
	// Mensaje de espera
	document.getElementById("infoapp").innerHTML = 'Buscando Datos Catastrales';
		
	// Petición de datos catastrales
	xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(xmlHttp.responseText,"text/xml");
			
			$numRC = parseInt(xmlDoc.getElementsByTagName("cudnp")[0].childNodes[0].nodeValue);
			
			if ($numRC != 1){
				$ListaHojas = "Referencia Catastral Incorrecta";
				}
			else {
				$ListaHojas = '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
				$ListaHojas = $ListaHojas + '<tr><th colspan="2">Datos Descriptivos del Inmueble</th></tr>';
				$ListaHojas = $ListaHojas + '<tr><td>Referencia Catastral</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pc1")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("pc2")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("car")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cc1")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cc2")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td></tr><tr><td>Nombre</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("npa")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td></tr><tr><td>Localización</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("ldt")[0].childNodes[0].nodeValue;
				$ListaHojas = $ListaHojas + '</td></tr><tr><td>Clase</td><td>';
				$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("cn")[0].childNodes[0].nodeValue;
				if(xmlDoc.getElementsByTagName("sfc").length > 0) {
					$ListaHojas = $ListaHojas + '</td></tr><tr><td>Superficie Construida</td><td>';
					$ListaHojas = $ListaHojas + xmlDoc.getElementsByTagName("sfc")[0].childNodes[0].nodeValue;
				}
				$ListaHojas = $ListaHojas + '</td></tr>';
				$ListaHojas = $ListaHojas + '</tbody></table>';

				if (xmlDoc.getElementsByTagName("cucons").length >0) {
					$ListaHojas = $ListaHojas + '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
					$ListaHojas = $ListaHojas + '<tr><th colspan="2">Construcción</th></tr>';
					$ListaHojas = $ListaHojas + '<tr><th>Uso Principal</th><th>Superficie</th></tr>';
				
					$numElementos = xmlDoc.getElementsByTagName("cucons")[0].childNodes[0].nodeValue;
					for ($i = 0 ; $i < $numElementos ; $i++) {
						$ListaHojas = $ListaHojas + '<tr><td>' + xmlDoc.getElementsByTagName("lcd")[$i].childNodes[0].nodeValue + '</td>';
						$ListaHojas = $ListaHojas + '<td>' + xmlDoc.getElementsByTagName("stl")[$i].childNodes[0].nodeValue + '</td></tr>';
					}
					$ListaHojas = $ListaHojas + '</tbody></table>';
				}

				$ListaHojas = $ListaHojas + '<table width="100%" cellspacing="0" cellpadding="1" border="1"><tbody>';
				$ListaHojas = $ListaHojas + '<tr><th colspan="2">Cultivo</th></tr>';
				$ListaHojas = $ListaHojas + '<tr><th>Uso Principal</th><th>Superficie</th></tr>';
				
				$numElementos = xmlDoc.getElementsByTagName("cucul")[0].childNodes[0].nodeValue;
				for ($i = 0 ; $i < $numElementos ; $i++) {
					$ListaHojas = $ListaHojas + '<tr><td>' + xmlDoc.getElementsByTagName("dcc")[$i].childNodes[0].nodeValue + '</td>';
					$ListaHojas = $ListaHojas + '<td>' + xmlDoc.getElementsByTagName("ssp")[$i].childNodes[0].nodeValue + '</td></tr>';
					}
				$ListaHojas = $ListaHojas + '</tbody></table>';
				}
			document.getElementById("infoapp").innerHTML = $ListaHojas;
			}
		}
	
	$Provincia = document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].text;
	$Municipio = document.forms['form1'].slcMunicipios.value;
	
	myUrl = 'http://' + 'inmobiliaria.sarcorem.com' + '/ListaRC.php?Provincia=' + $Provincia + '&Municipio=' + $Municipio + '&RC=' + RC;
    
	xmlHttp.open("GET", myUrl, true); // true for asynchronous 
 	xmlHttp.send(null);
}