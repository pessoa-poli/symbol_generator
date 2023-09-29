import { SymbolMetadata } from 'milsymbol';
import {
    Text,
    Circle,
    CircleParams,
    Affiliation,
    SymbolColorScheme
} from '../milsymbol-types'

/**
 * Builder para fazer ícones com base na configuração da biblioteca.
 */
export class IconPartBuilder {
    affiliation: string
    iconColor: string
    iconFillColor: string
    black: string
    white: string

    constructor(metadata: SymbolMetadata, colors: SymbolColorScheme) {
        // Constantes potencialmente úteis:
        let affiliation = metadata.affiliation || "Friend";
        this.affiliation = affiliation
        let baseGeometry = metadata.baseGeometry;
        this.iconColor = colors.iconColor[affiliation];
        this.iconFillColor = colors.iconFillColor[affiliation];
        this.black = colors.black[affiliation];
        this.white = colors.white[affiliation];
    }

    // 
    public mainText(str: string) {
        return text(str, this.iconColor)
    }

    public modifier1Text(str: string) {
        return textm1(str, this.iconColor)
    }

    public modifier2Text(str: string) {
        return textm2(str, this.iconColor)
    }

    public circle(params: CircleParams) {
        if (params.fill === undefined) params.fill = this.iconColor
        if (params.stroke === undefined) params.stroke = this.iconColor
        return new Circle(params)
    }
}

export function text(str: string, color: string | boolean = false): Text {
    var size = 42;
    var y = 115;
    if (str.length == 1) {
        size = 45;
        y = 115;
    }
    if (str.length == 3) {
        size = 35;
        y = 110;
    }
    if (str.length >= 4) {
        size = 32;
        y = 110;
    }
    if (str.length >= 7) {
        size = 28;
        y = 110;
    }
    let t = new Text(str, color)
    t.x = 100
    t.y = y
    t.fontsize = size

    return t;
}
export function textm1(str: string, color: string) {
    var size = 30;
    if (str.length == 3) {
        size = 25;
    }
    if (str.length >= 4) {
        size = 22;
    }

    let t = new Text(str, color)
    t.x = 100
    t.y = 77
    t.fontsize = size

    return t
}
export function textm2(str: string, color: string) {
    var size = 30;
    var y = 145;

    if (str.length == 3) {
        size = 25;
        y = 140;
    }
    if (str.length >= 4) {
        size = 20;
        y = 135;
    }

    let t = new Text(str, color)
    t.x = 100
    t.y = y
    t.fontsize = size

    return t
}
