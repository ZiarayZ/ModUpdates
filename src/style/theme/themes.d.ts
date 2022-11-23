import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            pageBackground: string;
            pageText: string;

            headerBackground: string;
            headerText: string;

            navBackground: string;
            navBackgroundHover: string;
            navBackgroundActive: string;
            navText: string;
            navTextHover: string;
            navTextActive: string;

            buttonBackground: string;
            buttonBackgroundHover: string;
            buttonBackgroundActive: string;
            buttonText: string;

            linkText: string;
            linkTextHover: string;
            linkTextActive: string;
            linkTextVisited: string;

            border: string;
        };
        fontSize: {
            body: string;
            label: string;
            title: string;
            header1: string;
            header2: string;
            header3: string;
            header4: string;
            header5: string;
            header6: string;
        };
        spacing: {
            xxs: string;
            xs: string;
            s: string;
            m: string;
            l: string;
            xl: string;
            xxl: string;
        };
        borderRadius: {
            xs: string;
            s: string;
            m: string;
        };
        shadows: {
            s: string;
            m: string;
            l: string;
        };
        transitions: {
            short: string;
        };
    }
}
