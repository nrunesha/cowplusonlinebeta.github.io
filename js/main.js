
function toggleDataGroups(){
	if(document.getElementById("countryYear").checked){
		$('#dyadicData').find('input[type=checkbox]:checked').prop('checked',false);				
		document.getElementById("countryYearData").style.display = "block";
		toggleVariableTableDiv();
	}
	else{
		$('#countryYearData').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("countryYearData").style.display = "none";
		toggleVariableTableDiv();
	}
	if(document.getElementById("dyadYear").checked){
		$('#countryYearData').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("dyadicData").style.display = "block";
		toggleVariableTableDiv();
	}
	else{
		$('#dyadicData').find('input[type=checkbox]:checked').prop('checked',false);				
		document.getElementById("dyadicData").style.display = "none";
		toggleVariableTableDiv();
	}
}

function allVariables(){
	const variables = [];
	if(document.getElementById("NMC_5_0").checked){
		variables.push("stateabb");
		variables.push("year");
		variables.push("ccode");
		variables.push("milex_NMC_5_0");
		variables.push("milper_NMC_5_0");
		variables.push("irst_NMC_5_0");
		variables.push("pec_NMC_5_0");
		variables.push("tpop_NMC_5_0");
		variables.push("upop_NMC_5_0");
		variables.push("cinc_NMC_5_0");
	}
	if(document.getElementById("Major_Powers").checked){
		variables.push("stateabb");
		variables.push("year");
		variables.push("ccode");
		variables.push("statename_Major_Powers");
		variables.push("major_Major_Powers");
	}
	if(document.getElementById("WRP_NAT").checked){
		variables.push("stateabb");
		variables.push("year");
		variables.push("ccode");
		variables.push("chrstprot_WRP_NAT");
		variables.push("chrstcat_WRP_NAT");
		variables.push("chrstorth_WRP_NAT");
		variables.push("chrstang_WRP_NAT");
		variables.push("chrstothr_WRP_NAT");
		variables.push("chrstgen_WRP_NAT");
		variables.push("judorth_WRP_NAT");
		variables.push("judcons_WRP_NAT");
		variables.push("judref_WRP_NAT");
		variables.push("judothr_WRP_NAT");
		variables.push("judgen_WRP_NAT");
		variables.push("islmsun_WRP_NAT");
		variables.push("islmshi_WRP_NAT");
		variables.push("islmibd_WRP_NAT");
		variables.push("islmnat_WRP_NAT");
		variables.push("islmalw_WRP_NAT");
		variables.push("islmahm_WRP_NAT");
		variables.push("islmothr_WRP_NAT");
		variables.push("islmgen_WRP_NAT");
		variables.push("budmah_WRP_NAT");
		variables.push("budthr_WRP_NAT");
		variables.push("budothr_WRP_NAT");
		variables.push("budgen_WRP_NAT");
		variables.push("zorogen_WRP_NAT");
		variables.push("hindgen_WRP_NAT");
		variables.push("sikhgen_WRP_NAT");
		variables.push("shntgen_WRP_NAT");
		variables.push("bahgen_WRP_NAT");
		variables.push("taogen_WRP_NAT");
		variables.push("jaingen_WRP_NAT");
		variables.push("confgen_WRP_NAT");
		variables.push("syncgen_WRP_NAT");
		variables.push("anmgen_WRP_NAT");
		variables.push("nonrelig_WRP_NAT");
		variables.push("othrgen_WRP_NAT");
		variables.push("sumrelig_WRP_NAT");
		variables.push("pop_WRP_NAT");
		variables.push("chrstprotpct_WRP_NAT");
		variables.push("chrstcatpct_WRP_NAT");
		variables.push("chrstorthpct_WRP_NAT");
		variables.push("chrstangpct_WRP_NAT");
		variables.push("chrstothrpct_WRP_NAT");
		variables.push("chrstgenpct_WRP_NAT");
		variables.push("judorthpct_WRP_NAT");
		variables.push("judconspct_WRP_NAT");
		variables.push("judrefpct_WRP_NAT");
		variables.push("judothrpct_WRP_NAT");
		variables.push("judgenpct_WRP_NAT");
		variables.push("islmsunpct_WRP_NAT");
		variables.push("islmshipct_WRP_NAT");
		variables.push("islmibdpct_WRP_NAT");
		variables.push("islmnatpct_WRP_NAT");
		variables.push("islmalwpct_WRP_NAT");
		variables.push("islmahmpct_WRP_NAT");
		variables.push("islmothrpct_WRP_NAT");
		variables.push("islmgenpct_WRP_NAT");
		variables.push("budmahpct_WRP_NAT");
		variables.push("budthrpct_WRP_NAT");
		variables.push("budothrpct_WRP_NAT");
		variables.push("budgenpct_WRP_NAT");
		variables.push("zorogenpct_WRP_NAT");
		variables.push("hindgenpct_WRP_NAT");
		variables.push("sikhgenpct_WRP_NAT");
		variables.push("shntgenpct_WRP_NAT");
		variables.push("bahgenpct_WRP_NAT");
		variables.push("taogenpct_WRP_NAT");
		variables.push("jaingenpct_WRP_NAT");
		variables.push("confgenpct_WRP_NAT");
		variables.push("syncgenpct_WRP_NAT");
		variables.push("anmgenpct_WRP_NAT");
		variables.push("nonreligpct_WRP_NAT");
		variables.push("othrgenpct_WRP_NAT");
		variables.push("sumreligpct_WRP_NAT");
		variables.push("total_WRP_NAT");
		variables.push("dualrelig_WRP_NAT");
		variables.push("datatype_WRP_NAT");
		variables.push("recreliab_WRP_NAT");
		variables.push("reliabilevel_WRP_NAT");
		variables.push("sourcecode_WRP_NAT");
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
	if(document.getElementById("MIDS_NDD").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		variables.push("statenme1");
		variables.push("statenme2");
		variables.push("mid_count");
		variables.push("mid_onset_m");
		variables.push("mid_ongoing_m");
		variables.push("onset_other");
		variables.push("ongoing_other");
		variables.push("main_disno");
		variables.push("dyindex");
		variables.push("strtday_m");
		variables.push("strtmnth_m");
		variables.push("strtyr_m");
		variables.push("endday_m");
		variables.push("endmnth_m");
		variables.push("endyear_m");
		variables.push("outcome_m");
		variables.push("settlmnt_m");
		variables.push("fatlev_m");
		variables.push("highact_m");
		variables.push("hihost_m");
		variables.push("recip_m");
		variables.push("nosideA_m");
		variables.push("nosideB_m");
		variables.push("sideaa_m");
		variables.push("revstata_m");
		variables.push("revtypea_m");
		variables.push("fatleva_m");
		variables.push("highmcaa_m");
		variables.push("hihosta_m");
		variables.push("orignata_m");
		variables.push("sideab_m");
		variables.push("revstatb_m");
		variables.push("revtypeb_m");
		variables.push("fatlevb_m");
		variables.push("highmcab_m");
		variables.push("hihostb_m");
		variables.push("orignatb_m");
		variables.push("rolea_m");
		variables.push("roleb_m");
		variables.push("dyad_rolea_m");
		variables.push("dyad_roleb_m");
		variables.push("war_m");
		variables.push("durindx_m");
		variables.push("duration_m");
		variables.push("cumdurat_m");
		variables.push("mid5hiact_m");
		variables.push("mid5hiacta_m");
		variables.push("mid5hiactb_m");
		variables.push("severity_m");
		variables.push("severitya_m");
		variables.push("severityb_m");
		variables.push("ongo2014_m");
		variables.push("new_m");
	}
	if(document.getElementById("COW_Alliance_Data_NDD").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		variables.push("defense");
		variables.push("neutrality");
		variables.push("nonaggression");
		variables.push("entente");
	}
	if(document.getElementById("COW_Diplomatic_Exchange").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		variables.push("dr_at_1");
		variables.push("dr_at_2");
		variables.push("de");
	}
	if(document.getElementById("COW_Trade_4_0").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		variables.push("flow1");
		variables.push("flow2");
		variables.push("smoothflow1");
		variables.push("smoothflow2");
		variables.push("smoothtotrade");
		variables.push("china_alt_flow1");
	}
	return variables;
}
function toggleVariableTableDiv(){
	if(document.querySelectorAll('input[type="checkbox"]:checked').length >=1){
		document.getElementById("variableText").style.display = "block";
	}
	else{document.getElementById("variableText").style.display = "none";}	
	if(document.getElementById("NMC_5_0").checked){
		document.getElementById("divNMC_5_0_Table").style.display = "block";
	}
	else{					
		$('#divNMC_5_0_Table').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divNMC_5_0_Table").style.display = "none";
	}
	if(document.getElementById("WRP_NAT").checked){
		document.getElementById("divWRP_NAT_Table").style.display = "block";
	}
	else{
		$('#divWRP_NAT_Table').find('input[type=checkbox]:checked').prop('checked',false);
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
	
	if(document.getElementById("MIDS_NDD").checked){
		document.getElementById("divMidDataTable").style.display = "block";
	}
	else{
		$('#divMidDataTable').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divMidDataTable").style.display = "none";
	}
	if(document.getElementById("COW_Alliance_Data_NDD").checked){
		document.getElementById("divCOWAllianceDataTable").style.display = "block";
	}
	else{
		$('#divCOWAllianceDataTable').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divCOWAllianceDataTable").style.display = "none";
	}
	if(document.getElementById("COW_IGO_Data_NDD").checked){
		document.getElementById("divCOWIGODataTable").style.display = "block";
	}
	else{
		$('#divCOWIGODataTable').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divCOWIGODataTable").style.display = "none";
	}
	if(document.getElementById("COW_Diplomatic_Exchange").checked){
		document.getElementById("divCOWDiplomaticExchangeTable").style.display = "block";
	}
	else{
		$('#divCOWDiplomaticExchangeTable').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divCOWDiplomaticExchangeTable").style.display = "none";
	}
	if(document.getElementById("COW_Trade_4_0").checked){
		document.getElementById("divCOWTradeTable").style.display = "block";
	}
	else{
		$('#divCOWTradeTable').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divCOWTradeTable").style.display = "none";
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
                        var el = result[resultIndex];
                        el[property] = item[property];
                    }
                }
            }
        }
    });
    return result;
}

