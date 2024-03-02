"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const RoboticsEvents = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSdRALk1KarqeuLDetjl3RnGPxPYNUYqWt8ro0Mpyhan0YIxmw/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default RoboticsEvents;