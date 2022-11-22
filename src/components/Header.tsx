import styled from "styled-components";
import { Link } from "react-router-dom";
import { sitemap } from "../sitemaps/sitemap";

const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.headerBackground};
    color: ${props => props.theme.colors.headerText};
`;
const HeaderTitle = styled.h1`
    font-size: ${props => props.theme.fontSize.title};
    margin: 0;
    font-weight: 500;
`;
const HeaderTitleLink = styled(Link)`
    color: inherit;
    font: inherit;
    text-decoration: none;
`;

function Header(): JSX.Element {
    return (
        <StyledHeader>
            <HeaderTitle>
                <HeaderTitleLink to={sitemap.path}>
                    Mod Updates
                </HeaderTitleLink>
            </HeaderTitle>
        </StyledHeader>
    )
}

export default Header;