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
                                    src="/bgmi.jpg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">BGMI</h3>
                                <p className="mt-1 text-sm text-gray-500">9th & 10th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Survive the chaos, Eliminate opponents, and be the last one standing to claim the coveted title of the ultimate BGMI champion.
Register now for BGMI and join the Battlefield for the Epic Glory!</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 9th March: 12pm Onwards <br/> 10th March: 11am Onwards</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/gaming/bgmi" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/fc24.jpg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">FC24</h3>
                                <p className="mt-1 text-sm text-gray-500">9th & 10th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>A football saga, a symphony of thrills with each kick, a labyrinth of twists and turns, weaving through defenses with breathtaking skill.</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 9th March: 12pm Onwards <br/> 10th March: 11am Onwards</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/gaming/fc24" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/valo.jpeg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Valorant</h3>
                                <p className="mt-1 text-sm text-gray-500">9th & 10th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Get ready for an adrenaline-fueled showdown Just One QR Scan away from the VALORANT tournament! Make Elite teams, intense strategies, and jaw-dropping plays await. Brace yourself for an epic battle that will redefine esports greatness.</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 9th March: 12pm Onwards <br/> 10th March: 11am Onwards</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/gaming/valorant" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/e-football.jpg"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">E-Football</h3>
                                <p className="mt-1 text-sm text-gray-500">8th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>Experience the thrill of virtual soccer with e-Football, where the excitement of the beautiful game comes alive on mobiles, featuring immersive graphics and realistic gameplay</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 12pm Onwards</p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/gaming/e-football" className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                            <Card className="rounded-lg p-4">
                                <Image
                                    src="/chess.png"
                                    alt=""
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">Chess</h3>
                                <p className="mt-1 text-sm text-gray-500">8th March 2024</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>"Unleash your strategic genius on the digital battlefield of chess. Register now to sharpen your skills and outwit opponents in the ultimate game of intellect and precision."</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} />Techno India University</p>
                                    <p className="flex gap-2"><BiTime size={20} /> 12pm Onwards</p>
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
