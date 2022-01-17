@extends('master')
@section('content')
<div>
<form method="post" action="https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCBusqueda.aspx?from=" id="form1" style="MARGIN-TOP: 0px">
	<table width="800" cellspacing="0" cellpadding="0" border="0">
		<tbody>
                    <tr>
                        <td>&nbsp;<h1>Consulta de datos catastrales</h1>&nbsp;&nbsp;
			</td>
                    </tr>
                    <tr>
			<td>
                            <table width="100%" cellspacing="0" cellpadding="0" border="0">
				<tbody><tr>
					<td class="textogris" width="14" align="left"></td>
					<td class="textogris"></td>
					<td class="textogris" colspan="2" nowrap="nowrap"></td>
                                    </tr>
				</tbody>
                            </table>
			</td>
                    </tr>
                    <tr>
			<td>
                            <table width="100%" cellspacing="0" cellpadding="1" border="0">
                                <tbody>
                                    <tr>
                                        <td class="textogris" width="3"></td>
                                        <td class="textogris" width="28" align="left"><span class="textogrisO"><input id="rbRC" name="rdb_Tipo" value="rbRC" onclick="Habilitar2();" checked="checked" type="radio"></span>&nbsp;</td>
                                        <td class="textogrisO" width="154">Referencia Catastral: </a></td>
					<td width="185" valign="middle">
                                            <input name="txtRefC" id="txtRefC" type="hidden">
                                            <input name="txtRefC2" id="txtRefC2" type="hidden"></td>
					</tr>
                                </tbody>
                            </table>
			</td>
                    </tr>
                    <tr>
				<td>
					<table width="100%" cellspacing="0" cellpadding="1">
						<tbody><tr>
							<td width="19"></td>
							<td class="textogris" width="115" valign="middle"></td>
							<td class="textogris" width="300" valign="middle"><input name="txtRC" maxlength="40" size="44" id="txtRC" class="textogris" onchange="javascript:DatosRefCatastralDir(this.value)" style="background-color: rgb(255, 255, 255);" type="text"></td>
							<td class="textogris" width="352"><span id="Label1"><sup>(**)Se requiere uno de los campos. Número 0 equivale a s/n.</sup></span></td>
						</tr>
						<tr>
							<td height="10"></td>
							<td class="textogris" valign="middle" height="10"></td>
							<td class="textogris" valign="middle" height="10"></td>
							<td class="textogris" valign="middle" height="10"></td>
							<td class="textogris" height="10"></td>
						</tr>
					</tbody></table>
				</td>
			</tr>
			<tr>
				<td>
					<table width="100%" cellspacing="0" cellpadding="0">
						<tbody><tr>
							<td class="textogris" width="5">&nbsp;</td>
							<td class="textogris" width="28"><span class="textogrisO"><input id="rdbLocalizacion" name="rdb_Tipo" value="rdbLocalizacion" onclick="Habilitar2();" type="radio"></span></td>
							<td class="textogris" width="705"><span id="lblLocalizacion" class="textogrisO">Localización</span></td>
						</tr>
					</tbody></table>
				</td>
			</tr>
			<tr>
				<td>
					<table width="100%" cellspacing="0" cellpadding="1" border="0">
						<tbody><tr>
							<td class="textogris" style="WIDTH: 24px" width="24"></td>
							<td class="textogris" width="130" valign="middle" nowrap="nowrap"><span id="lblProvincia">(*)Provincia:</span></td>
							<td style="WIDTH: 201px" width="201"><select name="slcProvincias" id="slcProvincias" class="textogris" onchange="javascript:ActualizaListaMunicipios(this[this.selectedIndex].text)" onkeyup="return keyscombo(this.name, 'OVCCiudMuni',this[this.selectedIndex].value)" style="background-color: rgb(210, 210, 210); width: 200px;" disabled="disabled">
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

