"use client"
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";

function InnovationManagement() {

    return (
        <div>
            <div className="background"></div>
            <section className="events-section mb-9">
                <div className="container mx-auto pt-7">
                    <div className="animate__animated animate__fadeInUp mb-9 max-w-[800px]">
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight">
                            Innovation Management
                        </h1>
                        <p className="text-lg md:text-xl lg:text-xl">
                            At the heart of our technological extravaganza at Techno Vivarta 2024 lie the Innovation Management events, providing a platform for bright minds to converge, collaborate, and catalyze groundbreaking ideas. In an era dominated by rapid advancements, these events are designed to explore the frontiers of innovation, pushing the boundaries of what is possible.
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
                                <h3 className="text-lg font-semibold">Pitch To Deck</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/innovation-management/pitch-to-deck" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">Social Innovation Challenge</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/innovation-management/social-innovation-challenge" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">Project Showcasing</h3>
                                <p className="mt-1 text-sm text-gray-500">Event Date</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Event Desc</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/innovation-management/project-showcasing" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default InnovationManagement;