function variableChooser(){
	const variables = [];
	if(document.getElementById("NMC_5_0").checked){
		variables.push("stateabb");
		variables.push("year");
		variables.push("ccode");
		if(document.getElementById("milex_NMC_5_0").checked){
			variables.push("milex");
		}
		if(document.getElementById("milper_NMC_5_0").checked){
			variables.push("milper");
		}
		if(document.getElementById("irst_NMC_5_0").checked){
			variables.push("irst");
		}
		if(document.getElementById("pec_NMC_5_0").checked){
			variables.push("pec");
		}
		if(document.getElementById("tpop_NMC_5_0").checked){
			variables.push("tpop");
		}
		if(document.getElementById("upop_NMC_5_0").checked){
			variables.push("upop");
		}
		if(document.getElementById("cinc_NMC_5_0").checked){
			variables.push("cinc");
		}
	}
	if(document.getElementById("Major_Powers").checked){
		variables.push("stateabb");
		variables.push("year");
		variables.push("ccode");
		variables.push("statename");
		variables.push("major");
	}
	if(document.getElementById("WRP_NAT").checked){
		variables.push("stateabb");
		variables.push("year");
		variables.push("ccode");
		if(document.getElementById("chrstprot_WRP_NAT").checked){
			variables.push("chrstprot");
		}
		if(document.getElementById("chrstcat_WRP_NAT").checked){
			variables.push("chrstcat");
		}
		if(document.getElementById("chrstorth_WRP_NAT").checked){
			variables.push("chrstorth");
		}
		if(document.getElementById("chrstang_WRP_NAT").checked){
			variables.push("chrstang");
		}
		if(document.getElementById("chrstothr_WRP_NAT").checked){
			variables.push("chrstothr");
		}
		if(document.getElementById("chrstgen_WRP_NAT").checked){
			variables.push("chrstgen");
		}
		if(document.getElementById("judorth_WRP_NAT").checked){
			variables.push("judorth");
		}
		if(document.getElementById("judcons_WRP_NAT").checked){
			variables.push("judcons");
		}
		if(document.getElementById("judref_WRP_NAT").checked){
			variables.push("judref");
		}
		if(document.getElementById("judothr_WRP_NAT").checked){
			variables.push("judothr");
		}
		if(document.getElementById("judgen_WRP_NAT").checked){
			variables.push("judgen");
		}
		if(document.getElementById("islmsun_WRP_NAT").checked){
			variables.push("islmsun");
		}
		if(document.getElementById("islmshi_WRP_NAT").checked){
			variables.push("islmshi");
		}
		if(document.getElementById("islmibd_WRP_NAT").checked){
			variables.push("islmibd");
		}
		if(document.getElementById("islmnat_WRP_NAT").checked){
			variables.push("islmnat");
		}
		if(document.getElementById("islmalw_WRP_NAT").checked){
			variables.push("islmalw");
		}
		if(document.getElementById("islmahm_WRP_NAT").checked){
			variables.push("islmahm");
		}
		if(document.getElementById("islmothr_WRP_NAT").checked){
			variables.push("islmothr");
		}
		if(document.getElementById("islmgen_WRP_NAT").checked){
			variables.push("islmgen");
		}
		if(document.getElementById("budmah_WRP_NAT").checked){
			variables.push("budmah");
		}
		if(document.getElementById("budthr_WRP_NAT").checked){
			variables.push("budthr");
		}
		if(document.getElementById("budothr_WRP_NAT").checked){
			variables.push("budothr");
		}
		if(document.getElementById("budgen_WRP_NAT").checked){
			variables.push("budgen");
		}
		if(document.getElementById("zorogen_WRP_NAT").checked){
			variables.push("zorogen");
		}
		if(document.getElementById("hindgen_WRP_NAT").checked){
			variables.push("hindgen");
		}
		if(document.getElementById("sikhgen_WRP_NAT").checked){
			variables.push("sikhgen");
		}
		if(document.getElementById("shntgen_WRP_NAT").checked){
			variables.push("shntgen");
		}
		if(document.getElementById("bahgen_WRP_NAT").checked){
			variables.push("bahgen");
		}
		if(document.getElementById("taogen_WRP_NAT").checked){
			variables.push("taogen");
		}
		if(document.getElementById("jaingen_WRP_NAT").checked){
			variables.push("jaingen");
		}
		if(document.getElementById("confgen_WRP_NAT").checked){
			variables.push("confgen");
		}
		if(document.getElementById("syncgen_WRP_NAT").checked){
			variables.push("syncgen");
		}
		if(document.getElementById("anmgen_WRP_NAT").checked){
			variables.push("anmgen");
		}
		if(document.getElementById("nonrelig_WRP_NAT").checked){
			variables.push("nonrelig");
		}
		if(document.getElementById("othrgen_WRP_NAT").checked){
			variables.push("othrgen");
		}
		if(document.getElementById("sumrelig_WRP_NAT").checked){
			variables.push("sumrelig");
		}
		if(document.getElementById("pop_WRP_NAT").checked){
			variables.push("pop");
		}
		if(document.getElementById("chrstprotpct_WRP_NAT").checked){
			variables.push("chrstprotpct");
		}
		if(document.getElementById("chrstcatpct_WRP_NAT").checked){
			variables.push("chrstcatpct");
		}
		if(document.getElementById("chrstorthpct_WRP_NAT").checked){
			variables.push("chrstorthpct");
		}
		if(document.getElementById("chrstangpct_WRP_NAT").checked){
			variables.push("chrstangpct");
		}
		if(document.getElementById("chrstothrpct_WRP_NAT").checked){
			variables.push("chrstothrpct");
		}
		if(document.getElementById("chrstgenpct_WRP_NAT").checked){
			variables.push("chrstgenpct");
		}
		if(document.getElementById("judorthpct_WRP_NAT").checked){
			variables.push("judorthpct");
		}
		if(document.getElementById("judconspct_WRP_NAT").checked){
			variables.push("judconspct");
		}
		if(document.getElementById("judrefpct_WRP_NAT").checked){
			variables.push("judrefpct");
		}
		if(document.getElementById("judothrpct_WRP_NAT").checked){
			variables.push("judothrpct");
		}
		if(document.getElementById("judgenpct_WRP_NAT").checked){
			variables.push("judgenpct");
		}
		if(document.getElementById("islmsunpct_WRP_NAT").checked){
			variables.push("islmsunpct");
		}
		if(document.getElementById("islmshipct_WRP_NAT").checked){
			variables.push("islmshipct");
		}
		if(document.getElementById("islmibdpct_WRP_NAT").checked){
			variables.push("islmibdpct");
		}
		if(document.getElementById("islmnatpct_WRP_NAT").checked){
			variables.push("islmnatpct");
		}
		if(document.getElementById("islmalwpct_WRP_NAT").checked){
			variables.push("islmalwpct");
		}
		if(document.getElementById("islmahmpct_WRP_NAT").checked){
			variables.push("islmahmpct");
		}
		if(document.getElementById("islmothrpct_WRP_NAT").checked){
			variables.push("islmothrpct");
		}
		if(document.getElementById("islmgenpct_WRP_NAT").checked){
			variables.push("islmgenpct");
		}
		if(document.getElementById("budmahpct_WRP_NAT").checked){
			variables.push("budmahpct");
		}
		if(document.getElementById("budthrpct_WRP_NAT").checked){
			variables.push("budthrpct");
		}
		if(document.getElementById("budothrpct_WRP_NAT").checked){
			variables.push("budothrpct");
		}
		if(document.getElementById("budgenpct_WRP_NAT").checked){
			variables.push("budgenpct");
		}
		if(document.getElementById("zorogenpct_WRP_NAT").checked){
			variables.push("zorogenpct");
		}
		if(document.getElementById("hindgenpct_WRP_NAT").checked){
			variables.push("hindgenpct");
		}
		if(document.getElementById("sikhgenpct_WRP_NAT").checked){
			variables.push("sikhgenpct");
		}
		if(document.getElementById("shntgenpct_WRP_NAT").checked){
			variables.push("shntgenpct");
		}
		if(document.getElementById("bahgenpct_WRP_NAT").checked){
			variables.push("bahgenpct");
		}
		if(document.getElementById("taogenpct_WRP_NAT").checked){
			variables.push("taogenpct");
		}
		if(document.getElementById("jaingenpct_WRP_NAT").checked){
			variables.push("jaingenpct");
		}
		if(document.getElementById("confgenpct_WRP_NAT").checked){
			variables.push("confgenpct");
		}
		if(document.getElementById("syncgenpct_WRP_NAT").checked){
			variables.push("syncgenpct");
		}
		if(document.getElementById("anmgenpct_WRP_NAT").checked){
			variables.push("anmgenpct");
		}
		if(document.getElementById("nonreligpct_WRP_NAT").checked){
			variables.push("nonreligpct");
		}
		if(document.getElementById("othrgenpct_WRP_NAT").checked){
			variables.push("othrgenpct");
		}
		if(document.getElementById("sumreligpct_WRP_NAT").checked){
			variables.push("sumreligpct");
		}
		if(document.getElementById("total_WRP_NAT").checked){
			variables.push("total");
		}
		if(document.getElementById("dualrelig_WRP_NAT").checked){
			variables.push("dualrelig");
		}
		if(document.getElementById("datatype_WRP_NAT").checked){
			variables.push("datatype");
		}
		if(document.getElementById("recreliab_WRP_NAT").checked){
			variables.push("recreliab");
		}
		if(document.getElementById("reliabilevel_WRP_NAT").checked){
			variables.push("reliabilevel");
		}
		if(document.getElementById("sourcecode_WRP_NAT").checked){
			variables.push("sourcecode");
		}
	}
	if(document.getElementById("DirectContiguity").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		variables.push("dyad");
		variables.push("conttype");
	}
	if(document.getElementById("MIDS_NDD").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
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
	if(document.getElementById("COW_Alliance_Data_NDD").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		if(document.getElementById("defense_Alliance").checked){
			variables.push("defense");
		}
		if(document.getElementById("neutrality_Alliance").checked){
			variables.push("neutrality");
		}
		if(document.getElementById("nonaggression_Alliance").checked){
			variables.push("nonaggression");
		}
		if(document.getElementById("entente_Alliance").checked){
			variables.push("entente");
		}
	}
	if(document.getElementById("COW_IGO_Data_NDD").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		if(document.getElementById("joint_igo_membership_IGO").checked){
			variables.push("joint_igo_membership");
		}
		if(document.getElementById("joint_igo_membership_count_IGO").checked){
			variables.push("joint_igo_membership_count");
		}
	}
	if(document.getElementById("COW_Diplomatic_Exchange").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		if(document.getElementById("dr_at_1_Diplo").checked){
			variables.push("dr_at_1");
		}
		if(document.getElementById("dr_at_2_Diplo").checked){
			variables.push("dr_at_2");
		}
		if(document.getElementById("de_Diplo").checked){
			variables.push("de");
		}
	}
	if(document.getElementById("COW_Trade_4_0").checked){
		variables.push("state1no");
		variables.push("state1ab");
		variables.push("state2no");
		variables.push("state2ab");
		variables.push("year");
		if(document.getElementById("flow1_Trade").checked){
			variables.push("flow1");
		}
		if(document.getElementById("flow2_Trade").checked){
			variables.push("flow2");
		}
		if(document.getElementById("smoothflow1_Trade").checked){
			variables.push("smoothflow1");
		}
		if(document.getElementById("smoothflow2_Trade").checked){
			variables.push("smoothflow2");
		}
		if(document.getElementById("smoothtotrade_Trade").checked){
			variables.push("smoothtotrade");
		}
		if(document.getElementById("china_alt_flow1_Trade").checked){
			variables.push("china_alt_flow1");
		}
	}
	return variables;
}


function mergeCountryYearData(){			
	var countryYearDataSelected = [];

	if(document.getElementById("NMC_5_0").checked){
		countryYearDataSelected.push(NMC_5_0);
	}
	if(document.getElementById("WRP_NAT").checked){
		countryYearDataSelected.push(WRP_NAT);
	}
	if(document.getElementById("Major_Powers").checked){
		countryYearDataSelected.push(COW_States_Major_Powers);
	}
	
	return countryYearDataSelected;
}

function countryYearDataSetChooser(){
	var countryYearDatasets = mergeCountryYearData();
	var data = NMC_5_0Unlim;
	var variableList = variableChooser();
	var allVariablesList = allVariables();
	if(countryYearDatasets.length == 1){
		data = countryYearDatasets[0];
	}
	else if(countryYearDatasets.length == 2){
		data = 	mergeSets(countryYearDatasets[0], countryYearDatasets[1], "stateabb", "year", "ccode");
	}
	else if(countryYearDatasets.length == 3){
		var temp = mergeSets(countryYearDatasets[0], countryYearDatasets[1], "stateabb", "year", "ccode");
		data = 	mergeSets(temp, countryYearDatasets[2], "stateabb", "year", "ccode");
	}
	for (var i = 0; i<allVariablesList.length; i++){
		if(variableList.includes(allVariables()[i]) == false){
			for(var j = 0; j<data.length; j++){
				delete data[j][allVariables()[i]];
			}
		}
	}
	for (var i = 0; i < data.length; i++){
		for(var j = 0; j<variableList.length; j++){
			if(Object.keys(data[i]).includes(variableList[j])){
				continue;
			}
			else{
				data.splice(i,1);
				i--;
			}
		}
	}
	return data;
}

function containsAll(obj, arr){
   for(var i = 0; i < arr.length; i++){
      if(Object.keys(obj).includes(arr[i])){
         continue;
      }else{
         return false;
      }
   }
   return true;
}

function mergeDyadYearData(){			
	var dyadYearDataSelected = [];

	if(document.getElementById("DirectContiguity").checked){
		dyadYearDataSelected.push(COW_Direct_Contiguity);
	}
	if(document.getElementById("MIDS_NDD").checked){
		dyadYearDataSelected.push(COW_MID_Data);
	}
	if(document.getElementById("COW_Alliance_Data_NDD").checked){
		dyadYearDataSelected.push(COW_Alliance_Data);
	}
	if(document.getElementById("COW_IGO_Data_NDD").checked){
		dyadYearDataSelected.push(COW_IGO_Data);
	}
	if(document.getElementById("COW_Diplomatic_Exchange").checked){
		dyadYearDataSelected.push(COW_Diplomatic_Exchange_Data);
	}
	if(document.getElementById("COW_Trade_4_0").checked){
		dyadYearDataSelected.push(COW_Trade_Data);
	}
	
	return dyadYearDataSelected;
}

function dyadYearDataSetChooser(){
	var dyadYearDatasets = mergeDyadYearData();
	var data = DirectContiguityDyadic;
	var variableList = variableChooser();
	var allVariablesList = allVariables();
	if(dyadYearDatasets.length == 1){
		data = dyadYearDatasets[0];
	}
	if(dyadYearDatasets.length == 2){
		data = 	mergeSets(dyadYearDatasets[0], dyadYearDatasets[1], "state1no", "state2no", "year");
	}
	if(dyadYearDatasets.length == 3){
		var temp = 	mergeSets(dyadYearDatasets[0], dyadYearDatasets[1], "state1no", "state2no", "year");
		data = 	mergeSets(temp, dyadYearDatasets[2], "state1no", "state2no", "year");
	}
	if(dyadYearDatasets.length == 4){
		var temp1 = mergeSets(dyadYearDatasets[0], dyadYearDatasets[1], "state1no", "state2no", "year");
		var temp2 = mergeSets(dyadYearDatasets[2], dyadYearDatasets[3], "state1no", "state2no", "year");
		data = 	mergeSets(temp1, temp2, "state1no", "state2no", "year");
	}
	if(dyadYearDatasets.length == 5){
		var temp1 = mergeSets(dyadYearDatasets[0], dyadYearDatasets[1], "state1no", "state2no", "year");
		var temp2 = mergeSets(dyadYearDatasets[2], dyadYearDatasets[3], "state1no", "state2no", "year");
		var temp3 = mergeSets(temp1, temp2, "state1no", "state2no", "year");
		data = 	mergeSets(temp3, dyadYearDatasets[4], "state1no", "state2no", "year");
	}
	if(dyadYearDatasets.length == 6){
		var temp1 = mergeSets(dyadYearDatasets[0], dyadYearDatasets[1], "state1no", "state2no", "year");
		var temp2 = mergeSets(dyadYearDatasets[2], dyadYearDatasets[3], "state1no", "state2no", "year");
		var temp3 = mergeSets(dyadYearDatasets[4], dyadYearDatasets[5], "state1no", "state2no", "year");
		var temp4 = mergeSets(temp1, temp2, "state1no", "state2no", "year");
		data = 	mergeSets(temp3, temp4, "state1no", "state2no", "year");
	}
	for (var i = 0; i<allVariablesList.length; i++){
		if(!variableList.includes(allVariablesList[i])){
			for(var j = 0; j<data.length; j++){
				delete data[j][allVariablesList[i]];
			}
		}
	}
	
	for (var i = 0; i < data.length; i++){
		for(var j = 0; j<variableList.length; j++){
			if((!Object.keys(data[i]).includes(variableList[j])) || data[i] == undefined){
				data.splice(i,1);
				i--;
				break;
			}
		}
	}
	
	return data;
}



function checkCheckboxes(){
	let tf = true;
	if (document.querySelectorAll('input[type="checkbox"]:checked').length <1){
		tf = false;
	}
	if(!document.getElementById("DirectContiguity").checked && $('input[name*="Trade"]:checked').length < 1 && $('input[name*="Diplo"]:checked').length < 1 &&$('input[name*="NMC_5_0"]:checked').length < 1 && $('input[name*="Alliance"]:checked').length < 1 && $('input[name*="IGO"]:checked').length < 1 && $('input[name*="WRP_NAT"]:checked').length < 1 && $('input[name*="Major_Powers"]:checked').length < 1 && $('input[name*="MID"]:checked').length < 1){
		tf = false;
	}
	return Boolean(tf);
}


function addID(){
	if(document.getElementById("countryYear").checked){
		var myData = countryYearDataSetChooser();
	}
	else if(document.getElementById("dyadYear").checked){
		var myData = dyadYearDataSetChooser();
	}
	for (var i = 0; i < myData.length; i++) {
		myData[i] = {"id" : i+1, ...myData[i]};
	}
	return myData;
}

function BackButtonOne(){
	document.getElementById("qChooseCY").style.display = "none";
	document.getElementById("backButton1").style.display = "none";
	document.getElementById("createButtonSecondStep").style.display = "none";
	document.getElementById("createButton").style.display = "inline-block";
	document.getElementById("optionsPanel").style.display = "none";
	document.getElementById("FirstStep").style.display = "block";
	document.getElementById("SecondStep").style.display = "none";
	document.getElementById("backButton2").style.display = "none";
	document.getElementById("downloadButton").style.display = "none";
	$('#SecondStep').find('input[type=checkbox]:checked').prop('checked',false);
	$('#SecondStep').find('input[type=radio]:checked').prop('checked',false);
	document.getElementById("myTable").style.display = "none";
	document.getElementById("yesChooseCY").disabled = false;
	document.getElementById("noChooseCY").disabled = false;
}

function BackButtonTwo(){
	if(document.getElementById("dyadYear").checked){
		document.getElementById("qChooseCY").style.display = "blcok";
		document.getElementById("backButton1").style.display = "inline-block";
		document.getElementById("createButtonSecondStep").style.display = "inline-block";
		document.getElementById("createButton").style.display = "none";
		document.getElementById("FirstStep").style.display = "none";
		document.getElementById("SecondStep").style.display = "block";
		document.getElementById("backButton2").style.display = "none";
		document.getElementById("downloadButton").style.display = "none";
		document.getElementById("chooseCountryYearData").style.display = "none";
		document.getElementById("variableTablesSecondStep").style.display = "none";
		$('#SecondStep').find('input[type=checkbox]:checked').prop('checked',false);
		$('#SecondStep').find('input[type=radio]:checked').prop('checked',false);
		document.getElementById("yesChooseCY").disabled = false;
		document.getElementById("noChooseCY").disabled = false;
		document.getElementById("myTable").style.display = "none";
		CreateTable();
	}
	else if(document.getElementById("countryYear").checked){
		document.getElementById("createButton").style.display = "inline-block";
		document.getElementById("backButton1").style.display = "none";
		document.getElementById("backButton2").style.display = "none";
		document.getElementById("downloadButton").style.display = "none";
		document.getElementById("FirstStep").style.display = "block";
		document.getElementById("SecondStep").style.display = "none";
		document.getElementById("optionsPanel").style.display = "none";
		$('#SecondStep').find('input[type=checkbox]:checked').prop('checked',false);
		$('#SecondStep').find('input[type=radio]:checked').prop('checked',false);
		document.getElementById("myTable").style.display = "none";
	}
}

var filteredItems = [];
function CreateTable(){
	
	var yearRangeMin = "0";
	var yearRangeMax = "2022";
	var dataView;
	var grid;
	let truefalse = checkCheckboxes();
	if(truefalse == false){
		document.getElementById("Warning").style.display = "block";
		return;
	}
	else{
		document.getElementById("Warning").style.display = "none";				
	}
	document.getElementById("myTable").style.display = "inline-block";
	var myData = addID();
	let displayColumns = variableChooser();
	displayColumns.unshift("id");
	myData = myData.map(x => {
		let newObj = {};
		for (col of displayColumns) {
			newObj[col] = x[col];
		}
		return newObj;
	});
	var col = [];
	for (var i = 0; i < 1; i++) {
	  for (var key in myData[i]) {
		if (col.indexOf(key) === -1) {
			col.push({id: key, name: key, field: key, toolTip: key});
		}
	  }
	}
	var options = {
		enableCellNavigation: true,
        enableColumnReorder: false,
        explicitInitialization: true,
        editable: false,
	};
		
	$(function () {
		dataView = new Slick.Data.DataView();
		grid = new Slick.Grid("#myGrid", dataView, col, options);
		
        grid.setSelectionModel(new Slick.CellSelectionModel());

		dataView.onRowCountChanged.subscribe(function (e, args) {
		  grid.updateRowCount();
		  grid.render();
		});
		dataView.onRowsChanged.subscribe(function (e, args) {
		  grid.invalidateRows(args.rows);
		  grid.render();
		});
		
		$("#yearRangeMinimum").keyup(function (e) {
			Slick.GlobalEditorLock.cancelCurrentEdit();

			if (e.which == 27) {
			  this.value = "0";
			}

			yearRangeMin = this.value;
			updateFilter();
		});
		$("#yearRangeMaximum").keyup(function (e) {
			Slick.GlobalEditorLock.cancelCurrentEdit();

			if (e.which == 27) {
			  this.value = "2022";
			}

			yearRangeMax = this.value;
			updateFilter();
		});
		
		function updateFilter() {
			dataView.setFilterArgs({
			  yearRangeMin: yearRangeMin,
			  yearRangeMax: yearRangeMax
			});
			dataView.refresh();
		}
		grid.init();
		dataView.beginUpdate();
		dataView.setItems(myData);
		dataView.setFilterArgs({
			yearRangeMin: yearRangeMin,
			yearRangeMax: yearRangeMax
		});
		dataView.setFilter(filter);
		
		dataView.endUpdate();
		
		var filterPlugin = new Ext.Plugins.HeaderFilter({});

            filterPlugin.onFilterApplied.subscribe(function () {
                dataView.refresh();
                grid.resetActiveCell();
				filteredItems = dataView.getRows();
            });


            grid.registerPlugin(filterPlugin);

            

            grid.init();

            function filter(item, args) {
                var columns = grid.getColumns();

                var value = true;

                for (var i = 0; i < columns.length; i++) {
                    var col = columns[i];
                    var filterValues = col.filterValues;

                    if (filterValues && filterValues.length > 0) {
                        value = value & _.contains(filterValues, item[col.field]);
                    }
                }
				if (args.yearRangeMin != "" && item["year"] < parseInt(args.yearRangeMin)) {
					value = false;
				}
				if (args.yearRangeMax != "" && item["year"] > parseInt(args.yearRangeMax)){
					value = false;
				}
                return value;
            }
		filteredItems = dataView.getRows();
    });
	
	if (document.getElementById("dyadYear").checked){
		document.getElementById("qChooseCY").style.display = "block";
		changeButton();
	}
	else if(document.getElementById("countryYear").checked){
		changeButtonSecondStep();
	}
	
	document.getElementById("optionsPanel").style.display = "inline-block";
	document.getElementById("FirstStep").style.display = "none";
	document.getElementById("SecondStep").style.display = "block";

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
		//toggleSelectors();
	}
}

