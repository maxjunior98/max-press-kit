import { EventsBody, EventItem } from "./events.styled";
import { eventNobar, eventConfidencia, eventPalace } from "../../assets/texts";

function Events() {

    return (
        <EventsBody>
            <h2 id="event_title">Eventos</h2>
            <div>
                <EventItem>
                    <h3>Nobar Anos 2000</h3>
                    <img src={require("./nobar.jpg")} alt="nobar"/>
                    <div>{eventNobar}</div>
                </EventItem>
                <EventItem>
                    <h3>Palace Club</h3>
                    <img src={require("./palace.jpg")} alt="palace"/>
                    <div>{eventPalace}</div>
                </EventItem>
                <EventItem>
                    <h3>Warm Up Confidencia</h3>
                    <img src={require("./confidencia.jpg")} alt="confidencia"/>
                    <div>{eventConfidencia}</div>
                </EventItem>
            </div>
        </EventsBody>
    )
}

export default Events