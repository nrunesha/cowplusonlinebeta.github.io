function toggleDataGroups(){
	if(document.getElementById("countryYear").checked){
		document.getElementById("countryYearData").style.display = "block";
	}
	else{
		$('#countryYearData').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("countryYearData").style.display = "none";
	}
	if(document.getElementById("dyadYear").checked){
		document.getElementById("dyadicData").style.display = "block";
	}
	else{
		$('#dyadicData').find('input[type=checkbox]:checked').prop('checked',false);				
		document.getElementById("dyadicData").style.display = "none";
	}
}

function toggleVariableTableDiv(){
	if(document.getElementById("NMC_5_0").checked){
		document.getElementById("divNMC_5_0_Table").style.display = "block";
	}
	else{					
		document.getElementById("divNMC_5_0_Table").style.display = "none";
	}
	if(document.getElementById("WRP_NAT").checked){
		document.getElementById("divWRP_NAT_Table").style.display = "block";
	}
	else{
		document.getElementById("divWRP_NAT_Table").style.display = "none";
	}
	if(document.getElementById("Major_Powers").checked){
		document.getElementById("divMajor_PowersTable").style.display = "block";
	}
	else{
		document.getElementById("divMajor_PowersTable").style.display = "none";
	}
	if(document.getElementById("DirectContiguity").checked){
		document.getElementById("divDirectContiguityTable").style.display = "block";
	}
	else{
		document.getElementById("divDirectContiguityTable").style.display = "none";
	}
	
	if(document.getElementById("ND_Data_MID").checked){
		document.getElementById("divMidDataTable").style.display = "block";
	}
	else{
		document.getElementById("divMidDataTable").style.display = "none";
	}
}


function contains(set, object, keys) {
	var solution = -1;
	set.forEach(function (item, index, array) {
		var selfItem = item;
		var allKeys = keys.every(function (item, index, array) {
			if (selfItem[item] === object[item]) {
				return true;
			}
		});
		if (allKeys) {
			solution = index;
		}
	});
	return solution;
}

function mergeSets(first, second) {
	var result = first;
	var keys = Array.prototype.slice.call(arguments, 2);
	second.forEach(function (item, index, array) {
		var resultIndex = contains(result, item, keys);
		if (resultIndex === -1) {
			result.push(item);
		} else {
			for (var property in item) {
				if (item.hasOwnProperty(property)) {
					if (!result[resultIndex].hasOwnProperty(property)) {
						var hello = result[resultIndex];
						hello[property] = item[property];
					}
				}
			}
		}
	});
	return result;
}

function mergeCountryYearData(){			
	var countryYearDataSelected = [];

	if(document.getElementById("NMC_5_0").checked){
		countryYearDataSelected.push(NMC_5_0Unlim);
	}
	if(document.getElementById("WRP_NAT").checked){
		countryYearDataSelected.push(WRP_NATUnlim);
	}
	if(document.getElementById("Major_Powers").checked){
		countryYearDataSelected.push(COW_States_Major_Powers);
	}
	
	return countryYearDataSelected;
}

function countryYearDataSetChooser(){
	var countryYearDatasets = mergeCountryYearData();
	var data = NMC_5_0Unlim;
	if(countryYearDatasets.length == 1){
		data = countryYearDatasets[0];
	}
	else if(countryYearDatasets.length == 2){
		data = 	mergeSets(countryYearDatasets[0], countryYearDatasets[1], "state", "year", "ccode");
	}
	else if(countryYearDatasets.length == 3){
		var temp = mergeSets(countryYearDatasets[0], countryYearDatasets[1], "state", "year", "ccode");
		data = 	mergeSets(temp, countryYearDatasets[2], "state", "year", "ccode");
	}
	return data;
}

function mergeDyadYearData(){			
	var dyadYearDataSelected = [];

	if(document.getElementById("DirectContiguity").checked){
		dyadYearDataSelected.push(DirectContiguityDyadic);
	}
	if(document.getElementById("ND_Data_MID").checked){
		dyadYearDataSelected.push(COW_MID_DATA_ND);
	}
	return dyadYearDataSelected;
}

function dyadYearDataSetChooser(){
	var dyadYearDatasets = mergeDyadYearData();
	var data = DirectContiguityDyadic;
	if(dyadYearDatasets.length == 1){
		data = dyadYearDatasets[0];
	}
	if(dyadYearDatasets.length == 2){
		data = 	mergeSets(dyadYearDatasets[0], dyadYearDatasets[1], "state1ab", "state2ab", "year");
	}
	return data;
}

function toggleVariableSelectionDiv(){
	if(document.getElementById("NMC_5_0").checked){
		document.getElementById("divNMC_5_0").style.display = "block";
	}
	else{
		$('#divNMC_5_0').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divNMC_5_0").style.display = "none";
	}
	if(document.getElementById("WRP_NAT").checked){
		document.getElementById("divWRP_NAT").style.display = "block";
	}
	else{
		$('#divWRP_NAT').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divWRP_NAT").style.display = "none";
	}
	if(document.getElementById("Major_Powers").checked){
		document.getElementById("divMajor_Powers").style.display = "block";
	}
	else{
		$('#divMajor_Powers').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divMajor_Powers").style.display = "none";
	}
	if(document.getElementById("ND_Data_MID").checked){
		document.getElementById("divMID_Data_ND").style.display = "block";
	}
	else{
		$('#divMID_Data_ND').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divMID_Data_ND").style.display = "none";
	}
}		

