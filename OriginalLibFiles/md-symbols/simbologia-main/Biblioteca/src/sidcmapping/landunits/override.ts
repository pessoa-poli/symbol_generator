import { makeNewIcons } from "../../iconparts/newicons"

export function overrideSIDC_LandUnits(
    iconSIDC,
    iconModifier1,
    iconModifier2,
    iconBbox,
    symbolSet,
    iconParts,
    STD2525
) {
    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////

    // Amphibious
    iconSIDC["120300"] = iconParts["BR.MD.Ter.Ud.IC.Anfibio"]

    // Anticarro precisa ser natureza principal ou ter distinção entre Inf e Cav (extensão de subtype)
    iconSIDC["120499"] = []
    // Cavalaria
    iconSIDC["120500"] = iconSIDC["120500"].concat([iconParts["GR.IC.FF.RECONNAISSANCE"]])
    // Armour / Amphibious
    iconSIDC["120502"] = iconSIDC["120500"].concat(iconParts["BR.MD.Ter.Ud.M2.Anfibio"])
    // Aviation Fixed Wing / Reconnaissance
    iconSIDC["120801"] = iconSIDC["120800"]
    // Infantry / Amphibious
    iconSIDC["121101"] = iconSIDC["121100"]
    // Artilharia
    iconSIDC["130100"] = iconSIDC["130100"].concat(iconParts["GR.IC.FF.ANTITANK/ANTIARMOUR"])
    iconSIDC["130302"] = iconSIDC["130300"]
    // Polícias das FS
    iconSIDC["141200"] = [iconParts["BR.MD.Ter.Ud.IC.POLICIA FS"]]
    iconSIDC["141299"] = []
    // Law Enforcement
    iconSIDC["209900"] = []


    //Extensões interrompidas
    iconSIDC["159900"] = []
    iconSIDC["121899"] = []
    iconSIDC["120601"] = iconSIDC["120600"]
    iconSIDC["120400"] = [iconParts["BR.MD.Ter.Ud.IC.Anti-Carro"]]

    // Teste de PE Mec
    // iconSIDC["141299"] = [iconParts["BR.MD.Ter.Ud.IC.POLICIA FS.PE"], iconParts["GR.IC.ARMOUR"]]

    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////

    // Os modificadores abaixo são CORREÇÕES. A milsymbol desloca os modificadores 80 a 82 constantes no APP-6D.
    iconModifier1["80"] = [iconParts["GR.M1.COMMAND POST NODE"]];
    iconModifier1["81"] = [iconParts["GR.M1.JOINT NETWORK NODE"]];
    iconModifier1["82"] = [iconParts["GR.M1.RETRANSMISSION SITE"]];

    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////
    iconModifier1["67"] = iconParts["BR.MD.Ter.Ud.M1.Busca-Alvos"]


}
