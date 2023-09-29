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
    13: {
        name: "Operation",
        name_br: "Operação",
        types: {
            extensions: {
                0: {
                    id: "OP_ENGENHARIA",
                    name: "Operação de Engenharia",
                },
                1: {
                    id: "OP_ACAO_INTERNACIONAL",
                    name: "Ação Internacional",
                },
            }
        }
    },
}

export const iconsForEntityExtensions: {
    [key: string]: string[];
} = {
    "OP_ENGENHARIA": ["GR.IC.ENGINEER"],
    "OP_ACAO_INTERNACIONAL": ["BR.MD.Ter.Ud.IC.ACAO_INTERNACIONAL"],
}

export const ActivitiesSidcMapping = {
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
