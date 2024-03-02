"use client"
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";

function Gaming() {

    return (
        <div>
            <div className="background"></div>
            <section className="events-section mb-9">
                <div className="container mx-auto pt-7">
                    <div className="animate__animated animate__fadeInUp mb-9 max-w-[800px]">
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight">
                            Gaming
                        </h1>
                        <p className="text-lg md:text-xl lg:text-xl">
                            Techno Vivarta 2024 invites gamers, tech enthusiasts, and innovators to join a celebration of the digital future. Immerse yourself in the thrilling world of gaming, and connect with like-minded individuals who share a passion for pushing the boundaries of what is possible in the gaming universe. Get ready for an unforgettable journey into the realms of technology and gaming at Techno Vivarta 2024! 🚀🎮
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
                                <h3 className="text-lg font-semibold">BGMI</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/gaming/bgmi" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">FC24</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/gaming/fc24" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">Valorant</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/gaming/valorant" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">E-Football</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/gaming/e-football" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">Chess</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/gaming/chess" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Gaming;