function variableChooser(){
	const variables = [];
	if(document.getElementById("NMC_5_0").checked){
		variables.push("state");
		variables.push("year");
		variables.push("ccode");
		if(document.getElementById("milex_NMC_5_0").checked){
			variables.push("milex_NMC_5_0");
		}
		if(document.getElementById("milper_NMC_5_0").checked){
			variables.push("milper_NMC_5_0");
		}
		if(document.getElementById("irst_NMC_5_0").checked){
			variables.push("irst_NMC_5_0");
		}
		if(document.getElementById("pec_NMC_5_0").checked){
			variables.push("pec_NMC_5_0");
		}
		if(document.getElementById("tpop_NMC_5_0").checked){
			variables.push("upop_NMC_5_0");
		}
		if(document.getElementById("cinc_NMC_5_0").checked){
			variables.push("cinc_NMC_5_0");
		}
	}
	if(document.getElementById("Major_Powers").checked){
		variables.push("state");
		variables.push("year");
		variables.push("ccode");
		if(document.getElementById("statename_Major_Powers").checked){
			variables.push("statename_Major_Powers");
		}
		if(document.getElementById("major_Major_Powers").checked){
			variables.push("major_Major_Powers");
		}
	}
	if(document.getElementById("WRP_NAT").checked){
		variables.push("state");
		variables.push("year");
		variables.push("ccode");
		if(document.getElementById("chrstprot_WRP_NAT").checked){
			variables.push("chrstprot_WRP_NAT");
		}
		if(document.getElementById("chrstcat_WRP_NAT").checked){
			variables.push("chrstcat_WRP_NAT");
		}
		if(document.getElementById("chrstorth_WRP_NAT").checked){
			variables.push("chrstorth_WRP_NAT");
		}
		if(document.getElementById("chrstang_WRP_NAT").checked){
			variables.push("chrstang_WRP_NAT");
		}
		if(document.getElementById("chrstothr_WRP_NAT").checked){
			variables.push("chrstothr_WRP_NAT");
		}
		if(document.getElementById("chrstgen_WRP_NAT").checked){
			variables.push("chrstgen_WRP_NAT");
		}
		if(document.getElementById("judorth_WRP_NAT").checked){
			variables.push("judorth_WRP_NAT");
		}
		if(document.getElementById("judcons_WRP_NAT").checked){
			variables.push("judcons_WRP_NAT");
		}
		if(document.getElementById("judref_WRP_NAT").checked){
			variables.push("judref_WRP_NAT");
		}
		if(document.getElementById("judothr_WRP_NAT").checked){
			variables.push("judothr_WRP_NAT");
		}
		if(document.getElementById("judgen_WRP_NAT").checked){
			variables.push("judgen_WRP_NAT");
		}
		if(document.getElementById("islmsun_WRP_NAT").checked){
			variables.push("islmsun_WRP_NAT");
		}
		if(document.getElementById("islmshi_WRP_NAT").checked){
			variables.push("islmshi_WRP_NAT");
		}
		if(document.getElementById("islmibd_WRP_NAT").checked){
			variables.push("islmibd_WRP_NAT");
		}
		if(document.getElementById("islmnat_WRP_NAT").checked){
			variables.push("islmnat_WRP_NAT");
		}
		if(document.getElementById("islmalw_WRP_NAT").checked){
			variables.push("islmalw_WRP_NAT");
		}
		if(document.getElementById("islmahm_WRP_NAT").checked){
			variables.push("islmahm_WRP_NAT");
		}
		if(document.getElementById("islmothr_WRP_NAT").checked){
			variables.push("islmothr_WRP_NAT");
		}
		if(document.getElementById("islmgen_WRP_NAT").checked){
			variables.push("islmgen_WRP_NAT");
		}
		if(document.getElementById("budmah_WRP_NAT").checked){
			variables.push("budmah_WRP_NAT");
		}
		if(document.getElementById("budthr_WRP_NAT").checked){
			variables.push("budthr_WRP_NAT");
		}
		if(document.getElementById("budothr_WRP_NAT").checked){
			variables.push("budothr_WRP_NAT");
		}
		if(document.getElementById("budgen_WRP_NAT").checked){
			variables.push("budgen_WRP_NAT");
		}
		if(document.getElementById("zorogen_WRP_NAT").checked){
			variables.push("zorogen_WRP_NAT");
		}
		if(document.getElementById("hindgen_WRP_NAT").checked){
			variables.push("hindgen_WRP_NAT");
		}
		if(document.getElementById("sikhgen_WRP_NAT").checked){
			variables.push("sikhgen_WRP_NAT");
		}
		if(document.getElementById("shntgen_WRP_NAT").checked){
			variables.push("shntgen_WRP_NAT");
		}
		if(document.getElementById("bahgen_WRP_NAT").checked){
			variables.push("bahgen_WRP_NAT");
		}
		if(document.getElementById("taogen_WRP_NAT").checked){
			variables.push("taogen_WRP_NAT");
		}
		if(document.getElementById("jaingen_WRP_NAT").checked){
			variables.push("jaingen_WRP_NAT");
		}
		if(document.getElementById("confgen_WRP_NAT").checked){
			variables.push("confgen_WRP_NAT");
		}
		if(document.getElementById("syncgen_WRP_NAT").checked){
			variables.push("syncgen_WRP_NAT");
		}
		if(document.getElementById("anmgen_WRP_NAT").checked){
			variables.push("anmgen_WRP_NAT");
		}
		if(document.getElementById("nonrelig_WRP_NAT").checked){
			variables.push("nonrelig_WRP_NAT");
		}
		if(document.getElementById("othrgen_WRP_NAT").checked){
			variables.push("othrgen_WRP_NAT");
		}
		if(document.getElementById("sumrelig_WRP_NAT").checked){
			variables.push("sumrelig_WRP_NAT");
		}
		if(document.getElementById("pop_WRP_NAT").checked){
			variables.push("pop_WRP_NAT");
		}
		if(document.getElementById("chrstprotpct_WRP_NAT").checked){
			variables.push("chrstprotpct_WRP_NAT");
		}
		if(document.getElementById("chrstcatpct_WRP_NAT").checked){
			variables.push("chrstcatpct_WRP_NAT");
		}
		if(document.getElementById("chrstorthpct_WRP_NAT").checked){
			variables.push("chrstorthpct_WRP_NAT");
		}
		if(document.getElementById("chrstangpct_WRP_NAT").checked){
			variables.push("chrstangpct_WRP_NAT");
		}
		if(document.getElementById("chrstothrpct_WRP_NAT").checked){
			variables.push("chrstothrpct_WRP_NAT");
		}
		if(document.getElementById("chrstgenpct_WRP_NAT").checked){
			variables.push("chrstgenpct_WRP_NAT");
		}
		if(document.getElementById("judorthpct_WRP_NAT").checked){
			variables.push("judorthpct_WRP_NAT");
		}
		if(document.getElementById("judconspct_WRP_NAT").checked){
			variables.push("judconspct_WRP_NAT");
		}
		if(document.getElementById("judrefpct_WRP_NAT").checked){
			variables.push("judrefpct_WRP_NAT");
		}
		if(document.getElementById("judothrpct_WRP_NAT").checked){
			variables.push("judothrpct_WRP_NAT");
		}
		if(document.getElementById("judgenpct_WRP_NAT").checked){
			variables.push("judgenpct_WRP_NAT");
		}
		if(document.getElementById("islmsunpct_WRP_NAT").checked){
			variables.push("islmsunpct_WRP_NAT");
		}
		if(document.getElementById("islmshipct_WRP_NAT").checked){
			variables.push("islmshipct_WRP_NAT");
		}
		if(document.getElementById("islmibdpct_WRP_NAT").checked){
			variables.push("islmibdpct_WRP_NAT");
		}
		if(document.getElementById("islmnatpct_WRP_NAT").checked){
			variables.push("islmnatpct_WRP_NAT");
		}
		if(document.getElementById("islmalwpct_WRP_NAT").checked){
			variables.push("islmalwpct_WRP_NAT");
		}
		if(document.getElementById("islmahmpct_WRP_NAT").checked){
			variables.push("islmahmpct_WRP_NAT");
		}
		if(document.getElementById("islmothrpct_WRP_NAT").checked){
			variables.push("islmothrpct_WRP_NAT");
		}
		if(document.getElementById("islmgenpct_WRP_NAT").checked){
			variables.push("islmgenpct_WRP_NAT");
		}
		if(document.getElementById("budmahpct_WRP_NAT").checked){
			variables.push("budmahpct_WRP_NAT");
		}
		if(document.getElementById("budthrpct_WRP_NAT").checked){
			variables.push("budthrpct_WRP_NAT");
		}
		if(document.getElementById("budothrpct_WRP_NAT").checked){
			variables.push("budothrpct_WRP_NAT");
		}
		if(document.getElementById("budgenpct_WRP_NAT").checked){
			variables.push("budgenpct_WRP_NAT");
		}
		if(document.getElementById("zorogenpct_WRP_NAT").checked){
			variables.push("zorogenpct_WRP_NAT");
		}
		if(document.getElementById("hindgenpct_WRP_NAT").checked){
			variables.push("hindgenpct_WRP_NAT");
		}
		if(document.getElementById("sikhgenpct_WRP_NAT").checked){
			variables.push("sikhgenpct_WRP_NAT");
		}
		if(document.getElementById("shntgenpct_WRP_NAT").checked){
			variables.push("shntgenpct_WRP_NAT");
		}
		if(document.getElementById("bahgenpct_WRP_NAT").checked){
			variables.push("bahgenpct_WRP_NAT");
		}
		if(document.getElementById("taogenpct_WRP_NAT").checked){
			variables.push("taogenpct_WRP_NAT");
		}
		if(document.getElementById("jaingenpct_WRP_NAT").checked){
			variables.push("jaingenpct_WRP_NAT");
		}
		if(document.getElementById("confgenpct_WRP_NAT").checked){
			variables.push("confgenpct_WRP_NAT");
		}
		if(document.getElementById("syncgenpct_WRP_NAT").checked){
			variables.push("syncgenpct_WRP_NAT");
		}
		if(document.getElementById("anmgenpct_WRP_NAT").checked){
			variables.push("anmgenpct_WRP_NAT");
		}
		if(document.getElementById("nonreligpct_WRP_NAT").checked){
			variables.push("nonreligpct_WRP_NAT");
		}
		if(document.getElementById("othrgenpct_WRP_NAT").checked){
			variables.push("othrgenpct_WRP_NAT");
		}
		if(document.getElementById("sumreligpct_WRP_NAT").checked){
			variables.push("sumreligpct_WRP_NAT");
		}
		if(document.getElementById("total_WRP_NAT").checked){
			variables.push("total_WRP_NAT");
		}
		if(document.getElementById("dualrelig_WRP_NAT").checked){
			variables.push("dualrelig_WRP_NAT");
		}
		if(document.getElementById("datatype_WRP_NAT").checked){
			variables.push("datatype_WRP_NAT");
		}
		if(document.getElementById("sourcereliab_WRP_NAT").checked){
			variables.push("sourcereliab_WRP_NAT");
		}
		if(document.getElementById("recreliab_WRP_NAT").checked){
			variables.push("recreliab_WRP_NAT");
		}
		if(document.getElementById("reliabilevel_WRP_NAT").checked){
			variables.push("reliabilevel_WRP_NAT");
		}
		if(document.getElementById("sourcecode_WRP_NAT").checked){
			variables.push("sourcecode_WRP_NAT");
		}
	}
	if(document.getElementById("DirectContiguity").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		variables.push("dyad");
		variables.push("conttype_DirectContiguity");
	}
	if(document.getElementById("ND_Data_MID").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		variables.push("statenme1");
		variables.push("statenme2");
		if(document.getElementById("mid_count_MID").checked){
			variables.push("mid_count");
		}
		if(document.getElementById("mid_onset_m_MID").checked){
			variables.push("mid_onset_m");
		}
		if(document.getElementById("mid_ongoing_m_MID").checked){
			variables.push("mid_ongoing_m");
		}
		if(document.getElementById("onset_other_MID").checked){
			variables.push("onset_other");
		}
		if(document.getElementById("ongoing_other_MID").checked){
			variables.push("ongoing_other");
		}
		if(document.getElementById("main_disno_MID").checked){
			variables.push("main_disno");
		}
		if(document.getElementById("dyindex_MID").checked){
			variables.push("dyindex");
		}
		if(document.getElementById("strtday_m_MID").checked){
			variables.push("strtday_m");
		}
		if(document.getElementById("strtmnth_m_MID").checked){
			variables.push("strtmnth_m");
		}
		if(document.getElementById("strtyr_m_MID").checked){
			variables.push("strtyr_m");
		}
		if(document.getElementById("endday_m_MID").checked){
			variables.push("endday_m");
		}
		if(document.getElementById("endmnth_m_MID").checked){
			variables.push("endmnth_m");
		}
		if(document.getElementById("endyear_m_MID").checked){
			variables.push("endyear_m");
		}
		if(document.getElementById("outcome_m_MID").checked){
			variables.push("outcome_m");
		}
		if(document.getElementById("settlmnt_m_MID").checked){
			variables.push("settlmnt_m");
		}
		if(document.getElementById("fatlev_m_MID").checked){
			variables.push("fatlev_m");
		}
		if(document.getElementById("highact_m_MID").checked){
			variables.push("highact_m");
		}
		if(document.getElementById("hihost_m_MID").checked){
			variables.push("hihost_m");
		}
		if(document.getElementById("recip_m_MID").checked){
			variables.push("recip_m");
		}
		if(document.getElementById("nosideA_m_MID").checked){
			variables.push("nosideA_m");
		}
		if(document.getElementById("nosideB_m_MID").checked){
			variables.push("nosideB_m");
		}
		if(document.getElementById("sideaa_m_MID").checked){
			variables.push("sideaa_m");
		}
		if(document.getElementById("revstata_m_MID").checked){
			variables.push("revstata_m");
		}
		if(document.getElementById("revtypea_m_MID").checked){
			variables.push("revtypea_m");
		}
		if(document.getElementById("fatleva_m_MID").checked){
			variables.push("fatleva_m");
		}
		if(document.getElementById("highmcaa_m_MID").checked){
			variables.push("highmcaa_m");
		}
		if(document.getElementById("hihosta_m_MID").checked){
			variables.push("hihosta_m");
		}
		if(document.getElementById("orignata_m_MID").checked){
			variables.push("orignata_m");
		}
		if(document.getElementById("sideab_m_MID").checked){
			variables.push("sideab_m");
		}
		if(document.getElementById("revstatb_m_MID").checked){
			variables.push("revstatb_m");
		}
		if(document.getElementById("revtypeb_m_MID").checked){
			variables.push("revtypeb_m");
		}
		if(document.getElementById("fatlevb_m_MID").checked){
			variables.push("fatlevb_m");
		}
		if(document.getElementById("highmcab_m_MID").checked){
			variables.push("highmcab_m");
		}
		if(document.getElementById("hihostb_m_MID").checked){
			variables.push("hihostb_m");
		}
		if(document.getElementById("orignatb_m_MID").checked){
			variables.push("orignatb_m");
		}
		if(document.getElementById("rolea_m_MID").checked){
			variables.push("rolea_m");
		}
		if(document.getElementById("roleb_m_MID").checked){
			variables.push("roleb_m");
		}
		if(document.getElementById("dyad_rolea_m_MID").checked){
			variables.push("dyad_rolea_m");
		}
		if(document.getElementById("dyad_roleb_m_MID").checked){
			variables.push("dyad_roleb_m");
		}
		if(document.getElementById("war_m_MID").checked){
			variables.push("war_m");
		}
		if(document.getElementById("durindx_m_MID").checked){
			variables.push("durindx_m");
		}
		if(document.getElementById("duration_m_MID").checked){
			variables.push("duration_m");
		}
		if(document.getElementById("cumdurat_m_MID").checked){
			variables.push("cumdurat_m");
		}
		if(document.getElementById("mid5hiact_m_MID").checked){
			variables.push("mid5hiact_m");
		}
		if(document.getElementById("mid5hiacta_m_MID").checked){
			variables.push("mid5hiacta_m");
		}
		if(document.getElementById("mid5hiactb_m_MID").checked){
			variables.push("mid5hiactb_m");
		}
		if(document.getElementById("severity_m_MID").checked){
			variables.push("severity_m");
		}
		if(document.getElementById("severitya_m_MID").checked){
			variables.push("severitya_m");
		}
		if(document.getElementById("severityb_m_MID").checked){
			variables.push("severityb_m");
		}
		if(document.getElementById("ongo2014_m_MID").checked){
			variables.push("ongo2014_m");
		}
		if(document.getElementById("new_m_MID").checked){
			variables.push("new_m");
		}
	}
	return variables;
}

