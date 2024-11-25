import styled from "styled-components"

export const Input = styled.input`
    display: flex;
    width: 175px;
    flex-direction: column;
    margin: 20px 0px 20px;
    padding: 20px 200px 10px 10px;
    background-color: #360D15;
    border-radius: 10px;
    border: 0.5px solid white;
    font-size: clamp(10px, 1em + 4vw, 13px);
    font-family: "Nunito", sans-serif;
    opacity: 70%;
    color: white;
`
export const ButtonSubmit = styled.button`
    background-color: #370404;
    opacity: 70%;
    height: 35px;
    width: 15%;
    color: white;
    border: transparent;
    border-radius: 10px;
    font-weight: bold;
`
export const ErroText = styled.p`
    font-size: clamp(10px, 1em + 4vw, 13px);
    font-family: "Nunito", sans-serif;
    opacity: 40%;
    color: coral;
    font-weight: bold;
`