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
    TRIAGEM,
    CIRURGIA,
    SOCORRO,
    CAMPANHA,
    INST_SUP_ARMAMENTO,
    INST_SUP_MUNICAO,
    CENTRO_NODAL,
    NO_DE_ACESSO,
}

export enum Modificador1Labels {
    TRIAGEM = "Triagem",
    CIRURGIA = "Cirurgia Móvel",
    SOCORRO = "Socorro",
    CAMPANHA = "Campanha",
    INST_SUP_ARMAMENTO = "Suprimento de Armamento",
    INST_SUP_MUNICAO = "Suprimento de Munição",
    CENTRO_NODAL = "Centro Nodal",
    NO_DE_ACESSO = "Nó de Acesso",
}

export const iconsForModificador1: {
    [key: string]: string[];
} = {
    VAZIO: [],
    TRIAGEM: ["BR.MD.Ter.Ud.M1.Posto de Triagem"],
    CIRURGIA: ["BR.MD.Ter.Ud.M1.Posto Cirurgico Movel"],
    SOCORRO: ["BR.MD.Ter.Ud.M1.Posto de Socorro"],
    CAMPANHA: ["BR.MD.Ter.Ud.M1.Hospital de Campanha"],
    INST_SUP_ARMAMENTO: ["BR.MD.Ter.Ud.M1.INST_SUP_ARMAMENTO"],
    INST_SUP_MUNICAO: ["BR.MD.Ter.Ud.M1.INST_SUP_MUNICAO"],
    CENTRO_NODAL: ["BR.MD.Ter.Inst.M1.CENTRO_NODAL"],
    NO_DE_ACESSO: ["BR.MD.Ter.Inst.M1.NO_DE_ACESSO"],
}

export enum Modificador2 {
    VAZIO,
    DISTRIBUICAO,
    TRATAMENTO,
    COLETA,
    REMUNICIAMENTO,
}

export enum Modificador2Labels {
    DISTRIBUICAO = "Distribuição",
    TRATAMENTO = "Tratamento",
    COLETA = "Coleta",
    REMUNICIAMENTO = "Remuniciamento",
}

export const iconsForModificador2: {
    [key: string]: string[];
} = {
    VAZIO: [],
    DISTRIBUICAO: ["BR.MD.Ter.Ud.M2.Distribuição"],
    TRATAMENTO: ["BR.MD.Ter.Ud.M2.Tratamento"],
    COLETA: ["BR.MD.Ter.Ud.M2.Posto de Coleta"],
    REMUNICIAMENTO: ["BR.MD.Ter.Ud.M2.Remuniciamento"],
}

export const EntityExtensions = {
    11: {
        name: "Installation",
        name_br: "Instalação",
        types: {
            12: {
                name: "Materiel",
                name_br: "Material",
                subtypes: {
                    extensions: {
                        0: {
                            id: "SUP_CLASSE_I",
                            name: "Suprimento Classe I",
                        },
                        1: {
                            id: "SUP_CLASSE_II",
                            name: "Suprimento Classe II",
                        },
                        2: {
                            id: "SUP_CLASSE_III",
                            name: "Suprimento Classe III",
                        },
                        3: {
                            id: "SUP_CLASSE_IV",
                            name: "Suprimento Classe IV",
                        },
                        4: {
                            id: "SUP_CLASSE_V",
                            name: "Suprimento Classe V",
                        },
                        5: {
                            id: "SUP_CLASSE_VI",
                            name: "Suprimento Classe VI",
                        },
                        6: {
                            id: "SUP_CLASSE_VII",
                            name: "Suprimento Classe VII",
                        },
                        7: {
                            id: "SUP_CLASSE_VIII",
                            name: "Suprimento Classe VIII",
                        },
                        8: {
                            id: "SUP_CLASSE_IX",
                            name: "Suprimento Classe IX",
                        },
                        9: {
                            id: "SUP_CLASSE_X",
                            name: "Suprimento Classe X",
                        },
                        10: {
                            id: "SUP_AGUA",
                            name: "Água",
                        },
                        11: {
                            id: "SUP_OUTRAS_CLASSES",
                            name: "Suprimento de Outras Classes",
                        },
                    }
                }
            },
            19: {
                name: "Tented Camp",
                name_br: "Acampamento",
                subtypes: {
                    extensions: {
                        0: {
                            id: "MORTOS",
                            name: "Mortos",
                        },
                        1: {
                            id: "PRISIONEIROS",
                            name: "Prisioneiros de Guerra",
                        },
                        2: {
                            id: "SALVADOS",
                            name: "Salvados",
                        },
                        3: {
                            id: "EXTRAVIADOS",
                            name: "Extraviados",
                        },
                        4: {
                            id: "CIVIS",
                            name: "Civis",
                        },
                        5: {
                            id: "RECREACAO",
                            name: "Recreação",
                        },
                        6: {
                            id: "REPOUSO",
                            name: "Repouso",
                        },
                        7: {
                            id: "LAVANDERIA",
                            name: "Lavanderia",
                        },
                        8: {
                            id: "BANHO",
                            name: "Banho",
                        },
                    }
                }
            },
            extensions: {
                0: {
                    id: "CENTRAL",
                    name: "Central",
                    subtypes: {
                        1: {
                            id: "COM_SOC",
                            name: "Comunicação Social",
                        },
                    }
                },
            }
        }
    },
}


