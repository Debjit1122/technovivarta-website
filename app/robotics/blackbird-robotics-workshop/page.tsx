"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const RoboticsWorkshop = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSe90-J06saMYnaxqnKZEaUfga5LM3gxrrpb1GnEc6Cyndsv3g/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default RoboticsWorkshop;