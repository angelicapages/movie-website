import styled from 'styled-components'
import theme from './Theme';

export const Button = styled.button`
width: 200px;
height: 50px;
border-style: none;
cursor: pointer;
background-color: ${(props)=> props.backgroundColor};
color: ${(props)=> props.color};
text-align: center;
border-radius: 10%;
font-size: medium;
:hover{
background-color: ${theme.colors.primary};
color: ${theme.colors.text};
}
`;