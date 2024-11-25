import Footer from "../../Footer.jsx"
import Header from "../../Header.jsx"

const Horarios = () => {
    return (
        <>
            <Header
                page1="Página Inicial" to1="/paginaInicial"
                page2="Agendamento" to2="/agendamento" 
            />
            <Footer />
        </>
    )
}

export default Horarios