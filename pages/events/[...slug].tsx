import EventCard from "@/components/EventCard";
import { events } from "@/data/events";
import { useRouter } from "next/router";
import Link from "next/link";

function FilteredEventsPage() {
  const router = useRouter();
  if (!(router.query.slug instanceof Array)) return null;
  const [year, month] = router.query.slug;

  const filteredEvents = events.filter(
    (event) => event.date.includes(year) && event.date.includes(month)
  );

  return (
    <main className="max-w-4xl mx-auto p-5">
      <div className="mb-20 mt-5">
        <h1 className="text-5xl font-bold text-center">
          {month} {year}
        </h1>
      </div>
      <ul className="space-y-5 max-w-3xl mx-auto">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <li key={event.id}>
              <EventCard event={event} />
            </li>
          ))
        ) : (
          <>
            <p className="text-center text-3xl">
              No events found for the chosen filter!
            </p>
            <div className="flex justify-center">
              <Link
                href="/events"
                className="text-accent text-2xl underline underline-offset-4"
              >
                Go back
              </Link>
            </div>
          </>
        )}
      </ul>
    </main>
  );
}
export default FilteredEventsPage;
