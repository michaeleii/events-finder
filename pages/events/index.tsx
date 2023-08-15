import EventCard from "@/components/EventCard";
import FilterForm from "@/components/FilterForm";
import { events } from "@/data/events";

function EventsPage() {
  return (
    <main className="max-w-4xl mx-auto p-5">
      <div className="mb-20 mt-5">
        <FilterForm />
      </div>
      <ul className="space-y-5 max-w-3xl mx-auto">
        {events.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </main>
  );
}
export default EventsPage;
