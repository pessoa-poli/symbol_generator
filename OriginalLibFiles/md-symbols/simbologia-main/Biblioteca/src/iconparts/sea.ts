import { SymbolMetadata } from 'milsymbol';
import {
    DrawInstruction,
    Path,
    Scale,
    SymbolColorScheme,
    Translate,
    Text,
} from '../milsymbol-types';

import {
    IconPartBuilder
  } from './helpers'
import { makeNewIcons } from './newicons';

export function overrideIconParts_Sea(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    let builder = new IconPartBuilder(metadata, colors)

    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////

    iconParts["SE.IC.CRUISER, GUIDED MISSILE"] = builder.mainText("CR")
    iconParts["SE.IC.DESTROYER"] = builder.mainText("CT")
    iconParts["SE.IC.FRIGATE"] = builder.mainText("F")
    iconParts["SE.IC.CORVETTE"] = builder.mainText("CV")
    iconParts["SE.IC.LITTORAL COMBATANT SHIP"] = builder.mainText("NCL")
    iconParts["SE.IC.AMPHIBIOUS FORCE FLAGSHIP"] = builder.mainText("NCA")
    // sId["120302"] = iconParts["SE.IC.AMPHIBIOUS ASSAULT"] = builder.mainText("")
    iconParts["SE.IC.AMPHIBIOUS ASSAULT SHIP, GENERAL"] = builder.mainText("NAA")
    iconParts["SE.IC.AMPHIBIOUS ASSAULT SHIP, MULTI-PURPOSE"] = builder.mainText("NAM")
    iconParts["SE.IC.AMPHIBIOUS ASSAULT SHIP, HELICOPTER"] = builder.mainText("NAH")
    iconParts["SE.IC.AMPHIBIOUS TRANSPORT, DOCK"] = builder.mainText("NDD")
    iconParts["SE.IC.LANDING SHIP"] = builder.mainText("NDC")
    iconParts["SE.IC.LANDING CRAFT"] = builder.mainText("ED")
    iconParts["SE.IC.MINELAYER"] = builder.mainText("NLM")
    iconParts["SE.IC.MINESWEEPER"] = builder.mainText("NV")
    // sId["120403"] = iconParts["SE.IC.MINESWEEPER, DRONE"] = builder.mainText("")
    iconParts["SE.IC.MINEHUNTER"] = builder.mainText("NCM")
    iconParts["SE.IC.MINE COUNTERMEASURES"] = builder.mainText("NCMM")
    // sId["120406"] = iconParts["SE.IC.MINE COUNTER MEASURE SUPPORT SHIP"] = builder.mainText("")
    // sId["120500"] = iconParts["SE.IC.PATROL"] = builder.mainText("")
    iconParts["SE.IC.PATROL CRAFT"] = builder.mainText("EP")
    // sId["120801"] = [iconParts["SE.IC.MILITARY SPEEDBOAT, RIGID-HULL INFLATABLE BOAT"] = builder.mainText("")
    // sId["121001"] = iconParts["SE.IC.NAVY TASK ELEMENT"] = builder.mainText("")
    // sId["121002"] = iconParts["SE.IC.NAVY TASK FORCE"] = builder.mainText("")
    // sId["121003"] = iconParts["SE.IC.NAVY TASK GROUP"] = builder.mainText("")
    // sId["121004"] = iconParts["SE.IC.NAVY TASK UNIT"] = builder.mainText("")
    iconParts["SE.IC.AUXILIARY SHIP"] = builder.mainText("NA")
    iconParts["SE.IC.AMMUNITION SHIP"] = builder.mainText("NM")
    iconParts["SE.IC.STORES SHIP"] = builder.mainText("NAp")
    // sId["130103"] = iconParts["SE.IC.AUXILIARY FLAG OR COMMAND SHIP"] = builder.mainText("")
    iconParts["SE.IC.INTELLIGENCE COLLECTOR"] = builder.mainText("NCI")
    iconParts["SE.IC.OCEAN RESEARCH SHIP"] = builder.mainText("NO")
    iconParts["SE.IC.SURVEY SHIP"] = builder.mainText("NHo")
    iconParts["SE.IC.CARGO SHIP"] = builder.mainText("NMC")
    // sId["130109"] = iconParts["SE.IC.COMBAT SUPPORT SHIP, FAST"] = builder.mainText("")
    iconParts["SE.IC.OILER, REPLENISHMENT"] = builder.mainText("NT")
    iconParts["SE.IC.REPAIR SHIP"] = builder.mainText("NOf")
    iconParts["SE.IC.SUBMARINE TENDER"] = builder.mainText("NSS")
    iconParts["SE.IC.TUG, OCEAN GOING"] = builder.mainText("RAM")
    iconParts["SE.IC.SERVICE CRAFT, YARD, GENERAL"] = builder.mainText("EAP")
    // sId["130201"] = iconParts["SE.IC.BARGE, NOT SELF-PROPELLED"] = builder.mainText("")
    iconParts["SE.IC.BARGE, SELF-PROPELLED"] = builder.mainText("BAP")
    iconParts["SE.IC.BARGE, NOT SELF-PROPELLED"] = builder.mainText("BNP")
    iconParts["SE.IC.TUG, HARBOUR"] = builder.mainText("RP")
    iconParts["SE.IC.HOSPITAL SHIP"] = builder.mainText("NH")
    iconParts["SE.IC.MILITARY"] = builder.mainText("Mil")
    iconParts["SE.IC.CIVILIAN"] = builder.mainText("Civ")
    iconParts["SE.IC.MANUAL TRACK"] = builder.mainText("Mnl")





    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////


    //iconParts["SE.M1.ANTIAIR WARFARE"] = builder.modifier1Text("AAe")
    //iconParts["SE.M1.ANTISUBMARINE WARFARE"] = builder.modifier1Text("GAS")
    //iconParts["SE.M1.MINE WARFARE"] = builder.modifier1Text("GMin")

    // O símbolo de Helicopter-equipped/VSTOL no APP-6D já é um "V"
    // (vertical), mas a milsymbol utiliza "H" por algum motivo.
    iconParts["SE.M1.HELICOPTER-EQUIPPED"] = builder.modifier1Text("V")
    iconParts["SE.M1.MINE COUNTER MEASURES"] = builder.modifier1Text("CMM")
    iconParts["SE.M1.SPECIAL OPERATIONS FORCE"] = builder.modifier1Text("Op Esp")
    iconParts["SE.M1.ELECTRONIC WARFARE"] = builder.modifier1Text("GE")
    iconParts["SE.M1.HIJACKING/HIJACKED"] = builder.modifier1Text("Sqt")
    iconParts["SE.M1.MEDICAL"] = builder.modifier1Text("Med")
    iconParts["SE.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"] = builder.modifier1Text("IRV")
    iconParts["SE.M1.SEA-BASE X-BAND"] = iconParts["GR.M1.RADAR"]

    iconParts["SE.M1.BALLISTIC MISSILE DEFENSE, SHOOTER"] = builder.modifier1Text("BMD")
    iconParts["SE.M1.BALLISTIC MISSILE DEFENSE, LONG- RANGE SURVEILLANCE AND TRACK (LRS&T)"] = builder.modifier1Text("LST")


    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////

    iconParts["SE.M2.LIGHT"] = builder.modifier2Text("L")
    iconParts["SE.M2.MEDIUM"] = builder.modifier2Text("Me")
    iconParts["SE.M2.HEAVY"] = builder.modifier2Text("P")
    iconParts["SE.M2.LOGISTICS"] = builder.modifier2Text("Log")
}

