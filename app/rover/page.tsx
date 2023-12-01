import "../../styles/rover.css"
import Image from "next/image"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { FaRegCalendar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
const games = [
    {
        name: "BGMI",
        image: "/bgmi.jpg",
        description: "Classic Matches will be between 40 teams where they will be divided into 4 groups. The match will be played on different classic maps. From each group the top 4 teams will be qualified for the finals.",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdkPnyws0cE36FbMggU1l9ivZfpEZipxqh6YNjOJ_CVqJEfvQ/viewform",
        rulebookLink: "https://drive.google.com/file/d/1nUCf04UlxZxjztuQNRt5Fr6_140y_UCs/view",
        date: "December 9, 2023",
        place: "Techno India University",
    },
    {
        name: "Valorant",
        image: "/valorant.png",
        description: "The tournament will include 16 teams, start with online preliminaries knockout rounds and end with LAN finals. Featuring 7 favourite maps in a 5v5 setting.",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfG6EYvvGmLedwZa7QPt6N8_rXO9S857Q1ZBTjz_qrTn0X44w/viewform",
        rulebookLink: "https://drive.google.com/file/d/1g1suO_jeU6lqnxzg8QlgaPEPs37aSSi0/view",
        date: "December 9, 2023",
        place: "Techno India University",
    },
    {
        name: "FC24",
        image: "/fc24.jpg",
        description: "One-day tournament with 16 players, 8 groups of 3, each player plays 2 matches lasting 10 mins, completing each group in 30 mins.",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfsaFsLA0TAD7yAl7OdMzw9FGknfvZuejLMk9qjt3RSi-xE9w/viewform",
        rulebookLink: "https://drive.google.com/file/d/1ED2GMfgr7-bcfy_VUmsEDWvykcHdMCsG/view",
        date: "December 9, 2023",
        place: "Techno India University",
    },
    {
        name: "E-Football",
        image: "/e-football.jpg",
        description: "Consists of 32 players will be divided into 8 groups played in single elimination format and in standard mode",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSer_WnUOI973mm3Rw_8c84eBjGoU1XoxaQICPtDq2BSOoMHTA/viewform",
        rulebookLink: "https://drive.google.com/file/d/1ckWDoDUMBZu2Wr6IalJ3zWgAW5605F8Q/view",
        date: "December 9, 2023",
        place: "Techno India University",
    },
    {
        name: "Chess",
        image: "/chess.png",
        description: "Chess, the timeless game of kings. Join us for a fun mix of both over-the-board and online matches on chess.com. Ready to outwit your opponent in the battle of the brains in ROVER 3.0?",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScjssJfWuugWRaeadRZndl4Wy1vxTmrA0BApjzytTCcEuVMsw/viewform",
        rulebookLink: "https://drive.google.com/file/d/1X8KqCYKaAMUocZMl5mzby_vQQ-_VjMun/view",
        date: "December 9, 2023",
        place: "Techno India University",
    },
    {
        name: "Cosplay",
        image: "/cosplay.jpg",
        description: "Cosplay extravaganza featuring creative costumes, character portrayals, and a vibrant community gathering for a day of imaginative self-expression and fun.",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeGGfirnGIFld84RT2RrdL0DjrlWVS1m2BrxrHELuy3w79TwA/viewform?pli=1",
        date: "December 9, 2023",
        place: "Techno India University",
    },
    {
        name: "VR Experience",
        image: "/vr.jpg",
        description: "Offers a transformative adventure, immersing you in boundless worlds, an exhilarating journey that blurs reality and fantasy, allowing uncharted exploration beyond limits.",
        date: "December 9, 2023",
        place: "Techno India University",
    },
    {
        name: "Showcase PC",
        image: "/showcase-pc.jpg",
        description: "Showcase Gaming offers a unique journey for gamers and spectators to experience AAA titles on high-end PCs, enhancing gameplay appreciation.",

        date: "December 9, 2023",
        place: "Techno India University",
    },
];

const Rover = () => {
    return (
        <div>
            <div className="rover-background"></div>
            <section className="container flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-8 max-w-[900px]">
                    <h1 className="subheading mb-12">unleash the gamer within</h1>
                    <h2 className="heading">
                        The Ultimate Gaming Prelude to Vivarta 2k24!
                    </h2>
                </div>
                <div className="hero-banner">
                    <Image src="/hero-banner.png" alt="" width={900} height={900} />
                </div>
            </section>
            <section className="container flex flex-col items-center justify-center py-16">
                <h1 className="section-subheading mb-2 text-center">What Awaits You at Rover</h1>
                <h2 className="section-heading mb-2 text-center">
                    Gear Up to Showcase Your Gaming Prowess
                </h2>
                <h3 className="section-description max-w-[800px] text-center">Engage in epic battles and test your skills across a spectrum of games. From strategic masterpieces to heart-pounding action, there’s a challenge for every gaming virtuoso.</h3>
                <div className="mt-12 flex flex-wrap gap-8">
                    {games.map((game, index) => (
                        <Card key={index} className="game-card max-w-[400px] rounded-none">
                            <CardHeader className="p-0">
                                <Image src={game.image} alt={game.name} width={400} height={400} className="h-60" />
                            </CardHeader>
                            <CardContent className="h-60 py-6">
                                <CardDescription className="mb-4 flex gap-4">
                                    <div className="flex">
                                        <FaRegCalendar />&nbsp;{game.date}
                                    </div>
                                    <div className="flex">
                                        <MdLocationPin />&nbsp;{game.place}
                                    </div>
                                </CardDescription>
                                <CardTitle className="mb-4 text-2xl font-bold">{game.name}</CardTitle>
                                <p>{game.description}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                {
                                    game.registrationLink && (
                                        <Button className={`${buttonVariants()} rounded-none`}>
                                            <a href={game.registrationLink}>Register</a>
                                        </Button>
                                    )}
                                {
                                    !game.registrationLink && (
                                        <Button className={`${buttonVariants()} rounded-none`}>
                                            On-Spot Registration
                                        </Button>
                                    )}
                                {game.rulebookLink && (
                                    <a href={game.rulebookLink} className="text-primary" rel="noreferrer" target="_blank">Rulebook</a>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Rover
