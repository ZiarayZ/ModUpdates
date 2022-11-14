import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";

const StyledNav = styled.nav`
    margin: 0;
    padding: 0;
    width: 100%;
    position: sticky;
    top: 0;
    overflow: auto;
`;
const StyledHeader = styled(Header)`
    display: inline;
`;
const StyledNavbar = styled(Navbar)`
    display: inline;
`;

const Navigation: React.FC = () => {
    return (
        <StyledNav>
            <StyledHeader />
            <Navbar />
        </StyledNav>
    )
}

export default Navigation;