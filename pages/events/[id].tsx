import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { events } from "@/data/events";

function EventDetailsPage() {
  const router = useRouter();
  const eventId = Number(router.query.id);

  const event = events.find((event) => event.id === eventId);
  console.log(event);
  if (!event) {
    return null;
  }
  return (
    <main className="relative">
      <div className="[@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] h-80 p-10 absolute w-full">
        <div>
          <h1 className="text-center text-3xl  sm:text-7xl drop-shadow-lg font-bold text-secondary-content mb-14">
            {event.name}
          </h1>
          <div className="card p-5 card-side max-w-4xl bg-neutral items-center mx-auto">
            <figure>
              <img
                src={event.image}
                alt=""
                className="mask mask-circle h-[250px] hidden sm:block"
              />
            </figure>
            <div className="card-body space-y-5 my-auto">
              <div className="">
                <CalendarIcon className="w-10 h-10" />
                <p className="text-3xl">{event.date}</p>
              </div>
              <div className="">
                <MapPinIcon className="w-10 h-10" />
                <p className="text-3xl">{event.location}</p>
              </div>
            </div>
          </div>
          <p className="max-w-4xl mx-auto text-center text-2xl mt-10">
            We know that networking is no fun if you are an introverted person.
            That is why we came up with this event - it will be much easier. We
            promise.
          </p>
        </div>
      </div>
    </main>
  );
}
export default EventDetailsPage;
