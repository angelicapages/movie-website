import styled from 'styled-components'
import theme from './Theme'

export const Nav = styled.nav`
    display: flex ;
    flex-direction: row;
    width: 100%;
    background-color: ${theme.colors.primary};
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    flex-direction: row;
`
export const NavList = styled.li`
    display: flex;
    padding: 20px;
    list-style: none;

`