function toggleSelectorsCountryYear(){
	if (document.getElementById("selectorsCountryYear").style.display = "block"){
		document.getElementById("selectorsCountryYear").style.display = "none";
	}
	if (document.getElementById("selectorsCountryYear").style.display = "none"){
		document.getElementById("selectorsCountryYear").style.display = "block";
	}
}

function stateSet(){
	var stateDup = [];
	var myData = countryYearDataSetChooser();
	for (var i = 0; i < myData.length; i++){
		stateDup.push(myData[i]["state"]);
	}
	var stateSet = new Set(stateDup);
	var stateUnique = Array.from(stateSet);
	return stateUnique;
}
function dropDownList(){
	var select = document.getElementById("dropdown");
	var states = stateSet();
	for(var i = 0; i < states.length; i++) {
		var opt = states[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}
var selectedCountries = [];
function selectedCountriesList(){
	var element = document.getElementById("dropdown").value;
	if (selectedCountries.includes(element)){
		selectedCountries.splice(selectedCountries.indexOf(element), 1);
	}
	else {
		selectedCountries.push(element);
	}
	
	return selectedCountries;
}

function filterByStateCountryYear(){
	var input, table, tr, td, i;
	input = selectedCountriesList();
	table = document.getElementById("generated_Data");
	tr = table.getElementsByTagName("tr");
	if (input.includes("all")){
		for (i = 0; i < tr.length; i++) {
			tr[i].style.display = "";    
		}
		selectedCountries = [];
		document.getElementById("countriesSelected").innerHTML = selectedCountries;
		return;
	}
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
		  if (input.includes(td.innerHTML)) {
			tr[i].style.display = "";
		  } else {
			tr[i].style.display = "none";
		  }
		}       
	}
	
	document.getElementById("countriesSelected").innerHTML = input.join(", ");
}

