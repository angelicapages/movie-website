import styled from 'styled-components'

export const CarruselSection = styled.section`
display: flex;
flex-direction: row;
margin: 0px;

`;

export const CarruselImg = styled.section`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
background:  url(${(props)=> props.url});
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
`