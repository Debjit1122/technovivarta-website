"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const RoboticsEvents = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLScvxfN-Novyld4YF8G4rj9wgzc6zOcdTiJMm7Yg1ho5bwdGUg/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default RoboticsEvents;