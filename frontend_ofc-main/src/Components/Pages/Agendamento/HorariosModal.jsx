import { ModalOverlay, ModalContainer, ModalContent, TimeOption, ButtonClose } from "../../../Styles/Agendamento/ModalStyle.js";

const HorariosModal = ({ horarios, isOpen, onClose, onSelect }) => {
    return (
      <>
        {isOpen && (
          <ModalOverlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              <h2>Selecione um Horário</h2>
              <ModalContent>
                <ul>
                  {horarios.map((hora, index) => (
                    <TimeOption key={index} onClick={() => onSelect(hora)}>
                      {hora}
                    </TimeOption>
                  ))}
                </ul>
              </ModalContent>
              <ButtonClose onClick={onClose}>Fechar</ButtonClose>
            </ModalContainer>
          </ModalOverlay>
        )}
      </>
    );
  };
  
  export default HorariosModal;