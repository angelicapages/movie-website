import styled from 'styled-components'
import theme from './Theme'

export const Nav = styled.nav`
    display: flex ;
    ${'' /* no es necesario aclarar flex-direction: row */}
    flex-direction: row;
    width: 100%;
    z-index: 3;
    background-color: ${theme.colors.primary};
    position: fixed;
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    ${'' /* no es necesario aclarar flex-direction: row */}
    flex-direction: row;
`
export const NavList = styled.li`
    display: flex;
    padding: 20px;
    list-style: none;

`
