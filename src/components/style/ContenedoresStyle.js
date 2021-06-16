import styled from 'styled-components'

export const ContenedorGeneral = styled.div`
    margin: ${props => props.margin};
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
`;

export const ContenedorRow = styled.div`
    margin: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ContenedorCentrado = styled.div`
    margin: 0px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContenedorDeTexto = styled.div`
z-index: 3;
`;