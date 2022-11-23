import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const linkStyles = css`
    color: ${(props) => props.theme.colors.linkText};
    display: inline-block;
    text-decoration: none;

    &:hover {
        color: ${(props) => props.theme.colors.linkTextHover};
        text-decoration: underline;
    }
    &:active {
        color: ${(props) => props.theme.colors.linkTextActive};
    }
    &:visited {
        color: ${(props) => props.theme.colors.linkTextVisited};
    }
`;

const StyledLink = styled(Link)`
    ${linkStyles}
`;

export default StyledLink;
