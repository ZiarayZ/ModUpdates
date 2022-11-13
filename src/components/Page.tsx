import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const StyledPage = styled.div`
    background-color: ${props => props.theme.colors.pageBackground};
    color: ${props => props.theme.colors.pageText};
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.m};
    height: 100%;
    overflow: auto;
`;
const PageContent = styled.div`
    flex: 1;
    padding: ${props => props.theme.spacing.l};
    margin-top: 81px;
`;

const Page: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <StyledPage>
            <Navigation />
            <PageContent>
                {props.children}
            </PageContent>
        </StyledPage>
    )
}

export default Page;