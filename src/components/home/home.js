import { HomeStyled } from "./home.styled";
import { FaWhatsapp, FaInstagram, FaSoundcloud, FaYoutube } from "react-icons/fa";

function Home({openInstagram, openSoundCloud, openWhatsApp}) {

    return (
        <HomeStyled>
            <main id="home">
                <span id="max_recuero_title">MAX</span>
                <h2 id="max_recuero_subtitle">Recuero</h2>
                <div id="max_recuero_contacts_div">
                    <FaWhatsapp onClick={openWhatsApp}/>
                    <FaInstagram onClick={openInstagram}/>
                    <FaSoundcloud onClick={openSoundCloud}/>
                    {/* <FaYoutube /> */}
                </div>
            </main>
            <section id="max_recuero">
                <img src="/cover.jpg"/>
            </section>
        </HomeStyled>
    )
}

export default Home