function checkYearRangeSelector(){
	var minYear = document.getElementById("minimumYearCountryYear").value;
	var maxYear = document.getElementById("maximumYearCountryYear").value;
	let tf = true;
	if (minYear > maxYear){
		tf = false;
	}
	if ($('#generated_Data table tbody tr:visible').length <= 1){
		tf = false;
	}
	return Boolean(tf);
}
function selectedYearListCountryYear(){
	var minYear = document.getElementById("minimumYear").value;
	var maxYear = document.getElementById("maximumYear").value;
	var validYears=[];
	for(var i = minYear; i <= maxYear; i++) {
		validYears.push(i.toString());
	}
	return validYears;
}

function filterByYearCountryYear(){
	var input, table, tr, td, i;
	input = selectedYearListCountryYear();
	table = document.getElementById("generated_Data");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
		  if (input.includes(td.innerHTML,0)) {
			tr[i].style.display = "";
		  } else {
			tr[i].style.display = "none";
		  }
		}       
	}
	let truefalseYear = checkYearRangeSelector();
	if(truefalseYear == false){
		document.getElementById("WarningYearSelector").style.display = "block";
		return;
	}
	else{
		document.getElementById("WarningYearSelector").style.display = "none";				
	}
}

function toggleSelectorsDyadYear(){
	if (document.getElementById("selectorsDyadYear").style.display = "block"){
		document.getElementById("selectorsDyadYear").style.display = "none";
	}
	if (document.getElementById("selectorsDyadYear").style.display = "none"){
		document.getElementById("selectorsDyadYear").style.display = "block";
	}			
}



function stateSetDyadYear1(){
	var stateDup = [];
	var myData = dyadYearDataSetChooser();
	var table, tr, td, i;
	
	table = document.getElementById("generated_Data");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td){
			stateDup.push(td.innerHTML);       
		}
	}
	var stateSet = new Set(stateDup);
	var stateUnique = Array.from(stateSet);
	return stateUnique;
}

