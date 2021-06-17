import styled from 'styled-components'
import theme from './Theme';

export const Titulo = styled.h1`
display: flex;
color: ${theme.colors.text};
flex-wrap: wrap;
text-align: ${(props)=> props.align};
font-size: x-large;
margin: 0px;
padding: 20px;
width: ${(props)=> props.width};
`;

export const TituloPelicula = styled.h2`
display: flex;
color: ${theme.colors.text};
flex-wrap: wrap;
text-align: ${(props)=> props.align};
font-size: large;
margin: 0px;
padding: 20px;
width: ${(props)=> props.width};
`;

export const Texto = styled.p`
display: flex;
color: ${theme.colors.text};
flex-wrap: wrap;
text-align: ${(props)=> props.align};
font-size: medium;
width: ${(props)=> props.width};
margin: 0px;
padding: 20px;
`;