</select></td>
								<td class="textogris" style="WIDTH: 27px">&nbsp;</td>
								<td></td>
							</tr>
						</tbody></table>
					</td>
				</tr>
				<tr>
					<td>
						<table width="100%" cellspacing="0" cellpadding="1" border="0">
							<tbody><tr>
								<td class="textogris" width="22"></td>
								<td class="textogris" width="120" valign="middle" nowrap="nowrap"><span id="lblMunicipio">(*)Municipio:</span></td>
								<td class="textogris" width="179"><input name="slcMunicipios" maxlength="30" size="31" id="slcMunicipios" class="textogris" onchange="javascript:document.forms['form1'].idMunicipio.value='';" style="background-color: rgb(210, 210, 210);" disabled="disabled" type="text" list="datalistMunicipios">
								<datalist id="datalistMunicipios">
								</datalist>
								&nbsp;</td>
								<td class="textogris" width="25">&nbsp;</td>
							</tr>
						</tbody></table>
					</td>
					<td class="textogris">&nbsp;</td>
				</tr>
			<tr><td>
			<table width="700" cellspacing="0" cellpadding="0" border="0">
				<tbody><tr>
					<td>
						<table width="100%" cellspacing="0" cellpadding="1">
							<tbody><tr>
								<td width="20">&nbsp;</td>
								<td width="10"></td>
								<td class="textogris" width="14"><input id="rbLUrbanos" name="rdb_UrbRus" value="rbLUrbanos" onclick="HabilitarUrbRus();" disabled="disabled" type="radio"></td>
								<td class="textogris"><span id="lblLocUrbanos" class="textogris">Urbanos:</span></td>
							</tr>
						</tbody></table>
					</td>
				</tr>
				<tr>
					<td>
						<table width="100%" cellspacing="0" cellpadding="1">
							<tbody><tr>
								<td width="20" valign="middle">&nbsp;</td>
								<td width="20" valign="middle">&nbsp;</td>
								<td class="textogris" width="6" valign="middle">&nbsp;</td>
								<td class="textogris" width="57" valign="middle"><img src="OVCBusqueda_data/li_peq_nar.gif" valign="middle" width="5" height="8">&nbsp;<span id="lblVia">(*)Via:</span></td>
								<td width="209" valign="middle"><select name="slcSigla" id="slcSigla" class="textogris" onchange="javascript:ActualizaListaVias(document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].text,document.forms['form1'].slcMunicipios.value,this[this.selectedIndex].value)" style="background-color: rgb(210, 210, 210); width: 195px; z-index: 1;" disabled="disabled">
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
									<input name="hdTipoVia" id="hdTipoVia" type="hidden">
								</td>
								<td class="textogris" valign="middle" align="right">&nbsp;<input name="txtVia" maxlength="25" size="25" id="txtVia" class="textogris" onkeypress="javascript:Pulsacion(event,'BuscarVias');" onchange="javascript:document.forms['form1'].hdCodVia.value='';" style="background-color: rgb(210, 210, 210);" disabled="disabled" type="text" list="datalistVias">
								<datalist id="datalistVias">
								</datalist></td>
								<td width="26" valign="middle">&nbsp;</td>
							</tr>
						</tbody></table>
					</td>
				</tr>
				<tr>
					<td>
						<table width="100%" cellspacing="0" cellpadding="1" border="0">
							<tbody><tr valign="middle">
								<td width="20">&nbsp;</td>
								<td width="20">&nbsp;</td>
								<td class="textogris" width="6">&nbsp;&nbsp;</td>
								<td class="textogris" width="94"><img src="OVCBusqueda_data/li_peq_nar.gif" valign="middle" width="5" height="8">
									<span id="lblNumero">(*)Número:</span></td>
								<td class="textogris" width="53"><input name="txtNum" maxlength="4" size="5" id="txtNum" class="textogris" onkeyup="javascript:ActualizaListaNumeros(document.forms['form1'].slcProvincias[document.forms['form1'].slcProvincias.selectedIndex].text,document.forms['form1'].slcMunicipios.value,document.forms['form1'].slcSigla.value,document.forms['form1'].txtVia.value,this.value)" style="background-color: rgb(210, 210, 210);" disabled="disabled" type="text">&nbsp;<sup></sup></td>
								<td class="textogris" colspan="2"></td>
							</tr>
						</tbody></table>
					</td>
				</tr>
				<tr>
					<td>
						<table width="100%" cellspacing="0" cellpadding="1">
							<tbody><tr>
								<td width="20">&nbsp;</td>
								<td width="10">&nbsp;</td>
								<td class="textogris" width="14"><input id="rbLRusticos" name="rdb_UrbRus" value="rbLRusticos" onclick="HabilitarUrbRus();" disabled="disabled" type="radio"></td>
								<td class="textogris"><span id="lblRusticos" class="textogris">Rústicos:</span></td>
							</tr>
						</tbody></table>
					</td>
				</tr>
				<tr>
					<td>
						<table width="100%" cellspacing="0" cellpadding="1">
							<tbody><tr>
								<td width="20">&nbsp;</td>
								<td width="20">&nbsp;</td>
								<td class="textogris" width="10">&nbsp;
								</td>
								<td class="textogris" width="90"><img src="OVCBusqueda_data/li_peq_nar.gif" valign="middle" width="5" height="8">
									<span id="lblPoligono">(*)Polígono:</span></td>
								<td class="textogris" width="288"><input name="txtPol" maxlength="3" size="10" id="txtPol" class="textogris" style="background-color: rgb(210, 210, 210);" disabled="disabled" type="text"><sub></sub></td>
								<td class="textogris" width="2">&nbsp;</td>
								<td class="textogris" width="80"><img src="OVCBusqueda_data/li_peq_nar.gif" valign="middle" width="5" height="8">
									<span id="lblParcela">(*)Parcela:</span></td>
								<td class="textogris" width="204"><input name="txtPar" maxlength="5" size="5" id="txtPar" class="textogris" onchange="javascript:ListaRCRusticas(document.forms['form1'].txtPol.value,this.value);" style="background-color: rgb(210, 210, 210);" disabled="disabled" type="text"><sub></sub></td>
							</tr>
						</tbody></table>
					</td>
				</tr>
				
			</tbody></table>
                </td></tr>
            
            <tr><td>
                <table width="100%" cellspacing="0" cellpadding="0">
                    <tbody><tr>
								<td height="10"></td>
								<td class="textogris" valign="middle" height="10"></td>
								<td class="textogris" valign="middle" height="10"></td>
								
							</tr>
                    </tbody></table>
                </td>

            </tr>
            </tbody></table>
			<input name="txtMuniAgr" id="txtMuniAgr" value="" style="background-color: rgb(210, 210, 210);" disabled="disabled" type="hidden"> <input name="txtZCon" id="txtZCon" value="" style="background-color: rgb(210, 210, 210);" disabled="disabled" type="hidden">
			<input name="txtBic" id="txtBic" value="" type="hidden">&nbsp;
			<table width="700" cellspacing="0" cellpadding="0" border="0">
				<tbody><tr>
					<td class="textogris" height="20"></td>
				</tr>
				<tr>
					<td valign="middle" align="center">
						<span id="lblPonerFocus" style="display:inline-block;width:0px;"><script>function PonerFoco(){}</script></span><span id="lblLanzarAlert" style="display:inline-block;width:0px;"><script>function LanzarAlert(){}</script></span><span id="apenom" style="display:inline-block;width:0px;VISIBILITY: hidden"></span>
						<div style="VISIBILITY: hidden"><input name="txtValido" value="V" id="txtValido" class="textogris" disabled="disabled" style="width:0px;" type="text"></div>
					</td>
				</tr>
			</tbody></table>
		</form>
	
<span id="infoapp"></span>
</div>
@endSection