export const iconsForEntityExtensions: {
    [key: string]: string[];
} = {
    "SUP_CLASSE_I": ["GR.IC.FF.CLASS I", "GR.IC.FF.SUPPLY"],
    "SUP_CLASSE_II": ["GR.IC.FF.CLASS II", "GR.IC.FF.SUPPLY"],
    "SUP_CLASSE_III": ["GR.IC.FF.CLASS III", "GR.IC.FF.SUPPLY"],
    "SUP_CLASSE_IV": ["BR.MD.Ter.Ud.IC.SUP_CLASSE_IV", "GR.IC.FF.SUPPLY"],
    "SUP_CLASSE_V": ["GR.IC.FF.CLASS V", "GR.IC.FF.SUPPLY"],
    "SUP_CLASSE_VI": ["GR.IC.ENGINEER", "GR.IC.FF.SUPPLY"],
    "SUP_CLASSE_VII": ["BR.MD.Ter.Ud.IC.SUP_CLASSE_VII", "GR.IC.FF.SUPPLY"],
    "SUP_CLASSE_VIII": ["GR.IC.FF.CLASS VIII", "GR.IC.FF.SUPPLY"],
    "SUP_CLASSE_IX": ["GR.IC.FF.CLASS IX", "GR.IC.FF.SUPPLY"],
    "SUP_CLASSE_X": ["BR.MD.Ter.Ud.IC.SUP_CLASSE_X", "GR.IC.FF.SUPPLY"],
    "SUP_AGUA": ["GR.IC.WATER", "GR.IC.FF.SUPPLY"],
    "SUP_OUTRAS_CLASSES": ["BR.MD.Ter.Ud.IC.SUP_OUTRAS_CLASSES", "GR.IC.FF.SUPPLY"],
    "MORTOS": ["BR.MD.Ter.Ud.IC.MORTOS"],
    "PRISIONEIROS": ["BR.MD.Ter.Ud.IC.PRISIONEIROS"],
    "SALVADOS": ["BR.MD.Ter.Ud.IC.SALVADOS"],
    "EXTRAVIADOS": ["BR.MD.Ter.Ud.IC.EXTRAVIADOS"],
    "CIVIS": ["BR.MD.Ter.Ud.IC.CIVIS"],
    "RECREACAO": ["BR.MD.Ter.Ud.IC.RECREACAO"],
    "REPOUSO": ["BR.MD.Ter.Ud.IC.REPOUSO"],
    "LAVANDERIA": ["BR.MD.Ter.Ud.IC.LAVANDERIA"],
    "BANHO": ["BR.MD.Ter.Ud.IC.BANHO"],
    "CENTRAL": [""],
    "COM_SOC": ["GR.IC.PUBLIC AFFAIRS"],


    //TODO desenhos
}
export const LandInstallationsSidcMapping = {
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
