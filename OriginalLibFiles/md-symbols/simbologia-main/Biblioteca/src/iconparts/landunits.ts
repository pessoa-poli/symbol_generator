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
export function overrideIconParts_LandUnits(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    // Referência: milsymbol/iconparts/ground.js

    let builder = new IconPartBuilder(metadata, colors)
    let icons = makeNewIcons(metadata, colors)

    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////
    iconParts["GR.IC.SPECIAL FORCES"] = builder.mainText("Cmdos");
    iconParts["GR.IC.SPECIAL OPERATIONS FORCES"] = new Translate(10, 10, [ new Scale( 0.9, [builder.mainText("Op Esp") as DrawInstruction])]);
    iconParts["GR.IC.SUSTAINMENT"] = icons["BR.MD.Ter.Ud.IC.Log"];
    iconParts["GR.IC.ELECTRONIC WARFARE"] = builder.mainText("GE");
    iconParts["GR.IC.MILITARY INTELLIGENCE"] = builder.mainText("IM");
    iconParts["GR.IC.CIVIL AFFAIRS"] = builder.mainText("Civ");
    iconParts["GR.IC.PUBLIC AFFAIRS"] = builder.mainText("Com Soc");
    iconParts["GR.IC.PERSONNEL SERVICES"] = icons["BR.MD.Ter.IC.RH"]
    iconParts["GR.IC.COMBAT SERVICE SUPPORT"] = iconParts["GR.IC.SUSTAINMENT"]; // Mantém o ícone de Logística, mas acrescenta a semântica da OTAN

    iconParts["GR.IC.FF.AIR DEFENCE"] = {
        Unknown: new Path({
            d: "m 55,135 c 10,-20 80,-20 90,0",
            fill: false,
            stroke: builder.iconColor
        }),
        Friend: new Path({
            d: "M25,150 C45,110 155,110 175,150",
            fill: false,
            stroke: builder.iconColor
        }),
        Neutral: new Path({
            d: "M45,150 C65,110 135,110 155,150",
            fill: false,
            stroke: builder.iconColor
        }),
        Hostile: new Path({
            d: "M60,132 C70,115 130,115 140,132",
            fill: false,
            stroke: builder.iconColor
        })
      }[metadata.affiliation];

    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////
    iconParts["GR.M1.BORDER"] = builder.modifier1Text("Fron");
    iconParts["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"] = builder.modifier1Text("Op Esp");
    iconParts["GR.M1.CONSTRUCTION"] = builder.modifier1Text("Cnst")
    iconParts["GR.M1.SUPPORT"] = builder.modifier1Text("Ap")
    iconParts["GR.M1.COMMAND POST NODE"] = builder.modifier1Text("PC")
    iconParts["GR.M1.NODE CENTRE"] = builder.modifier1Text("Nd")
    iconParts["GR.M1.ROUTE, RECONNAISSANCE, AND CLEARANCE"] = builder.modifier1Text("Pion")
    iconParts["GR.M1.FORWARD"] = builder.modifier1Text("Avç");
    iconParts["GR.M1.FIRE DIRECTION CENTRE"] = builder.modifier1Text("CDT");
    iconParts["GR.M1.DOG"] = builder.modifier1Text("CG");
    iconParts["GR.M1.COMBAT"] = builder.modifier1Text("Cmb");
    iconParts["GR.M1.MULTINATIONAL"] = builder.modifier1Text("Cbn");
    iconParts["GR.M1.MINE COUNTERMEASURE"] =builder.modifier1Text("CMM");
    iconParts["GR.M1.DECONTAMINATION"] =builder.modifier1Text("Descon");
    iconParts["GR.M1.DETENÇÃO"] =builder.modifier1Text("Det");
    iconParts["GR.M1.SMOKE"] =builder.modifier1Text("Fum");
    iconParts["GR.M1.SOUND RANGING"] =builder.modifier1Text("MS");
    iconParts["GR.M1.METEOROLOGICAL"] =builder.modifier1Text("Met");
    iconParts["GR.M1.RADIOLOGICAL"] =builder.modifier1Text("R");
    iconParts["GR.M1.RETRANSMISSION SITE"] =builder.modifier1Text("RTR");  // No manual está tudo maiúsculo, mesmo
    iconParts["GR.M1.MOBILE SUBSCRIBER EQUIPMENT"] =builder.modifier1Text("SAM");
    iconParts["GR.M1.AREA"] =builder.modifier1Text("Area");

    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////
    iconParts["GR.M2.SUPPORT"] = builder.modifier2Text("Ap")
    iconParts["GR.M2.HEAVY"] = builder.modifier2Text("P")
    iconParts["GR.M2.MEDIUM"] = builder.modifier2Text("Me")
    iconParts["GR.M2.LOW ALTITUDE"] = builder.modifier2Text("Bx")
    iconParts["GR.M2.MEDIUM ALTITUDE"] = builder.modifier2Text("Me")
    iconParts["GR.M2.HIGH ALTITUDE"] = builder.modifier2Text("G")
    iconParts["GR.M2.LABORATORY"] = builder.modifier2Text("Lab")
    iconParts["GR.M2.CLEARING"] = builder.modifier2Text("Dobst")
    iconParts["GR.M2.DECONTAMINATION"] =builder.modifier2Text("Descon")
    iconParts["GR.M2.MULTI-CHANNEL"] =builder.modifier2Text("MCn")
    iconParts["GR.M2.REFUEL"] =builder.modifier2Text("Rabst")
    iconParts["GR.M2.PATIENT EVACUATION COORDINATION"] =builder.modifier2Text("Ev")
    iconParts["GR.M2.CASUALTY STAGING"] =builder.modifier2Text("Trg")
}

