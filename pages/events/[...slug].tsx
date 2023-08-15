import EventCard from "@/components/EventCard";
import { events } from "@/data/events";
import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();
  if (!(router.query.slug instanceof Array)) return null;
  const [year, month] = router.query.slug;

  const filteredEvents = events.filter(
    (event) => event.date.includes(year) && event.date.includes(month)
  );

  return (
    <main className="max-w-4xl mx-auto p-5">
      <div className="mb-20 mt-5"></div>
      <ul className="space-y-5 max-w-3xl mx-auto">
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </main>
  );
}
export default FilteredEventsPage;
