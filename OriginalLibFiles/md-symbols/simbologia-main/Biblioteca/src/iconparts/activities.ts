import { SymbolMetadata } from 'milsymbol';
import {
    DrawInstruction,
    Path,
    Scale,
    SymbolColorScheme,
    Translate,
    Text
} from '../milsymbol-types';

import {
    IconPartBuilder
  } from './helpers'
import { makeNewIcons } from './newicons';

export function overrideIconParts_Activities(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {

    let builder = new IconPartBuilder(metadata, colors)


    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////


    iconParts["ST.M1.ACCIDENT"] = builder.modifier1Text("Acdt")
    iconParts["ST.M1.FOUND AND CLEARED"] = builder.modifier1Text("Dtv")
    iconParts["ST.M1.HOAX (DECOY)"] = builder.modifier1Text("Dptt")
    iconParts["ST.M1.FALSE"] = builder.modifier1Text("F")
    iconParts["ST.M1.MURDER"] = builder.modifier1Text("Hmc")
    iconParts["ST.M1.INCIDENT"] = builder.modifier1Text("Inc")
    iconParts["ST.M1.THEFT"] = builder.modifier1Text("Roubo")
    iconParts["ST.M1.HIJACKING/HIJACKED"] = builder.modifier1Text("Sqt")
    iconParts["ST.M1.ATTEMPTED"] = builder.modifier1Text("Tent")



    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////



    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////

}

export function addNewIconParts_Activities(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    let builder = new IconPartBuilder(metadata, colors)
    let icons = makeNewIcons(metadata, colors)

    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////
    let black = colors.black[metadata.affiliation]
    iconParts["BR.MD.Ter.Ud.IC.ACAO_INTERNACIONAL"] = icons["BR.MD.Ter.Ud.IC.ACAO_INTERNACIONAL"]
    iconParts["BR.MD.Ter.Ud.IC.Incidente"] = icons["BR.MD.Ter.Ud.IC.INCIDENTE"]
    iconParts["BR.MD.Ter.Ud.IC.Motim"] = builder.mainText("Motim")
    iconParts["BR.MD.Ter.Ud.IC.Contrabando"] = Text.withPosition("Contrabando", black, 100, 105, 17)
    iconParts["BR.MD.Ter.Ud.IC.Sabotagem"] = builder.mainText("Sabt")
    iconParts["BR.MD.Ter.Ud.IC.Ameaca de Bomba"] = builder.mainText("Bb")
    iconParts["BR.MD.Ter.Ud.IC.Trafico de Drogas"] = Text.withPosition("Drogas", black, 100, 108, 28)
    iconParts["BR.MD.Ter.Ud.IC.Explosao de Granada"] = builder.mainText("Gr")
    iconParts["BR.MD.Ter.Ud.IC.Explosao Incendiaria"] = Text.withPosition("Incd", black, 100, 108, 27)
    iconParts["BR.MD.Ter.Ud.IC.Explosao de Mina"] = Text.withPosition("Min", black, 100, 108, 29)
    iconParts["BR.MD.Ter.Ud.IC.Explosao de Bomba"] = builder.mainText("Bb")
    iconParts["BR.MD.Ter.Ud.IC.Operacao"] = builder.mainText("Op")

    iconParts["BR.MD.Ter.Ud.IC.Espionagem"] = builder.mainText("Espi")
    iconParts["BR.MD.Ter.Ud.IC.Exfiltracao"] = Text.withPosition("Exfl", black, 100, 78, 23)
    iconParts["BR.MD.Ter.Ud.IC.Infiltracao"] = Text.withPosition("Infl", black, 100, 78, 23)
    iconParts["BR.MD.Ter.Ud.IC.Interrogacao"] = Text.withPosition("?", black, 100, 77, 30)
    iconParts["BR.MD.Ter.Ud.IC.GVA"] = builder.mainText("GVA")
    iconParts["BR.MD.Ter.Ud.IC.GLO"] = builder.mainText("GLO")
    iconParts["BR.MD.Ter.Ud.IC.Manifestacao"] = builder.mainText("Manif")

    iconParts["BR.MD.Ter.Ud.IC.Patrulhamento"] = [
        Text.withPosition("Pa", black, 130, 95, 18) as DrawInstruction,
        new Translate(5, 10, [
            new Scale(.9,
                icons["BR.MD.Ter.Ud.IC.PATRULHAMENTO"],
            )
        ])
    ]

}
