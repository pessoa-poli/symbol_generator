export enum Comando {
    VAZIO,
    COMANDO,
}

export const iconsForComando: {
    [key: string]: string[];
} = {
    VAZIO: [],
    COMANDO: ["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"],
}

export enum ModificadorTransversal {
    VAZIO,
    BLD,
    MTZ,
    MEC,
    DEFESA_AEREA,
}

export const iconsForModificadorTransversal: {
    [key: string]: string[];
} = {
    VAZIO: [],
    BLD: ["GR.IC.ARMOUR"],
    MTZ: ["GR.IC.FF.MOTORIZED"],
    MEC: ["GR.IC.ARMOUR", "GR.M2.WHEELED"],
    DEFESA_AEREA: ["GR.IC.FF.AIR DEFENCE"],
}

export enum Modificador1 {
    VAZIO,
    INFAER,
    FN,
    ESCOLA,
    GUARDA,
    GE,
    EMPREGO_GERAL,
    RECONHECIMENTO_ATAQUE,
    SUP_AAAE,
    SUP_AVIACAO,
    SUP_ARMAMENTO,
    TRANSPORTE,
    CONJUNTO,
    RECONHECIMENTO_VIGILANCIA,
    RECONHECIMENTO,
    SUP_MUNICAO,
    RECUADO,
}

export enum Modificador1Labels {
    INFAER = "Força Aérea (utilizado somente quando houver necessidade de distinção da Força e esta não for clara pela simbologia)",
    FN = "Fuzileiros Navais (utilizado somente quando houver necessidade de distinção da Força e esta não for clara pela simbologia)",
    ESCOLA = "Escola",
    GUARDA = "Guarda",
    GE = "Guerra Eletrônica",
    EMPREGO_GERAL = "Emprego Geral",
    RECONHECIMENTO_ATAQUE = "Reconhecimento e Ataque",
    SUP_AAAE = "Suprimento de Artilharia Antiaérea",
    SUP_AVIACAO = "Apoio à Aviação",
    SUP_ARMAMENTO = "Suprimento de Armamento",
    TRANSPORTE = "Transporte",
    CONJUNTO = "Conjunto",
    RECONHECIMENTO_VIGILANCIA = "Reconhecimento e Vigilância",
    RECONHECIMENTO = "Reconhecimento",
    SUP_MUNICAO = "Suprimento de Munição",
    RECUADO = "Recuado",
}

export const iconsForModificador1: {
    [key: string]: string[];
} = {
    VAZIO: [],
    INFAER: ["BR.MD.FAB.M1.Inf Aer"],
    FN: ["BR.MD.MB.M1.Fuz Nav"],
    ESCOLA: ["BR.MD.Ter.Ud.M1.Escola"],
    GUARDA: ["BR.MD.Ter.Ud.M1.Guarda"],
    GE: ["BR.MD.Ter.Ud.M1.GE"],
    EMPREGO_GERAL: ["BR.MD.Ter.Ud.M1.Emprego Geral"],
    RECONHECIMENTO_ATAQUE: ["BR.MD.Ter.Ud.M1.Reconhecimento Ataque"],
    SUP_AAAE: ["BR.MD.Ter.Ud.M1.Suprimento Anti Aérea"],
    SUP_AVIACAO: ["GR.M1.AVIATION"],
    SUP_ARMAMENTO: ["BR.MD.Ter.Ud.M1.SUP_ARMAMENTO"],
    TRANSPORTE: ["BR.MD.Ter.Ud.M1.TRANSPORTE"],
    CONJUNTO: ["BR.MD.Ter.Ud.M1.Conjunto"],
    RECONHECIMENTO_VIGILANCIA:  ["BR.MD.Ter.Ud.M1.Reconhecimento Vigilancia"],
    RECONHECIMENTO: ["BR.MD.Ter.Ud.M1.Reconhecimento Rec"],
    SUP_MUNICAO: ["BR.MD.Ter.Ud.M1.SUP_MUNICAO"],
    RECUADO: ["BR.MD.Ter.Ud.M1.Recuado"],
}

