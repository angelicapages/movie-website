import styled from 'styled-components'
import theme from './Theme';

export const CarruselSection = styled.section`
display: flex;
margin: 0px;
height: 70vh;
`;

export const CarruselImg = styled.section`
${'' /* seria lo mismo decir: */}
${'' /* display: ${(props)=> props.estado ? 'block' : 'none'}; */}
display: ${(props)=> props.estado=== true? 'block' : 'none'};
background:  url(${(props)=> props.url});
position: absolute;
z-index: 1;
width: 100%;
height: 70%;
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
