import { makeNewIcons } from "../../iconparts/newicons"
import {Text} from "../../milsymbol-types";

export function overrideSIDC_Sea(
    iconSIDC,
    iconModifier1,
    iconModifier2,
    iconBbox,
    symbolSet,
    iconParts,
    STD2525
) {
    /////////////////////////////////
    // Ícones centrais
    /////////////////////////////////

    // Extensões de navios anfíbios
    iconSIDC["120399"] = []
    // Extensões de navios patrulha
    iconSIDC["120599"] = []

    // Amphibious
    iconSIDC["120801"] = [
        iconParts["SE.IC.MILITARY SPEEDBOAT"],
        iconParts["BR.MD.MB.Ud.IC.ECSR"]
    ]

    iconSIDC["121001"] = [
        iconParts["SE.IC.NAVY TASK ORGANIZATION UNIT"],
        iconParts["BR.MD.MB.Ud.IC.TaskElement"]
    ]

    iconSIDC["121002"] = [
        iconParts["SE.IC.NAVY TASK ORGANIZATION UNIT"],
        iconParts["BR.MD.MB.Ud.IC.TaskForce"]
    ]

    iconSIDC["121003"] = [
        iconParts["SE.IC.NAVY TASK ORGANIZATION UNIT"],
        iconParts["BR.MD.MB.Ud.IC.TaskGroup"]
    ]

    iconSIDC["121004"] = [
        iconParts["SE.IC.NAVY TASK ORGANIZATION UNIT"],
        iconParts["BR.MD.MB.Ud.IC.TaskUnit"]
    ]

    // Navios auxiliares
    iconSIDC["130199"] = []
    // Embarcações de apoio portuário
    iconSIDC["130299"] = []

    iconSIDC["140101"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.NavioMercanteCargaSeca"]
    ]

    iconSIDC["140102"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.NavioMercantePortaContainer"]
    ]
    iconSIDC["140104"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.NavioMercanteRORO"]
    ]
    iconSIDC["140105"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.NavioMercanteFerryBoat"]
    ]
    iconSIDC["140106"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.NavioMercanteCargaPesada"]
    ]
    iconSIDC["140107"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.AeroBarco"]
    ]
    iconSIDC["140108"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.NavioPortaBarcaça"]
    ]
    iconSIDC["140109"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.NavioTanque"]
    ]
    iconSIDC["140111"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.Empurrador"]
    ]
    iconSIDC["140112"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.Rebocador"]
    ]
    iconSIDC["140114"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.Veleiro"]
    ]
    iconSIDC["140115"] = [
        iconParts["SE.IC.MERCHANT SHIP, GENERAL"],
        iconParts["BR.MD.MB.Ud.IC.BarcaNaoPropulsada"]
    ]
    iconSIDC["140201"] = [
        iconParts["SE.IC.FISHING VESSEL"],
        iconParts["BR.MD.MB.Ud.IC.PescaArtesanal"]
    ]

    iconSIDC["140501"] = [
        iconParts["SE.IC.LEISURE CRAFT, MOTORIZED"],
        iconParts["BR.MD.MB.Ud.IC.RecreacaoECR"]
    ]

    iconSIDC["140502"] = [
        iconParts["SE.IC.LEISURE CRAFT, MOTORIZED"],
        iconParts["BR.MD.MB.Ud.IC.RecreacaoLanchaRapida"]
    ]

    /////////////////////////////////
    // Modificadores do setor 1
    /////////////////////////////////

    /////////////////////////////////
    // Modificadores do setor 2
    /////////////////////////////////

}
