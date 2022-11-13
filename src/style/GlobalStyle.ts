import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --system-font-sans-serif:
            -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
            helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial,
            sans-serif;
        --system-font-serif:
            Iowan Old Style, Apple Garamond, Baskerville, Times New Roman,
            Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji,
            Segoe UI Emoji, Segoe UI Symbol;
        --system-font-mono:
            Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

        font-family: var(--system-font-sans-serif);
        font-size: ${props => props.theme.fontSize.body};
    }

    html, body, #application {
        height: 100%;
    }
    body {
        margin: 0;
    }

    * {
        box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            color-scheme: dark;
        }
    }

    h1 { font-size: ${props => props.theme.fontSize.header1}; }
    h2 { font-size: ${props => props.theme.fontSize.header2}; }
    h3 { font-size: ${props => props.theme.fontSize.header3}; }
    h4 { font-size: ${props => props.theme.fontSize.header4}; }
    h5 { font-size: ${props => props.theme.fontSize.header5}; }
    h6 { font-size: ${props => props.theme.fontSize.header6}; }

    hr {
        border: none;
        border-top: 1px solid ${props => props.theme.colors.border};
        height: 1px;
        width: 100%;
    }

    table {
        font-size: inherit;
    }
`;

export default GlobalStyle;