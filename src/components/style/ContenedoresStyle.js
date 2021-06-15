import styled from 'styled-components'

export const ContenedorGeneral = styled.div`
    margin: 0px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
`;

export const ContenedorRow = styled.div`
    margin: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const ContenedorCentrado = styled.div`
    margin: 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
`