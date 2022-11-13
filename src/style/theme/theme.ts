import { DefaultTheme } from "styled-components";

export const light_theme: DefaultTheme = {
    colors: {},
    fontSize: {},
    spacing: {},
    borders: {},
    shadows: {},
    transitions: {},
}
export const dark_theme: DefaultTheme = {
    ...light_theme,
    colors: {
        ...light_theme.colors,
    }
}