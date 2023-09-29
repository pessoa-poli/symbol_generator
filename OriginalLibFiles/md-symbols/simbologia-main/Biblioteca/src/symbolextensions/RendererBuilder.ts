import {RenderOptions} from "./types";

export default class RendererBuilder {
    constructor(readonly thisInstance: any, readonly ms: any) {}

    buildModifierRenderer(iconCodes: any, symbolIconsMap: any) {
        return (code: any) => {
            let post: RenderOptions[] = [];
            //@ts-ignore
            let iconParts = this.ms.getIconParts(this.thisInstance);
            symbolIconsMap[iconCodes[code]]?.forEach((iconCode: string) => {
                post.push(iconParts[iconCode])
            })
            //@ts-ignore
            let bbox = this.thisInstance.metadata.baseGeometry.bbox
            return {
                pre: [],
                post,
                bbox,
            }
        }
    }

    buildEntityRenderer(iconsForEntityExtensions: any, EntityExtensions: any) {
        return (entitySidc: string, entityExt: number) => {
            let entity = entitySidc.substr(0, 2)
            let entityType = entitySidc.substr(2, 2)
            entityType = entityType.substr(0, 1) == "0"? entityType.substr(1, 1): entityType
            let entitySubType = entitySidc.substr(4, 2)
            entitySubType = entitySubType.substr(0, 1) == "0"? entitySubType.substr(1, 1): entitySubType

            let post: any[] = []
            let iconCodes: string[] = []
            if (entityType == "99" || entitySubType == "99") {
                let entityExtension = EntityExtensions[entity]
                if(entityType == "99") {
                    let ext = entityExtension.types.extensions[entityExt]
                    let id
                    if(entitySubType=="0") {
                        id = ext.id
                    } else {
                        id = ext.subtypes[entitySubType].id
                    }
                    iconCodes = iconsForEntityExtensions[id]
                } else {
                    iconCodes = iconsForEntityExtensions[entityExtension.types[entityType].subtypes.extensions[entityExt].id]
                }
            }

            if(!iconCodes) {
                iconCodes = []
            }

            //@ts-ignore
            let iconParts = this.ms.getIconParts(this.thisInstance);

            iconCodes.forEach((iconCode: string) => {
                post.push(iconParts[iconCode])
            })
            //@ts-ignore
            let bbox = this.thisInstance.metadata.baseGeometry.bbox
            return {
                pre: [],
                post,
                bbox,
            }
        }
    }
}
