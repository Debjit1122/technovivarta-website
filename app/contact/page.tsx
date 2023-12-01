"use client"
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { BiSolidPaperPlane } from 'react-icons/bi';
import Script from 'next/script';
const Contact = () => {

    return (
        <div>
            <div className="background-2"></div>
            <div className="container mx-auto mb-9">
                <h2 className="heading-main mb-9 pt-9 text-center text-3xl font-semibold">Contact Us</h2>
                <Card className='p-5'>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="7a63968f-6230-42ce-bbca-c19d61baa4c3"></input>
                        <input type="hidden" name="subject" value="New Contact Form Inquiry: Techno Vivarta"></input>
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
                            <label className="mb-4 block text-sm font-bold" htmlFor="message">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                className="w-full rounded-md border p-2"
                                required
                            />
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

export default Contact;
