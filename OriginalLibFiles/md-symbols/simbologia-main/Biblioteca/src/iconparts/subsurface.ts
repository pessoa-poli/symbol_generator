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

export function overrideIconParts_Subsurface(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    let builder = new IconPartBuilder(metadata, colors)


    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////

    iconParts["SU.IC.UNDERWATER WEAPON"] = builder.mainText("ARM")
    iconParts["SU.IC.MANUAL TRACK"] = builder.mainText("Mnl")

    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////

    iconParts["SU.M1.POSSIBLE SUBMARINE - LOW 1"] = builder.modifier1Text("POS")
    iconParts["SU.M1.PROBABLE SUBMARINE"] = builder.modifier1Text("PRV")
    iconParts["SU.M1.CERTAIN SUBMARINE"] = builder.modifier1Text("PST")
    iconParts["SU.M1.SPECIAL OPERATIONS FORCE"] = builder.modifier1Text("Op Esp")


    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////

    iconParts["SU.M2.AIR INDEPENDENT PROPULSION"] = builder.modifier2Text("IA")
}
