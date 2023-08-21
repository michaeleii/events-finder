import {
  MapPinIcon,
  CalendarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  image: string;
}
function EventCard({ event }: { event: Event }) {
  return (
    <div className="card sm:card-side bg-neutral text-neutral-content shadow-xl">
      <figure>
        <Image
          src={event.image}
          alt="Album"
          width={300}
          height={248}
          className="h-full w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl mb-3">{event.name}</h2>
        <div className="flex gap-2 items-center">
          <CalendarIcon className="w-5 h-5" />
          <p className="font-bold">{event.date}</p>
        </div>
        <div className="flex gap-2 items-center">
          <MapPinIcon className="w-5 h-5" />
          <p>{event.location}</p>
        </div>
        <div className="card-actions sm:justify-end justify-center mt-5">
          <Link href={`/events/${event.id}`}>
            <button className="btn btn-primary">
              <span>Explore Event</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default EventCard;
