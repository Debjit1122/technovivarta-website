"use client"
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";

function Mechmania() {

    return (
        <div>
            <div className="background"></div>
            <section className="events-section mb-9">
                <div className="container mx-auto pt-7">
                    <div className="animate__animated animate__fadeInUp mb-9 max-w-[800px]">
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight">
                            Mechmania
                        </h1>
                        <p className="text-lg md:text-xl lg:text-xl">
                            Mechmania presents to you a series of events dedicated to the world of mechanical engineering and robotics in Techno Vivarta 2024, brought together a convergence of brilliant minds and cutting-edge technologies, captivating the audience with a spectacle of innovation and engineering excellence.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-6 text-center text-2xl font-extrabold leading-tight">
                            Upcoming Events
                        </h2>
                        <div className="mt-9x  grid grid-cols-1 gap-4 md:grid-cols-3">
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/blastoff.jpeg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Blast Off</h3>
                                <p className="mt-1 text-sm text-gray-500">9th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>The Ultimate Water Bottle Rocket Event Let your creativity soar as we explore DIY rocket science. With a fusion of science, engineering, and fun, design, build, and launch your own water bottle rockets for an unforgettable experience.</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 2pm - 4pm</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/mechmania/blast-off" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/poseidon.jpeg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Poseidon</h3>
                                <p className="mt-1 text-sm text-gray-500">10th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Dive into the excitement of POSEIDON , the Aqua Robot Soccer War! Experience the fusion of soccer and robotics in an electrifying underwater arena. Get ready to be thrilled and amazed by the innovative competition unlike any other.</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 12pm - 6pm</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/mechmania/poseidon" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/powertruss.jpeg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Power Truss</h3>
                                <p className="mt-1 text-sm text-gray-500">8th & 9th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Building Bridges to Success! Prepare to unleash your creativity and engineering skills as you construct and test your own bridge, designed to withstand heavy loads. Join us in this exciting journey of innovation and construction.</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} />12pm - 3pm</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/mechmania/power-truss" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Mechmania;
