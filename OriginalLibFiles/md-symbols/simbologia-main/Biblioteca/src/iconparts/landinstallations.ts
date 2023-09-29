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

export function overrideIconParts_LandInstallations(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    let builder = new IconPartBuilder(metadata, colors)
    let icons = makeNewIcons(metadata, colors)
    iconParts["BR.MD.Ter.Ud.IC.MORTOS"] =
    new Translate( 20, 22, [
        new Scale(.8,
            [iconParts["GR.IC.MORTUARY AFFAIRS"] as DrawInstruction],
        )
    ])

    /////////////////////////////////
    // Ícones de setor 1
    /////////////////////////////////

    const hidreletricaModifier = builder.modifier1Text("Hidro")
    hidreletricaModifier.fontsize = 22
    iconParts["GR.IN.M1.HYDROELECTRIC"] = hidreletricaModifier

    iconParts["GR.M1.CHEMICAL"] = builder.modifier1Text("Q") //atencao se mudar isso tem tambem no landequipment
    iconParts["GR.M1.NUCLEAR"] = builder.modifier1Text("N")
    iconParts["GR.IN.M1.CIVILIAN"] = builder.modifier1Text("Civ")

    /////////////////////////////////
    // Ícones de setor 2
    /////////////////////////////////

    iconParts["GR.IN.M2.CHEMICAL & BIOLOGICAL WARFARE"] = builder.modifier2Text("B")
    iconParts["GR.IN.M2.CHEMICAL WARFARE PRODUCTION"] = builder.modifier2Text("Q")
    iconParts["GR.IN.M2.NUCLEAR WARFARE PRODUCTION"] = builder.modifier2Text("N")
    iconParts["GR.IN.M2.RADIOLOGICAL WARFARE PRODUCTION"] = builder.modifier2Text("R")
}

export function addNewIconParts_LandInstallations(
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

    iconParts["BR.MD.Ter.Ud.IC.EXTRAVIADOS"] = icons["BR.MD.Ter.Ud.IC.EXTRAVIADOS"]
    iconParts["BR.MD.Ter.Ud.IC.SALVADOS"] = [Text.withPosition("Slv", black, 100, 115, 24)]
    iconParts["BR.MD.Ter.Ud.IC.CIVIS"] = [Text.withPosition("Civ", black, 100, 115, 24)]
    iconParts["BR.MD.Ter.Ud.IC.RECREACAO"] = [Text.withPosition("Rcr", black, 100, 115, 24)]
    iconParts["BR.MD.Ter.Ud.IC.REPOUSO"] = [Text.withPosition("Rpo", black, 100, 115, 24)]
    iconParts["BR.MD.Ter.Ud.IC.LAVANDERIA"] = [Text.withPosition("Lav", black, 100, 115, 24)]
    iconParts["BR.MD.Ter.Ud.IC.BANHO"] = [Text.withPosition("Ban", black, 100, 115, 24)]
    iconParts["BR.MD.Ter.Ud.IC.PRISIONEIROS"] = icons["BR.MD.Ter.Ud.IC.PRISIONEIROS"]
    iconParts["BR.MD.Ter.Ud.IC.TRATAMENTO"] = [Text.withPosition("Trt", black, 100, 115, 23)]
    iconParts["BR.MD.Ter.Ud.IC.REFUGIADO"] = [Text.withPosition("Refu", black, 100, 75, 20)]
    iconParts["BR.MD.Ter.Ud.IC.RESERVA"] = [Text.withPosition("Res", black, 100, 75, 20)]
    iconParts["BR.MD.Ter.Ud.IC.ARMAZENAMENTO"] = [Text.withPosition("Armz", black, 100, 77, 20)]
    iconParts["BR.MD.Ter.Ud.IC.DISTRIBUICAO"] = [Text.withPosition("Distr", black, 100, 88, 24)]
    iconParts["BR.MD.Ter.Ud.IC.ARMAZEM"] = icons["BR.MD.Ter.Ud.IC.ARMAZEM"]
    iconParts["BR.MD.Ter.Ud.IC.POSTAL"] = new Translate(0, 8,[
        iconParts["GR.IN.IC.POSTAL SERVICE INFRASTRUCTURE"] as DrawInstruction
    ])

    /////////////////////////////////
    // Ícones de setor 1
    /////////////////////////////////

    iconParts["BR.MD.Ter.Ud.M1.Posto de Triagem"] = builder.modifier1Text("Trg")
    iconParts["BR.MD.Ter.Ud.M1.Posto Cirurgico Movel"] = builder.modifier1Text("Cir Mv")
    iconParts["BR.MD.Ter.Ud.M1.Posto de Socorro"] = builder.modifier1Text("Soc")
    iconParts["BR.MD.Ter.Ud.M1.Hospital de Campanha"] = builder.modifier1Text("Cmp")
    iconParts["BR.MD.Ter.Ud.M1.INST_SUP_ARMAMENTO"] = builder.modifier1Text("Armt");
    iconParts["BR.MD.Ter.Ud.M1.INST_SUP_MUNICAO"] = builder.modifier1Text("Mun");
    iconParts["BR.MD.Ter.Inst.M1.CENTRO_NODAL"] = builder.modifier1Text("CN");
    iconParts["BR.MD.Ter.Inst.M1.NO_DE_ACESSO"] = builder.modifier1Text("NA");

    /////////////////////////////////
    // Ícones de setor 2
    /////////////////////////////////

    iconParts["BR.MD.Ter.Ud.M2.Remuniciamento"] = builder.modifier2Text("Rem")
    iconParts["BR.MD.Ter.Ud.M2.Distribuição"] = new Translate(0, 5, [builder.modifier2Text("Distr")])
    iconParts["BR.MD.Ter.Ud.M2.Tratamento"] = builder.modifier2Text("Trt")
    iconParts["BR.MD.Ter.Ud.M2.Posto de Coleta"] = new Translate(0, 5, [builder.modifier2Text("Col")])



}
