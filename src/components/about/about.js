import { AboutStyled } from "./about.styled";
import { aboutFirstPart, aboutSecondPart } from "../../assets/texts";

function About() {
    return (
        <AboutStyled>
            <section id="about">
                <span>Sobre Max</span>
                <div>{aboutFirstPart}</div>
                <div>{aboutSecondPart}</div>
            </section>
            <main>
                <img src="profile2.jpg" alt="profile2" />
            </main>
            <section>
                <img src="profile1.jpg" alt="profile1" />
            </section>
        </AboutStyled>
    )
}

export default About