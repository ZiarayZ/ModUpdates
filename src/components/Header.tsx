import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { sitemap } from "../sitemaps/sitemap";
import Navigation from "./Navigation";

const StyledHeader = styled.div`
    background-color: ${props => props.theme.colors.headerBackground};
    color: ${props => props.theme.colors.headerText};
`;
const HeaderTitle = styled.h1`
    font-size: ${props => props.theme.fontSize.title};
    font-weight: 500;
    margin: 0;
`;
const HeaderTitleLink = styled(Link)`
    color: inherit;
    font: inherit;
    text-decoration: none;
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <HeaderTitle>
                <HeaderTitleLink to={sitemap.path}>
                    Mod Updates
                </HeaderTitleLink>
            </HeaderTitle>
            <Navigation />
        </StyledHeader>
    )
}

export default Header;