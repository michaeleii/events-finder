import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

import { API_URL } from "@/helpers/constants";
import { EventItem } from "@/interfaces/Event";
import Head from "next/head";
import EventDetailsCard from "@/components/EventDetailsCard";
import { useState } from "react";
import CommentsForm from "@/components/CommentsForm";
import CommentList from "@/components/CommentList";
import { Comment } from "@/interfaces/Comment";
import useComments from "@/hooks/useComments";

function EventDetailsPage({
  event,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { comments, isLoading } = useComments();
  const [showComments, setShowComments] = useState(false);
  return (
    <main className="relative">
      <Head>
        <title>{event.name}</title>
        <meta name="description" content={`${event.location}`} />
      </Head>
      <div className="[@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] h-80 p-10 absolute w-full">
        <div className="pb-5">
          <h1 className="text-center text-3xl  sm:text-7xl drop-shadow-lg font-bold text-secondary-content mb-14">
            {event.name}
          </h1>
          <EventDetailsCard event={event} />
          <p className="max-w-4xl mx-auto text-center text-2xl mt-10">
            We know that networking is no fun if you are an introverted person.
            That is why we came up with this event - it will be much easier. We
            promise.
          </p>
          <div className="max-w-4xl mx-auto mt-10">
            <div className="flex justify-center">
              <button
                className="btn btn-outline"
                onClick={() => setShowComments(!showComments)}
              >
                {showComments ? "Hide" : "Show"} comments
              </button>
            </div>
            {showComments && <CommentsForm />}
            {showComments && (
              <div className="my-10">
                {comments && comments.length === 0 && (
                  <p className="text-center">There are no comments.</p>
                )}
                {comments && <CommentList comments={comments} />}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/events?_limit=2`);
  const featuredEvents: EventItem[] = await res.json();
  const paths = featuredEvents.map((event) => ({
    params: { id: event.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{
  event: EventItem;
}> = async (context) => {
  let res = await fetch(`${API_URL}/events/${context.params?.id}`);
  const event: EventItem = await res.json();

  return { props: { event }, revalidate: 30 };
};

export default EventDetailsPage;
