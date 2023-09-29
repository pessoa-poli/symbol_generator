import { ColorMode } from 'milsymbol'

export type Affiliation = "Friend" | "Hostile" | "Neutral" | "Unknown" | "Civilian"

export interface SymbolColorScheme {
    black: ColorMode; // Black parts of the symbol.
    fillColor: ColorMode; // Symbol fill color.
    frameColor: ColorMode; // Symbol frame color.
    iconColor: ColorMode; // Icon color.
    iconFillColor: ColorMode; // Icon fill color.
    none: ColorMode; // Transparent parts of the symbol.
    white: ColorMode; // White parts of the symbol.
};

export interface DrawInstruction {
    readonly type: string;
}

export interface Draw extends DrawInstruction {
    fill: string | boolean
    fillopacity: number
    stroke: string | boolean
    strokedasharray: string
    strokewidth: number
}

export class Text implements Draw {
    readonly type = "text"
    fill: string | boolean = false
    fillopacity: number
    stroke: string | boolean = false
    strokedasharray = ""
    strokewidth = 0

    x: number
    y: number
    text: string
    textanchor: string = "middle"
    fontsize: number
    fontfamily: string = "Arial"
    fontweight: string = "bold"

    constructor(text: string, color: string | boolean = false) {
        this.text = text
        this.fill = color
    }

    static withPosition(text: string, color: string | boolean, x: number, y: number, fontSize: number) {
        let textInstance = new Text(text, color)
        textInstance.x = x
        textInstance.y = y
        textInstance.fontsize = fontSize
        return textInstance
    }
}

export type CircleParams = {
    cx: number,
    cy: number,
    r: number,
    fill?: string | boolean,
    stroke?: string | boolean
}
export class Circle implements Draw {
    readonly type = "circle"
    fill: string | boolean = false
    fillopacity: number
    stroke: string | boolean = false
    strokedasharray = ""
    strokewidth = 0
    cx: number // Center x
    cy: number // Center y
    r: number // Radius

    constructor({ cx, cy, r, fill, stroke }: CircleParams) {
        this.cx = cx
        this.cy = cy
        this.r = r
        if (fill) this.fill = fill
        if (stroke) this.stroke = stroke
    }
}

export class Path implements Draw {
    readonly type = "path"
    fill: string | boolean = false
    fillopacity: number
    stroke: string | boolean = false
    strokedasharray = ""
    strokewidth = 0
    d: string // SVG path

    constructor({ d, fill, stroke }: { d: string, fill?: string | boolean, stroke?: string | boolean }) {
        this.d = d
        if (fill) this.fill = fill
        if (stroke) this.stroke = stroke
    }
}

export interface Transform extends DrawInstruction {
    draw: DrawInstruction[]
}

export class Translate implements Transform {
    readonly type = "translate"
    x: number // Move x
    y: number // Move y
    draw: DrawInstruction[]

    constructor(x: number, y: number, draw: DrawInstruction[]) {
        this.x = x
        this.y = y
        this.draw = draw
    }
}

export class Rotate implements Transform {
    readonly type = "rotate"
    degree: number // Rotation angle
    x: number // Rotate center x
    y: number // Rotate center y
    draw: DrawInstruction[]
}

export class Scale implements Transform {
    readonly type = "scale"
    factor: number // Factor to scale
    draw: DrawInstruction[]

    constructor(factor: number, draw: DrawInstruction[]) {
        this.factor = factor
        this.draw = draw
    }
}

export class RawSVG implements DrawInstruction {
    readonly type = "svg"
    svg: string

    constructor(svg: string) {
        this.svg = svg
    }
}

export type SvgTransformMatrix = {
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
}

/**
 * Helper para escalar paths de SVGs que tenham transformação por matrix (não suportado na milsymbol).
 * Basta preencher a SvgTransformMatrix com os números da matriz do SVG.
 *
 * For scaling/resizing, you have to translate by (-cx, -cy), then scale and then translate back to (cx, cy).
 * You can do this with a matrix transform:
 *      transform="matrix(sx, 0, 0, sy, cx-sx*cx, cy-sy*cy)"
 * Where sx is the scaling factor in the x-axis, sy in the y-axis.
 */
export function fromMatrix(matrix: SvgTransformMatrix, instructions: DrawInstruction[]): DrawInstruction {
    let sx = matrix.a
    let sy = matrix.d
    let cx = matrix.e/(1-sx)
    let cy = matrix.f/(1-sy)
    return new Translate(cx, cy, [new Scale(sx, [new Translate(-cx, -cy, instructions)])])
}