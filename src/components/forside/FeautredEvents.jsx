import Image from "next/image";
import { cacheLife } from "next/cache";

export async function getEvents() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?isFeatured=true`);
  return response.json();
}

const FeautredEvents = async () => {
  const feauturedevents = await getEvents();
  console.log(feauturedevents);
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-10 m-5">
      {feauturedevents.map((event) => (
        <div key={event.id} className="flex flex-col justify-center items-center gap-3">
          <Image src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} width={200} height={50} />
          <h2>{event.title}</h2>
          <p className="text-center">{event.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default FeautredEvents;
