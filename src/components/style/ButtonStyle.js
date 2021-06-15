import styled from 'styled-components'


export const Button = styled.button`
width: 200px;
height: 50px;
border-style: none;
cursor: pointer;
background-color: ${(props)=> props.backgroundColor};
color: ${(props)=> props.color};
text-align: center;
`;