"use client"
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";

function Computing() {

    return (
        <div>
            <div className="background"></div>
            <section className="events-section mb-9">
                <div className="container mx-auto pt-7">
                    <div className="animate__animated animate__fadeInUp mb-9 max-w-[800px]">
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight">
                            Events
                        </h1>
                        <p className="text-lg md:text-xl lg:text-xl">
                            🎉 Calling all Coders, Android Developers and Web Developers! 🎉
                            Are you ready to showcase your skills and compete against the best in the industry? Participate in our upcoming contests at Techno VIVARTA 2024 and stand a chance to win lucrative cash prizes! 🤩
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
                                <h3 className="text-lg font-semibold">Codex</h3>
                                <p className="mt-1 text-sm text-gray-500">8th March, 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Codex: Calling all coders! 👨‍💻 If you are looking for a challenge, join Codex and put your skills to the test. Compete against other coders and show the world what you are made of!</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} /> Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/computing/codex" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">Androjam</h3>
                                <p className="mt-1 text-sm text-gray-500">9th March, 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Are you a master of Android development and looking for a challenge to showcase your skills? Then, this contest is for you! Show us your skills and win exciting prizes. 📱
                                    </p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/computing/androjam" className={buttonVariants()}>RSVP Now</Link>
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
                                <h3 className="text-lg font-semibold">WebYard</h3>
                                <p className="mt-1 text-sm text-gray-500">8th March, 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Are you passionate about web development and looking for a challenge? This is your chance to shine! Participate in Webyard and showcase your skills to win big! 🌐
                                    </p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> Event Time</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/computing/webyard" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Computing;
