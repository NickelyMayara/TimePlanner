import styled from 'styled-components'

export const PageWrapper = styled.div`
  overflow: hidden;  
`

export const DivSla = styled.div`
margin-top: 20px;
height: 10px;
text-align: left;

@media (max-width: 768px){
  display:block;
  margin-top: 10px;
}
`

export const Section1 = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Section2 = styled.section`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Interface = styled.div`
max-width :1280px;
margin: 0 auto;`

export const DivTxt = styled.div`
cursor: default;
color: white;

@media (max-width: 768px){
  display:block ;
}`

export const H1Topo= styled.p`
white-space: nowrap;
font-size: 70px;

@media (max-width: 768px) {
    font-size: 50px;   
    margin: 0;      
    padding: 0;      
   
  }
`
export const PTopo = styled.p`
  margin-bottom: 250px;
  margin-left: 45px;
  white-space: nowrap;
  font-size: 25px;

  
  @media (max-width: 768px) {
    font-size: 20px;   
    white-space: normal;
    margin-left: 0;     
   
   
  }
`;
export const TxtCategory = styled.p`
  margin-left: 20px;
  font-size: 50px;
  cursor: default;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 30px;   
    text-align: center;
    margin: 0;      
    padding: 0;      
    display:block ;
  }
`;

export const Span1 = styled.span`
 color: #AE6E6E;
 `

export const Span2 = styled.span`
color: #AE6E6E;
margin-left: 10px;

@media (max-width: 768px) {
    font-size: 30px;   
    margin: 0;      
    padding: 0;   
    margin-left: 7px;
  }
`
export const Linha = styled.div``

export const DivButton = styled.div`

`
export const DivDicas = styled.div`
margin-top: 100px;
gap: 50px;
color: white;
display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;


  @media (max-width: 768px) {
    margin-top: 160px;
    display: block;
  }
`

export const DivDicas2 = styled.div`

`
export const DicasTxt = styled.p`

` 

export const DicasTxt2 = styled.p``

export const DicasIcon = styled.img`
width: 40px;`


export const DivCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  gap: 70px; 

 
  @media (max-width: 768px) {
    flex-direction: column;  
    gap: 20px;               
  }

  @media (min-width: 769px) {
    flex-direction: row; 
  }
`;

export const ButtonCategory = styled.button`
  font-family: 'Julius Sans One', 'sans-serif';
  border-color: white;
  color: white;
  background: linear-gradient(to bottom,  #551924, #551924, #2c0d12);
  border-radius: 10%;
  width: 290px;
  height: 290px;
  margin-bottom: 70px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    font-size: 30px;
    font-weight: bolder;
    width: 320px;
    height: 320px;
  }

  @media (max-width: 768px) {
    width: 230px;
  height: 230px;
    margin: 0;    
    display: block;
  }
`

export const Icon = styled.img`
width: 65px;
`


export const TextoCategory1 = styled.p`
font-size: 25px;`

export const TextoCategory2 = styled.p`
font-size: 15px;`

export const ImgAt = styled.img`

 margin-right: 20px;
  width: 600px;
  margin-bottom: 195px;

  @media (max-width: 768px) {
    width: 400px;
    margin-bottom: 60px;
  }
`




