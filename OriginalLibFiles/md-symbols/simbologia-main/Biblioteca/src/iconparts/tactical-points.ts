import { SymbolMetadata } from 'milsymbol';
import {
    DrawInstruction,
    Path,
    Scale,
    SymbolColorScheme,
    Text as MsText,
    Translate
} from '../milsymbol-types';

import {
    IconPartBuilder
  } from './helpers'
import { makeNewIcons } from './newicons';

/**
 * Overrides para Medidas de Coordenação
 */
export function overrideIconParts_TacticalPoints(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    overrideIconParts_MaritimePoints(iconParts, metadata, colors)
}

/**
 * Overrides para Medidas de Coordenação Marítimas
 */
function overrideIconParts_MaritimePoints(
    iconParts: { [key: string]: (DrawInstruction | DrawInstruction[]) },
    metadata: SymbolMetadata,
    colors: SymbolColorScheme
) {
    // Referência: milsymbol/iconparts/tactical-points.js

    // Posição do DIP
    let dipPositionInstructions = iconParts["TP.DIP POSITION"] as DrawInstruction[]
    (dipPositionInstructions[0] as MsText).text = "P";
    (dipPositionInstructions[1] as MsText).text = "D";

    // Área de busca
    let searchAreaInstructions = iconParts["TP.SEARCH AREA"] as DrawInstruction[]
    (searchAreaInstructions[0] as MsText).text = "A";
    (searchAreaInstructions[1] as MsText).text = "B";

    // Contato perdido
    let lostContactInstructions = iconParts["TP.LOST CONTACT"] as DrawInstruction[]
    let lcLength = lostContactInstructions.length;
    (lostContactInstructions[lcLength-2] as MsText).text = "C";
    (lostContactInstructions[lcLength-1] as MsText).text = "P";

    // Posição estimada
    let estimatedPositionInstructions = iconParts["TP.ESTIMATED POSITION (EP)"] as DrawInstruction[]
    let epLength = estimatedPositionInstructions.length;
    (estimatedPositionInstructions[epLength-1] as MsText).text = "PE";
}