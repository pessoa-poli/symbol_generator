import {
    SYMBOL_SET_CODES,
    COUNTRY_CODES
} from './constants'

import {text} from "../iconparts/helpers";
import {Box} from "milsymbol";
import {RenderOptions} from "./types";
import {pad} from "./helpers";
import {LandUnitExtensions} from "./landunits";
import {toggleDebugOctagon} from "../debug";
import {LandInstallationExtensions} from "./landinstallations";
import {LandEquipmentExtensions} from "./landequipment";
import { ActivitiesExtensions } from './activities'
import { LandCivilianExtensions } from './landcivilian'
import { SeaSurfaceExtensions } from './seasurface'

/**
 * Aqui, "this" é o ms.Symbol sendo construído.
 * @param ms
 */
export default function renderNationalExtension(ms) {
    // Terceiro grupo de 10 dígitos no SIDC (extensão nacional opcional)
    let extensionSIDC = this.options.sidc.substr(20, 10);
    //@ts-ignore
    let countryCode = extensionSIDC.substr(0, 3);
    if (countryCode == COUNTRY_CODES.BRAZIL) {
        let symbolID = pad(extensionSIDC.substr(3, 7), 7);
        return renderBrazilianExtension.call(this, ms, symbolID);
    }
    let newBbox = new ms.BBox()

    return {pre: [],
            post: [], //TODO fazer parametro para fuznav (entityString == "120300" || entityString == "000000") ? [] : [icon],
            bbox: newBbox}
}

enum ModifierPosition {
    M1,
    M2,
    STAFF
}

function renderBrazilianExtension(ms, symbolID): RenderOptions {
    let symbolSet = this.options.sidc.substr(4, 2);
    let entitySidc = this.options.sidc.substr(10, 6);
    const symbolSetExtensions = {
        [SYMBOL_SET_CODES.LAND_UNIT]: LandUnitExtensions,
        [SYMBOL_SET_CODES.LAND_INSTALLATION]: LandInstallationExtensions,
        [SYMBOL_SET_CODES.LAND_EQUIPMENT]: LandEquipmentExtensions,
        [SYMBOL_SET_CODES.ACTIVITIES]: ActivitiesExtensions,
        [SYMBOL_SET_CODES.LAND_CIVILIAN]: LandCivilianExtensions,
        [SYMBOL_SET_CODES.SEA_SURFACE]: SeaSurfaceExtensions,

    }[symbolSet]

    let symbolParts = []
    if(symbolSetExtensions) {
        symbolParts = symbolSetExtensions.getExtensionSymbolParts.call(this, ms, symbolID, entitySidc)
    }

    let pre = [];
    let post = []
    let bbox = this.metadata.baseGeometry.bbox;
    return symbolParts.reduce((acc, cur) => {
        return {
            pre: acc.pre.concat(cur.pre),
            post: acc.post.concat(cur.post),
            bbox: acc.bbox.merge(cur.bbox),
        }
    }, {
        pre,
        post,
        bbox,
    })

}
