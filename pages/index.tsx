import type { InferGetStaticPropsType, GetStaticProps } from "next";

import EventCard from "@/components/EventCard";
import { API_URL } from "@/helpers/constants";
import { EventItem } from "@/interfaces/Event";
import Head from "next/head";

function Homepage({
  featuredEvents,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="max-w-4xl mx-auto p-5">
      <Head>
        <title>Events Finder</title>
        <meta name="description" content="Find fun and interesting events." />
      </Head>
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

export const getStaticProps: GetStaticProps<{
  featuredEvents: EventItem[];
}> = async () => {
  const res = await fetch(`${API_URL}/events?_limit=2`);
  const featuredEvents: EventItem[] = await res.json();
  return {
    props: {
      featuredEvents,
    },
  };
};
export default Homepage;
