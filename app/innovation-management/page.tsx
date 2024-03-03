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
                                    src="/pitch.jpg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Pitch To Deck: Where Ideas Take Flight</h3>
                                <p className="mt-1 text-sm text-gray-500">March 9th, 2024 (Saturday)</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Are you ready to take your innovative ideas to the next level? Look no further than Pitch to Deck, where creativity meets entrepreneurship! 🚀 

Craft a compelling pitch that captivates, convinces, and converts.<br/>*Maximum 4 members per team*
</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 11 am onwards</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/innovation-management/pitch-to-deck" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/socialinn.avif"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Social Innovation Challenge: Bridging Ideas and Execution</h3>
                                <p className="mt-1 text-sm text-gray-500">March 10th, 2024 (Sunday)</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Are you ready to embark on a transformative journey where innovation meets impact? Look no further than the Social Innovation Challenge, an arena where creative minds converge to shape a better tomorrow! 🌟

Unleash your imagination and Craft Innovative solutions to address the Societal issues.
<br/>*Maximum 3 members per team*</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 12pm - 6pm</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/innovation-management/social-innovation-challenge" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/projectshow.jpg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Project Showcasing: Where Prototypes Come to Life</h3>
                                <p className="mt-1 text-sm text-gray-500">March 8th, 2024 (Friday)</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Are you ready to witness innovation in action? Join us at the Project Showcasing event, where creators, inventors, and visionaries present their groundbreaking prototypes across various fields. From cutting-edge technology to sustainable solutions, this event promises to inspire and ignite your curiosity! 🔥

Whether you’re a tech enthusiast, an environmental advocate, or simply curious about what’s on the horizon, Project Showcasing is where imagination meets reality.
</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 12 pm - 4pm</p>
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
