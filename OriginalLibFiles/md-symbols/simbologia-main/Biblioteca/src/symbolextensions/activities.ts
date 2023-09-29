import {RenderOptions} from "./types";
import RendererBuilder from './RendererBuilder'
import {
    ActivitiesSidcMapping
} from "../sidcmapping/activities/extensions";
import {defaultGetExtendedSidc, defaultGetExtensionSymbolParts} from "./extensionDefaults";


export function getExtendedSidc(base, parts: any) {
    return defaultGetExtendedSidc(base, parts)
}

function getExtensionSymbolParts (ms: any, symbolId: string, entitySidc: string): RenderOptions[] {
    //@ts-ignore
    let rendererBuilder = new RendererBuilder(this, ms);

    return defaultGetExtensionSymbolParts(ms, rendererBuilder, ActivitiesSidcMapping, symbolId, entitySidc)
}

export const ActivitiesExtensions = {
    getExtendedSidc,
    getExtensionSymbolParts,
    ...ActivitiesSidcMapping,
}
