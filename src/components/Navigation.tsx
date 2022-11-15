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

    background-color: ${props => props.theme.colors.navBackground};
`;
const Banner = styled.div`
    display: flex;
`;
const HeaderDiv = styled.div`
    margin: auto;
`;
const Nav = styled.div`
    flex: 1;
`;

const Navigation: React.FC = () => {
    return (
        <StyledNav>
            <Banner>
                <HeaderDiv>
                    <Header />
                </HeaderDiv>
                <Nav>
                    <Navbar />
                </Nav>
            </Banner>
        </StyledNav>
    )
}

export default Navigation;