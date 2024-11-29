import styled from "styled-components";
import fotoBody from "../../Images/fotoBody.png"; 


export const BackgroundStyle = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;  
  height: 2100px;  
  position: relative; 
  width: 100%;
  max-height: auto;
  
`;
export const ImageTextContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: flex-start; 
  width: 100%;
  max-width: auto;
  padding: 20px;
  gap: 20px; 
  margin-left:20px;
`;


export const SideBySideContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  gap: 0px; 
  width: 100%;
  max-width: 1400px;
  padding: 20px;
  margin-top: 200px;
  
`;


export const StyledImage = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
  margin-top: 100px;
  margin-right: 20px;
`;

export const TextoIntro = styled.div`
  text-align: right;
  display: flex;
  margin-right: 150px;
  flex-direction: column-reverse;
  margin-top: 15%; 
`;

export const StyledH1 = styled.h1`
  color: pink;
  font-size: 70px;
  line-height: 1.2;
`;

export const Aten = styled.div`
  color: white;
`;

export const EnglobaDiv = styled.div`
  display: flex;
  flex: 50%;
  flex-direction: column;
  background-color: #6D3C3E;
  height: 500px;
  width: 30%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-left:200px;
`;


export const TextClient = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
`;


export const TextInput = styled.label`
  color: white;
  margin-top: 10px;
  font-size: 16px;
`;


export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box; 
  margin-bottom: 20px; 
`;

export const StyledDivEngloba = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #260909;
  height: 500px;
  width: 30%; 
  padding: 20px;
  flex: 50%;
  margin-top: 0px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
`;
export const ErrorMessage = styled.span`
  color: red;         
  font-size: 15px;     
  margin-top: 5px;     
  display: block;      
`;


export const StyledText = styled.h2`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%; 
  margin-top: 30px;
`;

export const StyledButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: #6D3C3E;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  margin-top: 0px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4C2A2D; 
  }
`;