export enum Modificador2 {
    VAZIO,
    INFAER,
    FN,
    SELVA,
    ANFIBIO,
    RECONHECIMENTO,
    POLICIA_MILITAR,
    POLICIA_CIVIL,
    POLICIA_FEDERAL,
    POLICIA_RODOVIARIA_FEDERAL,
    FORCA_NACIONAL,
    GUARDA_MUNICIPAL,
    CARROS_DE_COMBATE,
}

export enum Modificador2Labels {
    INFAER = "Força Aérea (utilizado somente quando houver necessidade de distinção da Força e esta não for clara pela simbologia)",
    FN = "Fuzileiros Navais (utilizado somente quando houver necessidade de distinção da Força e esta não for clara pela simbologia)",
    SELVA = "Selva",
    ANFIBIO = "Anfíbio",
    RECONHECIMENTO = "Reconhecimento",
    POLICIA_MILITAR = "Polícia Militar",
    POLICIA_CIVIL = "Polícia Civil",
    POLICIA_FEDERAL = "Polícia Federal",
    POLICIA_RODOVIARIA_FEDERAL = "Polícia Rodoviária Federal",
    FORCA_NACIONAL = "Força Nacional de Segurança Pública",
    GUARDA_MUNICIPAL = "Guarda Municipal",
    CARROS_DE_COMBATE = "Carros de Combate"
}

export const iconsForModificador2: {
    [key: string]: string[];
} = {
    VAZIO: [],
    INFAER: ["BR.MD.FAB.M2.Inf Aer"],
    FN: ["BR.MD.MB.M2.Fuz Nav"],
    SELVA: ["BR.MD.Ter.Ud.M2.Selva"],
    ANFIBIO: ["BR.MD.Ter.Ud.M2.Anfibio"],
    RECONHECIMENTO: ["BR.MD.Ter.Ud.M2.Rec"],
    POLICIA_MILITAR: ["BR.MD.Ter.Ud.M2.Policia_Militar"],
    POLICIA_CIVIL: ["BR.MD.Ter.Ud.M2.Policia_Civil"],
    POLICIA_FEDERAL: ["BR.MD.Ter.Ud.M2.Policia_Federal"],
    POLICIA_RODOVIARIA_FEDERAL: ["BR.MD.Ter.Ud.M2.Policia_Rodoviaria_Federal"],
    FORCA_NACIONAL: ["BR.MD.Ter.Ud.M2.Policia_Forca_Nacional"],
    GUARDA_MUNICIPAL: ["BR.MD.Ter.Ud.M2.Policia_Guarda_Municipal"],
    CARROS_DE_COMBATE: ["BR.MD.Ter.Ud.M2.Carros_de_combate"],
}

