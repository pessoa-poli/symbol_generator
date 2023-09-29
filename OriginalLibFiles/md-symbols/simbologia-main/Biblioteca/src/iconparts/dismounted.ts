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

export function overrideIconParts_Dismounted(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    let builder = new IconPartBuilder(metadata, colors)
    let icons = makeNewIcons(metadata, colors)

    iconParts["ST.M1.GOVERNMENT ORGANIZATION"] = builder.modifier1Text("Gov")
    iconParts["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"] = builder.modifier1Text("ONG")

    //////////////////////////////
    ////// MODIFICADORES M1 //////
    //////////////////////////////
    iconParts["GR.M1.CROWD AND RIOT CONTROL"] = builder.modifier1Text("CDC")
    iconParts["GR.M1.SECURITY"] = builder.modifier1Text("Seg")

    iconParts["GR.M1.J1"] = builder.modifier1Text("1ª S")
    iconParts["GR.M1.J2"] = builder.modifier1Text("2ª S")
    iconParts["GR.M1.J3"] = builder.modifier1Text("3ª S")
    iconParts["GR.M1.J4"] = builder.modifier1Text("4ª S")
    iconParts["GR.M1.J5"] = builder.modifier1Text("5ª S")
    iconParts["GR.M1.J6"] = builder.modifier1Text("6ª S")
    iconParts["GR.M1.J7"] = builder.modifier1Text("7ª S")
    iconParts["GR.M1.J8"] = builder.modifier1Text("8ª S")
    iconParts["GR.M1.J9"] = builder.modifier1Text("9ª S")
    /*sIdm1["21"] = */ iconParts["GR.M1.OF-1"] =  builder.modifier1Text("Ten")
    /*sIdm1["22"] = */ iconParts["GR.M1.OF-2"] =  builder.modifier1Text("Cap")
    /*sIdm1["23"] = */ iconParts["GR.M1.OF-3"] =  builder.modifier1Text("Maj")
    /*sIdm1["24"] = */ iconParts["GR.M1.OF-4"] =  builder.modifier1Text("Ten Cel")
    /*sIdm1["25"] = */ iconParts["GR.M1.OF-5"] =  builder.modifier1Text("Cel")
    /*sIdm1["26"] = */ iconParts["GR.M1.OF-6"] =  builder.modifier1Text("Gen 1")
    /*sIdm1["27"] = */ iconParts["GR.M1.OF-7"] =  builder.modifier1Text("Gen 2")
    /*sIdm1["28"] = */ iconParts["GR.M1.OF-8"] =  builder.modifier1Text("Gen 3 ")
    /*sIdm1["29"] = */ iconParts["GR.M1.OF-9"] =  builder.modifier1Text("Gen 4")
    /*sIdm1["30"] = */ iconParts["GR.M1.OF-10"] = builder.modifier1Text("Gen 5")
    /*sIdm1["31"] = */ iconParts["GR.M1.OF-D"] =  builder.modifier1Text("Cad")
    /*sIdm1["32"] = */ iconParts["GR.M1.OR-1"] =  builder.modifier1Text("Rcr")
    /*sIdm1["33"] = */ iconParts["GR.M1.OR-2"] =  builder.modifier1Text("Sd Ev")
    /*sIdm1["34"] = */ iconParts["GR.M1.OR-3"] =  builder.modifier1Text("Sd NB")
    /*sIdm1["35"] = */ iconParts["GR.M1.OR-4"] =  builder.modifier1Text("Cb")
    /*sIdm1["36"] = */ iconParts["GR.M1.OR-5"] =  builder.modifier1Text("3º Sgt")
    /*sIdm1["37"] = */ iconParts["GR.M1.OR-6"] =  builder.modifier1Text("2º Sgt")
    /*sIdm1["38"] = */ iconParts["GR.M1.OR-7"] =  builder.modifier1Text("1º Sgt")
    /*sIdm1["39"] = */ iconParts["GR.M1.OR-8"] =  builder.modifier1Text("ST")

    //////////////////////////////
    ////// MODIFICADORES M2 //////
    //////////////////////////////
    iconParts["GR.M2.DEMOLITION"] = builder.modifier2Text("Dml")

    iconParts["GR.M2.J1"] = builder.modifier2Text("1ª S")
    iconParts["GR.M2.J2"] = builder.modifier2Text("2ª S")
    iconParts["GR.M2.J3"] = builder.modifier2Text("3ª S")
    iconParts["GR.M2.J4"] = builder.modifier2Text("4ª S")
    iconParts["GR.M2.J5"] = builder.modifier2Text("5ª S")
    iconParts["GR.M2.J6"] = builder.modifier2Text("6ª S")
    iconParts["GR.M2.J7"] = builder.modifier2Text("7ª S")
    iconParts["GR.M2.J8"] = builder.modifier2Text("8ª S")
    iconParts["GR.M2.J9"] = builder.modifier2Text("9ª S")
    /*sIdm2["14"] = */ iconParts["GR.M2.OF-1"]  = builder.modifier2Text("Ten")
    /*sIdm2["15"] = */ iconParts["GR.M2.OF-2"]  = builder.modifier2Text("Cap")
    /*sIdm2["16"] = */ iconParts["GR.M2.OF-3"]  = builder.modifier2Text("Maj")
    /*sIdm2["17"] = */ iconParts["GR.M2.OF-4"]  = builder.modifier2Text("Ten Cel")
    /*sIdm2["18"] = */ iconParts["GR.M2.OF-5"]  = builder.modifier2Text("Cel")
    /*sIdm2["19"] = */ iconParts["GR.M2.OF-6"]  = builder.modifier2Text("Gen 1")
    /*sIdm2["20"] = */ iconParts["GR.M2.OF-7"]  = builder.modifier2Text("Gen 2")
    /*sIdm2["21"] = */ iconParts["GR.M2.OF-8"]  = builder.modifier2Text("Gen 3")
    /*sIdm2["22"] = */ iconParts["GR.M2.OF-9"]  = builder.modifier2Text("Gen 4")
    /*sIdm2["23"] = */ iconParts["GR.M2.OF-10"] = builder.modifier2Text("Gen 5")
    /*sIdm2["24"] = */ iconParts["GR.M2.OF-D"]  = builder.modifier2Text("Cad")
    /*sIdm2["25"] = */ iconParts["GR.M2.OR-1"]  = builder.modifier2Text("Rcr")
    /*sIdm2["26"] = */ iconParts["GR.M2.OR-2"]  = builder.modifier2Text("Sd Ev")
    /*sIdm2["27"] = */ iconParts["GR.M2.OR-3"]  = builder.modifier2Text("Sd NB")
    /*sIdm2["28"] = */ iconParts["GR.M2.OR-4"]  = builder.modifier2Text("Cb")
    /*sIdm2["29"] = */ iconParts["GR.M2.OR-5"]  = builder.modifier2Text("3º Sgt")
    /*sIdm2["30"] = */ iconParts["GR.M2.OR-6"]  = builder.modifier2Text("2º Sgt")
    /*sIdm2["31"] = */ iconParts["GR.M2.OR-7"]  = builder.modifier2Text("1º Sgt")
    /*sIdm2["32"] = */ iconParts["GR.M2.OR-8"]  = builder.modifier2Text("ST")
}
