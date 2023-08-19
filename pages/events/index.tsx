import type { InferGetStaticPropsType, GetStaticProps } from "next";

import EventCard from "@/components/EventCard";
import FilterForm from "@/components/FilterForm";

import { API_URL } from "@/helpers/constants";
import { EventItem } from "@/interfaces/Event";

function EventsPage({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export const getStaticProps: GetStaticProps<{
  events: EventItem[];
}> = async () => {
  const res = await fetch(`${API_URL}/events`);
  const events: EventItem[] = await res.json();
  return {
    props: {
      events,
    },
  };
};

export default EventsPage;
