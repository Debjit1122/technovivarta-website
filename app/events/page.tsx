"use client"
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
function Events() {

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
              Are you eager to learn the latest programming languages, delve into cutting-edge technologies, or unlock the secrets of successful entrepreneurship? You are in the right place. Join us for hands-on workshops, thrilling hackathons, and insightful tech talks. Reserve your spot today and be part of this exciting journey!
            </p>
          </div>
          <div>
            <div className="mt-9x  grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="rounded-lg p-4">
                <Image
                  src="/computing.jpg"
                  alt="computing"
                  className="mb-4 rounded-lg"
                  width={400}
                  height={200}
                />
                <h3 className="text-lg font-semibold">Computing</h3>
                <div className="mt-4">
                  {/* Additional event information */}
                  <p>🎉 Calling all Coders, Android Developers and Web Developers! 🎉 Are you ready to showcase your skills and compete against the best in the industry? Participate in our upcoming contests at Techno VIVARTA 2024 and stand a chance to win lucrative cash prizes! 🤩</p><br />
                </div>
                <div className="mt-4">
                  <Link href="/computing" className={buttonVariants()}>View Events</Link>
                </div>
              </Card>
              <Card className="rounded-lg p-4">
                <Image
                  src="/robotics.jpg"
                  alt="robotics"
                  className="mb-4 rounded-lg"
                  width={400}
                  height={200}
                />
                <h3 className="text-lg font-semibold">Robotics</h3>
                <div className="mt-4">
                  {/* Additional event information */}
                  <p>Witness the clash of titans as meticulously crafted robots face off in a riveting battle for supremacy. Teams will pit their custom-built bots against each other in an adrenaline-fueled competition, showcasing not only the technical prowess of their creations but also the strategic brilliance of their control. 🤖⚔️</p><br />
                </div>
                <div className="mt-4">
                  <Link href="/robotics" className={buttonVariants()}>View Events</Link>
                </div>
              </Card>
              <Card className="rounded-lg p-4">
                <Image
                  src="/gaming.jpg"
                  alt="gaming"
                  className="mb-4 rounded-lg"
                  width={400}
                  height={200}
                />
                <h3 className="text-lg font-semibold">Gaming</h3>
                <div className="mt-4">
                  {/* Additional event information */}
                  <p>Techno Vivarta 2024 invites gamers, tech enthusiasts, and innovators to join a celebration of the digital future. Immerse yourself in the thrilling world of gaming and connect with like-minded individuals who share a passion for pushing the boundaries of what is possible in the gaming universe. Get ready for an unforgettable journey into the realms of technology and gaming at Techno Vivarta 2024! 🚀🎮</p><br />
                </div>
                <div className="mt-4">
                  <Link href="/gaming" className={buttonVariants()}>View Events</Link>
                </div>
              </Card>
              <Card className="rounded-lg p-4">
                <Image
                  src="/mechmania.jpg"
                  alt="mechmania"
                  className="mb-4 rounded-lg"
                  width={400}
                  height={200}
                />
                <h3 className="text-lg font-semibold">MechMania</h3>
                <div className="mt-4">
                  {/* Additional event information */}
                  <p>Mechmania presents to you a series of events dedicated to the world of mechanical engineering and robotics in Techno Vivarta 2024, brought together a convergence of brilliant minds and cutting-edge technologies, captivating the audience with a spectacle of innovation and engineering excellence.

                  </p><br />
                </div>
                <div className="mt-4">
                  <Link href="/mechmania" className={buttonVariants()}>View Events</Link>
                </div>
              </Card>
              <Card className="rounded-lg p-4">
                <Image
                  src="/innovation-management.jpg"
                  alt="innovation management"
                  className="mb-4 rounded-lg"
                  width={400}
                  height={200}
                />
                <h3 className="text-lg font-semibold">Innovation Management</h3>
                <div className="mt-4">
                  {/* Additional event information */}
                  <p>At the heart of our technological extravaganza at Techno Vivarta 2024 lie the Innovation Management events, providing a platform for bright minds to converge, collaborate, and catalyze groundbreaking ideas. In an era dominated by rapid advancements, these events are designed to explore the frontiers of innovation, pushing the boundaries of what is possible.

                  </p><br />
                </div>
                <div className="mt-4">
                  <Link href="/innovation-management" className={buttonVariants()}>View Events</Link>
                </div>
              </Card>
              <Card className="rounded-lg p-4">
                <Image
                  src="/fun-events.jpg"
                  alt=""
                  className="mb-4 rounded-lg"
                  width={400}
                  height={200}
                />
                <h3 className="text-lg font-semibold">Fun Events</h3>
                <div className="mt-4">
                  {/* Additional event information */}
                  <p>Prepare for a thrilling ride through the lighter side of technology at Techno Vivarta 2024! In addition to the cutting-edge innovations and fierce competitions, we present an array of fun events that promise to inject joy, laughter, and camaraderie into this tech-centric celebration. Join us for a celebration where the world of technology meets the joy of carnival!</p><br />
                </div>
                <div className="mt-4">
                  <Link href="/fun-events" className={buttonVariants()}>View Events</Link>
                </div>
              </Card>
              <Card className="rounded-lg p-4">
                <Image
                  src="/designing.jpg"
                  alt="designing"
                  className="mb-4 rounded-lg"
                  width={400}
                  height={200}
                />
                <h3 className="text-lg font-semibold">Designing</h3>
                <div className="mt-4">
                  {/* Additional event information */}
                  <p>In this era of rapid technological advancement, design plays a pivotal role in shaping user experiences, solving complex problems, and driving business success. Techno Vivarta 2024 brings you designing challenges and competitions will provide participants with a platform to showcase their creativity and problem-solving abilities, with exciting prizes up for grabs.</p><br />
                </div>
                <div className="mt-4">
                  <Link href="/designing" className={buttonVariants()}>View Events</Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Events;
