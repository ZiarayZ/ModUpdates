import { DefaultTheme } from "styled-components";
import { dark_theme } from "./theme";

const payday2: DefaultTheme = {
    colors: {
        ...dark_theme.colors,
    },
    fontSize: {
        ...dark_theme.fontSize,
    },
    spacing: {
        ...dark_theme.spacing,
    },
    borderRadius: {
        ...dark_theme.borderRadius,
    },
    shadows: {
        ...dark_theme.shadows,
    },
    transitions: {
        ...dark_theme.transitions,
    },
};

export default payday2;
