import { Box } from "milsymbol";
import {Echelon} from "./codes";
import {BoundedIcon, RenderOptions} from "../types";

export default function renderEchelon(ms, symbolID: string, baseBBox: Box): RenderOptions {
    console.log(">>>>>>>> Rendering echelon: ", symbolID)
    var drawArray1 = [];
    var drawArray2 = [];
    var gbbox = new ms.BBox(); // bounding box for the added geometries

    let installationPadding = this.metadata.installation ? 15 : 0;
    let echelonSymbol = getEchelonIcon(symbolID, baseBBox, installationPadding);
    if (echelonSymbol) {
        let geom = echelonSymbol.g;

        //outline
        if (this.style.outlineWidth > 0) {
            drawArray1.push(
                ms.outline(
                    { type: "translate", x: 0, y: -installationPadding, draw: geom },
                    this.style.outlineWidth,
                    this.style.strokeWidth,
                    typeof this.style.outlineColor === "object"
                        ? this.style.outlineColor[this.metadata.affiliation]
                        : this.style.outlineColor
                )
            );
        }
        //geometry
        drawArray2.push({
            type: "translate",
            x: 0,
            y: -installationPadding,
            draw: geom
        });
        gbbox.merge(echelonSymbol.bbox);
    }
    return { pre: drawArray1, post: drawArray2, bbox: gbbox };
}


/**
 * 
 * @param {string} symbolID Porção do SIDC que indica o escalão estendido.
 * @param {Boolean} installationPadding Indica se é uma instalação ou não.
 */
function getEchelonIcon(symbolID: string,
        bbox: Box,
        installationPadding: number): BoundedIcon {
    let echelon = Echelon[parseInt(symbolID)]
    var icons = {
        BaLog: {
            g: [
                {
                    type: "circle",
                    fill: "none",
                    cx: 100,
                    cy: bbox.y1 - 20,
                    r: 7.5
                }
            ],
            bbox: { y1: bbox.y1 - 20 - 7.5 - installationPadding }
        }
    };
    return icons[echelon]
}