/**
 * Novas icon parts para unidades terrestres
 */
export function addNewIconParts_LandUnits(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    let builder = new IconPartBuilder(metadata, colors)
    let icons = makeNewIcons(metadata, colors)

    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////
    iconParts["BR.MD.Ter.Ud.IC.POLICIA FS"] = builder.mainText("Pol");
    iconParts["BR.MD.Ter.Ud.IC.POLICIA FS.PE"] = builder.mainText("PE");
    iconParts["BR.MD.Ter.Ud.IC.POLICIA FS.PA"] = builder.mainText("PA");
    iconParts["BR.MD.Ter.Ud.IC.POLICIA FS.SP"] = builder.mainText("SP");

    iconParts["BR.MD.Ter.Ud.IC.Anti-Carro"] = builder.mainText("AC");

    iconParts["BR.MD.Ter.Ud.IC.AC"] = builder.mainText("AC")
    iconParts["BR.MD.Ter.Ud.IC.CIBER"] = builder.mainText("Ciber")
    iconParts["BR.MD.Ter.Ud.IC.PREC_PQDT"] = builder.mainText("Prec")
    iconParts["BR.MD.Ter.Ud.IC.FE"] = builder.mainText("FE")
    iconParts["BR.MD.Ter.Ud.IC.SUP_CLASSE_IV"] = icons["BR.MD.Ter.Ud.IC.SUP_CLASSE_IV"]
    iconParts["BR.MD.Ter.Ud.IC.SUP_CLASSE_VII"] = icons["BR.MD.Ter.Ud.IC.SUP_CLASSE_VII"]
    iconParts["BR.MD.Ter.Ud.IC.SUP_CLASSE_X"] = builder.mainText("X")
    iconParts["BR.MD.Ter.Ud.IC.SUP_OUTRAS_CLASSES"] = icons["BR.MD.Ter.Ud.IC.SUP_OUTRAS_CLASSES"]
    iconParts["BR.MD.Ter.Ud.IC.SUP_MATERIAL_BELICO"] = builder.mainText("MB")
    iconParts["BR.MD.Ter.Ud.IC.SUP_IAB"] = builder.mainText("IAB")
    iconParts["BR.MD.Ter.Ud.IC.SUP_IAQ"] = builder.mainText("IAQ")
    iconParts["BR.MD.Ter.Ud.IC.SUP_CLASSE_I_E_AGUA"] = new Translate(-30, 0,[
        iconParts["GR.IC.FF.CLASS I"] as DrawInstruction,
        new Translate( 65, 20, [
            new Scale(.8,
                [iconParts["GR.IC.WATER"] as DrawInstruction]
            ),]
        )
    ])
    iconParts["BR.MD.Ter.Ud.IC.SUP_CLASSE_I_E_OUTRAS"] = new Translate(-25, 0,[
        iconParts["GR.IC.FF.CLASS I"] as DrawInstruction,
        new Translate( 45, 0, [
            new Scale(1,
                [icons["BR.MD.Ter.Ud.IC.SUP_OUTRAS_CLASSES"]]
            ),]
        )
    ])
    iconParts["BR.MD.Ter.Ud.IC.SUP_CLASSE_II_E_OUTRAS"] = [
        new Translate( 5, 30, [
            new Scale(.7,
                [iconParts["GR.IC.FF.CLASS II"] as DrawInstruction],
            )
        ]),
        new Translate( 25, 0, [
            new Scale(1,
                [icons["BR.MD.Ter.Ud.IC.SUP_OUTRAS_CLASSES"]]
            ),]
        )
    ]

    //Law Enforcement
    iconParts["BR.MD.Ter.Ud.IC.LAW_ENFORCEMENT BOMBEIROS"] = builder.mainText("BM")

    // TODO: Criar ícone principal de verdade, em vez de aplicar
    // transformada no pequeno.
    iconParts["BR.MD.Ter.Ud.IC.Anfibio"] = [
        new Translate(50, 50, [new Scale(.5, [iconParts["GR.IC.FF.NAVAL"]] as DrawInstruction[])]),
        new Scale(2.2, [
            new Translate(-54.7, -22, [
              icons["BR.MD.MB.Fuz Nav"]
            ])
        ]),
    ]

    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////
    iconParts["BR.MD.Ter.Ud.M1.AC"] = builder.modifier1Text("AC")
    iconParts["BR.MD.Ter.Ud.M1.Escola"] = builder.modifier1Text("Es")
    iconParts["BR.MD.Ter.Ud.M1.Guarda"] = builder.modifier1Text("Gd")
    iconParts["BR.MD.Ter.Ud.M1.Msl AC"] = builder.modifier1Text("MAC")
    iconParts["BR.MD.Ter.Ud.M1.Rec"] = builder.modifier1Text("Rec")
    iconParts["BR.MD.Ter.Ud.M1.Obus 105"] = builder.modifier2Text("L")
    iconParts["BR.MD.Ter.Ud.M1.Obus 155"] = builder.modifier2Text("Me")
    iconParts["BR.MD.Ter.Ud.M1.GE"] = builder.modifier1Text("GE")
    iconParts["BR.MD.Ter.Ud.M1.Emprego Geral"] = builder.modifier1Text("EG")
    iconParts["BR.MD.Ter.Ud.M1.Reconhecimento Ataque"] = builder.modifier1Text("RA")
    iconParts["BR.MD.Ter.Ud.M1.Suprimento Anti Aérea"] = builder.modifier1Text("AAAe")
    iconParts["BR.MD.Ter.Ud.M1.SUP_ARMAMENTO"] = builder.modifier1Text("Armt");
    iconParts["BR.MD.Ter.Ud.M1.SUP_MUNICAO"] = builder.modifier1Text("Mun");

    iconParts["BR.MD.MB.M1.Fuz Nav"] =[
        new Translate(50, 15, [
            new Scale(.5,  iconParts["BR.MD.Ter.Ud.IC.Anfibio"] as DrawInstruction[])
        ])
    ]
    iconParts["BR.MD.FAB.M1.Inf Aer"] = icons["BR.MD.FAB.M1.Gladio Alado"]

    iconParts["BR.MD.Ter.Ud.M1.TRANSPORTE"] = new Translate(50, 20, [
        new Scale(0.5,
            iconParts["GR.IC.TRANSPORTATION"] as DrawInstruction[]
        )
    ])

    iconParts["BR.MD.Ter.Ud.M1.Busca-Alvos"] = builder.modifier1Text("BA")

    iconParts["BR.MD.Ter.Ud.M1.Conjunto"] = builder.modifier1Text("Cj")
    iconParts["BR.MD.Ter.Ud.M1.Reconhecimento Vigilancia"] = builder.modifier1Text("Rec Vig")
    iconParts["BR.MD.Ter.Ud.M1.Reconhecimento Rec"] = builder.modifier1Text("Rec")
    iconParts["BR.MD.Ter.Ud.M1.Recuado"] = builder.modifier1Text("Rcd")

    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////
    iconParts["BR.MD.Ter.Ud.M2.Ap Mec"] = [
        builder.circle({ cx:  70, cy: 125, r: 5, fill: false }),
        builder.circle({ cx: 100, cy: 125, r: 5, fill: false }),
        builder.circle({ cx: 130, cy: 125, r: 5, fill: false }),
        builder.modifier2Text("Ap")
    ]

    iconParts["BR.MD.MB.M2.Fuz Nav"] =[
        new Translate(50, 85, [
            new Scale(.5,  iconParts["BR.MD.Ter.Ud.IC.Anfibio"] as DrawInstruction[])
        ])
    ]
    iconParts["BR.MD.FAB.M2.Inf Aer"] = new Translate(0, 70, [
        iconParts["BR.MD.FAB.M1.Inf Aer"]
    ]);

    iconParts["BR.MD.Ter.Ud.M2.Selva"] = icons["BR.MD.Ter.Ud.M2.Selva"]
    iconParts["BR.MD.Ter.Ud.M2.Anfibio"] = builder.modifier2Text("Anf")
    iconParts["BR.MD.Ter.Ud.M2.Rec"] = builder.modifier2Text("Rec")
    iconParts["BR.MD.Ter.Ud.M2.Policia_Militar"] =builder.modifier2Text("PM")
    iconParts["BR.MD.Ter.Ud.M2.Policia_Civil"] =builder.modifier2Text("PC")
    iconParts["BR.MD.Ter.Ud.M2.Policia_Federal"] =builder.modifier2Text("PF")
    iconParts["BR.MD.Ter.Ud.M2.Policia_Rodoviaria_Federal"] =builder.modifier2Text("PRF")
    iconParts["BR.MD.Ter.Ud.M2.Policia_Forca_Nacional"] =builder.modifier2Text("FNSP")
    iconParts["BR.MD.Ter.Ud.M2.Policia_Guarda_Municipal"] =builder.modifier2Text("GM")
    iconParts["BR.MD.Ter.Ud.M2.Carros_de_combate"] =builder.modifier2Text("CC")
}
