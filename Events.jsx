import { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("events")) || [];

    setEvents(data);
  }, []);

  return (
    <div className="container">
      <h2>Upcoming Events</h2>

      {events.length === 0 ? (
        <h3>No Events Available</h3>
      ) : (
        events.map((event, index) => (
          <div className="card" key={index}>
            <h3>{event.title}</h3>

            <p>Date : {event.date}</p>

            <p>Venue : {event.venue}</p>

            <p>{event.description}</p>

            <button>Register Now</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Events;
