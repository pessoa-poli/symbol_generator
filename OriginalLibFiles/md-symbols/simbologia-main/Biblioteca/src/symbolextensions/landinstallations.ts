import {RenderOptions} from "./types";
import RendererBuilder from './RendererBuilder'
import {
    LandInstallationsSidcMapping
} from "../sidcmapping/landinstallations/extensions";
import {defaultGetExtendedSidc, defaultGetExtensionSymbolParts} from "./extensionDefaults";


export function getExtendedSidc(base, parts: any) {
    return defaultGetExtendedSidc(base, parts)
}

function getExtensionSymbolParts (ms: any, symbolId: string, entitySidc: string): RenderOptions[] {
    //@ts-ignore
    let rendererBuilder = new RendererBuilder(this, ms);

    return defaultGetExtensionSymbolParts(ms, rendererBuilder, LandInstallationsSidcMapping, symbolId, entitySidc)
}

export const LandInstallationExtensions = {
    getExtendedSidc,
    getExtensionSymbolParts,
    ...LandInstallationsSidcMapping,
}