function dropDownListDyadYear1(){
	var select = document.getElementById("dropdown1");
	var states = stateSetDyadYear1();
	for(var i = 0; i < states.length; i++) {
		var opt = states[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}
var selectedCountriesFirst = [];
function selectedCountriesListDyadYear1(){
	var element = document.getElementById("dropdown1").value;
	if (selectedCountriesFirst.includes(element)){
		selectedCountriesFirst.splice(selectedCountriesFirst.indexOf(element), 1);
	}
	else {
		selectedCountriesFirst.push(element);
	}
	
	return selectedCountriesFirst;
}

function stateSetDyadYear2(){
	var stateDup = [];
	var table, tr, td, i;
	
	table = document.getElementById("generated_Data");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[3];
		if (td){
			stateDup.push(td.innerHTML);       
		}
	}
	var stateSet = new Set(stateDup);
	var stateUnique = Array.from(stateSet);
	return stateUnique;
}
function dropDownListDyadYear2(){
	var select = document.getElementById("dropdown2");
	var states = stateSetDyadYear2();
	for(var i = 0; i < states.length; i++) {
		var opt = states[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}
var selectedCountriesSecond = [];
function selectedCountriesListDyadYear2(){
	var element = document.getElementById("dropdown2").value;
	if (selectedCountriesSecond.includes(element)){
		selectedCountriesSecond.splice(selectedCountriesSecond.indexOf(element), 1);
	}
	else {
		selectedCountriesSecond.push(element);
	}
	
	return selectedCountriesSecond;
}

var input1Dyad = ["all"];
var input2Dyad = ["all"];
function setInput1Dyad(){
	input1Dyad=selectedCountriesListDyadYear1();
	return input1Dyad;
}
function setInput2Dyad(){
	input2Dyad=selectedCountriesListDyadYear2();
	return input2Dyad;
}
function filterByStateDyadYear(){
	var input1, input2, table, tr, td, td2, i;
	input1 = input1Dyad;
	input2 = input2Dyad;
	table = document.getElementById("generated_Data");
	tr = table.getElementsByTagName("tr");
	if (input1.includes("all") && input2.includes("all")){
		for (i = 0; i < tr.length; i++) {
			tr[i].style.display = "";    
		}
		selectedCountriesFirst = [];
		selectedCountriesSecond = [];
		document.getElementById("countriesSelectedDyadYear1").innerHTML = selectedCountriesFirst;
		document.getElementById("countriesSelectedDyadYear2").innerHTML = selectedCountriesSecond;
		return;
	}
	else if(input1.includes("all") || input2.includes("all")){
	
		if(input2.includes("all")){
			for (i = 0; i < tr.length; i++) {
				td = tr[i].getElementsByTagName("td")[1];
				if (td) {
				  if (input1.includes(td.innerHTML)) {
					tr[i].style.display = "";
				  } else {
					tr[i].style.display = "none";
				  }
				}       
			}
		}
		
		if (input1.includes("all")){
			for (i = 0; i < tr.length; i++) {
				td2 = tr[i].getElementsByTagName("td")[3];
				if (td2) {
				  if (input2.includes(td2.innerHTML)) {
					tr[i].style.display = "";
				  } else {
					tr[i].style.display = "none";
				  }
				}       
			}
		}
		if (input1.includes("all")){
			document.getElementById("countriesSelectedDyadYear2").innerHTML = input2.join(", ");
			selectedCountriesFirst = [];
			document.getElementById("countriesSelectedDyadYear1").innerHTML = selectedCountriesFirst;
		}
		else{
			document.getElementById("countriesSelectedDyadYear1").innerHTML = input1.join(", ");
			selectedCountriesSecond = [];
			document.getElementById("countriesSelectedDyadYear2").innerHTML = selectedCountriesSecond;
		}
		return;
	}
	else{
		for (i = 0; i < tr.length; i++) {
			td = tr[i].getElementsByTagName("td")[1];
			td2 = tr[i].getElementsByTagName("td")[3];
			if (td || td2) {
			  if (input1.includes(td.innerHTML) && input2.includes(td2.innerHTML)) {
				tr[i].style.display = "";
			  } else {
				tr[i].style.display = "none";
			  }
			}       
		}
	}
	
	document.getElementById("countriesSelectedDyadYear1").innerHTML = input1.join(", ");
	document.getElementById("countriesSelectedDyadYear2").innerHTML = input2.join(", ");
}

function checkYearRangeSelectorDyadYear(){
	var minYear = document.getElementById("minimumYearDyad").value;
	var maxYear = document.getElementById("maximumYearDyad").value;
	let tf = true;
	if (minYear > maxYear){
		tf = false;
	}
	if ($('#generated_Data table tbody tr:visible').length <= 1){
		tf = false;
	}
	return Boolean(tf);
}
function selectedYearListDyadYear(){
	var minYear = document.getElementById("minimumYearDyad").value;
	var maxYear = document.getElementById("maximumYearDyad").value;
	var validYears=[];
	for(var i = minYear; i <= maxYear; i++) {
		validYears.push(i.toString());
	}
	return validYears;
}

function filterByYearDyadYear(){
	var input, table, tr, td, i;
	input = selectedYearListDyadYear();
	table = document.getElementById("generated_Data");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[4];
		if (td) {
		  if (input.includes(td.innerHTML,0)) {
			tr[i].style.display = "";
		  } else {
			tr[i].style.display = "none";
		  }
		}       
	}
	let truefalseYear = checkYearRangeSelectorDyadYear();
	if(truefalseYear == false){
		document.getElementById("WarningYearSelector").style.display = "block";
		return;
	}
	else{
		document.getElementById("WarningYearSelector").style.display = "none";				
	}
}


function checkCheckboxes(){
	let tf = true;
	if (document.querySelectorAll('input[type="checkbox"]:checked').length <1){
		tf = false;
	}
	if($('input[name*="NMC_5_0"]:checked').length == 1 || $('input[name*="WRP_NAT"]:checked').length == 1 || $('input[name*="Major_Powers"]:checked').length == 1 || $('input[name*="MID"]:checked').length == 1){
		tf = false;
	}
	return Boolean(tf);
}
function checkTable(){
	let tf = true;
	if (document.querySelectorAll("#generated_Data table tr").length <=0){
		tf = false;
	}
	if (document.querySelectorAll('input[type="checkbox"]:checked').length <=1 && !document.getElementById("DirectContiguity").checked){
		tf = false;
	}
	return Boolean(tf);
}

function update(){
	return new Promise((resolve,reject)=>{
		var element = document.getElementById("progressBar");
		var width = 1;
		var identity = setInterval(scene, 10);
		function scene(){  
			if (width >= 100){
				clearInterval(identity);
				element.style.display = "none";
			}
			else{
				width++;
				element.style.width = width + '%';
			}
		}					
		setTimeout(()=>{
			console.log("");
			resolve();
			;} , 2000
		);
	});
}
function toggleProgressBar(){
	return new Promise((resolve,reject)=>{
		if (document.getElementById("progressStatus").style.display = "none"){
			document.getElementById("progressStatus").style.display = "inline-block";
		}
		setTimeout(()=>{
			console.log("");
			resolve();
			;} , 1
		);
	});
}

async function CreateTable() {
	await toggleProgressBar();
	let truefalse = checkCheckboxes();
	if(truefalse == false){
		document.getElementById("Warning").style.display = "block";
		return;
	}
	else{
		document.getElementById("Warning").style.display = "none";				
	}
	if(document.getElementById("countryYear").checked){
		var myData = countryYearDataSetChooser();
	}
	else if(document.getElementById("dyadYear").checked){
		var myData = dyadYearDataSetChooser();
	}
	let displayColumns = variableChooser();
	myData = myData.map(x => {
	  let newObj = {};
	  for (col of displayColumns) {
		newObj[col] = x[col];
	  }
	  return newObj;
	});
	var col = [];
	for (var i = 0; i < myData.length; i++) {
	  for (var key in myData[i]) {
		if (col.indexOf(key) === -1) {
		  col.push(key);
		}
	  }
	}
	var table = document.createElement("table");
	var tr = table.insertRow(-1);
	for (var i = 0; i < col.length; i++) {
	  var th = document.createElement("th");
	  th.innerHTML = col[i];
	  tr.appendChild(th);
	}
	let booleantf = true;
	for (var i = 0; i < myData.length; i++) {
	  booleantf = true;
	  for(var k=0; k<col.length; k++) {
		if(myData[i][col[k]]==undefined){
			booleantf = false;
		}
	  }
	  if(booleantf == true){
		  tr = table.insertRow(-1);
		  for (var j = 0; j < col.length; j++) {
			var tabCell = tr.insertCell(-1);
			tabCell.innerHTML = myData[i][col[j]];
		  }
	  }
	}
	await update();
	var divContainer = document.getElementById("showData");
	divContainer.innerHTML = "";
	divContainer.appendChild(table);
	if (document.getElementById("dyadYear").checked){
		document.getElementById("qChooseCY").style.display = "block";
		changeButton();
	}
	else if(document.getElementById("countryYear").checked){
		toggleSelectors();
	}
	
}		

//SECOND STEP 
function displayChooseCYData(){
	document.getElementById("yesChooseCY").disabled = true;
	document.getElementById("noChooseCY").disabled = true;
	if(document.getElementById("yesChooseCY").checked){
		document.getElementById("chooseCountryYearData").style.display = "block";
	}
	if (document.getElementById("noChooseCY").checked){
		changeButtonSecondStep();
		toggleSelectors();
	}
}

function checkCheckboxesSecondStep(){
	let tf = true;
	if (document.querySelectorAll('input[type="checkbox"]:checked').length <1){
		tf = false;
	}
	if($('input[name*="NMC_5_0SecondStep"]:checked').length == 1 || $('input[name*="WRP_NATSecondStep"]:checked').length == 1 || $('input[name*="Major_PowersSecondStep"]:checked').length == 1){
		tf = false;
	}
	if($('input[name*="SecondStep"]:checked').length <= 1){
		tf = false;
	}
	return Boolean(tf);
}

function changeButton(){
	document.getElementById("createButtonSecondStep").style.display = "inline-block";
	document.getElementById("createButton").style.display = "none";
}

function changeButtonSecondStep(){
	document.getElementById("buttonSecond").disabled = true;
	document.getElementById("downloadButton").style.display = "inline-block";
	document.getElementById("SecondStep").style.display = "none";

} 

function toggleVariableSelectionDivSecondStep(){
	if(document.getElementById("NMC_5_0SecondStep").checked){
		document.getElementById("divNMC_5_0SecondStep").style.display = "block";
	}
	else{
		$('#divNMC_5_0SecondStep').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divNMC_5_0SecondStep").style.display = "none";
	}
	if(document.getElementById("WRP_NATSecondStep").checked){
		document.getElementById("divWRP_NATSecondStep").style.display = "block";
	}
	else{
		$('#divWRP_NATSecondStep').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divWRP_NATSecondStep").style.display = "none";
	}
	if(document.getElementById("Major_PowersSecondStep").checked){
		document.getElementById("divMajor_PowersSecondStep").style.display = "block";
	}
	else{
		$('#divMajor_PowersSecondStep').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divMajor_PowersSecondStep").style.display = "none";
	}
	if(document.getElementById("ND_Data_MIDSecondStep").checked){
		document.getElementById("divMID_Data_NDSecondStep").style.display = "block";
	}
	else{
		$('#divMID_Data_NDSecondStep').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divMID_Data_NDSecondStep").style.display = "none";
	}
}

function variableChooserSecondStep(){
	const variablesSecondStep = [];
	if(document.getElementById("NMC_5_0SecondStep").checked){
		if(document.getElementById("milex_NMC_5_0SecondStep").checked){
			variablesSecondStep.push("milex_NMC_5_0");
		}
		if(document.getElementById("milper_NMC_5_0SecondStep").checked){
			variablesSecondStep.push("milper_NMC_5_0");
		}
		if(document.getElementById("irst_NMC_5_0SecondStep").checked){
			variablesSecondStep.push("irst_NMC_5_0");
		}
		if(document.getElementById("pec_NMC_5_0SecondStep").checked){
			variablesSecondStep.push("pec_NMC_5_0");
		}
		if(document.getElementById("tpop_NMC_5_0SecondStep").checked){
			variablesSecondStep.push("upop_NMC_5_0");
		}
		if(document.getElementById("cinc_NMC_5_0SecondStep").checked){
			variablesSecondStep.push("cinc_NMC_5_0");
		}
	}
	if(document.getElementById("Major_PowersSecondStep").checked){
		if(document.getElementById("statename_Major_PowersSecondStep").checked){
			variablesSecondStep.push("statename_Major_Powers");
		}
		if(document.getElementById("major_Major_PowersSecondStep").checked){
			variablesSecondStep.push("major_Major_Powers");
		}
	}
	if(document.getElementById("WRP_NATSecondStep").checked){
		if(document.getElementById("chrstprot_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstprot_WRP_NAT");
		}
		if(document.getElementById("chrstcat_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstcat_WRP_NAT");
		}
		if(document.getElementById("chrstorth_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstorth_WRP_NAT");
		}
		if(document.getElementById("chrstang_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstang_WRP_NAT");
		}
		if(document.getElementById("chrstothr_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstothr_WRP_NAT");
		}
		if(document.getElementById("chrstgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstgen_WRP_NAT");
		}
		if(document.getElementById("judorth_WRP_NATSecondStep").checked){
			variablesSecondStep.push("judorth_WRP_NAT");
		}
		if(document.getElementById("judcons_WRP_NATSecondStep").checked){
			variablesSecondStep.push("judcons_WRP_NAT");
		}
		if(document.getElementById("judref_WRP_NATSecondStep").checked){
			variablesSecondStep.push("judref_WRP_NAT");
		}
		if(document.getElementById("judothr_WRP_NATSecondStep").checked){
			variablesSecondStep.push("judothr_WRP_NAT");
		}
		if(document.getElementById("judgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("judgen_WRP_NAT");
		}
		if(document.getElementById("islmsun_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmsun_WRP_NAT");
		}
		if(document.getElementById("islmshi_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmshi_WRP_NAT");
		}
		if(document.getElementById("islmibd_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmibd_WRP_NAT");
		}
		if(document.getElementById("islmnat_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmnat_WRP_NAT");
		}
		if(document.getElementById("islmalw_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmalw_WRP_NAT");
		}
		if(document.getElementById("islmahm_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmahm_WRP_NAT");
		}
		if(document.getElementById("islmothr_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmothr_WRP_NAT");
		}
		if(document.getElementById("islmgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmgen_WRP_NAT");
		}
		if(document.getElementById("budmah_WRP_NATSecondStep").checked){
			variablesSecondStep.push("budmah_WRP_NAT");
		}
		if(document.getElementById("budthr_WRP_NATSecondStep").checked){
			variablesSecondStep.push("budthr_WRP_NAT");
		}
		if(document.getElementById("budothr_WRP_NATSecondStep").checked){
			variablesSecondStep.push("budothr_WRP_NAT");
		}
		if(document.getElementById("budgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("budgen_WRP_NAT");
		}
		if(document.getElementById("zorogen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("zorogen_WRP_NAT");
		}
		if(document.getElementById("hindgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("hindgen_WRP_NAT");
		}
		if(document.getElementById("sikhgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("sikhgen_WRP_NAT");
		}
		if(document.getElementById("shntgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("shntgen_WRP_NAT");
		}
		if(document.getElementById("bahgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("bahgen_WRP_NAT");
		}
		if(document.getElementById("taogen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("taogen_WRP_NAT");
		}
		if(document.getElementById("jaingen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("jaingen_WRP_NAT");
		}
		if(document.getElementById("confgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("confgen_WRP_NAT");
		}
		if(document.getElementById("syncgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("syncgen_WRP_NAT");
		}
		if(document.getElementById("anmgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("anmgen_WRP_NAT");
		}
		if(document.getElementById("nonrelig_WRP_NATSecondStep").checked){
			variablesSecondStep.push("nonrelig_WRP_NAT");
		}
		if(document.getElementById("othrgen_WRP_NATSecondStep").checked){
			variablesSecondStep.push("othrgen_WRP_NAT");
		}
		if(document.getElementById("sumrelig_WRP_NATSecondStep").checked){
			variablesSecondStep.push("sumrelig_WRP_NAT");
		}
		if(document.getElementById("pop_WRP_NATSecondStep").checked){
			variablesSecondStep.push("pop_WRP_NAT");
		}
		if(document.getElementById("chrstprotpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstprotpct_WRP_NAT");
		}
		if(document.getElementById("chrstcatpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstcatpct_WRP_NAT");
		}
		if(document.getElementById("chrstorthpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstorthpct_WRP_NAT");
		}
		if(document.getElementById("chrstangpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstangpct_WRP_NAT");
		}
		if(document.getElementById("chrstothrpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstothrpct_WRP_NAT");
		}
		if(document.getElementById("chrstgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("chrstgenpct_WRP_NAT");
		}
		if(document.getElementById("judorthpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("judorthpct_WRP_NAT");
		}
		if(document.getElementById("judconspct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("judconspct_WRP_NAT");
		}
		if(document.getElementById("judrefpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("judrefpct_WRP_NAT");
		}
		if(document.getElementById("judothrpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("judothrpct_WRP_NAT");
		}
		if(document.getElementById("judgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("judgenpct_WRP_NAT");
		}
		if(document.getElementById("islmsunpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmsunpct_WRP_NAT");
		}
		if(document.getElementById("islmshipct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmshipct_WRP_NAT");
		}
		if(document.getElementById("islmibdpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmibdpct_WRP_NAT");
		}
		if(document.getElementById("islmnatpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmnatpct_WRP_NAT");
		}
		if(document.getElementById("islmalwpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmalwpct_WRP_NAT");
		}
		if(document.getElementById("islmahmpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmahmpct_WRP_NAT");
		}
		if(document.getElementById("islmothrpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmothrpct_WRP_NAT");
		}
		if(document.getElementById("islmgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("islmgenpct_WRP_NAT");
		}
		if(document.getElementById("budmahpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("budmahpct_WRP_NAT");
		}
		if(document.getElementById("budthrpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("budthrpct_WRP_NAT");
		}
		if(document.getElementById("budothrpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("budothrpct_WRP_NAT");
		}
		if(document.getElementById("budgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("budgenpct_WRP_NAT");
		}
		if(document.getElementById("zorogenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("zorogenpct_WRP_NAT");
		}
		if(document.getElementById("hindgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("hindgenpct_WRP_NAT");
		}
		if(document.getElementById("sikhgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("sikhgenpct_WRP_NAT");
		}
		if(document.getElementById("shntgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("shntgenpct_WRP_NAT");
		}
		if(document.getElementById("bahgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("bahgenpct_WRP_NAT");
		}
		if(document.getElementById("taogenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("taogenpct_WRP_NAT");
		}
		if(document.getElementById("jaingenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("jaingenpct_WRP_NAT");
		}
		if(document.getElementById("confgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("confgenpct_WRP_NAT");
		}
		if(document.getElementById("syncgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("syncgenpct_WRP_NAT");
		}
		if(document.getElementById("anmgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("anmgenpct_WRP_NAT");
		}
		if(document.getElementById("nonreligpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("nonreligpct_WRP_NAT");
		}
		if(document.getElementById("othrgenpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("othrgenpct_WRP_NAT");
		}
		if(document.getElementById("sumreligpct_WRP_NATSecondStep").checked){
			variablesSecondStep.push("sumreligpct_WRP_NAT");
		}
		if(document.getElementById("total_WRP_NATSecondStep").checked){
			variablesSecondStep.push("total_WRP_NAT");
		}
		if(document.getElementById("dualrelig_WRP_NATSecondStep").checked){
			variablesSecondStep.push("dualrelig_WRP_NAT");
		}
		if(document.getElementById("datatype_WRP_NATSecondStep").checked){
			variablesSecondStep.push("datatype_WRP_NAT");
		}
		if(document.getElementById("sourcereliab_WRP_NATSecondStep").checked){
			variablesSecondStep.push("sourcereliab_WRP_NAT");
		}
		if(document.getElementById("recreliab_WRP_NATSecondStep").checked){
			variablesSecondStep.push("recreliab_WRP_NAT");
		}
		if(document.getElementById("reliabilevel_WRP_NATSecondStep").checked){
			variablesSecondStep.push("reliabilevel_WRP_NAT");
		}
		if(document.getElementById("sourcecode_WRP_NATSecondStep").checked){
			variablesSecondStep.push("sourcecode_WRP_NAT");
		}
	}
	
	return variablesSecondStep;
}

function mergeCountryYearDataSecondStep(){			
	var countryYearDataSelected = [];

	if(document.getElementById("NMC_5_0SecondStep").checked){
		countryYearDataSelected.push(NMC_5_0Unlim);
	}
	if(document.getElementById("WRP_NATSecondStep").checked){
		countryYearDataSelected.push(WRP_NATUnlim);
	}
	if(document.getElementById("Major_PowersSecondStep").checked){
		countryYearDataSelected.push(COW_States_Major_Powers);
	}
	return countryYearDataSelected;
}

function countryYearDataSetChooserSecondStep(){
	var countryYearDatasets = mergeCountryYearDataSecondStep();
	var data = NMC_5_0Unlim;
	if(countryYearDatasets.length == 1){
		data = countryYearDatasets[0];
	}
	else if(countryYearDatasets.length == 2){
		data = 	mergeSets(countryYearDatasets[0], countryYearDatasets[1], "state", "year", "ccode");
	}
	else if(countryYearDatasets.length == 3){
		var temp = mergeSets(countryYearDatasets[0], countryYearDatasets[1], "state", "year", "ccode");
		data = 	mergeSets(temp, countryYearDatasets[2], "state", "year", "ccode");
	}
	return data;
}

function yearArrayDyadYear(){
	var yearDup = [];
	var myData = dyadYearDataSetChooser();
	var table, tr, td, i;
	
	table = document.getElementById("generated_Data");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[4];
		if (td){
			yearDup.push(parseInt(td.innerHTML));       
		}
	}
	return yearDup;
}
function stateArrayDyadYear1(){
	var stateDup = [];
	var myData = dyadYearDataSetChooser();
	var table, tr, td, i;
	
	table = document.getElementById("generated_Data");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td){
			stateDup.push(td.innerHTML);       
		}
	}
	return stateDup;
}
function stateArrayDyadYear2(){
	var stateDup = [];
	var myData = dyadYearDataSetChooser();
	var table, tr, td, i;
	
	table = document.getElementById("generated_Data");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[3];
		if (td){
			stateDup.push(td.innerHTML);       
		}
	}
	return stateDup;
}

function createSearchArrayForExtraColumns(){
	var state1, state2, year, selectedVar, table, tr, td, td2, i;
	state1 = stateArrayDyadYear1();
	state2 = stateArrayDyadYear2();
	year = yearArrayDyadYear();
	selectedVar = variableChooserSecondStep();
	let compiledArray = [];
	let state = {
		"state1ab": "USA",
		"state2ab": "CAN",
		"year": 1920
	}
	for (i = 0; i < state1.length; i++){
		state = {
			"state1ab": state1[i],
			"state2ab": state2[i],
			"year": year[i]
		}
		compiledArray.push(state);
	}
	return compiledArray;
}

function createArrayForExtraColumnObjectsState1(){
	var searchArray, selectedVar, dataset, i, outputstate1;
	searchArray = createSearchArrayForExtraColumns();
	dataset = countryYearDataSetChooserSecondStep();
	let compiledArray = [];
	for (i = 0; i < searchArray.length; i++){
		outputstate1 = dataset.find(function(element) {
		  return element["state"] == searchArray[i]["state1ab"] && element["year"] == searchArray[i]["year"];
		});		
		compiledArray.push(outputstate1);
	}
	return compiledArray;
}
function createArrayForExtraColumnObjectsState2(){
	var searchArray, selectedVar, dataset, i, outputstate2;
	searchArray = createSearchArrayForExtraColumns();
	dataset = countryYearDataSetChooserSecondStep();
	let compiledArray = [];
	for (i = 0; i < searchArray.length; i++){
		outputstate2 = dataset.find(function(element) {
		  return element["state"] == searchArray[i]["state2ab"] && element["year"] == searchArray[i]["year"];
		});		
		compiledArray.push(outputstate2);
	}
	return compiledArray;
}

function createArrayForExtraColumnsFINALSTEP(){
	var state1, state2, selectedVar, compiledArray, i;
	state1 = createArrayForExtraColumnObjectsState1();
	state2 = createArrayForExtraColumnObjectsState2();
	selectedVar = variableChooserSecondStep();
	compiledArray = createSearchArrayForExtraColumns();
	
	for (var i = 0; i < compiledArray.length; i++) {
		for(var j = 0; j<selectedVar.length; j++){
			if(state1[i] == undefined){
				compiledArray[i][selectedVar[j] + "_1"] = ".";
			}
			else{
				compiledArray[i][selectedVar[j] + "_1"] = state1[i][selectedVar[j]];
			}
		}
	}
	for (var i = 0; i < compiledArray.length; i++) {
		for(var j = 0; j<selectedVar.length; j++){
			if(state2[i] == undefined){
				compiledArray[i][selectedVar[j] + "_2"] = ".";
			}
			else{
				compiledArray[i][selectedVar[j] + "_2"] = state2[i][selectedVar[j]];
			}
		}
	}
	return compiledArray;
}

function variableReplacer(){
	var variables = [];
	var selectedVar = variableChooserSecondStep();
	
	for (var i = 0; i < selectedVar.length; i++) {
		variables.push(selectedVar[i] + "_1");
		variables.push(selectedVar[i] + "_2");
	}
	return variables;
}
function mergeAppendedData(){
	var origData = dyadYearDataSetChooser();
	var newData = createArrayForExtraColumnsFINALSTEP();
	var data = mergeSets(origData, newData, "state1ab", "state2ab", "year");
	return data;
}

function clearTable(){
	return new Promise((resolve,reject)=>{
	var divContainer = document.getElementById("showData");
	divContainer.innerHTML = "";		
	setTimeout(()=>{
			console.log("");
			resolve();
			;} , 2000
		);
	});
}

function confirmNext(){
	return new Promise((resolve,reject)=>{
	if (!checkCheckboxesSecondStep()){
		if(confirm("You have not checked any variables. Do you want to continue?")){
			changeButtonSecondStep();
			toggleSelectors();
		}
	}		
	setTimeout(()=>{
			console.log("");
			resolve();
			;} , 2000
		);
	});
}

async function AddColumns() {
	await confirmNext();
	var myData = mergeAppendedData();
	let displayColumns = variableChooser();
	var variableListAppended = variableReplacer();
	for(var i = 0; i<variableListAppended.length; i++){
		displayColumns.push(variableListAppended[i]);
	}
	await clearTable();
	myData = myData.map(x => {
	  let newObj = {};
	  for (col of displayColumns) {
		newObj[col] = x[col];
	  }
	  return newObj;
	});
	var col = [];
	for (var i = 0; i < myData.length; i++) {
	  for (var key in myData[i]) {
		if (col.indexOf(key) === -1) {
		  col.push(key);
		}
	  }
	}
	var table = document.createElement("table");
	var tr = table.insertRow(-1);
	for (var i = 0; i < col.length; i++) {
	  var th = document.createElement("th");
	  th.innerHTML = col[i];
	  tr.appendChild(th);
	}
	let booleantf = true;
	for (var i = 0; i < myData.length; i++) {
	  booleantf = true;
	  for(var k=0; k<col.length; k++) {
		if(myData[i][col[k]]==undefined){
			myData[i][col[k]] = '.';
		}
	  }
	  tr = table.insertRow(-1);
	  for (var j = 0; j < col.length; j++) {
		var tabCell = tr.insertCell(-1);
		tabCell.innerHTML = myData[i][col[j]];
	  }
    }

	var divContainer = document.getElementById("showData");
	divContainer.appendChild(table);
	
	changeButtonSecondStep();
	toggleSelectors();
}	

function toggleSelectors(){ //third step
	if(document.getElementById("countryYear").checked){
		toggleSelectorsCountryYear();
		dropDownList();
	}
	
	if(document.getElementById("dyadYear").checked){
		toggleSelectorsDyadYear();
		dropDownListDyadYear1();
		dropDownListDyadYear2();
	}
}

function downloadCSV(csv, filename) {
	var csvFile;
	var downloadLink;
	csvFile = new Blob([csv], {type: "text/csv"});
	downloadLink = document.createElement("a");
	downloadLink.download = filename;
	downloadLink.href = window.URL.createObjectURL(csvFile);
	downloadLink.style.display = "none";
	document.body.appendChild(downloadLink);
	downloadLink.click();
}
function exportTableToCSV(filename) {
	let truefalse = checkTable();
	if(truefalse == false){
		document.getElementById("WarningDownload").style.display = "block";
		return;
	}
	else{
		document.getElementById("WarningDownload").style.display = "none";				
	}
	var csv = [];
	var rows = $("table tr:visible");
	for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("#generated_Data td, #generated_Data th");
		
		for (var j = 0; j < cols.length; j++) {
			row.push(cols[j].innerText);
		}
		csv.push(row.join(","));        
	}
	filename = filename + " " + new Date().toISOString().slice(0, 10) + ".csv";
	downloadCSV(csv.join("\n"), filename);
}
function findAllVariables() {
	for (let variable in window) {
		if (window.hasOwnProperty(variable)) {
			console.log(variable);
		}
	}
}