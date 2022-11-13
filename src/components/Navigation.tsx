import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";

const StyledNav = styled.nav`
    margin: 0;
    padding: 0;
    position: fixed;
    width: 100%;
    overflow: auto;
`;

const Navigation: React.FC = () => {
    return (
        <StyledNav>
            <Header />
            <Navbar />
        </StyledNav>
    )
}

export default Navigation;