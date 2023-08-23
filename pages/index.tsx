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
      <form action="" className="my-10">
        <h2 className="text-3xl font-bold text-center mb-5">
          Sign up for to stay updated!
        </h2>
        <div className="form-control">
          <div className="input-group justify-center">
            <input
              type="text"
              placeholder="Enter your email address"
              className="input input-bordered"
            />
            <button className="btn">Register</button>
          </div>
        </div>
      </form>
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
