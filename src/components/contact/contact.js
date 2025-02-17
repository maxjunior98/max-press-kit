import { ContactStyled } from "./contact.styled";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact({openInstagram, openWhatsApp}) {

    return (
        <ContactStyled>
            <h2 id="contact_title">Entre em Contato</h2>
            <div id="contact_description">Bookings e negociações pelo whatsapp ou instagram</div>
            <button id="contact_whats_button" onClick={openWhatsApp}>
                <section>Entrar em contato via WhatsApp</section>
                <FaWhatsapp />
            </button>
            <button id="contact_insta_button" onClick={openInstagram}>
                <section>Entrar em contato via Instagram</section>
                <FaInstagram />
            </button>
        </ContactStyled>
    )
}

export default Contact