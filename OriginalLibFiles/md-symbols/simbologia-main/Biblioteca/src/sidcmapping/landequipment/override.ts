import { makeNewIcons } from "../../iconparts/newicons"
import { Scale , Translate } from "../../milsymbol-types"

export function overrideSIDC_LandEquipment(
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

    // Extensões de Sensors
    iconSIDC["229900"] = []
    iconSIDC["229901"] = []
    iconSIDC["229902"] = []
    iconSIDC["229903"] = []
    iconSIDC["229904"] = []
    iconSIDC["229905"] = []
    // Extensões de Other Equipment
    iconSIDC["209900"] = []
    iconSIDC["209901"] = []
    iconSIDC["209902"] = []
    iconSIDC["209903"] = []
    iconSIDC["209904"] = []
    iconSIDC["209905"] = []
    iconSIDC["209906"] = []

}
