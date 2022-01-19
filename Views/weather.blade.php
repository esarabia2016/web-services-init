@extends('masterapp')
@section('content')
<div style="padding: 10px;">
    <form method="post" action="catastro.php" id="form1" style="MARGIN-TOP: 0px">
	<table width="800" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td colspan="2"><h1>Consulta de datos catastrales</h1></td>
                </tr>
                <tr><td>&nbsp;</td></tr>
                <tr>
                    <td width="100" valign="middle" nowrap="nowrap"><span id="lblProvincia">Provincia:</span></td>
                    <td width="150">
                        <select name="slcProvincias" id="slcProvincias" onchange="javascript:ActualizaListaMunicipios(this[this.selectedIndex].text)" onkeyup="return keyscombo(this.name, 'OVCCiudMuni',this[this.selectedIndex].value)" width: 200px;">
                            <option value="" selected="selected">-- Seleccione una Provincia --</option>
                            <option value="15">A CORUÑA</option>
                            <option value="3">ALACANT</option>
                            <option value="2">ALBACETE</option>
                            <option value="4">ALMERIA</option>
                            <option value="33">ASTURIAS</option>
                            <option value="5">AVILA</option>
                            <option value="6">BADAJOZ</option>
                            <option value="8">BARCELONA</option>
                            <option value="9">BURGOS</option>
                            <option value="10">CACERES</option>
                            <option value="11">CADIZ</option>
                            <option value="39">CANTABRIA</option>
                            <option value="12">CASTELLO</option>
                            <option value="51">CEUTA</option>
                            <option value="13">CIUDAD REAL</option>
                            <option value="14">CORDOBA</option>
                            <option value="16">CUENCA</option>
                            <option value="17">GIRONA</option>
                            <option value="18">GRANADA</option>
                            <option value="19">GUADALAJARA</option>
                            <option value="21">HUELVA</option>
                            <option value="22">HUESCA</option>
                            <option value="7">ILLES BALEARS</option>
                            <option value="23">JAEN</option>
                            <option value="26">LA RIOJA</option>
                            <option value="35">LAS PALMAS</option>
                            <option value="24">LEON</option>
                            <option value="25">LLEIDA</option>
                            <option value="27">LUGO</option>
                            <option value="28">MADRID</option>
                            <option value="29">MALAGA</option>
                            <option value="52">MELILLA</option>
                            <option value="30">MURCIA</option>
                            <option value="32">OURENSE</option>
                            <option value="34">PALENCIA</option>
                            <option value="36">PONTEVEDRA</option>
                            <option value="38">S.C. TENERIFE</option>
                            <option value="37">SALAMANCA</option>
                            <option value="40">SEGOVIA</option>
                            <option value="41">SEVILLA</option>
                            <option value="42">SORIA</option>
                            <option value="43">TARRAGONA</option>
                            <option value="44">TERUEL</option>
                            <option value="45">TOLEDO</option>
                            <option value="46">VALENCIA</option>
                            <option value="47">VALLADOLID</option>
                            <option value="49">ZAMORA</option>
                            <option value="50">ZARAGOZA</option>
                       </select>
                    </td>
                </tr>
                <tr><td>&nbsp;</td></tr>
                <tr>
                    <td width="100" valign="middle" nowrap="nowrap"><span id="lblMunicipio">Municipio:</span></td>
                    <td width="150"><input list="datalistMunicipios" name="slcMunicipios" maxlength="30" size="31" id="slcMunicipios" disabled="disabled" type="text">
                        <datalist id="datalistMunicipios">
                        </datalist>
                        &nbsp;</td>
                    <td width="25">&nbsp;</td>
                </tr>
                <tr><td>&nbsp;</td></tr>
                <tr>
                    <td width="100" valign="middle" style="visibility: hidden;"><span id="lblVia">Via:</span></td>
                    <td width="150" valign="middle">
                        <select name="slcSigla" id="slcSigla" onchange="javascript:ActualizaListaVias(document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].text,document.forms['form1'].slcMunicipios.value,this[this.selectedIndex].value)" style="visibility: hidden;" disabled="disabled">
                            <option value="" selected="selected">-- Seleccione un tipo de Vía --</option>
                            <option value="CL">CALLE</option>
                            <option value="AV">AVENIDA</option>
                            <option value="PZ">PLAZA</option>
                            <option value="PS">PASEO</option>
                            <option value="CR">CARRETERA, CARRERA</option>
                            <option value="AC">ACCESO</option>
                            <option value="AG">AGREGADO</option>
                            <option value="AL">ALDEA, ALAMEDA</option>
                            <option value="AN">ANDADOR</option>
                            <option value="AR">AREA, ARRABAL</option>
                            <option value="AY">ARROYO</option>
                            <option value="AU">AUTOPISTA</option>
                            <option value="BJ">BAJADA</option>
                            <option value="BL">BLOQUE</option>
                            <option value="BR">BARRANCO</option>
                            <option value="BQ">BARRANQUIL</option>
                            <option value="BO">BARRIO</option>
                            <option value="BV">BULEVAR</option>
                            <option value="CY">CALEYA</option>
                            <option value="CJ">CALLEJA, CALLEJON</option>
                            <option value="CZ">CALLIZO</option>
                            <option value="CM">CAMINO, CARMEN</option>
                            <option value="CP">CAMPA, CAMPO</option>
                            <option value="CA">CAÑADA</option>
                            <option value="CS">CASERIO</option>
                            <option value="CH">CHALET</option>
                            <option value="CI">CINTURON</option>
                            <option value="CG">COLEGIO, CIGARRAL</option>
                            <option value="CN">COLONIA</option>
                            <option value="CO">CONCEJO, COLEGIO</option>
                            <option value="CU">CONJUNTO</option>
                            <option value="CT">CUESTA, COSTANILLA</option>
                            <option value="DE">DETRAS</option>
                            <option value="DP">DIPUTACION</option>
                            <option value="DS">DISEMINADOS</option>
                            <option value="ED">EDIFICIOS</option>
                            <option value="EN">ENTRADA, ENSANCHE</option>
                            <option value="ES">ESCALINATA</option>
                            <option value="ES">ESPALDA</option>
                            <option value="EX">EXPLANADA</option>
                            <option value="EM">EXTRAMUROS</option>
                            <option value="ER">EXTRARRADIO</option>
                            <option value="FC">FERROCARRIL</option>
                            <option value="FN">FINCA</option>
                            <option value="GL">GLORIETA</option>
                            <option value="GV">GRAN VIA</option>
                            <option value="GR">GRUPO</option>
                            <option value="HT">HUERTA, HUERTO</option>
                            <option value="JR">JARDINES</option>
                            <option value="LD">LADO, LADERA</option>
                            <option value="LA">LAGO</option>
                            <option value="LG">LUGAR</option>
                            <option value="MA">MALECON</option>
                            <option value="MZ">MANZANA</option>
                            <option value="MS">MASIAS</option>
                            <option value="MC">MERCADO</option>
                            <option value="MT">MONTE</option>
                            <option value="ML">MUELLE</option>
                            <option value="MN">MUNICIPIO</option>
                            <option value="PM">PARAMO</option>
                            <option value="PQ">PARROQUIA, PARQUE</option>
                            <option value="PI">PARTICULAR</option>
                            <option value="PD">PARTIDA</option>
                            <option value="PU">PASADIZO</option>
                            <option value="PJ">PASAJE, PASADIZO</option>
                            <option value="PC">PLACETA</option>
                            <option value="PB">POBLADO</option>
                            <option value="PL">POLIGONO</option>
                            <option value="PR">PROLONGACION, CONTINUAC.</option>
                            <option value="PT">PUENTE</option>
                            <option value="QT">QUINTA</option>
                            <option value="RA">RACONADA</option>
                            <option value="RM">RAMAL</option>
                            <option value="RB">RAMBLA</option>
                            <option value="RC">RINCON, RINCONA</option>
                            <option value="RD">RONDA</option>
                            <option value="RP">RAMPA</option>
                            <option value="RR">RIERA</option>
                            <option value="RU">RUA</option>
                            <option value="SA">SALIDA</option>
                            <option value="SN">SALON</option>
                            <option value="SC">SECTOR</option>
                            <option value="SD">SENDA</option>
                            <option value="SL">SOLAR</option>
                            <option value="SU">SUBIDA</option>
                            <option value="TN">TERRENOS</option>
                            <option value="TO">TORRENTE</option>
                            <option value="TR">TRAVESIA</option>
                            <option value="UR">URBANIZACION</option>
                            <option value="VA">VALLE</option>
                            <option value="VR">VEREDA</option>
                            <option value="VI">VIA</option>
                            <option value="VD">VIADUCTO</option>
                            <option value="VL">VIAL</option>
                            <option value="--">--</option>
                        </select>
                    </td>
                    <td width="150"><input name="txtVia" maxlength="25" size="25" id="txtVia" onkeypress="javascript:Pulsacion(event,'BuscarVias');" style="visibility: hidden;" disabled="disabled" type="text" list="datalistVias">
			<datalist id="datalistVias">
			</datalist></td>
                    <td width="26" valign="middle">&nbsp;</td>
                </tr>
            </tbody>
        </table>
	<table width="700" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td class="textogris" height="20"></td>
		</tr>
                <tr>
                    <td valign="middle" align="center">
                        <span id="lblPonerFocus" style="display:inline-block;width:0px;"><script>function PonerFoco(){}</script></span><span id="lblLanzarAlert" style="display:inline-block;width:0px;"><script>function LanzarAlert(){}</script></span><span id="apenom" style="display:inline-block;width:0px;VISIBILITY: hidden"></span>
                        <div style="VISIBILITY: hidden"><input name="txtValido" value="V" id="txtValido" class="textogris" disabled="disabled" style="width:0px;" type="text"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
    <span id="infoapp"></span>
</div>
@endSection