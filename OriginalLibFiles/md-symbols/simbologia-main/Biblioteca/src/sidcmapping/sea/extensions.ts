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
    FLUVIAL,
    ESQUADRA,
    GC,
    PELOTAO,
    COMANDO,
    MULTIPROPOSITO,
    BALIZADOR,
    FAROLEIRO,
    ANFIBIO,
}

export enum Modificador1Labels {
    FLUVIAL = "Fluvial",
    ESQUADRA = "Capacidade para tropa valor Esquadra (pequena fração)",
    GC = "Capacidade para tropa valor Grupo de Combate",
    PELOTAO = "Capacidade para tropa valor Pelotão",
    COMANDO = "Posto de Comando",
    MULTIPROPOSITO = "Multipropósito",
    BALIZADOR = "Balizador",
    FAROLEIRO = "Faroleiro",
    ANFIBIO = "Anfíbio",
}

export const iconsForModificador1: {
    [key: string]: string[];
} = {
    VAZIO: [],
    FLUVIAL: ["BR.MD.Mar.Emb.M1.Fluvial"],
    ESQUADRA: ["GR.M1.SQUAD"],
    GC: ["GR.M1.SECTION"],
    PELOTAO: ["GR.M1.PLATOON"],
    COMANDO: ["BR.MD.Mar.Emb.M1.Comando"],
    MULTIPROPOSITO: ["BR.MD.Mar.Emb.M1.Multiproposito"],
    BALIZADOR: ["BR.MD.Mar.Emb.M1.Balizador"],
    FAROLEIRO: ["BR.MD.Mar.Emb.M1.Faroleiro"],
    ANFIBIO: ["BR.MD.Mar.Emb.M1.Anfibio"],
}

export enum Modificador2 {
    VAZIO,
    FLUVIAL,
    OCEANICO,
}

export enum Modificador2Labels {
    FLUVIAL = "Fluvial",
    OCEANICO = "Oceânico",
}

export const iconsForModificador2: {
    [key: string]: string[];
} = {
    VAZIO: [],
    FLUVIAL: ["BR.MD.Mar.Emb.M2.Fluvial"],
    OCEANICO: ["BR.MD.Mar.Emb.M2.Oceanico"],
}

export const EntityExtensions = {
    12: {
        name: "Military Combatant",
        name_br: "Navio de Guerra",
        types: {
            3: {
                name: "Amphibious Warfare Ship",
                name_br: "Navio de Guerra Anfíbio (não especificado)",
                subtypes: {
                    extensions: {
                        0: {
                            id: "TRANSPORTE",
                            name: "Navio de Transporte, Navio de Transporte de Tropa"
                        },
                    }
                }
            },
            5: {
                name: "Patrol Boat General",
                name_br: "Navio Patrulha",
                subtypes: {
                    extensions: {
                        0: {
                            id: "AVISO_DE_PATRULHA",
                            name: "Aviso de Patrulha"
                        },
                    }
                }
            }
        }
    },
    13: {
        name: "Military Non Combatant",
        name_br: "Militar Não Combatente",
        types: {
            1: {
                name: "Auxiliary Ship General",
                name_br: "Navio auxiliar (genérico)",
                subtypes: {
                    extensions: {
                        0: {
                            id: "NAVIO_POLAR",
                            name: "Navio Polar"
                        },
                        1: {
                            id: "NAVIO_VELEIRO",
                            name: "Navio Veleiro"
                        },
                        2: {
                            id: "VELEIRO_OCEANICO",
                            name: "Veleiro Oceânico"
                        }
                    }
                }
            },
            2: {
                name: "Service Craft/Yard",
                name_br: "Embarcação de apoio portuário (genérico)",
                subtypes: {
                    extensions: {
                        0: {
                            id: "EMBARCACAO_SAUDE",
                            name: "Embarcação Saúde"
                        },
                        1: {
                            id: "EMBARCACAO_MANOBRA",
                            name: "Embarcação Manobra"
                        },
                        2: {
                            id: "EMBARCACAO_LOG_MNT",
                            name: "Embarcação Logística de Manutenção"
                        }
                    }
                }
            }
        }
    },
}


export const iconsForEntityExtensions: {
    [key: string]: string[];
} = {
    "TRANSPORTE": ["BR.MD.Mar.Nav.IC.Transporte"],
    "AVISO_DE_PATRULHA": ["BR.MD.Mar.Emb.IC.AvisoPatrulha"],
    "EMBARCACAO_SAUDE": ["BR.MD.Mar.Emb.IC.Saude"],
    "EMBARCACAO_MANOBRA": ["BR.MD.Mar.Emb.IC.Manobra"],
    "EMBARCACAO_LOG_MNT": ["BR.MD.Mar.Emb.IC.LogMnt"],
    "NAVIO_POLAR": ["BR.MD.Mar.Nav.IC.Polar"],
    "NAVIO_VELEIRO": ["BR.MD.Mar.Nav.IC.Veleiro"],
    "VELEIRO_OCEANICO": ["BR.MD.Mar.Nav.IC.VeleiroOceanico"],
}
export const SeaSurfaceSidcMapping = {
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
