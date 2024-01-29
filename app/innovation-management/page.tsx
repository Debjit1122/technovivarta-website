"use client"
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from '@/components/ui/card';
import { BiSolidPaperPlane } from 'react-icons/bi';
import Script from 'next/script';
const InterestForm = () => {

    return (
        <div>
            <div className="background"></div>
            <div className="container mx-auto mb-9">
                <h2 className="heading-main mb-9 pt-9 text-center text-3xl font-semibold">Interest Form</h2>
                <Card className='p-5'>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="76fb9a3e-c043-4c31-b94a-1170373ab3ff"></input>
                        <input type="hidden" name="subject" value="New InterestForm Form Inquiry: Techno Vivarta"></input>
                        <input type="hidden" name="from_name" value="Techno Vivarta"></input>
                        <div className="mb-4">
                            <label className="mb-4 block text-sm font-bold" htmlFor="name">
                                Name
                            </label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full rounded-md border p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-4 block text-sm font-bold" htmlFor="email">
                                Email
                            </label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full rounded-md border p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-4 block text-sm font-bold" htmlFor="studentid">
                                Student ID
                            </label>
                            <Input
                                id="studentid"
                                name="studentid"
                                className="w-full rounded-md border p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-4 block text-sm font-bold" htmlFor="batch">
                                Batch
                            </label>
                            <Input
                                id="batch"
                                name="batch"
                                className="w-full rounded-md border p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-4 block text-sm font-bold" htmlFor="contact">
                                Contact No.
                            </label>
                            <Input
                                id="contact"
                                name="contact"
                                className="w-full rounded-md border p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-4 block text-sm font-bold" htmlFor="whatsapp">
                                Whatsapp No.
                            </label>
                            <Input
                                id="whatsapp"
                                name="whatsapp"
                                className="w-full rounded-md border p-2"
                                required
                            />
                        </div>
                        <label className="mb-4 block text-sm font-bold" htmlFor="interests">
                               Events interested in
                        </label>
                        <div className="mb-4 flex items-center space-x-2">
                            <Input type="checkbox" id="pitchtodeck" name="pitchtodeck" />
                            <label
                                htmlFor="pitchtodeck"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Pitch to Deck
                            </label>
                        </div>
                        <div className="mb-4 flex items-center space-x-2">
                            <Input type="checkbox" id="socialinnovationchallenge" name="socialinnovationchallenge" />
                            <label
                                htmlFor="socialinnovationchallenge"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Social Innovation Challenge
                            </label>
                        </div>
                        <div className="mb-4 flex items-center space-x-2">
                            <Input id="projectshowcase" type="checkbox" name="projectshowcase" />
                            <label
                                htmlFor="interests"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Project Showcase
                            </label>
                        </div>
                        <Button
                            className={`${buttonVariants()} text-md mt-7`}
                            type="submit"
                        >
                            Send&nbsp;<BiSolidPaperPlane size={25} />
                        </Button>
                    </form>
                    <Script src="https://web3forms.com/client/script.js" async defer />
                </Card>
            </div>
        </div>
    );
};

export default InterestForm;
