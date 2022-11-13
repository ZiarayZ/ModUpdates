import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const StyledPage = styled.div`

`;
const PageContent = styled.div`

`;

interface PageProps { }

const Page: React.FC<React.PropsWithChildren<PageProps>> = (props) => {
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