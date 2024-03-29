"use client"
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";

function FunEvents() {

    return (
        <div>
            <div className="background"></div>
            <section className="events-section mb-9">
                <div className="container mx-auto pt-7">
                    <div className="animate__animated animate__fadeInUp mb-9 max-w-[800px]">
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight">
                            Fun Events
                        </h1>
                        <p className="text-lg md:text-xl lg:text-xl">
                            Prepare for a thrilling ride through the lighter side of technology at Techno Vivarta 2024! In addition to the cutting-edge innovations and fierce competitions, we present an array of fun events that promise to inject joy, laughter, and camaraderie into this tech-centric celebration. Join us for a celebration where the world of technology meets the joy of carnival!
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-6 text-center text-2xl font-extrabold leading-tight">
                            Upcoming Events
                        </h2>
                        <div className="mt-9x  grid grid-cols-1 gap-4 md:grid-cols-3">
                            {/* <Card className="rounded-lg p-4">
                                <Image
                                    src="/food.jpeg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Food Eating Competition</h3>
                                <p className="mt-1 text-sm text-gray-500">9th March 2024</p>
                                <div className="mt-4">
                                    <p>Time is limited but Food is Unlimited. Come and consume as much as you can. Pre-book your slot, see you there.</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 11 am onwards</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/fun-events/food-eating-competition" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card> */}
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/treasurehunt.jpeg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Treasure Hunt</h3>
                                <p className="mt-1 text-sm text-gray-500">8th & 9th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Treasure Hunt Main event is Happening at Techno India University Campus.
                                        Hurry Up and Register your team to confirm your slot.</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 11 am onwards</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/fun-events/treasure-hunt" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/liveludo.jpeg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Live Ludo</h3>
                                <p className="mt-1 text-sm text-gray-500">9th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Hello Everyone
                                        Here is LIVE LUDO main event for you.
                                        You have played LUDO on boards or on phones.... now it is time to play LUDO yourself on the field.
                                        Sooo Hurry up, complete registration and book your slot</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 11 am Onwards</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/fun-events/live-ludo" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            {/* <Card className="rounded-lg p-4">
                                <Image
                                    src=""
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Heads Up</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                            {/* <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/fun-events/live-ludo" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card> */}
                            {/* <Card className="rounded-lg p-4">
                                <Image
                                    src=""
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Scoring Goal</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                            {/* <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/fun-events/live-ludo" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card> *
                            {/* <Card className="rounded-lg p-4">
                                <Image
                                    src=""
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Knocking Pyramid</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                            {/* <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/fun-events/live-ludo" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            <Card className="rounded-lg p-4">
                                <Image
                                    src=""
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Beer Pong</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                            {/* <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/fun-events/live-ludo" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>  */}

                            {/* <Card className="rounded-lg p-4">
                                <Image
                                    src=""
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Bike Show</h3>
                                <p className="mt-1 text-sm text-gray-500">9th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                            {/* <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 11 am Onwards</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/fun-events/live-ludo" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>  */}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default FunEvents;
