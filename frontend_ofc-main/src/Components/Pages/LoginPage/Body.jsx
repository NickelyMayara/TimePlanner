import React from "react"
import { SectionBody ,SectionTextos, Linha1, SpanTime, SpanPlanner, Linha2, SpanInicie, SpanODia, SpanOrganizado, SectionForms, Imagem } from "../../../Styles/LoginPage/Body.js"
import Forms from "./Forms.jsx"
import Calendario from "../../../Images/calendarioInicial.png"

const Body = () => {

    return (
        <SectionBody>
            <SectionTextos>
                <Linha1>Acesse o <SpanTime>Time</SpanTime><SpanPlanner>Planner</SpanPlanner></Linha1>
                <Linha2>& <SpanInicie>INICIE </SpanInicie><SpanODia>o dia </SpanODia><SpanOrganizado>ORGANIZADO</SpanOrganizado></Linha2>

                <SectionForms>
                    <Forms/>
                </SectionForms>
                
                </SectionTextos>
                <Imagem src={Calendario} />
            
        </SectionBody>
    )
}

export default Body