import Footer from "../../Footer.jsx"
import Header from "../../Header.jsx"

const PaginaInicial = () => {
    return (
        <>
            <Header
                page1="Agendamento" to1="/agendamento"
                page2="Horarios" to2="/horarios" 
            />
            <Footer />
        </>
    )
}

export default PaginaInicial