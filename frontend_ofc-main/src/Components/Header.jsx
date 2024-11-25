import { NavbarSection, Navbar, ImgLogo, TextLogo, SpanTextLogo, PagesNav } from "../Styles/Header.js"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Header = ({page1, to1, page2, to2}) => {
    return(
        
        <NavbarSection>
            <Link className="linkLogo" to="/paginaInicial"><Navbar><ImgLogo src={logo}/><TextLogo>Time<SpanTextLogo>Planner</SpanTextLogo></TextLogo></Navbar></Link>
            <PagesNav>
                <Link className="linkNav"  to={to1}>{page1}</Link>
                <Link className="linkNav"  to={to2}>{page2}</Link>
            </PagesNav>
        </NavbarSection>
    )
}

export default Header