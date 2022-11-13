import React from "react";
import styled from "styled-components";

import Header from "./Header";

const StyledPage = styled.div`

`;
const PageContent = styled.div`
    
`;

interface PageProps { }

const Page: React.FC<React.PropsWithChildren<PageProps>> = (props) => {
    return (
        <StyledPage>
            <Header />
            <PageContent>
                {props.children}
            </PageContent>
        </StyledPage>
    )
}

export default Page;