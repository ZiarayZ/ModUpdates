import { DefaultTheme } from "styled-components";

export const light_theme: DefaultTheme = {
    colors: {
        pageBackground: "rgb(228, 215, 199)",
        pageText: "black",

        headerBackground: "rgb(232, 229, 222)",
        headerText: "rgb(71, 73, 75)",

        navBackground: "rgb(232, 229, 222)",
        navBackgroundHover: "rgb(232, 229, 222)",
        navBackgroundActive: "rgb(232, 229, 222)",
        navText: "rgb(71, 73, 75)",
        navTextHover: "black",
        navTextActive: "black",

        buttonBackground: "linear-gradient(90deg, #F94000 0%, #D28C00 100%)",
        buttonBackgroundHover: "",
        buttonBackgroundActive: "",
        buttonText: "black",

        linkText: "rgb(153, 63, 11)",
        linkTextHover: "black",
        linkTextActive: "",
        linkTextVisited: "",

        border: "none",
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

        pageBackground: "rgb(27, 40, 56)",
        pageText: "white",

        headerBackground: "rgb(23, 26, 33)",
        headerText: "rgb(184, 182, 180)",

        navBackground: "rgb(23, 26, 33)",
        navBackgroundHover: "rgb(23, 26, 33)",
        navBackgroundActive: "rgb(23, 26, 33)",
        navText: "rgb(184, 182, 180)",
        navTextHover: "white",
        navTextActive: "white",

        buttonBackground: "linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)",
        buttonBackgroundHover: "",
        buttonBackgroundActive: "",
        buttonText: "white",

        linkText: "rgb(102, 192, 244)",
        linkTextHover: "white",
        linkTextActive: "",
        linkTextVisited: "",
    },
    shadows: {
        s: "0 2px 5px 0 rgba(255, 255, 255, 0.15)",
        m: "0 2px 5px 0 rgba(255, 255, 255, 0.25)",
        l: "0 2px 15px 0 rgba(255, 255, 255, 0.25)",
    }
}