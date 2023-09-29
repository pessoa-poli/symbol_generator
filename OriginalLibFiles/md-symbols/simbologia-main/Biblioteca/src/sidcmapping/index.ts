import {
    overrideSIDC_LandUnits
} from './landunits/override'
import {
    overrideSIDC_LandInstallation
} from './landinstallations/override'
import {
    overrideSIDC_LandEquipment
} from './landequipment/override'
import {
    overrideSIDC_LandCivilian
} from './landcivilian/override'

import {overrideSIDC_Sea} from "./sea/override";
import {SYMBOL_SET_CODES} from "../symbolextensions/constants";
import {overrideSIDC_Activities} from "./activities/override";

export default function overrideSIDC(
    iconSIDC,
    iconModifier1,
    iconModifier2,
    iconBbox,
    symbolSet,
    iconParts,
    STD2525
) {
    if (symbolSet == SYMBOL_SET_CODES.LAND_UNIT) {
        overrideSIDC_LandUnits(iconSIDC, iconModifier1, iconModifier2, iconBbox, symbolSet, iconParts, STD2525)
    }
    if (symbolSet == SYMBOL_SET_CODES.LAND_INSTALLATION) {
        overrideSIDC_LandInstallation(iconSIDC, iconModifier1, iconModifier2, iconBbox, symbolSet, iconParts, STD2525)
    }
    if (symbolSet == SYMBOL_SET_CODES.LAND_EQUIPMENT) {
        overrideSIDC_LandEquipment(iconSIDC, iconModifier1, iconModifier2, iconBbox, symbolSet, iconParts, STD2525)
    }
    if (symbolSet == SYMBOL_SET_CODES.SEA_SURFACE) {
        overrideSIDC_Sea(iconSIDC, iconModifier1, iconModifier2, iconBbox, symbolSet, iconParts, STD2525)
    }
    if (symbolSet == SYMBOL_SET_CODES.ACTIVITIES) {
        overrideSIDC_Activities(iconSIDC, iconModifier1, iconModifier2, iconBbox, symbolSet, iconParts, STD2525)
    }
    if (symbolSet == SYMBOL_SET_CODES.LAND_CIVILIAN) {
        overrideSIDC_LandCivilian(iconSIDC, iconModifier1, iconModifier2, iconBbox, symbolSet, iconParts, STD2525)
    }
}
