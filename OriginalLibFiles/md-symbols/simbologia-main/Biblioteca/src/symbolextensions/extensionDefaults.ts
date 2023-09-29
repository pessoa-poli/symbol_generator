import {pad} from "./helpers";
import {COUNTRY_CODES} from "./constants";
import {RenderOptions} from "./types";
import RendererBuilder from "./RendererBuilder";

export function defaultGetExtendedSidc(base: any, parts: any) {
    const versao = "0"
    const reservadoParaUsoFuturo = "000"
    let entity: string | number = parseInt(parts.entity)
    entity = entity? entity.toString(2) : 0
    let comando = parts.comando? "1" : "0"
    let modificadorTransversal = pad(parts.modificadorTransversal?.toString(2), 3)
    let modificador1 = pad(parts.modificador1?.toString(2), 5)
    let modificador2 = pad(parts.modificador2?.toString(2), 5)

    const binarySidcExtension = versao + reservadoParaUsoFuturo + pad(entity, 5) + comando + modificadorTransversal + modificador1 + modificador2
    const sidcExtension = COUNTRY_CODES.BRAZIL + pad(parseInt(binarySidcExtension, 2), 7)
    return base + sidcExtension
}

export function defaultGetExtensionSymbolParts (ms: any, rendererBuilder: RendererBuilder, symbolSetSidcMapping: any, symbolId: string, entitySidc: string): RenderOptions[] {
    let decimalSymbolId: number = parseInt(symbolId)
    let binarySymbolId: string = pad(decimalSymbolId.toString(2), 23)
    let version = binarySymbolId.substr(0, 1)

    if(version == "0") {
        let reservadoParaUsoFuturo = binarySymbolId.substr(1, 3)
        let entityExt = binarySymbolId.substr(4, 5)
        let comando = binarySymbolId.substr(9, 1)
        let modificadorTransversal = binarySymbolId.substr(10, 3)
        let modificador1 = binarySymbolId.substr(13, 5)
        let modificador2 = binarySymbolId.substr(18, 5)

        try {
            return [
                rendererBuilder.buildEntityRenderer(symbolSetSidcMapping.iconsForEntityExtensions, symbolSetSidcMapping.EntityExtensions)(entitySidc, parseInt(entityExt, 2)),
                rendererBuilder.buildModifierRenderer(symbolSetSidcMapping.Comando, symbolSetSidcMapping.iconsForComando)(parseInt(comando, 2)),
                rendererBuilder.buildModifierRenderer(symbolSetSidcMapping.ModificadorTransversal, symbolSetSidcMapping.iconsForModificadorTransversal)(parseInt(modificadorTransversal, 2)),
                rendererBuilder.buildModifierRenderer(symbolSetSidcMapping.Modificador1, symbolSetSidcMapping.iconsForModificador1)(parseInt(modificador1, 2)),
                rendererBuilder.buildModifierRenderer(symbolSetSidcMapping.Modificador2, symbolSetSidcMapping.iconsForModificador2)(parseInt(modificador2, 2))
            ]
        } catch (e) {
            //TODO mensagens de erro mais especificas para onde esta o problema/codigo invalido
            console.error("ERRO NAO TRATADO NA RENDERIZACAO DO SIMBOLO", e)
            return []
        }
    } else {
        return []
    }
}
