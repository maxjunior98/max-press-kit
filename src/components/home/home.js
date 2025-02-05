import { HomeStyled } from "./home.styled";
import { FaWhatsapp, FaInstagram, FaSoundcloud, FaYoutube } from "react-icons/fa";

function Home({openInstagram, openSoundCloud}) {

    return (
        <HomeStyled>
            <main id="home">
                <span>MAX</span>
                <h2>Recuero</h2>
                <div>
                    <FaWhatsapp />
                    <FaInstagram onClick={openInstagram}/>
                    <FaSoundcloud onClick={openSoundCloud}/>
                    {/* <FaYoutube /> */}
                </div>
            </main>
            <section>
                <img src="/cover.jpg"/>
            </section>
        </HomeStyled>
    )
}

export default Home