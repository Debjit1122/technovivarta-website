"use client"
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";
function Events() {

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
  const events: Event[] = [
    {
        _id: "1",
        title: "POSEIDON: The Ultimate Battle Beneath the Waves",
        date: "2025-03-9",
        shortDescription: `Get ready for the most innovative and thrilling competition of the year : POSEIDON- the Aqua Robot Soccer War.
        Register with your Team. Each Team should consist of two members.
        * Bots for the event will be provided to each team.
        `,
        venue: "TECHNO INDIA UNIVERSITY",
        time: "9 AM  onwards",
        image: "/temp/9.jpg",
        rsvplink: "https://forms.gle/K6qyX4hRTD7qMwww9"
    },
    {
      _id: "2",
      title: "POWER TRUSS : Building Bridges to Success",
      date: "2025-03-08 2025-03-09",
      shortDescription: `Get ready to harness the power of innovation and construction as you design, build, and test your very own bridge capable of supporting heavy loads.
      👉Each Team should consist of two members. Teams will construct their bridges using provided materials such as ice cream sticks, glue and feviquick.
      `,
      venue: "TECHNO INDIA UNIVERSITY",
      time: "12 PM  onwards",
      image: "/temp/11.jpg",
      rsvplink: "https://forms.gle/PuKjbGWrf7QHehPQ7"
  },
  {
    _id: "3",
    title: "Blast Off! The Ultimate Water Bottle Rocket Event",
    date: "2025-03-10",
    shortDescription: `Get ready to launch your creativity sky-high as we delve into the thrilling world of DIY rocket science.Whether you're a novice explorer or a seasoned rocketeer, prepare for an unforgettable experience as we count down to lift-off!
    `,
    venue: "TECHNO INDIA UNIVERSITY",
    time: "12 PM  onwards",
    image: "/temp/10.jpg",
    rsvplink: "https://forms.gle/McxZmZ1dfDfdrdfx8"
},
{
  _id: "4",
  title: "RoboWar 15kg: The Ultimate Battle of Steel and Strategy",
  date: "2025-03-09",
  shortDescription: `Prepare for RoboWar 2025 , where engineering meets destruction in the most intense robotic showdown! Watch as custom-built combat bots clash in a high-stakes battle of power, precision, and strategy. Only the toughest will withstand the chaos—will your bot reign supreme?
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "12 PM  onwards",
  image: "/temp/15.jpg",
  rsvplink: "https://forms.gle/jiYCQT8eHngnQhKm8"
},

{
  _id: "5",
  title: "DOGE WAR: Forged in Steel, Tested in Battle! ⚔🔥(7 kg)",
  date: "2025-03-09",
  shortDescription: `Where Metal Clashes, Sparks Fly, and Champions Rise!
Step into the ultimate battleground, where engineering meets adrenaline and robots engage in a high-octane spectacle of destruction. Feel the thunderous roar of motors, witness the precision of strategic combat, and experience the relentless pursuit of victory.
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "12 PM  onwards",
  image: "/dogewar.jpeg",
  rsvplink: "https://forms.gle/jiYCQT8eHngnQhKm8"
},
{
  _id: "6",
  title: "RoboSoccer: Where Innovation Meets the Game",
  date: "2025-03-09",
  shortDescription: `Step onto the future of sports, where cutting-edge robotics and high-energy competition collide!
⚽ Watch autonomous robots dribble, pass, and score with unmatched precision and lightning speed.
⚡ Experience the thrill of a game where technology and athleticism redefine the playing field.
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "12 PM  onwards",
  image: "/temp/17.jpg",
  rsvplink: "https://forms.gle/jiYCQT8eHngnQhKm8"
},
{
  _id: "7",
  title: "Line Follower: Precision in Motion! ",
  date: "2025-03-09",
  shortDescription: `Prepare to witness a breathtaking fusion of speed, accuracy, and cutting-edge technology!
🚀 Watch as autonomous robots navigate intricate paths with flawless precision, guided by advanced sensors and lightning-fast reflexes. 
🛠 Experience the result of months of innovation, programming, and problem-solving— brought to life in real-time competition.
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "12 PM  onwards",
  image: "/temp/18.jpg",
  rsvplink: "https://forms.gle/jiYCQT8eHngnQhKm8"
},
{
  _id: "8",
  title: "Death Race: Pushing the Limits of Innovation and Speed",
  date: "2025-03-09",
  shortDescription: `⚡ Where Velocity Meets Strategy in the Ultimate Battle of Machines! 
Brace yourself for an electrifying showdown as autonomous bots race through a relentless gauntlet—navigating sharp turns, leaping over obstacles, and dodging unforeseen challenges with split-second precision.

  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "12 PM  onwards",
  image: "/temp/19.jpg",
  rsvplink: "https://forms.gle/jiYCQT8eHngnQhKm8"
},
{
  _id: "9",
  title: "Scavenger Hunt: A Fun-Filled Adventure!",
  date: "2025-03-08",
  shortDescription: `Join us for an exciting scavenger hunt on MARCH 8th! Put your problem-solving skills to the test as you race  against the clock to find hidden clues and complete challenges. Gather your team, wear your competitive shoes, and be prepared for a day of adventure and fun.
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/20.jpeg",
  rsvplink: "https://docs.google.com/forms/d/e/1FAIpQLSdkRFR-T8sV58Zyu3kcD_XDctb1WA09AbLQ2-5Yn-adO7BqWQ/viewform"
},
{
  _id: "10",
  title: "Ultimate Food Eating Challenge!",
  date: "2025-03-10",
  shortDescription: `Are You Hungry Enough to Be the Champion?
Think you can devour more than the competition? Prove it! Welcome to the Ultimate Food Eating Challenge, where only the biggest appetites and the fastest eaters survive. This is not for the weak—this is a battle of speed, stamina, and pure hunger.
The Rules Are Simple, But the Challenge Is Brutal:
🔥 Eat as much as you can within the time limit.
🔥 No leftovers, no mercy! Every bite counts.
🔥 Tap out, and you're out! There's no shame in losing, but there’s no glory either.

  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "12 PM  onwards",
  image: "/temp/21.jpeg",
  rsvplink: "https://docs.google.com/forms/d/e/1FAIpQLScSR5lCKDNxqafEa5zxRNkiFGRLkPuvZflL5m9n9-IyDFUELw/viewform"
},
{
  _id: "11",
  title: "LIVE LUDO SHOWDOWN! 🎲🔥",
  date: "2025-03-09",
  shortDescription: `Roll the dice, make your moves, and outsmart your opponents in the ultimate Live Ludo Challenge! Think you have the strategy and luck to dominate the board? Prove it in real time and claim victory!

🏆 Fast-paced, high-energy battles
🎁 Exciting prizes for winners
⚡ Live action, real competition.
Don't just play—compete, win, and rule the board! Sign up now!
AND WIN EXCITING CASH PRIZES
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "1 PM  onwards",
  image: "/temp/23.jpg",
  rsvplink: "https://docs.google.com/forms/d/e/1FAIpQLScZNiDp5xat-GKZSwtjRhuMN9ZSB_155rPv8Sa2RwT3I_maPg/viewform?usp=header"
},
{
  _id: "12",
  title: "Superbike Showcase",
  date: "2025-03-10",
  shortDescription: `Get up close with the finest superbikes, where engineering meets adrenaline! Witness sleek designs, cutting-edge technology, and the raw power that defines the ultimate riding experience.
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "1 PM  onwards",
  image: "/temp/22.jpg",
  rsvplink: ""
},
{
  _id: "13",
  title: "Pitch to Deck: Turn Ideas into Investments!",
  date: "2025-03-09",
  shortDescription: `Have a game-changing startup idea? Pitch to Deck is your chance to present it to top CEOs, investors, and industry leaders. Impress the judges, win exciting cash prizes, and network with experts!
Seize this opportunity to bring your vision to life!

  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/26.jpeg",
  rsvplink: "https://forms.gle/EFs9WxEwBmwit5X69"
},
{
  _id: "14",
  title: "Chess",
  date: "2025-03-08 2025-03-09",
  shortDescription: `♟ Unleash Your Inner Grandmaster! ♟
Step into the arena of intellect and strategy—where every move counts and only the sharpest minds prevail! Join the Ultimate Chess Tournament and prove your mastery over the board.
🔥 High-stakes battles of wit and skill
⚡ Real-time clashes with the best minds
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/25.jpeg",
  rsvplink: "https://forms.gle/6sb7NFdvrEzjj1eB9"
},
{
  _id: "15",
  title: "FC’25",
  date: "2025-03-08 to 2025-03-10",
  shortDescription: `♟ Unleash Your Inner Grandmaster! ♟
Step into the arena of intellect and strategy—where every move counts and only the sharpest minds prevail! Join the Ultimate Chess Tournament and prove your mastery over the board.
🔥 High-stakes battles of wit and skill
⚡ Real-time clashes with the best minds
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/28.jpeg",
  rsvplink: "https://docs.google.com/forms/d/e/1FAIpQLSedjOYpg5ebu4PVxmPe15FITzX0FdpC9rTvFJnliFlGW5pl3Q/viewform?usp=sharing"
},
{
  _id: "16",
  title: "BGMI",
  date: "2025-03-08 to 2025-03-10",
  shortDescription: `🎮 Battlegrounds Mobile India: Survive, Conquer, Dominate! 🔥
Gear up, drop in, and battle your way to victory in the ultimate BGMI Tournament! Whether you’re a sniper, a rusher, or a strategist—this is your chance to prove your skills and take home the win.
🔥 Intense battle royale action
⚡ Compete against the toughest squads in real-time combat
Think you have what it takes to be the last one standing? Squad up and take your shot!

  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/1.jpg",
  rsvplink: "https://docs.google.com/forms/d/1Redi0zt980RhLk8Teh5IcxnT_HoLg_T79ZpoZMgf1cg/edit?usp=drivesdk"
},
{
  _id: "16",
  title: "Valorant",
  date: "2025-03-08 to 2025-03-10",
  shortDescription: `🎮 VALORANT: Aim. Strategize. Dominate! 🔥
Assemble your squad, lock in your agents, and prepare for an intense VALORANT Tournament! Precision, teamwork, and strategy will decide who controls the battlefield. Will you rise to the top or get outplayed?
🔥 Tactical 5v5 battles with high-stakes action
⚡ Face off against top teams in real-time combat
Think you have the skills to clutch the win? Lock and load—it’s game time!
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/27.jpeg",
  rsvplink: "https://docs.google.com/forms/d/e/1FAIpQLSc0VDnlZwGQ0jEh2DZUVAy_2UZ6YxTrE3ry1ExXyH_Wz7gxug/viewform?usp=sharing"
},

{
  _id: "18",
  title: "Road To Valor",
  date: "2025-03-09",
  shortDescription: `🎮 Road to Valor: Forge Your Path to Victory! ⚔️
The battlefield awaits! Summon your army, devise your strategy, and lead your forces to glory in the ultimate Road to Valor Tournament. Only the strongest commanders will rise—will you be one of them?
🔥 Strategic battles that test your skills
⚡ Real-time clashes against top tacticians
Command. Conquer. Dominate. Are you ready to seize victory?

  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/8.jpg",
  rsvplink: "https://forms.gle/Ps5MxEfma7Y11ZCx7"
},
{
  _id: "19",
  title: "Real Cricket 24",
  date: "2025-03-08",
  shortDescription: `🏏 Real Cricket 24: Play Hard, Win Big! 🎮
Step onto the virtual pitch and showcase your batting brilliance and bowling mastery in the ultimate Real Cricket 24 Tournament! Precision, strategy, and quick reflexes will decide the true champion. Are you ready to dominate the game?
🔥 Thrilling real-time cricket action
⚡ Compete, conquer, and claim victory
The stakes are high—will you rise to the challenge?
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/4.jpg",
  rsvplink: "https://forms.gle/rKSxkXFBquE49MFv8"
},
{
  _id: "20",
  title: "Bullet Echo",
  date: "2025-03-09",
  shortDescription: `🔫 Bullet Echo: Stealth, Strategy, Survival! 🎮
Step into the shadows, team up, and eliminate your enemies in the ultimate Bullet Echo Tournament! Use tactics, precision, and teamwork to outplay your opponents and be the last one standing.
🔥 Tactical battles with intense action
⚡ Real-time fights where every move matters
Gear up, stay sharp, and own the battlefield! Are you ready?
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/3.jpg",
  rsvplink: "https://forms.gle/WHXcZWd5WBivesrdA"
},

{
  _id: "21",
  title: "Cookie Run",
  date: "2025-03-08",
  shortDescription: `🍪 Cookie Run: Dash, Dodge & Dominate! 🎮
Get ready to run, jump, and outpace the competition in the ultimate Cookie Run Tournament! Speed, strategy, and quick reflexes will determine who takes the lead and claims victory!
🔥 Fast-paced, action-packed races
⚡ Real-time competition with thrilling challenges
Think you have what it takes to be the fastest Cookie? The race is on!
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/7.jpg",
  rsvplink: "https://forms.gle/igFAmSveq9RVHJnW6"
},
{
  _id: "22",
  title: "Hackquest",
  date: "2025-03-08 to 2025-03-09",
  shortDescription: `🛠 Key Details:
Solve real-world problems in Healthcare, AI, Cybersecurity, Education, Blockchain, and more!
Team Size: 1-4 members
Select 1 Problem Statement and compete for exciting prizes 🏆
Tackle impactful challenges 🌍
Network with industry experts 🤝
Showcase your skills and win big! 💵
💻 Open to all students, professionals, and innovators
⏳ Limited spots – don’t miss out! Let’s innovate together
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "12 PM  onwards",
  image: "/temp/24.png",
  rsvplink: "https://lemonade.social/e/AigjXHfi"
},
{
  _id: "23",
  title: "Webyard",
  date: "2025-03-08",
  shortDescription: `🎨 Think You Can Turn Designs into Reality? 🎨
Join us at Webyard, the frontend making contest organized by Takshila, the tech club of Techno India University!

🕒 2 Hours
🖥 Code 2 Webpages from Given Designs

Show off your development skills, bring our designs to life, and compete with the best frontend minds on campus!
This is your chance to prove your coding prowess and turn pixels into perfection!
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/13.jpg",
  rsvplink: "https://forms.gle/qgfGRCpK8rv9tsaa8"
},
{
  _id: "24",
  title: "Codex",
  date: "2025-03-09",
  shortDescription: `🚀 Think You’ve Got What It Takes to Crack the Code? 🚀
Join us at Codex, the coding contest brought to you by Takshila, the tech club of Techno India University!

🕒 2 Hours
❓ 4 Challenging Questions

Put your problem-solving skills to the test, compete with the best, and show everyone what you’re made of!
This is your chance to shine and prove you’ve got the brains to beat the toughest coding challenges!
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/temp/12.jpg",
  rsvplink: "https://forms.gle/qgfGRCpK8rv9tsaa8"
},

{
  _id: "25",
  title: "Cosplay",
  date: "2025-03-10",
  shortDescription: `Step into a world where fantasy meets reality! From iconic heroes to legendary villains, witness stunning transformations as cosplayers bring their favourite characters to life with passion, creativity, and incredible craftsmanship.
  `,
  venue: "TECHNO INDIA UNIVERSITY",
  time: "11 AM  onwards",
  image: "/cosplay.jpg",
  rsvplink: ""
},

]

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
          </div>
        </div>
      </section>
    </div>

  );
}

export default Events;