function checkCheckboxesSecondStep(){
	let tf = true;
	if (document.querySelectorAll('input[type="checkbox"]:checked').length <1){
		tf = false;
	}
	if($('input[name*="NMC_5_0SecondStep"]:checked').length < 1 && $('input[name*="WRP_NATSecondStep"]:checked').length < 1 && $('input[name*="Major_PowersSecondStep"]:checked').length < 1){
		tf = false;
	}
	if($('input[name*="SecondStep"]:checked').length < 1){
		tf = false;
	}
	return Boolean(tf);
}

function changeButton(){
	document.getElementById("backButton1").style.display = "inline-block";
	document.getElementById("createButtonSecondStep").style.display = "inline-block";
	document.getElementById("createButton").style.display = "none";
}

function changeButtonSecondStep(){
	document.getElementById("createButtonSecondStep").style.display = "none";
	document.getElementById("createButton").style.display = "none";
	document.getElementById("backButton1").style.display = "none";
	document.getElementById("backButton2").style.display = "inline-block";
	document.getElementById("downloadButton").style.display = "inline-block";
	document.getElementById("SecondStep").style.display = "none";

} 

function toggleVariableTableDivSecondStep(){
	document.getElementById("variableTablesSecondStep").style.display = "block";

	if(document.querySelectorAll('input[type="checkbox"]:checked').length >=1){
		document.getElementById("variableText").style.display = "block";
	}
	else{document.getElementById("variableText").style.display = "none";}
	if(document.getElementById("NMC_5_0SecondStep").checked){
		document.getElementById("divNMC_5_0_TableSecondStep").style.display = "block";
	}
	else{					
		$('#divNMC_5_0_TableSecondStep').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divNMC_5_0_TableSecondStep").style.display = "none";
	}
	if(document.getElementById("WRP_NATSecondStep").checked){
		document.getElementById("divWRP_NAT_TableSecondStep").style.display = "block";
	}
	else{
		$('#divWRP_NAT_TableSecondStep').find('input[type=checkbox]:checked').prop('checked',false);
		document.getElementById("divWRP_NAT_TableSecondStep").style.display = "none";
	}
	if(document.getElementById("Major_PowersSecondStep").checked){
		document.getElementById("divMajor_PowersTableSecondStep").style.display = "block";
	}
	else{
		document.getElementById("divMajor_PowersTableSecondStep").style.display = "none";
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
			variablesSecondStep.push("tpop_NMC_5_0");
		}
		if(document.getElementById("upop_NMC_5_0SecondStep").checked){
			variablesSecondStep.push("upop_NMC_5_0");
		}
		if(document.getElementById("cinc_NMC_5_0SecondStep").checked){
			variablesSecondStep.push("cinc_NMC_5_0");
		}
	}
	if(document.getElementById("Major_PowersSecondStep").checked){
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
		data = 	mergeSets(countryYearDatasets[0], countryYearDatasets[1], "stateabb", "year", "ccode");
	}
	else if(countryYearDatasets.length == 3){
		var temp = mergeSets(countryYearDatasets[0], countryYearDatasets[1], "stateabb", "year", "ccode");
		data = 	mergeSets(temp, countryYearDatasets[2], "stateabb", "year", "ccode");
	}
	return data;
}

