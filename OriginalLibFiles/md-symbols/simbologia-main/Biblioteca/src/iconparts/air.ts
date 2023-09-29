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

export function overrideIconParts_Air(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {

    let builder = new IconPartBuilder(metadata, colors)


    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////

    // Apesar da marinha ter pedido traduções, a FAB pediu tudo em inglês,
    // e a FAB tem prioridade nos símbolos aéreos.
    // Assim, traduziremos apenas os mais óbvios.

    iconParts["AIR.M1.PHOTOGRAPHIC"] = builder.modifier1Text("RF")
    iconParts["AIR.M1.ELECTRONIC SUPPORT (ES)"] = builder.modifier1Text("MAGE")
    iconParts["AIR.M1.ELECTRONIC ATTACK (EA)"] = builder.modifier1Text("MAE")
    iconParts["AIR.M1.SPECIAL OPERATIONS FORCES"] = builder.modifier1Text("Op Esp")
    // iconParts["AR.I.FIGHTER"] = builder.mainText("C")
    // iconParts["AR.I.FIGHTER/BOMBER"] = builder.mainText("C/B")
    // iconParts["AR.I.CARGO"] = builder.mainText("CG")
    // iconParts["AR.I.TANKER"] = builder.mainText("T")
    // iconParts["AR.I.AIRBORNE COMMAND POST"] = builder.mainText("PCA")
    // iconParts["AR.I.WEAPON"] = builder.mainText("ARM")



    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////



    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////
    iconParts["AIR.M2.MEDIUM"] = builder.modifier2Text("Me")
    iconParts["AIR.M2.HEAVY"] = builder.modifier2Text("P")

}
