import { makeNewIcons } from "../../iconparts/newicons"
import { Scale , Translate } from "../../milsymbol-types"

export function overrideSIDC_LandInstallation(
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

    iconSIDC["111200"] = []

    iconSIDC["121411"] = [
        iconParts["GR.IC.WATER"],
        iconParts["BR.MD.Ter.Ud.IC.TRATAMENTO"]
    ]

    iconSIDC["112202"] = new Translate(50,50, [new Scale(0.5,iconSIDC["112202"])])
    iconSIDC["111900"] = new Translate(15,12, [new Scale(0.85,iconSIDC["111900"])])


    iconSIDC["111901"] = [
        iconParts["GR.EQ.TENT"],
        iconParts["BR.MD.Ter.Ud.IC.REFUGIADO"]
    ]

    iconSIDC["119900"] = []
    iconSIDC["119901"] = []

    iconSIDC["120305"] = [
        iconParts["BR.MD.Ter.Ud.IC.ARMAZEM"],
        iconParts["BR.MD.Ter.Ud.IC.ARMAZENAMENTO"]
    ]

    iconSIDC["120901"] = [
        iconParts["BR.MD.Ter.Ud.IC.POSTAL"],
        iconParts["BR.MD.Ter.Ud.IC.DISTRIBUICAO"],
    ]
    iconSIDC["120501"] = new Translate(15,15, [new Scale(0.85,iconSIDC["120501"])])

    iconSIDC["120801"] = [
        iconParts["GR.IN.IC.BASE"],
        iconParts["BR.MD.Ter.Ud.IC.RESERVA"]
    ]
}
