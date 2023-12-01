"use client"
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { client, urlFor } from "../../sanity";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";

// Define the Event interface
interface Event {
  _id: string;
  title: string;
  date: string;
  shortDescription: string;
  venue: string;
  time: string;
  image: string;
  rsvplink: string;
  // Add other properties as needed
}

function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const query = '*[_type == "event" && isPastEvent == false]';
    client
      .fetch<Event[]>(query)
      .then((data: Event[]) => setEvents(data))
      .catch((error) => console.error('Error fetching upcoming events:', error));
  }, []);

  useEffect(() => {
    const query = '*[_type == "event" && isPastEvent == true]';
    client
      .fetch<Event[]>(query)
      .then((data: Event[]) => setPastEvents(data))
      .catch((error) => console.error('Error fetching past events:', error));
  }, []);

  // Check if there are any upcoming events
  const hasUpcomingEvents = events.length > 0;
  const hasPastEvents = pastEvents.length > 0;

  return (
    <div>
      <div className="background-2"></div>
      <section className="events-section mb-9">
      <div className="container mx-auto pt-7">
        <div className="animate__animated animate__fadeInUp mb-9 max-w-[800px]">
          <h1 className="mb-6 text-3xl font-extrabold leading-tight">
            Events
          </h1>
          <p className="text-lg md:text-xl lg:text-xl">
            Are you eager to learn the latest programming languages, delve into cutting-edge technologies, or unlock the secrets of successful entrepreneurship? You are in the right place. Join us for hands-on workshops, thrilling hackathons, and insightful tech talks. Reserve your spot today and be part of this exciting journey!
          </p>
        </div>
        {
          !hasUpcomingEvents && !hasPastEvents &&(
            <div className="py-10">
              <h1 className="animate__animated animate__fadeInUp heading-main text-center text-4xl leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                No Events scheduled
              </h1>
            </div>
          )
        }
        {hasUpcomingEvents && (
          <div>
            <h2 className="mb-6 text-center text-2xl font-extrabold leading-tight">
              Upcoming Events
            </h2>
            <div className="mt-9x  grid grid-cols-1 gap-4 md:grid-cols-3">
              {events.map((event) => (
                <Card key={event._id} className="rounded-lg p-4">
                  <Image
                    src={urlFor(event.image).url()}
                    alt={event.title}
                    className="mb-4 rounded-lg"
                    width={400}
                    height={200}
                  />
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{event.date}</p>
                  <div className="mt-4">
                    {/* Additional event information */}
                    <p>{event.shortDescription}</p><br />
                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} /> {event.venue}</p>
                    <p className="flex gap-2"><BiTime size={20} /> {event.time}</p>
                  </div>
                  <div className="mt-6">
                     <Link href={event.rsvplink} className={buttonVariants()}>RSVP Now</Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
        {hasPastEvents && (
          <div>
            <h2 className="mb-6 text-center text-2xl font-extrabold leading-tight">
              Past Events
            </h2>
            <div className="mt-9x  mb-9 grid grid-cols-1 gap-4 md:grid-cols-3">
              {pastEvents.map((event) => (
                <Card key={event._id} className="rounded-lg p-4">
                  <Image
                    src={urlFor(event.image).url()}
                    alt={event.title}
                    className="mb-4 rounded-lg"
                    width={400}
                    height={200}
                  />
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{event.date}</p>
                  <div className="mt-4">
                    {/* Additional event information */}
                    <p>{event.shortDescription}</p><br />
                    <p className="flex gap-2"><MdOutlineLocationOn size={20} /> {event.venue}</p>
                    <p className="flex gap-2"><BiTime size={20} /> {event.time}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>)}
      </div>
    </section>
    </div>
    
  );
}

export default Events;
