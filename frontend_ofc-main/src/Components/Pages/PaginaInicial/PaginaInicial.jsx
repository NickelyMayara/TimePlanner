import { useEffect } from 'react';
import React from 'react'
import Atendente from '../../../Images/atendente.png'
import { Interface, Section1, DivTxt, Section2, TxtCategory, DivCategory, ButtonCategory, Icon, TextoCategory1, TextoCategory2, H1Topo, PTopo, Linha, Span1, Span2, ImgAt, PageWrapper, DivSla, DivDicas, DivDicas2, DicasTxt, DicasIcon, DicasTxt2 } from '../../../Styles/PaginaInicial/PaginaIncial.js'
import Icon1 from '../../../Images/icon1.png'
import Icon2 from '../../../Images/icon2.png'
import One from '../../../Images/one.png'
import Two from '../../../Images/two.png'
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../../Footer.jsx';
import Header from '../../Header.jsx';

const componente = () => {
  const navigate = useNavigate();
}
const handleClick = () => {
  navigate('/agendamento');
};
const Main = () => {
  return (
    <>
      <Header
        page1="Agendamento" to1="/agendamento"
        page2="Horarios" to2="/horarios"
      />
      <PageWrapper>
        <Section1 className="topoDoSite">
          <Interface>
            <div className='Flex'>
              <ImgAt className='fotomuie' src={Atendente} />
              <DivTxt>
                <H1Topo>SEJA BEM <Span1>VINDO</Span1>!</H1Topo>
                <PTopo>Gerencie o Atendimento do Seu Negócio</PTopo>

              </DivTxt>
            </div>
          </Interface>
        </Section1>
      </PageWrapper>
      <DivSla>
        <TxtCategory>Selecione a <Span2>Categoria</Span2></TxtCategory>
        <Linha></Linha>
      </DivSla>

      <DivDicas>
        <DivDicas2>
          <DicasIcon src={One} />
          <DicasTxt>Agendar Atendimentos</DicasTxt>
          <DicasTxt2>Agende a data e horário dos próximos atendimentos</DicasTxt2>
        </DivDicas2>

        <DivDicas2>
          <DicasIcon src={Two} />
          <DicasTxt>Gestão de Atendimento</DicasTxt>
          <DicasTxt2>Administre o tempo de serviço e tenha <br />  o acesso aos próximos atendimentos registrados</DicasTxt2>
        </DivDicas2>
        <DivDicas2></DivDicas2>
      </DivDicas>
      <Section2 className="MeioDoSite">

        <DivCategory>
          <Link to="/agendamento">
            <ButtonCategory>
              <Icon src={Icon1} />
              <TextoCategory1>AGENDAR HORÁRIO</TextoCategory1>
              <TextoCategory2>Agendar data e o horário</TextoCategory2>
            </ButtonCategory>
          </Link>
          <Link to="/horarios">
            <ButtonCategory>
              <Icon src={Icon2} />
              <TextoCategory1>VISUALIZAR ATENDIMENTOS</TextoCategory1>
              <TextoCategory2>Gerencie o tempo de atendimento</TextoCategory2>
            </ButtonCategory>
          </Link>
        </DivCategory>

      </Section2>
      <Footer />
    </>
  )
}

export default Main
