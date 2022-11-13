import { DefaultTheme } from "styled-components";

export const light_theme: DefaultTheme = {
    colors: {
        pageBackground: "white",
        pageText: "black",

        buttonBackground: "",
        buttonBackgroundHover: "",
        buttonBackgroundActive: "",
        buttonText: "",

        linkText: "",
        linkTextHover: "",
        linkTextActive: "",
        linkTextVisited: "",
    },
    fontSize: {
        body: "13px",
        label: "11px",
        title: "24px",
        header1: "20px",
        header2: "18px",
        header3: "16px",
        header4: "15px",
        header5: "15px",
        header6: "15px",
    },
    spacing: {
        xxs: "2px",
        xs: "4px",
        s: "6px",
        m: "8px",
        l: "16px",
        xl: "24px",
        xxl: "32px",
    },
    borderRadius: {
        xs: "2px",
        s: "3px",
        m: "5px",
    },
    shadows: {
        s: "0 2px 5px 0 rgba(0, 0, 0, 0.15)",
        m: "0 2px 5px 0 rgba(0, 0, 0, 0.25)",
        l: "0 2px 15px 0 rgba(0, 0, 0, 0.25)",
    },
    transitions: {
        short: "200ms ease",
    },
}
export const dark_theme: DefaultTheme = {
    ...light_theme,
    colors: {
        ...light_theme.colors,
    }
}