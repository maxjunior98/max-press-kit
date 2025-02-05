import { StyledHeader } from "./header.styled";

function Header() {

    function scrollToElement(id) {
        let element = document.getElementById(id)
        element.scrollIntoView({behavior: "smooth"})
    }

    return (
        <StyledHeader>
            <div onClick={() => scrollToElement("home")}>Max Recuero</div>
            <div onClick={() => scrollToElement("about")}>Sobre</div>
            <div onClick={() => scrollToElement("contact")}>Contato</div>
        </StyledHeader>
    )
}

export default Header