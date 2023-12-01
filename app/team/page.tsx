"use client"
import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { client, urlFor } from '../../sanity';
import Link from "next/link";
import 'animate.css';
// Define the TeamMember interface
interface TeamMember {
  _id: string;
  name: string;
  designation: string;
  domain: string;
  image: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  featured: boolean;
}

function Team() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const query = '*[_type == "team"]';
    client.fetch<TeamMember[]>(query)
      .then((data: TeamMember[]) => setTeam(data))
      .catch((error) => console.error('Error fetching team data:', error));
  }, []);

  // Filter team members by designation
  const domainLeads = team.filter((teamMember) => teamMember.designation === 'Domain Lead');
  const technicalLeads = team.filter((teamMember) => teamMember.designation === 'Technical Lead');
  const managementLeads = team.filter((teamMember) => teamMember.designation === 'Management Lead');
  const coreTeamMembers = team.filter((teamMember) => teamMember.designation === 'Member - Core Team');
  const executiveTeam = team.filter((teamMember) => teamMember.designation === 'Executive Team');

  const featuredDomainLeads = domainLeads.filter((teamMember) => teamMember.featured);
  const featuredTechnicalLeads = technicalLeads.filter((teamMember) => teamMember.featured);
  const featuredManagementLeads = managementLeads.filter((teamMember) => teamMember.featured);
  const featuredCoreTeamMembers = coreTeamMembers.filter((teamMember) => teamMember.featured);
  const featuredExecutiveTeam = executiveTeam.filter((teamMember) => teamMember.featured);

  return (
    <div>
      <div className="background-2"></div>
     <section className="teams-section">
      <div className="container mx-auto pt-7">
        <div className="animate__animated animate__fadeInUp mb-9 max-w-[800px]">
          <h2 className="mb-6 text-3xl font-extrabold leading-tight">
            Team
          </h2>
          <p className="text-lg md:text-xl lg:text-xl">
            At the helm of Techno Vivarta, you&apos;ll find our invaluable core team — a dedicated group of individuals who serve as the driving force behind our community&apos;s growth and success. With a shared passion for technology and innovation, they provide the leadership and inspiration needed to navigate the ever-evolving tech landscape, ensuring that Techno Vivarta remains a thriving hub for aspiring technocrats and tech enthusiasts alike.
          </p>
        </div>
        <h3 className="mb-9 text-center text-3xl font-extrabold leading-tight">Meet our Leads</h3>

        <h4 className="mb-9 text-center text-xl font-extrabold leading-tight">Management Leads</h4>
        <div className="animate__animated animate__fadeIn team-row mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {featuredManagementLeads.map((teamMember) => (
              <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={urlFor(teamMember.image).url()} 
                    alt={teamMember.name}
                    className="h-[200px] w-[200px] overflow-hidden rounded-full"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                    <p className="text-sm text-gray-600">{teamMember.designation}</p>
                  </div>
                  <div className="mt-3 flex gap-3">
                    {teamMember.linkedin && (
                      <Link href={teamMember.linkedin}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                    )}
                    {teamMember.facebook && (
                      <Link href={teamMember.facebook}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} />
                      </Link>
                    )}
                    {teamMember.instagram && (
                      <Link href={teamMember.instagram}
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <h4 className="mb-9 text-center text-xl font-extrabold leading-tight">Technical Leads</h4>
        <div className="animate__animated animate__fadeIn team-row mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {featuredTechnicalLeads.map((teamMember) => (
              <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={urlFor(teamMember.image).url()} 
                    alt={teamMember.name}
                    className="h-[200px] w-[200px] overflow-hidden rounded-full"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                    <p className="text-sm text-gray-600">{teamMember.designation}</p>
                  </div>
                  <div className="mt-3 flex gap-3">
                    {teamMember.linkedin && (
                      <Link href={teamMember.linkedin}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                    )}
                    {teamMember.facebook && (
                      <Link href={teamMember.facebook}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} />
                      </Link>
                    )}
                    {teamMember.instagram && (
                      <Link href={teamMember.instagram}
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <h4 className="mb-9 text-center text-xl font-extrabold leading-tight">Domain Leads</h4>
        <div className="animate__animated animate__fadeIn team-row mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {featuredDomainLeads.map((teamMember) => (
              <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={urlFor(teamMember.image).url()} 
                    alt={teamMember.name}
                    className="h-[200px] w-[200px] overflow-hidden rounded-full"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                    <p className="text-sm text-gray-600">{teamMember.designation} - { teamMember.domain }</p>
                  </div>
                  <div className="mt-3 flex gap-3">
                    {teamMember.linkedin && (
                      <Link href={teamMember.linkedin}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                    )}
                    {teamMember.facebook && (
                      <Link href={teamMember.facebook}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} />
                      </Link>
                    )}
                    {teamMember.instagram && (
                      <Link href={teamMember.instagram}
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <h3 className="mb-9 text-center text-3xl font-extrabold leading-tight">Meet our Executive Team</h3>
        <div className="animate__animated animate__fadeIn team-row mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {featuredExecutiveTeam.map((teamMember) => (
              <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={urlFor(teamMember.image).url()} 
                    alt={teamMember.name}
                    className="h-[200px] w-[200px] overflow-hidden rounded-full"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                    <p className="text-sm text-gray-600">{ teamMember.domain }, {teamMember.designation}</p>
                  </div>
                  <div className="mt-3 flex gap-3">
                    {teamMember.linkedin && (
                      <Link href={teamMember.linkedin}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                    )}
                    {teamMember.facebook && (
                      <Link href={teamMember.facebook}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} />
                      </Link>
                    )}
                    {teamMember.instagram && (
                      <Link href={teamMember.instagram}
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <h3 className="mb-9 text-center text-3xl font-extrabold leading-tight">Meet our Core Team</h3>
        <div className="animate__animated animate__fadeIn team-row mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {featuredCoreTeamMembers.map((teamMember) => (
              <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={urlFor(teamMember.image).url()} 
                    alt={teamMember.name}
                    className="h-[200px] w-[200px] overflow-hidden rounded-full"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                    <p className="text-sm text-gray-600">{teamMember.designation}</p>
                  </div>
                  <div className="mt-3 flex gap-3">
                    {teamMember.linkedin && (
                      <Link href={teamMember.linkedin}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                    )}
                    {teamMember.facebook && (
                      <Link href={teamMember.facebook}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} />
                      </Link>
                    )}
                    {teamMember.instagram && (
                      <Link href={teamMember.instagram}
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Render other sections (Technical Leads, Management Leads, Core Team) similarly */}
        
      </div>
    </section> 
    </div>
    
  );
}

export default Team;
