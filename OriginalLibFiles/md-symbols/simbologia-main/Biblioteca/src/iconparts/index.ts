import { SymbolMetadata } from 'milsymbol'
import { DrawInstruction, SymbolColorScheme } from '../milsymbol-types'

import {
    overrideIconParts_LandUnits,
    addNewIconParts_LandUnits
} from './landunits'
import {
    overrideIconParts_LandInstallations,
    addNewIconParts_LandInstallations
} from './landinstallations'
import {
    overrideIconParts_LandEquipment,
    addNewIconParts_LandEquipment
} from './landequipment'
import {
    overrideIconParts_Sea,
    addNewIconParts_Sea,
} from './sea'
import {
    overrideIconParts_LandCivilian,
    addNewIconParts_LandCivilian,
} from './landcivilian'
import {
    overrideIconParts_TacticalPoints
} from './tactical-points'
import {overrideIconParts_Subsurface} from "./subsurface";
import {overrideIconParts_Air} from "./air";
import { addNewIconParts_Activities, overrideIconParts_Activities } from './activities'
import { overrideIconParts_Dismounted } from './dismounted'


/**
 * Estende a milsymbol com acréscimos e substituições de **partes de ícones** (iconParts).
 *
 * @param {Object} iconParts - Catálogo de partes de ícones, no formato string -> DrawInstruction | DrawInstruction[]
 * @param {SymbolMetadata} metadata - properties object
 * @param {SymbolColorScheme} colors - color object
 * @param {boolean} std2525 - Se o padrão é o MILSTD-2525. Não se aplica ao MD33-M-02.
 * @param {boolean} monoColor - Não utilizado no MD33-M-02.
 * @param {boolean} alternateMedal - True/false para minas
 */
export default function mdIconParts(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme,
    std2525: boolean,
    monoColor: boolean,
    alternateMedal: boolean
) {
    overrideIconParts_LandUnits(iconParts, metadata, colors)
    addNewIconParts_LandUnits(iconParts, metadata, colors)

    overrideIconParts_LandInstallations(iconParts, metadata, colors)
    addNewIconParts_LandInstallations(iconParts, metadata, colors)

    overrideIconParts_Sea(iconParts, metadata, colors)
    addNewIconParts_Sea(iconParts, metadata, colors)

    overrideIconParts_LandCivilian(iconParts, metadata, colors)
    addNewIconParts_LandCivilian(iconParts, metadata, colors)

    overrideIconParts_Subsurface(iconParts, metadata, colors)
    overrideIconParts_Air(iconParts, metadata, colors)

    overrideIconParts_TacticalPoints(iconParts, metadata, colors)

    overrideIconParts_LandEquipment(iconParts, metadata, colors)
    addNewIconParts_LandEquipment(iconParts, metadata, colors)

    overrideIconParts_Activities(iconParts, metadata, colors)
    addNewIconParts_Activities(iconParts, metadata, colors)

    overrideIconParts_Dismounted(iconParts, metadata, colors)
}
