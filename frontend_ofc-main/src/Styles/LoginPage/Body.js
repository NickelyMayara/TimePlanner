import styled from "styled-components"

export const SectionBody = styled.section`
        display: flex;
        justify-content: space-between;
`

export const SectionTextos = styled.section`
        padding: 5% 0 0 60px;
        line-height: 0.5em;
`

export const Linha1 = styled.h1`
    display: block;
    align-items: center;
    color: #D6C3C3;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: clamp(1em, 1em + 4vw, 3em);
    margin-bottom: 0px;
`;

export const SpanTime = styled.span`
    color: white;
    font-family: "Julius Sans One", sans-serif;
`;

export const SpanPlanner = styled.span`
    color: pink;
    font-family: "Julius Sans One", sans-serif;
`;

export const Linha2 = styled.h1`
    padding-top: -30px;
    display: block;
    align-items: center;
    font-family: "Julius Sans One", sans-serif;
    color: #D6C3C3;
    font-size: clamp(1em, 1em + 4vw, 3em);
`;

export const SpanInicie = styled.span`
    color: #43101A;
    font-family: "Oswald", sans-serif;
    font-size: clamp(15px, 1em + 0.7vw, 4em);;
`;

export const SpanODia = styled.span`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
`;

export const SpanOrganizado = styled.span`
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-optical-sizing: auto;
    font-style: normal;
`;

export const SectionForms = styled.section`
`
export const Imagem = styled.img`
    width: auto;
    height: 28vw;
    position: absolute; 
    bottom: 5%;
    right: 0; 
    margin-left: 0px;
    transform: translateX(8%);
`