"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const SocialInnovationChallenge = () => {
    return (
        <div className="pt-20 pb-20">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSeE2dw0g4eyrVyNiT1aNNseiycvlM47dS6bEWIg4S6sb3uVoQ/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default SocialInnovationChallenge;