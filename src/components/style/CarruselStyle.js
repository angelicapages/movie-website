import styled from 'styled-components'
import theme from './Theme';
export const CarruselSection = styled.section`
display: flex;
flex-direction: row;
margin: 0px;

`;

export const CarruselImg = styled.section`
background:  url(${(props)=> props.url});
z-index: 1;
width: 200vh;
height: 70vh;
`;



export const ContenedorDeFlecha = styled.div`
width: 50px;
height: 50px;
background-color: #ced4da;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
:hover{
    background-color: ${theme.colors.primary};
    cursor: pointer;
}
`;