import { DefaultTheme } from "styled-components";
import { darkTheme } from "./theme";

const payday2: DefaultTheme = {
    colors: {
        ...darkTheme.colors,
    },
    fontSize: {
        ...darkTheme.fontSize,
    },
    spacing: {
        ...darkTheme.spacing,
    },
    borderRadius: {
        ...darkTheme.borderRadius,
    },
    shadows: {
        ...darkTheme.shadows,
    },
    transitions: {
        ...darkTheme.transitions,
    },
};

export default payday2;
