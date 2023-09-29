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

export function overrideIconParts_LandEquipment(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    let builder = new IconPartBuilder(metadata, colors)
    let icons = makeNewIcons(metadata, colors)

    // Ajuste de AFV C2 - iconSIDC["120102"] = new Translate(0,10, iconSIDC["120102"])
    // Ajuste de Light WheelediconSIDC["120110"] = new Translate(15,20, [new Scale(0.85,iconSIDC["120110"])])

    iconParts["GR.EQ.SENSOR"] = new Translate(15,30, [new Scale(0.85, [
        iconParts["GR.EQ.SENSOR"] as DrawInstruction
    ])])
    iconParts["GR.EQ.RADAR"] = new Translate(0,15, [
        iconParts["GR.EQ.RADAR"] as DrawInstruction
    ])
    iconParts["GR.EQ.CBRN EQUIPMENT"] = new Translate(15,20, [new Scale(0.85, [
        iconParts["GR.EQ.CBRN EQUIPMENT"] as DrawInstruction]
    )])

}

export function addNewIconParts_LandEquipment(
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

    iconParts["BR.MD.Ter.Ud.IC.Multicanal"] = builder.mainText("MCn")
    iconParts["BR.MD.Ter.Ud.IC.Teletype"] = icons["BR.MD.Ter.Ud.IC.TELETYPE"]

    iconParts["GR.M1.EARLY WARNING RADAR"] = builder.modifier1Text("Vig")

    iconParts["BR.MD.Ter.Ud.IC.DF"] = [
        iconParts["GR.IC.FF.DIRECTION FINDING"] as DrawInstruction
    ]
    iconParts["BR.MD.Ter.Ud.IC.INTERCEPTADOR"] = [
        iconParts["GR.IC.FF.INTERCEPT"] as DrawInstruction
    ]
    iconParts["BR.MD.Ter.Ud.IC.INTERFERIDOR"] = [
        new Translate(52, 32, [
            new Scale(.50,
                [iconParts["GR.IC.FF.JAMMING"] as DrawInstruction]
            ),]
        )
    ]

    iconParts["GR.EQ.BUS"] = [
        builder.mainText("On"),
        iconParts["GR.EQ.UTILITY VEHICLE"] as DrawInstruction
    ]


    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////


    iconParts["BR.MD.Ter.Ud.M1.Metereologico"] = builder.modifier1Text("Met")
    iconParts["BR.MD.Ter.Ud.M1.Busca"] = builder.modifier1Text("Bsc")
    iconParts["BR.MD.Ter.Ud.M1.Vigilancia"] = builder.modifier1Text("Vig")
    iconParts["BR.MD.Ter.Ud.M1.Direcao de Tiro"] = builder.modifier1Text("DT")
    iconParts["BR.MD.Ter.Ud.M1.Vigilancia Terrestre"] = builder.modifier1Text("VT")
    iconParts["BR.MD.Ter.Ud.M1.Radiologico e Nuclear"] = builder.modifier1Text("RN")
    iconParts["BR.MD.Ter.Ud.M1.Reconhecimento"] = builder.modifier1Text("Rec")
    iconParts["GR.M1.CHEMICAL"] = builder.modifier1Text("Q") //atencao se mudar isso tem tambem no landinstallation
}
