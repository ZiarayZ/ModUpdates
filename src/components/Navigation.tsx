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
const StyledDiv = styled.div`
    display: flex;
`;
const Left = styled.div``;
const Right = styled.div`
    flex: 1;
`;

const Navigation: React.FC = () => {
    return (
        <StyledNav>
            <StyledDiv>
                <Left>
                    <Header />
                </Left>
                <Right>
                    <Navbar />
                </Right>
            </StyledDiv>
        </StyledNav>
    )
}

export default Navigation;