function yearArrayDyadYear(){
	var yearDup = [];
	var myData = dyadYearDataSetChooser();
	for (i = 0; i < myData.length; i++) {
		yearDup.push(myData[i]["year"]);
	}
	return yearDup;
}
function stateArrayDyadYear1(){
	var stateDup = [];
	var myData = dyadYearDataSetChooser();
	for (i = 0; i < myData.length; i++) {
		stateDup.push(myData[i]["state1ab"]);       
	}
	return stateDup;
}
function stateArrayDyadYear2(){
	var stateDup = [];
	var myData = dyadYearDataSetChooser();
	for (i = 0; i < myData.length; i++) {
		stateDup.push(myData[i]["state2ab"]);       
	}
	return stateDup;
}

function createSearchArrayForExtraColumns(){
	var state1, state2, year, selectedVar;
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
		  return element["stateabb"] == searchArray[i]["state1ab"] && element["year"] == searchArray[i]["year"];
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
		  return element["stateabb"] == searchArray[i]["state2ab"] && element["year"] == searchArray[i]["year"];
		});		
		compiledArray.push(outputstate2);
	}
	return compiledArray;
}

function createArrayForExtraColumnsFINALSTEP(){
	var state1, state2, selectedVar, compiledArray;
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

function mergeSetsByIndex(first, second){
	var result = first.map((obj, index) => ({
		...obj,
		...second[index]
	}));
	return result;
}
function mergeAppendedData(){
	var origData = dyadYearDataSetChooser();
	var newData = createArrayForExtraColumnsFINALSTEP();
	var data = mergeSetsByIndex(origData, newData);
	//data.pop();
	return data;
}


function addID2(){
	var myData = mergeAppendedData();

	for (var i = 0; i < myData.length; i++) {
		myData[i] = {"id" : i+1, ...myData[i]};
	}
	return myData;
}

async function AddColumns() {
	var myData = mergeAppendedData();
	let displayColumns = variableChooser();
	var variableListAppended = variableReplacer();
	for(var i = 0; i<variableListAppended.length; i++){
		displayColumns.push(variableListAppended[i]);
	}
	displayColumns.unshift("id");
	
	var yearRangeMin = "0";
	var yearRangeMax = "2022";
	var dataView;
	var grid;
	let truefalse = checkCheckboxes();
	if(truefalse == false){
		document.getElementById("Warning").style.display = "block";
		return;
	}
	else{
		document.getElementById("Warning").style.display = "none";				
	}
	myData = addID2();
	myData = myData.map(x => {
		let newObj = {};
		for (col of displayColumns) {
			newObj[col] = x[col];
		}
		return newObj;
	});
	var col = [];
	for (var i = 0; i < 1; i++) {
	  for (var key in myData[i]) {
		if (col.indexOf(key) === -1) {
			col.push({id: key, name: key, field: key, toolTip: key});
		}
	  }
	}
	var options = {
		enableCellNavigation: true,
        enableColumnReorder: false,
        explicitInitialization: true,
        editable: false,
	};
		
	$(function () {
		dataView = new Slick.Data.DataView();
		grid = new Slick.Grid("#myGrid", dataView, col, options);
		
        grid.setSelectionModel(new Slick.CellSelectionModel());

		dataView.onRowCountChanged.subscribe(function (e, args) {
		  grid.updateRowCount();
		  grid.render();
		});
		dataView.onRowsChanged.subscribe(function (e, args) {
		  grid.invalidateRows(args.rows);
		  grid.render();
		});
		
		$("#yearRangeMinimum").keyup(function (e) {
			Slick.GlobalEditorLock.cancelCurrentEdit();

			// clear on Esc
			if (e.which == 27) {
			  this.value = "0";
			}

			yearRangeMin = this.value;
			updateFilter();
		});
		$("#yearRangeMaximum").keyup(function (e) {
			Slick.GlobalEditorLock.cancelCurrentEdit();

			// clear on Esc
			if (e.which == 27) {
			  this.value = "2022";
			}

			yearRangeMax = this.value;
			updateFilter();
		});
		
		function updateFilter() {
			dataView.setFilterArgs({
			  yearRangeMin: yearRangeMin,
			  yearRangeMax: yearRangeMax
			});
			dataView.refresh();
		}
		grid.init();
		dataView.beginUpdate();
		dataView.setItems(myData);
		dataView.setFilterArgs({
			yearRangeMin: yearRangeMin,
			yearRangeMax: yearRangeMax
		});
		dataView.setFilter(filter);		
		dataView.endUpdate();
		
		var filterPlugin = new Ext.Plugins.HeaderFilter({});

            filterPlugin.onFilterApplied.subscribe(function () {
                dataView.refresh();
                grid.resetActiveCell();
				filteredItems = dataView.getRows();
            });


            grid.registerPlugin(filterPlugin);

            

            grid.init();

            function filter(item, args) {
                var columns = grid.getColumns();

                var value = true;

                for (var i = 0; i < columns.length; i++) {
                    var col = columns[i];
                    var filterValues = col.filterValues;

                    if (filterValues && filterValues.length > 0) {
                        value = value & _.contains(filterValues, item[col.field]);
                    }
                }
				if (args.yearRangeMin != "" && item["year"] < parseInt(args.yearRangeMin)) {
					value = false;
				}
				if (args.yearRangeMax != "" && item["year"] > parseInt(args.yearRangeMax)){
					value = false;
				}
                return value;
            }
		filteredItems = dataView.getRows();
    });
	
	document.getElementById("optionsPanel").style.display = "inline-block";
	changeButtonSecondStep();	
}	

//Third STEP
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
	
	var csv = [];
	var filteredItem = [];
	var allKeysOfObject = Object.keys(filteredItems[0]);
	filteredItem.push(allKeysOfObject);
	csv.push(filteredItem.join(","));        

	for (var i = 0; i < filteredItems.length; i++) {
		var filteredItem = [], objectOfGrid = filteredItems[i];

		filteredItem.push(Object.values(objectOfGrid));
		csv.push(filteredItem.join(","));        
	}
	filename = filename + " " + new Date().toISOString().slice(0, 10) + ".csv";
	downloadCSV(csv.join("\n"), filename);
}
