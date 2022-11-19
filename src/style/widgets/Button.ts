import styled from "styled-components";

export const Button = styled.button`
    --button-background: ${props => props.theme.colors.buttonBackground};
    --button-background-hover: ${props => props.theme.colors.buttonBackgroundHover};
    --button-background-active: ${props => props.theme.colors.buttonBackgroundActive};
    --button-text: ${props => props.theme.colors.buttonText};


    align-items: center;
    background-image: var(--button-background);
    border: none;
    border-radius: ${props => props.theme.borderRadius.s};
    box-shadow: ${props => props.theme.shadows.s};
    color: var(--button-text);
    font-size: ${props => props.theme.fontSize.body};
    gap: ${props => props.theme.spacing.m};
    padding:
        ${props => props.theme.spacing.s}
        ${props => props.theme.spacing.l};
    transition: background-color ${props => props.theme.transitions.short};
    justify-content: center;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
    }
    &:active {
        background-image: var(--button-background-active);
    }
    &:hover {
        background-image: var(--button-background-hover);
    }
`;