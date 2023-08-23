import { EventItem } from "@/interfaces/Event";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function EventDetailsCard({ event }: { event: EventItem }) {
  return (
    <div className="card p-5 card-side max-w-4xl bg-neutral items-center mx-auto">
      <figure className="sm:w-[400px] w-0">
        <Image
          src={event.image}
          width={340}
          height={250}
          alt=""
          className="mask mask-circle"
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
  );
}
export default EventDetailsCard;
