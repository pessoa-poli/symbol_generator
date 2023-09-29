import { SymbolMetadata } from 'milsymbol';
import {
    DrawInstruction,
    Path,
    Scale,
    SymbolColorScheme,
    Translate
} from '../milsymbol-types';

import {
    IconPartBuilder
} from './helpers'
import { makeNewIcons } from './newicons';

/**
 * Overrides para unidades terrestres
 */
export function overrideIconParts_LandCivilian(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {

    let builder = new IconPartBuilder(metadata, colors)
    let icons = makeNewIcons(metadata, colors)

    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////


    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////


    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////

}

/**
 * Novas icon parts para unidades terrestres
 */
export function addNewIconParts_LandCivilian(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    let builder = new IconPartBuilder(metadata, colors)
    let icons = makeNewIcons(metadata, colors)

    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////
    iconParts["BR.Civ.GOV.MINISTERIO_JUSTICA"] = builder.mainText("MJSP")

    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////


    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////

}
