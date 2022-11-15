import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { sitemap } from "--root/sitemaps/sitemap";

const Nav = styled.ul`
    margin: inherit;
    padding: inherit;
    list-style-type: none;
`;
const Node = styled.li`
    float: left;
`;
const FinalNode = styled.li`
    float: right;
`;
const StyledLink = styled(NavLink)`
    display: block;
    padding: ${props => props.theme.spacing.l};
    text-decoration: none;
    text-align: center;
    height: 100%;
    color: ${props => props.theme.colors.navText};

    &:hover {
        background-color: ${props => props.theme.colors.navBackgroundHover};
        color: ${props => props.theme.colors.navTextHover};
    }
    &:active {
        background-color: ${props => props.theme.colors.navBackgroundActive};
        color: ${props => props.theme.colors.navTextActive}
    }
`;

const Navbar: React.FC = () => {

    //TODO: make dynamic or whatever for introducing new games etc

    return (
        <Nav>
            <Node><StyledLink to={sitemap.path}>Home</StyledLink></Node>
            <Node><StyledLink to={sitemap.Payday2.path}>Payday 2</StyledLink></Node>
            <FinalNode><StyledLink to={sitemap.About.path}>About</StyledLink></FinalNode>
        </Nav>
    )
}

export default Navbar;