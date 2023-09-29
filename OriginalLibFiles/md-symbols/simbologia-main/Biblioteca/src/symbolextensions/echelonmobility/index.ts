import renderEchelon from './echelon'
import {Echelon} from "./codes"
import {RenderOptions} from "../types";

export default function renderOptionsForEchelonOrMobility(ms, symbolID): RenderOptions {
    let pre = [];
    let post = [];
    let baseBbox = new ms.BBox(this.metadata.baseGeometry.bbox); // clone the bbox
    let color = this.style.frameColor
        ? this.style.frameColor[this.metadata.affiliation]
        : this.colors.iconColor[this.metadata.affiliation];
    let bbox = null;

    if (isEchelon(symbolID)) {
        let renderOptions = renderEchelon.call(this, ms, symbolID, baseBbox);
        ({ pre, post, bbox } = renderOptions )
    }

    //Assign fill, stroke and stroke-width
    for (var i = 0; i < pre.length; i++) {
        if (!pre[i].hasOwnProperty("fill")) pre[i].fill = false;
        if (!pre[i].hasOwnProperty("stroke")) pre[i].stroke = color;
        if (!pre[i].hasOwnProperty("strokewidth"))
            pre[i].strokewidth = this.style.strokeWidth;
    }
    for (i = 0; i < post.length; i++) {
        if (!post[i].hasOwnProperty("fill")) post[i].fill = false;
        if (!post[i].hasOwnProperty("stroke")) post[i].stroke = color;
        if (!post[i].hasOwnProperty("strokewidth"))
            post[i].strokewidth = this.style.strokeWidth;
    }

    return { pre: pre, post: post, bbox: bbox };
}

function isEchelon(symbolID) {
    // TODO: Implementar!!
    return true
}

export const echelonMobilityCodes = {
    Echelon,
}
