import Body from "./Body.jsx"
import Footer from "../../Footer.jsx"
import { Navbar, ImgLogo, TextLogo, SpanTextLogo } from "../../../Styles/LoginPage/LoginPage.js"
import logo from "../../../Images/logo.png"

const LoginPage = () => {
    return(
        <>
        <Navbar><ImgLogo src={logo}/><TextLogo>Time<SpanTextLogo>Planner</SpanTextLogo></TextLogo></Navbar>
        <Body/>
        <Footer/>
        </>
    )
}

export default LoginPage