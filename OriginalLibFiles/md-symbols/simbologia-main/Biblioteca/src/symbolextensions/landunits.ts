import {RenderOptions} from "./types";
import RendererBuilder from './RendererBuilder'
import {
    LandUnitSidcMapping
} from "../sidcmapping/landunits/extensions";
import {defaultGetExtendedSidc, defaultGetExtensionSymbolParts} from "./extensionDefaults";


export function getExtendedSidc(base: any, parts: any) {
    return defaultGetExtendedSidc(base, parts)
}

function getExtensionSymbolParts (ms: any, symbolId: string, entitySidc: string): RenderOptions[] {
    //@ts-ignore
    let rendererBuilder = new RendererBuilder(this, ms);

    return defaultGetExtensionSymbolParts(ms, rendererBuilder, LandUnitSidcMapping, symbolId, entitySidc)
}

export const LandUnitExtensions = {
    getExtendedSidc,
    getExtensionSymbolParts,
    ...LandUnitSidcMapping,
}


