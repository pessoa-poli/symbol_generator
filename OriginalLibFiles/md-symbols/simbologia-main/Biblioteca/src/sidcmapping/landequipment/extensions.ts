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
    BLD,
}

export const iconsForModificadorTransversal: {
    [key: string]: string[];
} = {
    VAZIO: [],
    BLD: ["GR.IC.ARMOUR"],
}

export enum Modificador1 {
    VAZIO,
    METEOROLOGICO,
    BUSCA,
    VIGILANCIA,
    DIRECAO_DE_TIRO,
    VIGILANCIA_TERRESTRE,
    RADIOLOGICO_E_NUCLEAR,
    IMAGEM,
    RECONHECIMENTO,

}

export enum Modificador1Labels {
    METEOROLOGICO = "Sensor Meteorológico",
    BUSCA = "Radar de Busca",
    VIGILANCIA = "Radar de Vigilância",
    DIRECAO_DE_TIRO = "Direção de Tiro",
    VIGILANCIA_TERRESTRE = "Radar de Vigilância Terreste",
    RADIOLOGICO_E_NUCLEAR = "Sensor Radiológico e Nuclear",
    IMAGEM = "Sensor de Imagem",
    RECONHECIMENTO = "Reconhecimento",
}

export const iconsForModificador1: {
    [key: string]: string[];
} = {
    VAZIO: [],
    METEOROLOGICO: ["BR.MD.Ter.Ud.M1.Metereologico"],
    BUSCA: ["BR.MD.Ter.Ud.M1.Busca"],
    VIGILANCIA: ["BR.MD.Ter.Ud.M1.Vigilancia"],
    DIRECAO_DE_TIRO: ["BR.MD.Ter.Ud.M1.Direcao de Tiro"],
    VIGILANCIA_TERRESTRE: ["BR.MD.Ter.Ud.M1.Vigilancia Terrestre"],
    RADIOLOGICO_E_NUCLEAR: ["BR.MD.Ter.Ud.M1.Radiologico e Nuclear"],
    IMAGEM: ["GR.M1.VIDEO IMAGERY"],
    RECONHECIMENTO: ["BR.MD.Ter.Ud.M1.Reconhecimento"],
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
    22: {
        name: "Sensors",
        name_br: "Sensores",
        types: {
            extensions: {
                0: {
                    id: "GE",
                    name: "Guerra Eletrônica",
                    subtypes: {
                        1: {
                            id: "TELEMETRO",
                            name: "Telêmetro eletrônico",
                        },
                        2: {
                            id: "DF",
                            name: "Radiogoniômetro (DF - Direction Finder)",
                        },
                        3: {
                            id: "INTERCEPTADOR",
                            name: "Interceptador",
                        },
                        4: {
                            id: "INTERFERIDOR",
                            name: "Interferidor (jammer)",
                        },
                    }
                },
            }
        }
    },
    20: {
        name: "Other Equipment",
        name_br: "Outros Equipamentos",
        types: {
            extensions: {
                0: {
                    id: "COMUNICACOES",
                    name: "Comunicações",
                    subtypes: {
                        1: {
                            id: "RADIO",
                            name: "Rádio",
                        },
                        2: {
                            id: "RADIODIFUSAO",
                            name: "Radiodifusão",
                        },
                        3: {
                            id: "RETRANSMISSOR",
                            name: "Retransmissor",
                        },
                        4: {
                            id: "TELETIPO",
                            name: "Teletipo",
                        },
                        5: {
                            id: "MULTICANAL",
                            name: "Multicanal",
                        },
                        6: {
                            id: "TERMINAL_SATELITAL",
                            name: "Terminal Satelital",
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
    "GE": ["GR.IC.ELECTRONIC WARFARE"],
    "TELEMETRO": ["GR.IC.ELECTRONIC RANGING"],
    "DF": ["GR.IC.ELECTRONIC WARFARE", "BR.MD.Ter.Ud.IC.DF"],
    "INTERCEPTADOR": ["GR.IC.ELECTRONIC WARFARE", "BR.MD.Ter.Ud.IC.INTERCEPTADOR"],
    "INTERFERIDOR": ["GR.IC.ELECTRONIC WARFARE", "BR.MD.Ter.Ud.IC.INTERFERIDOR"],
    "COMUNICACOES": ["GR.IC.FF.SIGNAL DISMOUNTED"],
    "RADIO": ["GR.IC.RADIO"],
    "RADIODIFUSAO": ["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA", "GR.IC.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)"],
    "RETRANSMISSOR": ["GR.IC.RADIO RELAY"],
    "TELETIPO": ["BR.MD.Ter.Ud.IC.Teletype"],
    "MULTICANAL": ["BR.MD.Ter.Ud.IC.Multicanal"],
    "TERMINAL_SATELITAL": ["GR.I.FF.SATELLITE"],
}

export const LandEquipmentSidcMapping = {
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
