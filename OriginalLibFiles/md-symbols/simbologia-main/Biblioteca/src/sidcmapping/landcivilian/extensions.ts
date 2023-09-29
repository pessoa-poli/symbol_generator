export enum Comando {
    VAZIO,
}

export const iconsForComando: {
    [key: string]: string[];
} = {
    VAZIO: [],
}

export enum ModificadorTransversal {
    VAZIO,
}

export const iconsForModificadorTransversal: {
    [key: string]: string[];
} = {
    VAZIO: [],
}

export enum Modificador1 {
    VAZIO,
}

export enum Modificador1Labels {
}

export const iconsForModificador1: {
    [key: string]: string[];
} = {
    VAZIO: [],
}

export enum Modificador2 {
    VAZIO,
}

export enum Modificador2Labels {
}

export const iconsForModificador2: {
    [key: string]: string[];
} = {
    VAZIO: [],
}

export const EntityExtensions = {
    11: {
        name: "Civilian",
        name_br: "Civil",
        types: {
            2: {
                name: "Government Organization",
                name_br: "Organização Governamental",
                subtypes: {
                    extensions: {
                        0: {
                            id: "MINISTERIO_JUSTICA",
                            name: "Ministério da Justiça e Segurança Pública (MJSP)",
                        },
                    },
                },
            },
        },
    },
}

export const iconsForEntityExtensions: {
    [key: string]: string[];
} = {
    "MINISTERIO_JUSTICA": ["BR.Civ.GOV.MINISTERIO_JUSTICA"],
}

export const LandCivilianSidcMapping = {
    Comando,
    iconsForComando,
    EntityExtensions,
    iconsForEntityExtensions,
    ModificadorTransversal,
    iconsForModificadorTransversal,
    Modificador1,
    Modificador1Labels,
    iconsForModificador1,
    Modificador2,
    Modificador2Labels,
    iconsForModificador2
}
