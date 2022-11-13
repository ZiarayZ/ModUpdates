import React from "react";
import { Link } from "react-router-dom";
import { sitemap } from "../sitemaps/sitemap";
import styled from "styled-components";

const StyledNav = styled.nav``;
const StyledLink = styled(Link)``;

const Nav: React.FC = () => {

    //TODO: make dynamic or whatever for introducing new games etc

    return (
        <ul>
            <li><StyledLink to={sitemap.path}>Home</StyledLink></li>
            <li><StyledLink to={sitemap.Payday2.path}>Payday 2</StyledLink></li>
        </ul>
    )
}

const Navigation: React.FC = () => {
    return (
        <StyledNav>
            <Nav />
        </StyledNav>
    )
}

export default Navigation;