export const EntityExtensions = {
    12: {
        name: "Movement and Manoeuvre",
        name_br: "Movimento e Manobra",
        types: {
            18: {
                name: "Special Operations Forces (SOF)",
                name_br: "Operaçoes Especiais",
                subtypes: {
                    extensions: {
                        0: {
                            id: "FE",
                            name: "Forças Especiais"
                        },
                        1: {
                            id: "PREC_PQDT",
                            name: "Precursores Paraquedistas"
                        }
                    }
                }
            }
        }
    },
    14: {
        name: "Protection",
        name_br: "Proteção",
        types: {
            12: {
                name: "Military Police",
                name_br: "Polícia",
                subtypes: {
                    extensions: {
                        0: {
                            id: "Pol_PE",
                            name: "Polícia do Exército"
                        },
                        1: {
                            id: "Pol_PA",
                            name: "Polícia da Aeronáutica"
                        },
                        2: {
                            id: "Pol_SP",
                            name: "Serviço de Polícia de Fuzileiros Navais"
                        }
                    }
                }
            }
        }
    },
    15: {
        name: "Intelligence",
        types: {
            extensions: {
                0: {
                    id: "CIBER",
                    name: "Guerra Cibernética"
                },
            }
        }
    },
    16: {
        name: "Sustainment",
        types: {
            11: {
                name: "Maintenance",
                subtypes: {
                    extensions: {
                        0: {
                            id: "MNT_SUPRIMENTO",
                            name: "Manutenção e Suprimento",
                        },
                    }
                }
            },
            34: {
                name: "Supply",
                subtypes: {
                    extensions: {
                        0: {
                            id: "SUP_CLASSE_IV",
                            name: "Suprimento Classe IV",
                        },
                        1: {
                            id: "SUP_CLASSE_VI",
                            name: "Suprimento Classe VI",
                        },
                        2: {
                            id: "SUP_CLASSE_VII",
                            name: "Suprimento Classe VII",
                        },
                        3: {
                            id: "SUP_CLASSE_X",
                            name: "Suprimento Classe X",
                        },
                        4: {
                            id: "SUP_OUTRAS_CLASSES",
                            name: "Suprimento de Outras Classes",
                        },
                        5: {
                            id: "SUP_MATERIAL_BELICO",
                            name: "Suprimento de Material Bélico",
                        },
                        6: {
                            id: "SUP_IAB",
                            name: "Inspeção e Análise Bromatológica",
                        },
                        7: {
                            id: "SUP_IAQ",
                            name: "Inspeção e Análise Química",
                        },
                        8: {
                            id: "SUP_CLASSE_I_E_AGUA",
                            name: "Suprimento Classe I e Água",
                        },
                        9: {
                            id: "SUP_CLASSE_I_E_OUTRAS",
                            name: "Suprimento Classe I e Outras Classes",
                        },
                        10: {
                            id: "SUP_CLASSE_II_E_OUTRAS",
                            name: "Suprimento Classe II e Outras Classes",
                        },
                        11: {
                            id: "SUP_AGUA",
                            name: "Água",
                        },
                    }
                }
            },
        }
    },

    20: {
        name: "Law Enforcement",
        types: {
            extensions: {
                0: {
                    id: "BOMBEIROS",
                    name: "Corpo de Bombeiros"
                },
            },
        }

    }
}


export const iconsForEntityExtensions: {
    [key: string]: string[];
} = {
    "CIBER": ["BR.MD.Ter.Ud.IC.CIBER"],
    "PREC_PQDT": ["BR.MD.Ter.Ud.IC.PREC_PQDT"],
    "FE": ["BR.MD.Ter.Ud.IC.FE"],
    "SUP_CLASSE_IV": ["BR.MD.Ter.Ud.IC.SUP_CLASSE_IV"],
    "SUP_CLASSE_VI": ["GR.IC.ENGINEER"],
    "SUP_CLASSE_VII": ["BR.MD.Ter.Ud.IC.SUP_CLASSE_VII"],
    "SUP_CLASSE_X": ["BR.MD.Ter.Ud.IC.SUP_CLASSE_X"],
    "SUP_OUTRAS_CLASSES": ["BR.MD.Ter.Ud.IC.SUP_OUTRAS_CLASSES"],
    "SUP_MATERIAL_BELICO": ["BR.MD.Ter.Ud.IC.SUP_MATERIAL_BELICO"],
    "SUP_ENGENHARIA": ["BR.MD.Ter.Ud.IC.SUP_ENGENHARIA"],
    "SUP_IAB": ["BR.MD.Ter.Ud.IC.SUP_IAB"],
    "SUP_IAQ": ["BR.MD.Ter.Ud.IC.SUP_IAQ"],
    "SUP_CLASSE_I_E_AGUA": ["BR.MD.Ter.Ud.IC.SUP_CLASSE_I_E_AGUA"],
    "SUP_CLASSE_I_E_OUTRAS": ["BR.MD.Ter.Ud.IC.SUP_CLASSE_I_E_OUTRAS"],
    "SUP_CLASSE_II_E_OUTRAS": ["BR.MD.Ter.Ud.IC.SUP_CLASSE_II_E_OUTRAS"],
    "SUP_AGUA": ["GR.IC.WATER"],
    "MNT_SUPRIMENTO": ["GR.IC.FF.SUPPLY"],
    "Pol_PE": ["BR.MD.Ter.Ud.IC.POLICIA FS.PE"],
    "Pol_PA": ["BR.MD.Ter.Ud.IC.POLICIA FS.PA"],
    "Pol_SP": ["BR.MD.Ter.Ud.IC.POLICIA FS.SP"],
    "BOMBEIROS": ["BR.MD.Ter.Ud.IC.LAW_ENFORCEMENT BOMBEIROS"],
}
export const LandUnitSidcMapping = {
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
