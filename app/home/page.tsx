"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
    BiSolidBookOpen,
    BiSolidGroup,
    BiTime,
} from "react-icons/bi"
import { MdExplore, MdOutlineLocationOn } from "react-icons/md"

import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { client, urlFor } from "../../sanity"
import "animate.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { Input } from "@/components/ui/input"
interface Event {
    _id: string
    title: string
    date: string
    shortDescription: string
    venue: string
    time: string
    image: string // Adjust the type as per your actual data structure
    rsvplink: string
}

export default function Home() {
    // const [events, setEvents] = useState<Event[]>([])
    const h1Ref = useRef(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Collect form data
        const formData = new FormData(e.target as HTMLFormElement)

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxMnihMfCeeGsPAic8waMfMwmr0XUHKgx1Q57BCjzYclEkJWBgSwHaEW9Qqq7hd2EHI0g/exec",
                {
                    method: "POST",
                    body: formData,
                }
            )

            if (response.ok) {
                alert("Thanks for subscribing to our newsletter!")
            } else {
                // Handle error, e.g., show an error message
                console.error("Submission failed due to an error.")
            }
        } catch (error) {
            console.error("An error occurred:", error)
        }
    }
    const events: Event[] = [
        {
            _id: "1",
            title: "IDEATHON",
            date: "2024-11-21",
            shortDescription: "Ignite Your Imagination: Join the Ideathon Extravaganza ‼ Are you ready to showcase your innovative thinking and collaborate with like-minded visionaries? Join us at our IDEATHON Win Prizes and Certificates!!! Receive Feedbacks and Guidences✨ Maximum team of 4",
            venue: "TIU",
            time: "10:00 AM - 5:00 PM",
            image: "/comingEvent1.jpeg",
            rsvplink: "https://forms.gle/FRUEgw3xVd8fpyE17"
        },
        {
            _id: "2",
            title: "ROBOTICS WORKSHOP",
            date: "2024-11-18",
            shortDescription: `Step into a world of wonder at our Robotics Workshop and Bot Showcase Event! 
            Meet the Champions: Learn from the Blackbird Robotix Team 🎓, renowned for their exceptional skills and multiple competition victories! 🏆
            Interactive Experiences: Engage with live demonstrations, hands-on workshops, and expert insights that will ignite your passion for robotics. 🌍💡`,
            venue: "Seminar Hall",
            time: "2pm onwards",
            image: "/comingEvent2.jpeg",
            rsvplink: " https://forms.gle/JZ3cWC2eFiQ4GJ919 "
        },
        {
            _id: "3",
            title: "Scavenger Hunt: A Fun-Filled Adventure!",
            date: "2024-11-18",
            shortDescription: `Join us for an exciting scavenger hunt on November 16th! organized by TEAM TAKSHILA. Put your problem-solving skills to the test as you race against the clock to find hidden clues and complete challenges. Gather your team, wear your competitive shoes, and be prepared for a day of adventure and fun.`,
            venue: "TECHNO INDIA UNIVERSITY SEMINAR HALL",
            time: "12pm onwards",
            image: "/comingEvent3.jpeg",
            rsvplink: ""
        },
        {
            _id: "4",
            title: "BLAST OFF",
            date: "2024-11-19",
            shortDescription: `BLAST OFF with Team MechMania! Ready to Soar to New Heights? 
            Join Team MechMania at the most thrilling Bottle Rocket event of the year — BLAST OFF! Experience the rush as teams race to see who can launch their rockets the highest and farthest!`,
            venue: "TECHNO INDIA UNIVERSITY",
            time: "1pm onwards",
            image: "/comingEvent4.jpeg",
            rsvplink: "https://forms.gle/hBCHCtNKwtipMCnk9"
        },
    

    ]

    useEffect(() => {


        // const query = '*[_type == "event" && isPastEvent == false]'
        // client
        //     .fetch<Event[]>(query) // Specify the type here
        //     .then((data: Event[]) => setEvents(data)) // Cast the data to Event[]
        //     .catch((error) => console.error("Error fetching event data:", error))

        AOS.init()

        let i = 0
        const increment = 0.1

        function bgGradientAnimation() {
            i += increment

            if (i >= 100) {
                i = 0 // Reset to 0 when it reaches 100 to create a continuous loop
            }

            if (h1Ref.current) {
                ; (
                    h1Ref.current as HTMLHeadingElement
                ).style.backgroundImage = `linear-gradient(to right, #8d8d8d ${i - 10
                }%, #fff ${i}%, #8d8d8d ${i + 10}%)`
            }

            requestAnimationFrame(bgGradientAnimation)
        }

        bgGradientAnimation()
    }, [])

    return (
        <div>
            <div className="background"></div>
            <section className="container flex h-screen items-center justify-center text-center">
                <div className="max-w-[1160px]">
                    <h1
                        id="h1"
                        ref={h1Ref}
                        className="heading-main animate__animated animate__zoomIn bg-clip-text text-center text-6xl leading-tight tracking-tighter text-transparent md:text-8xl lg:text-9xl"
                    >
                        Thoughts Beyond Evolution
                    </h1>
                    <div className="animate__animated animate__fadeInUp animate__delay-1s mt-14 flex justify-center">
                        <Link href="/">
                            <button className="cta-btn">COMING SOON...</button>
                        </Link>

                    </div>
                </div>
            </section>
            <section className="py-10">
                <h2 className="mb-12 text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-3xl">
                    Community where you
                </h2>
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Card
                            className="bg-transparent backdrop-blur-md"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Explore&nbsp;
                                    <MdExplore size={30} />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Unlock your potential with our hands-on technology
                                    workshops. From coding to robotics, we offer a wide range
                                    of workshops for all skill levels.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card
                            className="bg-transparent backdrop-blur-md"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Learn&nbsp;
                                    <BiSolidBookOpen size={30} />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Embark on a journey of continuous learning with us.
                                    Whether you are looking to acquire new skills, advance
                                    your career, or simply feed your curiosity, our learning
                                    opportunities have you covered.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card
                            className="bg-transparent backdrop-blur-md"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Connect&nbsp;
                                    <BiSolidGroup size={30} />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Connect with people who share your passion for technology.
                                    Attend tech talks, networking events, and hackathons. Stay
                                    updated with the latest tech trends and forge valuable
                                    connections in the tech industry.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="py-10" id="learn-more">
                <h2 className="mb-12 text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-3xl">
                    About Us
                </h2>
                <div className="container mx-auto">
                    <Card
                        className="mb-12 grid grid-cols-1 gap-6 p-6 md:grid-cols-2"
                        data-aos="fade-right"
                    >
                        <div>
                            <Image
                                src="/who-are-we.jpg"
                                alt="Who Are We"
                                className="rounded-lg shadow-lg"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-3xl">
                                Who Are We
                            </h2>
                            <article className="lg:text-md md:text-l mt-4">
                                <p>
                                    Techno Vivarta is not merely a tech club; it represents
                                    the beating heart of innovation and collaboration within
                                    the dynamic ecosystem of Techno India University. Far more
                                    than just an extracurricular activity, it has evolved into
                                    a tightly-knit, supportive community where individuals
                                    from various backgrounds converge, bound by their shared
                                    ardor for technological prowess and pioneering ideas.
                                </p>{" "}
                                <br />
                                <p>
                                    Our core objective is to equip students with the tools,
                                    insights, and experiences indispensable for excelling in
                                    the rapidly shifting landscape of technology. We believe
                                    in fostering not only technical expertise but also a
                                    holistic understanding of the societal implications and
                                    ethical dimensions of technology.
                                </p>{" "}
                                <br />
                                <p>
                                    Within Techno Vivarta, we offer an expansive range of
                                    domains and opportunities for exploration. We understand
                                    that the beauty of technology lies in its multifaceted
                                    nature, and thus, we ensure that every member, no matter
                                    their tech interests, discovers their rightful place
                                    within our community.
                                </p>
                            </article>
                        </div>
                    </Card>
                    <Card
                        className="mb-12 grid grid-cols-1 gap-6 p-6 md:grid-cols-2"
                        data-aos="fade-right"
                    >
                        <div>
                            <Image
                                src="/our-story.jpg"
                                alt="Our Story"
                                className="rounded-lg shadow-lg"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-3xl">
                                Our Story
                            </h2>
                            <article className="lg:text-md md:text-l mt-4">
                                <p>
                                    Founded in 2016, Techno Vivarta embarked on a remarkable
                                    journey fueled by a collective passion for technology,
                                    innovation, and collaboration. Our story is one of
                                    constant evolution, driven by the desire to empower
                                    aspiring technocrats and tech enthusiasts with the skills
                                    and experiences needed to thrive in an ever-changing
                                    technological landscape.
                                </p>{" "}
                                <br />
                                <p>
                                    In the early days, a group of visionary students
                                    recognized the need for a platform where ideas could
                                    flourish, hands-on learning could take center stage, and
                                    friendships could be forged through a shared love for
                                    technology. Thus, Techno Vivarta was born as the tech club
                                    of Techno India University.
                                </p>{" "}
                                <br />
                                <p>
                                    The initial spark that ignited this journey was a simple
                                    conversation among a handful of students in a dimly lit
                                    dorm room. They pondered the potential of technology to
                                    reshape the world and saw the untapped reservoirs of
                                    talent within their university. With unwavering
                                    determination, they set out to create a community where
                                    these talents could be nurtured and celebrated.
                                </p>{" "}
                            </article>
                        </div>
                    </Card>
                    <Card
                        className="mb-12 grid grid-cols-1 gap-6 p-6 md:grid-cols-2"
                        data-aos="fade-right"
                    >
                        <div>
                            <Image
                                src="/our-mission.jpg"
                                alt="Our Mission"
                                className="rounded-lg shadow-lg"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-3xl">
                                Our Mission
                            </h2>
                            <article className="lg:text-md md:text-l mt-4">
                                <br />
                                <p>
                                    Our mission is crystal clear: we are here to empower
                                    students with the knowledge and experiences essential not
                                    only for survival but for thriving in the ever-evolving
                                    technology landscape. In a world where the digital terrain
                                    shifts as swiftly as the wind, we stand as a guiding
                                    beacon, equipping our members with the skills and insights
                                    they need to successfully navigate this dynamic realm.
                                </p>{" "}
                                <br />
                                <p>
                                    Within Techno Vivarta, we open doors to a wide and
                                    intriguing spectrum of tech domains. We firmly believe
                                    that the allure of technology extends far and wide,
                                    encompassing a myriad of interests, and we are committed
                                    to ensuring that every member discovers their unique path
                                    to flourish.
                                </p>{" "} <br />
                                <p>Picture us as a trusted companion on your technological odyssey, a beacon that not only illuminates the path but also provides a compass for your exploration. We are here to offer unwavering support, nurture your curiosity, and assist you in uncovering the boundless opportunities that technology has to offer.</p>
                            </article>
                        </div>
                    </Card>
                </div>
            </section>
            <section className="container mx-auto">
                <h2 className="mb-9 text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-3xl">
                    Our Leaders
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <Card className="flex flex-col items-center justify-center" data-aos="fade-up"
                        data-aos-delay="100">
                        <CardHeader>
                            <Image
                                src="/samiran.jpeg"
                                alt="Prof. Samiran Chattopadhyay"
                                className="h-[200px] w-[200px] overflow-hidden rounded-full bg-white"
                                style={{ objectFit: "contain", objectPosition: "center" }}
                                width={200}
                                height={200}
                            />
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center text-center">
                            <div>
                                <h4 className="text-lg font-semibold">Prof. Samiran Chattopadhyay</h4>
                                <p className="text-sm text-gray-600">Pro Vice Chancellor, Techno India University</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col items-center justify-center" data-aos="fade-up"
                        data-aos-delay="400">
                        <CardHeader>
                            <Image
                                src="/sujoy.jpg"
                                alt=""
                                className="h-[200px] w-[200px] overflow-hidden rounded-full"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                width={200}
                                height={200}
                            />
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center text-center">
                            <div>
                                <h4 className="text-lg font-semibold">Dr. Sujoy Biswas</h4>
                                <p className="text-sm text-gray-600">CEO, Techno India Group</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col items-center justify-center" data-aos="fade-up"
                        data-aos-delay="200">
                        <CardHeader>
                            <Image
                                src="/rina.jpg"
                                alt="Dr. Rina Paladhi"
                                className="h-[200px] w-[200px] overflow-hidden rounded-full bg-white"
                                style={{ objectFit: "contain", objectPosition: "center" }}
                                width={200}
                                height={200}
                            />
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center text-center">
                            <div>
                                <h4 className="text-lg font-semibold">Dr. Rina Paladhi</h4>
                                <p className="text-sm text-gray-600">Director, Techno India Group</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col items-center justify-center" data-aos="fade-up"
                        data-aos-delay="300">
                        <CardHeader>
                            <Image
                                src="/ishan.jpeg"
                                alt="Dr. Ishan Ghosh"
                                className="h-[200px] w-[200px] overflow-hidden rounded-full bg-white"
                                style={{ objectFit: "contain", objectPosition: "center" }}
                                width={200}
                                height={200}
                            />
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center text-center">
                            <div>
                                <h4 className="text-lg font-semibold">Dr. Ishan Ghosh</h4>
                                <p className="text-sm text-gray-600">Administration Head, Techno India University</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col items-center justify-center" data-aos="fade-up"
                        data-aos-delay="400">
                        <CardHeader>
                            <Image
                                src="/ashoke.jpeg"
                                alt=""
                                className="h-[200px] w-[200px] overflow-hidden rounded-full"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                width={200}
                                height={200}
                            />
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center text-center">
                            <div>
                                <h4 className="text-lg font-semibold">Dr. Ashoke Kumar Paul</h4>
                                <p className="text-sm text-gray-600">Convener, Techno Vivarta</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>


            <section className="py-10">
                <h2 className="mb-12 text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-3xl">
                    Discover Your Interests
                </h2>
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Card
                            className="bg-transparent backdrop-blur-md"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Computing
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-justify">
                                    At Techno Vivarta, the Computing domain is where the
                                    digital world comes to life. Whether you are a coding
                                    aficionado, a AI enthusiast, or simply curious about the
                                    latest software developments, this domain is your
                                    playground. Our Computing experts and workshops will
                                    sharpen your programming skills, help you explore
                                    cutting-edge technologies, and provide you with a solid
                                    foundation in the ever-evolving world of software
                                    development.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card
                            className="bg-transparent backdrop-blur-md"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Robotics
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-justify">
                                    Dive into the world of Robotics at Techno Vivarta and let
                                    your creativity and innovation soar. Here, you&apos;ll
                                    learn to build robots that can navigate complex terrains,
                                    perform precise tasks, and even engage in thrilling
                                    competitions. Our Robotics enthusiasts and mentors will
                                    guide you through the intricate process of designing,
                                    programming, and refining your robotic creations, paving
                                    the way for you to be at the forefront of the robotics
                                    revolution.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card
                            className="bg-transparent backdrop-blur-md"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Gaming
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-justify">
                                    For those who live and breathe gaming, our Gaming domain
                                    is a virtual paradise. Dive into the world of game design,
                                    development, and eSports. Whether you&apos;re interested
                                    in creating your own games, mastering competitive gaming,
                                    or simply indulging in the latest gaming trends, Gaming
                                    domain is your haven for all things gaming.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card
                            className="bg-transparent backdrop-blur-md"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Mechmania
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-justify">
                                    Mechmania is where engineering meets innovation. In this
                                    domain, you&apos;ll delve into the exciting realm of
                                    mechanical engineering, designing and building everything
                                    from intricate machinery to powerful vehicles. Our
                                    Mechmania experts and hands-on projects will fuel your
                                    passion for mechanics and engineering, enabling you to
                                    engineer solutions for real-world challenges.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card
                            className="bg-transparent backdrop-blur-md"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Innovation & Management
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-justify">
                                    In today&apos;s fast-paced world, innovation and effective
                                    management are essential skills. At Techno Vivarta, our
                                    Innovation & Management domain equips you with the tools
                                    to think creatively, solve problems, and lead teams.
                                    Explore entrepreneurial opportunities, refine your
                                    leadership skills, and learn the art of strategic thinking
                                    in this domain.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card
                            className="bg-transparent backdrop-blur-md"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Designing
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-justify">
                                    Designing is the art of turning ideas into visual and
                                    interactive masterpieces. Our Designing domain celebrates
                                    creativity and aesthetics, offering a platform to explore
                                    graphic design, user experience (UX) design, web design,
                                    and more. Join us to unlock your creative potential and
                                    turn your visions into captivating designs.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card
                            className="bg-transparent backdrop-blur-md"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Fun Events
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-justify">
                                    While we are serious about technology, we also know how to
                                    have a good time. Our Fun Events domain is all about
                                    creating memorable experiences and building lasting
                                    friendships. From quirky tech-themed parties to outdoor
                                    adventures, this domain ensures that your journey in
                                    Techno Vivarta is filled with laughter and camaraderie.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="bg-background py-8 md:py-12">
                <div className="container mx-auto">
                    <h2 className="text-center text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-4xl">
                        Upcoming Events
                    </h2>
                    <p className="mb-9 mt-3 text-center text-lg md:text-xl lg:text-2xl">
                        Join us for our upcoming tech events and stay updated with the
                        latest in technology.
                    </p>
                    <div className="mt-9x  grid grid-cols-1 gap-4 md:grid-cols-3">
                        {events.map((event) => (
                            <Card key={event._id} className="rounded-lg p-4">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    className="mb-4 rounded-lg"
                                    width={400}
                                    height={200}
                                />
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                <p className="mt-1 text-sm text-gray-500">{event.date}</p>
                                <div className="mt-4">
                                    {/* Additional event information */}
                                    <p>{event.shortDescription}</p><br />
                                    <p className="mb-3 flex gap-2"><MdOutlineLocationOn size={20} /> {event.venue}</p>
                                    <p className="flex gap-2"><BiTime size={20} /> {event.time}</p>
                                </div>
                                <div className="mt-6">
                                    <Link href={event.rsvplink} className={buttonVariants()}>RSVP Now</Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-9 text-center">
                        <Link
                            href="/events"
                            className={buttonVariants()}
                        >
                            View All Events
                        </Link>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Card data-aos="fade-up" data-aos-delay="100">
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Connect with us!
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    <p className="mb-5">
                                        Connect with us to get latest updates.
                                    </p>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="flex flex-col items-center justify-center md:flex-row"
                                    >
                                        <Input
                                            type="email"
                                            id="email"
                                            name="Email"
                                            className="w-full rounded-md border bg-transparent p-2 text-center md:mr-2 md:w-2/3"
                                            required
                                            placeholder="Enter your email address"
                                        />
                                        <Button type="submit" className="mt-5 md:mt-0">
                                            Submit
                                        </Button>
                                    </form>
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card data-aos="fade-up" data-aos-delay="200">
                            <CardHeader>
                                <CardTitle className="flex justify-center">Blogs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="mb-5">
                                    Learn in-depth tech from our exclusive blogs.
                                </CardDescription>
                                <Link href="/blogs" className="uppercase">
                                    Read Now
                                </Link>
                            </CardContent>
                        </Card>
                        <Card data-aos="fade-up" data-aos-delay="300">
                            <CardHeader>
                                <CardTitle className="flex justify-center">
                                    Share Your Feedbacks!
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="mb-5">
                                    Share your valuable feedbacks and help us improve.
                                </CardDescription>
                                <Link href="/contact" className="uppercase">
                                    Share your feedback!
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
