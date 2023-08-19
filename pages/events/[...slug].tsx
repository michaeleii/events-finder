import EventCard from "@/components/EventCard";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "@/helpers/constants";
import { EventItem } from "@/interfaces/Event";

function FilteredEventsPage() {
  const router = useRouter();
  const { isLoading, data: filteredEvents } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      if (!(router.query.slug instanceof Array)) return undefined;
      const [year, month] = router.query.slug;
      const res = await fetch(`${API_URL}/events?year=${year}&month=${month}`);
      const data: EventItem[] = await res.json();
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (!(router.query.slug instanceof Array)) return undefined;
  const [year, month] = router.query.slug;

  return (
    <main className="max-w-4xl mx-auto p-5">
      <div className="mb-20 mt-5">
        <h1 className="text-5xl font-bold text-center">
          {month} {year}
        </h1>
      </div>
      <ul className="space-y-5 max-w-3xl mx-auto">
        {filteredEvents && filteredEvents.length > 0 ? (
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
