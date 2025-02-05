import { ContactStyled } from "./contact.styled";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact(openInstagram) {

    return (
        <ContactStyled>
            <h2 id="contact">Entre em Contato</h2>
            <div>Bookings e negociações pelo whatsapp ou instagram</div>
            <button>
                <section>Entrar em contato via WhatsApp</section>
                <FaWhatsapp />
            </button>
            <button onClick={openInstagram}>
                <section>Entrar em contato via Instagram</section>
                <FaInstagram />
            </button>

        </ContactStyled>
    )
}

export default Contact