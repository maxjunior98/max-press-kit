import { EventsBody, EventItem } from "./events.styled";

function Events() {

    return (
        <EventsBody>
            <h2 id="event_title">Eventos</h2>
            <div>
                <EventItem>
                    <h3>Nobar Anos 2000</h3>
                </EventItem>
                <EventItem>
                    <h3>Palace Club</h3>
                </EventItem>
                <EventItem>
                    <h3>Warm Up Confidencia</h3>
                </EventItem>
            </div>
        </EventsBody>
    )
}

export default Events