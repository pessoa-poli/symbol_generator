import { makeNewIcons } from "../../iconparts/newicons"
import { Scale , Translate } from "../../milsymbol-types"

export function overrideSIDC_Activities(
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

    iconSIDC["139900"] = [],
    iconSIDC["110110"] = iconParts["BR.MD.Ter.Ud.IC.Motim"],
    iconSIDC["110119"] = iconParts["BR.MD.Ter.Ud.IC.Contrabando"],
    iconSIDC["110122"] = iconParts["BR.MD.Ter.Ud.IC.Sabotagem"],
    iconSIDC["110201"] = [
        iconParts["BR.MD.Ter.Ud.IC.Interrogacao"],
        iconParts["BR.MD.Ter.Ud.IC.Ameaca de Bomba"]
    ],
    iconSIDC["110501"] = iconParts["BR.MD.Ter.Ud.IC.Trafico de Drogas"],
    iconSIDC["110601"] = [
        iconParts["ST.IC.EXPLOSION"],
        iconParts["BR.MD.Ter.Ud.IC.Explosao de Granada"],
    ],
    iconSIDC["110602"] = [
        iconParts["ST.IC.EXPLOSION"],
        iconParts["BR.MD.Ter.Ud.IC.Explosao Incendiaria"],
    ],
    iconSIDC["110603"] = [
        iconParts["ST.IC.EXPLOSION"],
        iconParts["BR.MD.Ter.Ud.IC.Explosao de Mina"]
    ],
    iconSIDC["110606"] = [
        iconParts["ST.IC.EXPLOSION"],
        iconParts["BR.MD.Ter.Ud.IC.Explosao de Bomba"]
    ],
    iconSIDC["130000"] = iconParts["BR.MD.Ter.Ud.IC.Operacao"],
    iconSIDC["130600"] = iconParts["BR.MD.Ter.Ud.IC.Espionagem"],
    iconSIDC["130800"] = [
        iconParts["ST.IC.INDIVIDUAL"],
        iconParts["BR.MD.Ter.Ud.IC.Exfiltracao"],
    ]
    iconSIDC["130900"] = [
        iconParts["ST.IC.INDIVIDUAL"],
        iconParts["BR.MD.Ter.Ud.IC.Infiltracao"],
    ],
    iconSIDC["131001"] = iconParts["BR.MD.Ter.Ud.IC.GVA"],
    iconSIDC["131500"] = iconParts["BR.MD.Ter.Ud.IC.GLO"],
    iconSIDC["110000"] = iconParts["BR.MD.Ter.Ud.IC.Incidente"],
    iconSIDC["130100"] = iconParts["BR.MD.Ter.Ud.IC.Patrulhamento"],
    iconSIDC["120100"] = iconParts["BR.MD.Ter.Ud.IC.Manifestacao"]
}
