import {RenderOptions} from "./types";
import RendererBuilder from './RendererBuilder'
import {
    LandCivilianSidcMapping
} from "../sidcmapping/landcivilian/extensions";
import {defaultGetExtendedSidc, defaultGetExtensionSymbolParts} from "./extensionDefaults";


export function getExtendedSidc(base, parts: any) {
    return defaultGetExtendedSidc(base, parts)
}

function getExtensionSymbolParts (ms: any, symbolId: string, entitySidc: string): RenderOptions[] {
    //@ts-ignore
    let rendererBuilder = new RendererBuilder(this, ms);

    return defaultGetExtensionSymbolParts(ms, rendererBuilder, LandCivilianSidcMapping, symbolId, entitySidc)
}

export const LandCivilianExtensions = {
    getExtendedSidc,
    getExtensionSymbolParts,
    ...LandCivilianSidcMapping,
}
