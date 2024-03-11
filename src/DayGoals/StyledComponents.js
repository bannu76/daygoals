import styled from "styled-components"

export const MainContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-item:center;
    background-color:#45475a;
    min-height:100vh; 
    font-family:Roboto;
    padding:8px;
`
export const Heading=styled.h1`
    color:#ffffff;
`
export const Input=styled.input`
    color:#45475a;
    border-style:none;
    border-radius:4px;
    height:30px;
    width:98%;
    padding:6px;
    outline:none;
    font-size:100%;

`
export const TodoButton=styled.button  `
    background-color:#6273a4;
    border-radius:4px;
    color:#ffffff;
    border-style:none;
    width:110px;
    height:36px; 
    margin-top:8px;  

`
export const TodosULContainer=styled.ul`
    display:flex;
    list-style_type:none;
    padding:0px;
    flex-direction:column;
    align-items:center;
    padding:8px;
    overflow-y:auto;
    @media screen and (min-width:576px){
     width:70%;   
    }
    max-height:60vh;

`