export function addNewIconParts_Sea(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    let builder = new IconPartBuilder(metadata, colors)
    let icons = makeNewIcons(metadata, colors)

    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////

    let black= builder.black

    iconParts["BR.MD.MB.Ud.IC.ECSR"] = [Text.withPosition("ECSR", builder.iconFillColor, 100, 112, 18)]
    iconParts["BR.MD.MB.Ud.IC.TaskElement"] = [Text.withPosition("ET", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.TaskForce"] = [Text.withPosition("FT", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.TaskGroup"] = [Text.withPosition("GT", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.TaskUnit"] = [Text.withPosition("UT", black, 100, 120, 30)]

    iconParts["BR.MD.MB.Ud.IC.NavioMercanteCargaSeca"] = [Text.withPosition("C", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.NavioMercantePortaContainer"] = [Text.withPosition("PC", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.NavioMercanteRORO"] = [Text.withPosition("RR", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.NavioMercanteFerryBoat"] = [Text.withPosition("FB", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.NavioMercanteCargaPesada"] = [Text.withPosition("CP", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.AeroBarco"] = [Text.withPosition("HC", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.NavioPortaBarcaça"] = [Text.withPosition("PB", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.NavioTanque"] = [Text.withPosition("T", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.Empurrador"] = [Text.withPosition("E", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.Rebocador"] = [Text.withPosition("RB", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.Veleiro"] = [Text.withPosition("V", black, 100, 120, 30)]
    iconParts["BR.MD.MB.Ud.IC.BarcaNaoPropulsada"] = [Text.withPosition("BNP", black, 100, 120, 30)]

    iconParts["BR.MD.MB.Ud.IC.PescaArtesanal"] = [Text.withPosition("BPA", black, 100, 130, 27)]

    iconParts["BR.MD.MB.Ud.IC.RecreacaoECR"] = [Text.withPosition("ECR", black, 100, 125, 27)]
    iconParts["BR.MD.MB.Ud.IC.RecreacaoLanchaRapida"] = [Text.withPosition("LR", black, 100, 125, 27)]

    iconParts["BR.MD.Mar.Emb.IC.AvisoPatrulha"] = builder.mainText("AvP")
    iconParts["BR.MD.Mar.Nav.IC.Transporte"] = builder.mainText("NTr")

    iconParts["BR.MD.Mar.Emb.IC.Saude"] = builder.mainText("ES")
    iconParts["BR.MD.Mar.Emb.IC.Manobra"] = builder.mainText("EMan")
    iconParts["BR.MD.Mar.Emb.IC.LogMnt"] = builder.mainText("ELM")

    iconParts["BR.MD.Mar.Nav.IC.Polar"] = builder.mainText("NPo")
    iconParts["BR.MD.Mar.Nav.IC.Veleiro"] = builder.mainText("NVe")
    iconParts["BR.MD.Mar.Nav.IC.VeleiroOceanico"] = builder.mainText("VO")

    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////

    iconParts["BR.MD.Mar.Emb.M1.Fluvial"] = builder.modifier1Text("Flu")
    iconParts["BR.MD.Mar.Emb.M1.Comando"] = builder.modifier1Text("Cmdo")
    iconParts["BR.MD.Mar.Emb.M1.Multiproposito"] = builder.modifier1Text("Mp")
    iconParts["BR.MD.Mar.Emb.M1.Balizador"] = builder.modifier1Text("Ba")
    iconParts["BR.MD.Mar.Emb.M1.Faroleiro"] = builder.modifier1Text("Fa")
    iconParts["BR.MD.Mar.Emb.M1.Anfibio"] = builder.modifier1Text("Anf")


    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////
    iconParts["BR.MD.Mar.Emb.M2.Fluvial"] = builder.modifier2Text("Flu")
    iconParts["BR.MD.Mar.Emb.M2.Oceanico"] = builder.modifier2Text("Oc")

}
