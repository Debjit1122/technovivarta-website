"use client"
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";

function Robotics() {

    return (
        <div>
            <div className="background"></div>
            <section className="events-section mb-9">
                <div className="container mx-auto pt-7">
                    <div className="animate__animated animate__fadeInUp mb-9 max-w-[800px]">
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight">
                            Robotics
                        </h1>
                        <p className="text-lg md:text-xl lg:text-xl">
                            Witness the clash of titans as meticulously crafted robots face off in a riveting battle for supremacy. Teams will pit their custom-built bots against each other in an adrenaline-fueled competition, showcasing not only the technical prowess of their creations but also the strategic brilliance of their control. 🤖⚔️
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-6 text-center text-2xl font-extrabold leading-tight">
                            Upcoming Events
                        </h2>
                        <div className="mt-9x  grid grid-cols-1 gap-4 md:grid-cols-3">
                            <Card className="rounded-lg p-4">
                                <Image
                                    src=""
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">ROBO WAR</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/robotics/robotics-events" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">LINE FOLLOWER</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/robotics/robotics-events" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">DEATH RACE</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/robotics/robotics-events" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">DOGE WAR</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/robotics/robotics-events" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">ROBO SOCCER</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/robotics/robotics-events" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Robotics;
