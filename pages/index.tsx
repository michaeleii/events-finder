import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

function Homepage() {
  const featuredEvents = [events[0], events[1]];
  return (
    <main className="max-w-4xl mx-auto p-5">
      <ul className="space-y-5 max-w-3xl mx-auto mt-10">
        {featuredEvents.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Homepage;
