function EventCard({ event, index }) {
  return (
    <div className="card">
      <h3>{event.title}</h3>

      <p>📅 Date: {event.date}</p>

      <p>📍 Venue: {event.venue}</p>

      <p>{event.description}</p>

      <button>Register Now</button>
    </div>
  );
}

export default EventCard;
