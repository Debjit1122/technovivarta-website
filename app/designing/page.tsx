"use client"
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";

function Designing() {

    return (
        <div>
            <div className="background"></div>
            <section className="events-section mb-9">
                <div className="container mx-auto pt-7">
                    <div className="animate__animated animate__fadeInUp mb-9 max-w-[800px]">
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight">
                            Designing
                        </h1>
                        <p className="text-lg md:text-xl lg:text-xl">
                            In this era of rapid technological advancement, design plays a pivotal role in shaping user experiences, solving complex problems, and driving business success. Techno Vivarta 2024 brings you designing challenges and competitions will provide participants with a platform to showcase their creativity and problem-solving abilities, with exciting prizes up for grabs.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-6 text-center text-2xl font-extrabold leading-tight">
                            Upcoming Events
                        </h2>
                        <div className="mt-9x  grid grid-cols-1 gap-4 md:grid-cols-3">
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/mascot.jpg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Mascot Contest: Design Derby</h3>
                                <p className="mt-1 text-sm text-gray-500">9th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>A thrilling contest inviting creative minds to craft captivating mascots! Unleash your imagination and bring to life the embodiment of spirit, energy, and identity. Join us in shaping the face of excitement and inspiration!</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} /> Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 11am Onwards</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/designing/design-derby" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Designing;
