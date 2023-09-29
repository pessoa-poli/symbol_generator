import {Box} from "milsymbol";

export interface RenderOptions {
    // TODO: definir os tipos de SVG
    pre: any[],
    post: any[],
    bbox: Box
}

export interface BoundedIcon {
    g: any[],
    bbox: Box
}

