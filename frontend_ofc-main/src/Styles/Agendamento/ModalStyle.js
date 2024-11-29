import React from 'react';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

  export  const ModalContent = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const TimeOption = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: #6d3c3e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #4c2a2d;
  }
`;

export const ButtonClose = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #b00020;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #8e0016;
  }
`;

